# Changelog

All notable changes to Pynseq for Douyin are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Fixed

- 修复推荐页直播卡片的主播链接使用用户主页地址时，右键菜单无法识别主播、因而不能加入本地屏蔽名单的问题。

## [1.4.0] - 2026-08-07

### Added

- 推荐页和关注页中的直播卡片现在会识别主播身份：名单主播的直播在进入信息流前被移除，已经预加载的直播卡片由页面兜底隐藏，并支持从主播名右键加入本地名单。

### Changed

- 将播放器启动、视频缓冲、直播播放器和列表续载等位置的红绿双点加载提示统一替换为中性灰色旋转圆环。

### Fixed

- 直播聊天虚拟列表复用已隐藏的消息节点时，会先短暂丢失用户身份；现在会在身份稳定前保留隐藏状态，避免名单用户的新消息快速频闪。

## [1.3.0] - 2026-07-27

### Added

- **"屏蔽 @用户名+不感兴趣" context-menu action.** Right-clicking an author in the
  recommendation or following feed now offers a second blocking action that adds the
  user to the local list and, in the same step, submits Douyin's own "不感兴趣"
  feedback for the video that was right-clicked.
  - The signal is submitted by driving Douyin's own video context menu rather than by
    calling its API directly, so no request signing is reproduced and no endpoint is
    hardcoded. Verified end to end: the resulting request is
    `POST /aweme/v1/web/commit/dislike/item/` carrying the `aweme_id` of the targeted
    video, answered with `status_code: 0`.
  - Douyin's menu items carry no stable `data-e2e` attribute or class name — the class
    names are build-time hashes — so the item is located by its text. Both `不感兴趣`
    and `不感兴趣（R）` are matched, and the outer row is preferred over its inner
    label.
  - The menu is rendered inside the `[data-e2e-vid]` container of the video it belongs
    to, so the action targets exactly the video that was right-clicked, including
    videos that are not the currently playing one.
  - The `contextmenu` event must be dispatched to a descendant of the player
    (`xg-video-container`) rather than to `.basePlayerContainer` itself; dispatching to
    the container does not reach Douyin's listener.
  - The action runs after the local block is applied. Hiding the video first does not
    prevent the menu from opening, so the ordering is safe.
  - The item is offered only for feed videos. Comments, danmaku, and live chat have no
    per-video "not interested" equivalent, and the item stays hidden until a nickname
    has been read.
  - Cancelling the confirmation dialog cancels the whole action; no feedback is sent to
    Douyin. If the menu item cannot be found — for example after Douyin changes its
    wording — the local block still completes and the script reports
    "已加入本地名单，但没能触发抖音的「不感兴趣」".

### Changed

- **Nicknames in blocking actions are now prefixed with `@`**, matching how Douyin
  itself renders author names in the feed. This applies to both context-menu items and
  the confirmation dialog's accept button: `屏蔽 @用户名`, `屏蔽 @用户名+不感兴趣`.

### Notes

- The new action is the first and only place where this script writes to Douyin's
  servers. The plain `屏蔽 @用户名` action remains entirely local, and no action in the
  script calls Douyin's official blocking API or touches the account's platform
  blocklist. The "不感兴趣" feedback is recorded by Douyin against the account and
  affects recommendations; it applies to a single video, not to the author.
- Because the video is already hidden by the local block, Douyin's usual "video
  disappears" reaction to "不感兴趣" is not visible. This is expected and does not
  indicate that the signal failed.

## [1.2.1] - 2026-07-27

### Fixed

- **Blocking one video muted every other video in the session.** Silencing a blocked
  video by setting `media.muted = true` was picked up by Douyin's player as a change
  to the user's global mute preference, which it then applied to every subsequent
  video. Blocking B in a sequence A–B–C left both A and C muted, and Douyin's own
  mute button switched to the muted state. Blocked videos are now silenced by pausing
  alone — the script never writes `muted` or `volume` anywhere. If Douyin resumes a
  blocked video, the `play`/`playing` handler pauses it again immediately; the worst
  case is a momentary sound rather than a session that has lost its audio.
  - Revealing a blocked video no longer forces unmute either. Volume is left entirely
    to Douyin's player, so the user's own sound setting is preserved.
  - Note for users upgrading: if Douyin is currently muted because of the previous
    behaviour, click Douyin's own volume button once to restore sound. The setting is
    stored by Douyin, not by this script.

- **The player control bar under the blocked card appeared inconsistently.** The bar
  is nested inside the slide subtree that the card hides, and Douyin's own styles
  re-showed it in some player states, so it flickered in and out. It is now forced
  visible, opaque, and interactive whenever a slide is blocked. The card was also
  lowered to `z-index: 1`, because Douyin's `.playerContainer` is a `z-index: 2`
  stacking context that confined the bar beneath the card; the hidden player still
  does not paint, so only the explicitly-visible control bar rises above the card.

