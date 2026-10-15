# Changelog

All notable changes to Pynseq for Douyin are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.1.2] - 2026-10-15

### Fixed

- 修复直播间（`live.douyin.com/房间号` 及 `www.douyin.com` 下 `/live/`、`/root/live/`、`/follow/live/` 等直播路径）右键菜单闪现后立即消失、无法选择的问题，直播已结束页面的“猜你喜欢”卡片尤为明显。右键菜单现在只会被真实的鼠标点击关闭；开启“进入直播间时关闭弹幕”时，若弹幕开关无法切换，会在进入直播间数秒后停止重试，不再持续模拟点击。

## [2.1.1] - 2026-10-12

### Fixed

- 修复同时打开多个抖音页面时屏蔽名单互相覆盖、导致记录丢失的问题。名单的每次改动都基于存储中的最新名单写入；其他页面添加、移除或导入的记录以及修改的开关和设置会即时同步到当前页面，并立即按新名单重新处理页面内容，已打开的设置面板也会同步刷新。

## [2.1.0] - 2026-10-12

### Fixed

- 修复“屏蔽 @用户名+不感兴趣”后移动鼠标可能使推荐页被拖动、意外切到上一条或下一条的问题。脚本打开抖音原生菜单时模拟的右键点击现在包含完整的按下与抬起，不再使信息流停留在按住状态。
- 在推荐页已加载列表的最后一条使用“屏蔽 @用户名+不感兴趣”时，后续内容加载较慢也不再退回上一条视频：确认后暂停当前视频并持续等待后续内容（最长 12 秒，期间定期重新请求），加载完成后再提交“不感兴趣”。

## [2.0.2] - 2026-10-12

### Fixed

- 在推荐页已加载列表的最后一条使用“屏蔽 @用户名+不感兴趣”后，不再退回上一条视频。打开右键菜单时即预先加载后续内容，抖音移除当前条目后由下一条直接接上；加载未及时完成时，待后续内容出现后自动前进到新视频。

## [2.0.1] - 2026-10-10

### Changed

- “屏蔽 @用户名+不感兴趣”执行期间不再显示抖音原生右键菜单和直播二级菜单，菜单在插入页面时即被隐藏，操作完成后恢复原状。

## [2.0.0] - 2026-10-10

### Added

- 直播间开启弹幕时，名单用户的聊天、表情和礼物消息不再绘制到播放器弹幕上；这些消息在进入聊天列表和弹幕层之前即被移除，由“直播聊天”屏蔽范围控制。对观众身份脱敏的直播间无法识别发送者，不受影响。
- 设置“常规”页新增“直播播放 → 进入直播间时关闭弹幕”开关，默认开启；关闭后沿用抖音自身的弹幕状态。

### Changed

- 页面变化只处理新插入的节点及其所属内容项，不再因浮层、提示等挂到页面上的元素而重新匹配整页内容；在推荐页上，单次此类变化的处理耗时由约 190 毫秒降至数毫秒，直播聊天刷新时也不再重复处理整个聊天列表。
- 本地名单改用按 secUid、userId 和昵称建立的索引匹配，名单规模较大时命中检查不再随条目数线性变慢。
- 列表接口响应先在原文中查找名单用户的标识，未命中时直接放行，不再对数 MB 的精选等响应整份解析；判断响应是否含内容列表时只扫描原文一遍。
- 直播聊天条目直接读取消息中的发送者，不再在 React 数据中逐层搜索。
- 屏蔽用户时不再重新清洗整份本地名单，名单写入存储改到点击之后执行；浏览时被动补全名单信息改为合并后延迟写入。名单较大时确认屏蔽的卡顿明显缩短。
- 从精选瀑布流和多列搜索结果卡片屏蔽用户时，会按卡片所属视频记录作者的 secUid 与 userId，不再只能按昵称匹配；已有的按昵称记录保持原有匹配方式。

### Fixed

- 推荐页当场屏蔽正在播放的视频后会自动切到下一条；抖音移除上下切换箭头后，此前会停留在已暂停的屏蔽视频上。
- 推荐页上下刷到已屏蔽的视频时，会在滑动动画结束后沿浏览方向继续跳过，不再停在黑屏的屏蔽项上。
- 推荐页屏蔽的视频恰好是已加载的最后一条时，会先让抖音加载后续内容，再自动切到下一条，不再停在屏蔽项上。
- 从关注页等站内入口进入的直播间（如 `/follow/live/` 路径）现在同样会自动关闭弹幕并选择最高画质。
- 单列搜索结果打开评论区后，右键视频作者不再误识别为评论区第一位用户；被屏蔽用户的评论也不会再导致整条搜索结果或其内嵌视频被隐藏、跳过。
- 推荐、关注和视频详情播放器读取作者时跳过评论区、相关推荐和弹幕层中的用户链接，不再依赖头像链接在页面中的先后顺序。
- 右键搜索结果卡片中指向其他用户的链接（如 @提及）时，菜单以被点击的用户为准；内嵌播放器侧栏中的相关推荐不再被识别为卡片作者。
- 搜索“用户”标签页的卡片昵称不再被误读为“9.1万粉丝”“18.8万获赞”等统计文字。

## [1.6.0] - 2026-08-17