## [1.2.0] - 2026-07-27

This release replaces the feed-blocking architecture. Blocked videos are now removed
from the recommendation and following feeds before Douyin's UI ever renders them,
so browsing continues without interruption instead of relying on a skip-and-wait
state machine. The change removes roughly 2,400 lines of navigation, transition,
and audio-coordination code.

### Added

- **Response-level feed filtering.** The script now intercepts Douyin's feed API
  responses and removes entries whose author is on the local block list before the
  page's React tree receives the data. Because each list entry maps one-to-one onto
  a carousel slide, a removed entry never becomes a slide, so there is nothing to
  skip, wait for, or transition past.
  - Two payload adapters are supported: `aweme_list[]` (recommendation feed and the
    Featured grid) and `data[].aweme` (following feed).
  - Interception is content-based rather than URL-based, so it keeps working if
    Douyin changes endpoint paths.
  - Filtering is installed as lazily-evaluated instance getters for `responseText`
    and `response`. Instance properties shadow prototype properties, so the filter
    works regardless of the order in which Douyin's own security SDK wraps
    `XMLHttpRequest`.
  - Pagination fields (`has_more`, `cursor`, `log_pb`) are passed through untouched.
    Douyin continues requesting further batches normally, including when an entire
    batch is filtered out.
  - Parsing is skipped for payloads under 20 KB, and results are cached per request,
    so repeated reads of the same response do not re-parse it.

- **In-slide blocked card.** When a video was already loaded into the buffer before
  its author was blocked, that slide now renders an information card in place. The
  card is a child of the slide itself rather than a fixed-position overlay, so it
  moves with the carousel, disappears when the slide is recycled, and requires no
  positioning logic, readiness checks, or timers. A blank slide is structurally
  impossible because the position always renders content.

- **Temporary reveal.** The card's "点击解除屏蔽" action reveals the underlying video
  for viewing. The reveal applies only to that single video and only while it remains
  the current item; navigating away restores the block immediately, matching the
  conventional expectation that blocking is a persistent state.

### Changed

- **Blocking a video you are currently watching** now issues exactly one click on
  Douyin's own "next" control. There is no retry loop, no polling, no direction
  inference, and no timeout budget. If the click does not take effect, the card
  remains visible, so failure is harmless.

- **Automatic advancing no longer triggers when you scroll onto a blocked card.**
  It fires only at the moment you block the video you are watching. Previously a
  blocked slide could push you forward while you were scrolling backwards.

- **Card copy** now reads "该用户的内容已隐藏，后续推荐不会再出现。" followed by a bold
  "点击解除屏蔽" call to action on its own line.

- **Block-list matching** was factored into a shared read-only lookup so the
  response filter can match authors without writing to storage on the render path.

### Removed

- The fixed-position blocked-card overlay layer and its positioning, anchoring, and
  readiness-release logic.
- The feed transition cover, frozen-frame canvas rendering, and backdrop cloning.
- The navigation transaction machinery: multi-step navigation, settlement detection,
  `transitionend` coordination, retry budgets, and deadline handling.
- The blocked-wait transaction machinery: staged waiting, boundary probing, and
  loading-probe navigation.
- Native navigation locks, scroll/wheel/pointer direction tracking, navigation
  preemption, and navigation-control disabling.
- The feed audio state machine: audio-state capture, restore tokens, user-intent
  windows, and playback re-arming.

### Fixed

- **Blank slides left behind after blocking.** Previously a blocked slide stayed in
  the carousel hidden via `visibility: hidden` while still occupying an index, so
  scrolling onto it showed an empty screen. Douyin positions slides by
  `index × pitch` using a transform driven by its own internal state, so the slide
  can be neither removed nor collapsed without desynchronizing the carousel. The
  slide is now filled with the blocked card instead of being hidden.

- **Muted audio after revealing a blocked video.** The muted flag recorded when a
  video was blocked was often Douyin's preload-time `muted = true`, and restoring it
  left the revealed video silent. Revealing now explicitly unmutes and restores
  volume rather than reusing the recorded value.

- **A blocked video's first appearance no longer leaves a blank first screen.**
  Blocking the first video in the feed previously produced an unrecoverable empty
  view; the data-layer filter prevents blocked videos from occupying that position
  at all.

### Notes

- Videos already delivered to the browser before an author was blocked remain in the
  session buffer and are shown as cards; they disappear on reload. Only content
  received after blocking is filtered at the data layer.
- If the response filter cannot be installed, the script degrades to DOM-level
  hiding. The failure mode is that blocked content may appear, not that the page
  breaks.

## [1.1.0]

- Earlier releases are not covered by this changelog.