### Added

- 推荐与关注信息流中的直播主播右键菜单现提供“屏蔽并标记不感兴趣”；操作会打开抖音原生“不感兴趣”菜单，并在二级菜单中选择“不想看该主播”。

### Fixed

- 直播“不感兴趣”通过播放器右键入口打开原生菜单，避免直播卡片的更多按钮忽略合成点击而回退为仅本地屏蔽。

## [1.5.8] - 2026-08-17

### Fixed

- 推荐与关注信息流中的已渲染屏蔽项会沿用户当前的浏览方向继续跳过，向上回看时不再被送回下一条。
- “屏蔽并标记不感兴趣”只有在检测到抖音原生反馈或当前视频已经切换后才视为提交成功；未确认成功时由本地流程执行兜底前进。

## [1.5.7] - 2026-08-17

### Added

- 进入 `live.douyin.com` 直播间或站内 `/root/live/` 直播页时，播放器弹幕默认关闭，并自动选择可用的最高画质；初始化完成后仍可手动调整。

### Fixed

- 自动关闭弹幕作用于播放器“弹幕设置”面板中的显示开关，并兼容开关内部滑块的实际交互区域；聊天输入区的发送模式不受影响。

## [1.5.5] - 2026-08-11

### Changed

- 推荐页和关注页不再为被屏蔽视频生成本地占位页；残留屏蔽项成为当前项时只请求一次下一条。
- “屏蔽 @用户名+不感兴趣”完成后，本地成功提示会水平居中显示在抖音原生反馈正上方，并跟随原生反馈的可见状态消失。

### Fixed

- 原生“不感兴趣”反馈显示期间会暂缓隐藏当前视频，避免本地过滤提前移除反馈所在的播放器。
- 延长原生反馈节点的等待上限，兼容推荐页在视频切换后延迟显示反馈的情况。

## [1.5.4] - 2026-08-10

### Fixed

- “屏蔽 @用户名+不感兴趣”会先在原视频仍处于当前项时触发抖音原生反馈，再写入本地屏蔽名单，避免自动前进后继续操作旧播放器导致轮播回到上一格。
- 原生“不感兴趣”已成功触发时不再额外点击“下一条”；原生反馈未能触发时仍由本地屏蔽流程执行一次自动前进，避免重复切换或跳过视频。

## [1.5.3] - 2026-08-10

### Fixed

- “屏蔽 @用户名+不感兴趣”不再为合成鼠标事件传入 Tampermonkey 隔离环境无法转换的 `window`，抖音原生菜单可以正常打开并提交“不感兴趣”。
- 原生反馈流程抛出异常时会关闭抖音上下文菜单，并明确提示本地屏蔽已完成而“不感兴趣”未提交，避免未处理的异步异常。

## [1.5.2] - 2026-08-10

### Fixed

- 搜索结果屏蔽卡片的绝对定位外层会同步隐藏，可见卡片按页面现有列宽、间距和卡片高度重新排列，刷新页面后不再保留空白占位。
- 更新或移除名单条目时，搜索瀑布流会重新计算可见卡片位置；没有屏蔽项后恢复页面原有坐标和容器高度。

## [1.5.1] - 2026-08-10

### Added

- 搜索结果、精选瀑布流、直播首页卡片和直播间主播内容现已纳入本地屏蔽范围。
- 搜索、精选和直播页面的作者昵称或用户主页入口现可打开本地屏蔽右键菜单。

### Changed

- “推荐与关注内容”设置更名为“站内视频与直播”，范围扩展至推荐、关注、搜索、精选和直播页面。
- Fetch 与 XHR 返回的可识别视频、用户和直播列表会在渲染前过滤名单作者；没有公开稳定用户标识的页面卡片仅在昵称与名单中的唯一条目完全一致时隐藏。

### Fixed

- 修复本地屏蔽名单在搜索、精选、直播首页和直播间未生效的问题。

## [1.5.0] - 2026-08-10

### Changed

- 合并同一批 DOM 变更涉及的评论、弹幕、直播消息和推荐卡片处理，避免同一内容节点在一次更新中被重复扫描。
- 增加、更新或移除单个屏蔽名单条目时，只重新处理可能匹配该条目的已加载内容；设置、导入和其他全局变更仍执行完整扫描。
- 已屏蔽媒体仅在仍处于播放状态时再次暂停，并减少屏蔽卡片和媒体属性的重复写入。

### Fixed

- 修复推荐页直播卡片的主播链接使用用户主页地址时，右键菜单无法识别主播、因而不能加入本地屏蔽名单的问题。
- 自动翻页现在绑定到发起屏蔽操作的推荐卡片；确认完成后会重新校验卡片节点、作者、视频或直播身份及当前活动状态，来自设置页、评论、弹幕或直播聊天的屏蔽操作不会触发推荐流翻页。
- 自动前进仅在存在已加载的下一张推荐卡片且页面中只有一个可见、可用的下一条控件时执行；列表底部、控件禁用或存在多个可见轮播面时保留屏蔽卡片，不再发起导航。
- 已经完成屏蔽处理的推荐卡片不再重复创建卡片、暂停媒体或改写相同文本，避免长列表更新时产生额外 DOM 变更。

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
