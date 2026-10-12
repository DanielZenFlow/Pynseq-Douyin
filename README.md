# Pynseq for Douyin｜屏序·抖音

> 屏其不欲见者，复其应有之序。

**Pynseq for Douyin 是由 Daniel Zenflow 开发的抖音桌面端本地屏蔽工具。** 它允许你建立独立于抖音账户的本地屏蔽名单，持续过滤名单用户及其可识别内容，避免被屏蔽的人通过不同页面和内容入口反复出现。名单与数据保存在本地，由用户自行掌控，不受平台黑名单容量和同步机制限制。

[English](#english)

## 功能

- 在推荐、关注、搜索、精选和直播页面隐藏名单用户发布的视频与直播；能够在数据层识别的条目不会进入内容列表，已渲染条目由页面层即时隐藏。推荐与关注信息流不会为被屏蔽视频显示本地占位页，残留屏蔽项成为当前项时会沿当前浏览方向自动跳过。
- 在名单用户主页隐藏作品区域，同时提供快捷解除屏蔽入口。
- 隐藏名单用户发布的视频评论、回复、弹幕和直播聊天内容；直播间里名单用户的聊天、表情和礼物消息在进入聊天列表前即被移除，也不会绘制到播放器的直播弹幕上。
- 进入 `live.douyin.com` 直播间或站内直播页时，自动选择可用的最高画质，并默认关闭播放器弹幕；弹幕自动关闭可在「设置 → 常规 → 直播播放」中关闭，进入后两者仍可手动调整。
- 在推荐/关注视频作者、搜索/精选视频作者、直播主播、评论用户和直播用户的右键菜单中提供屏蔽操作。
- 在推荐页和关注页的视频作者及直播主播右键菜单中提供“屏蔽并标记不感兴趣”：视频提交抖音原生“不感兴趣”，直播在二级菜单中选择“不想看该主播”，随后写入本地屏蔽名单。操作期间抖音原生右键菜单和直播二级菜单不会显示在屏幕上；本地成功提示会水平居中显示在抖音原生反馈正上方，并跟随原生反馈消失。
- 可选择在评论区显示“本地屏蔽”快捷按钮，并可开启屏蔽前确认。
- 提供首次设置向导、快捷设置按钮和独立设置页面。
- 支持搜索、分页、手动添加、移除、清空、导入和导出屏蔽名单。
- 可分别控制评论、弹幕、直播聊天、站内视频与直播和用户主页作品的过滤范围。
- 可选启用 GitHub Star 提醒。

## 运行环境

- 抖音桌面端网页：`https://www.douyin.com/`
- 抖音直播网页：`https://live.douyin.com/`
- 支持用户脚本的桌面浏览器
- 推荐使用 [Tampermonkey](https://www.tampermonkey.net/) 管理脚本

本项目不适用于抖音移动端应用。

## 安装

1. 在浏览器中安装 Tampermonkey 或其他兼容的用户脚本管理器。
2. 打开 [Greasy Fork 安装页面](https://greasyfork.org/zh-CN/scripts/588559-pynseq-for-douyin-%E5%B1%8F%E5%BA%8F-%E6%8A%96%E9%9F%B3-%E6%9C%AC%E5%9C%B0%E9%9A%90%E8%97%8F%E6%8C%87%E5%AE%9A%E7%94%A8%E6%88%B7%E7%9A%84%E6%8E%A8%E8%8D%90%E8%A7%86%E9%A2%91-%E4%B8%BB%E9%A1%B5-%E4%BD%9C%E5%93%81%E8%AF%84%E8%AE%BA?locale_override=1)，然后选择“安装此脚本”。也可以直接打开 [GitHub 上的用户脚本原始文件](https://raw.githubusercontent.com/DanielZenFlow/Pynseq-Douyin/main/pynseq-for-douyin.user.js)。
3. 在用户脚本管理器中确认安装。
4. 打开或刷新抖音桌面端网页，按照首次设置向导完成配置。

## 使用

### 添加用户

- 在推荐/关注、搜索、精选页面的视频作者或直播主播，以及评论用户、直播聊天用户上点击鼠标右键，然后选择屏蔽。
- 在推荐页或关注页的视频作者或直播主播上点击鼠标右键，选择“屏蔽 @用户名+不感兴趣”。视频会触发抖音原生“不感兴趣”；直播会继续选择二级菜单中的“不想看该主播”。随后作者或主播会加入本地名单；原生反馈成功时由抖音切换内容，本地成功提示在原生反馈正上方居中显示并同步消失。当前内容是已加载列表的最后一条时，打开右键菜单即预先加载后续内容，操作后直接切换到新内容，不会退回上一条。触发失败时由本地屏蔽流程执行一次自动前进并显示提示。
- 在评论区点击“本地屏蔽”快捷按钮。
- 在“设置 → 本地屏蔽名单”中粘贴用户主页链接或输入可识别的用户信息。

### 管理过滤范围

打开“设置 → 屏蔽设置”，可分别控制：

- 评论和回复
- 视频弹幕
- 直播聊天（包括播放器上的直播弹幕）
- 站内视频与直播（推荐、关注、搜索、精选和直播页面）
- 已屏蔽用户的主页作品

### 备份与恢复

在“设置 → 本地屏蔽名单”中导出名单文件。导出的文件可用于备份，或在另一浏览器中重新导入。

## 本地数据与隐私

- 屏蔽名单、设置和提醒状态保存在当前浏览器的用户脚本存储空间中。
- 脚本不会调用抖音官方拉黑接口，也不会修改抖音账户中的平台黑名单。
- 例外：右键菜单中的“屏蔽 @用户名+不感兴趣”会触发抖音自带的“不感兴趣”，该反馈由抖音记录在账户中并影响推荐结果。只使用“屏蔽 @用户名”时不会发生这一行为。
- 同一浏览器中同时打开的多个抖音页面共用同一份名单和设置：在任一页面添加、移除或导入记录以及修改设置，其他页面会即时同步，彼此的改动不会互相覆盖。
- 本地名单不会自动同步到其他浏览器、浏览器配置文件或设备。
- 清除浏览器数据、删除用户脚本或重置用户脚本存储前，建议先导出名单。

## 已知限制

- 过滤依赖抖音网页当前提供的用户标识和页面结构；抖音更新页面后，部分功能可能需要适配。
- 用户信息尚未加载或页面未提供可识别身份时，相关内容可能需要等待数据加载后才能被过滤。
- 部分直播间会对观众身份脱敏（昵称显示为“阿***”等形式且不下发用户标识），这类直播间中的聊天和弹幕无法识别发送者，因此不会被过滤。
- 站内内容由抖音动态加载，脚本只能处理浏览器当前接收到并能够识别作者的内容；精选瀑布流和多列搜索结果卡片按所属视频读取作者的用户标识，从这些卡片屏蔽的用户会以稳定标识记录；仍无法识别作者标识的卡片使用本地名单中的唯一、完全一致昵称匹配。
- 本地屏蔽不等同于抖音官方拉黑，被屏蔽用户不会收到通知，平台推荐模型也不会因此直接改变。使用“屏蔽 @用户名+不感兴趣”时，只有其中的“不感兴趣”会影响推荐。
- 视频“不感兴趣”通过抖音自带的右键菜单提交；直播通过播放器右键菜单提交，并选择二级菜单中的“不想看该主播”。这些操作依赖抖音菜单及反馈提示的现有文字和结构。抖音改动相关内容后，该操作或双提示框对齐可能失效；此时脚本仍会完成本地屏蔽、执行一次自动前进并给出独立提示。原生反馈成功时不再额外触发自动前进，避免重复切换或返回上一条内容。

## 支持项目

- [在 Greasy Fork 安装或更新 Pynseq for Douyin](https://greasyfork.org/zh-CN/scripts/588559-pynseq-for-douyin-%E5%B1%8F%E5%BA%8F-%E6%8A%96%E9%9F%B3-%E6%9C%AC%E5%9C%B0%E9%9A%90%E8%97%8F%E6%8C%87%E5%AE%9A%E7%94%A8%E6%88%B7%E7%9A%84%E6%8E%A8%E8%8D%90%E8%A7%86%E9%A2%91-%E4%B8%BB%E9%A1%B5-%E4%BD%9C%E5%93%81%E8%AF%84%E8%AE%BA?locale_override=1)
- [在 GitHub 为 Pynseq for Douyin 点亮 Star](https://github.com/DanielZenFlow/Pynseq-Douyin)
- [通过 Buy Me a Coffee 支持 DanielZenFlow](https://buymeacoffee.com/danielzenflow)
- [提交问题或功能建议](https://github.com/DanielZenFlow/Pynseq-Douyin/issues)

## 许可证

本项目采用 [MIT License](https://opensource.org/license/mit/)。

---

<a id="english"></a>

# Pynseq for Douyin｜屏序·抖音

> Hide what you do not wish to see, and restore the order that should remain.

**Pynseq for Douyin is a local blocking tool for the desktop Douyin website, developed by Daniel Zenflow.** It lets you maintain a blocklist independently of your Douyin account and continuously filter identifiable content associated with blocked users across different pages and content surfaces. The blocklist and settings remain under your control in the local browser and are not limited by the capacity or synchronization behavior of Douyin's platform blocklist.

## Features

- Hides videos and live streams from blocked users across recommendations, following, search, featured-video, and live pages. Recognizable response records are removed before rendering, while already rendered records are hidden immediately in the page. Blocked videos in recommendation and following feeds do not produce a local placeholder; if a residual blocked item becomes active, the script skips it in the current browsing direction.
- Hides the works section on a blocked user's profile and provides a quick unblock action.
- Hides video comments, replies, danmaku, and live-chat messages posted by blocked users. In live rooms, chat, emoji, and gift messages from blocked users are removed before they reach the chat list, so they are not drawn as live danmaku on the player either.
- Selects the highest available quality and, by default, turns off player danmaku when entering a `live.douyin.com` room or an in-site live page. Automatic danmaku shutoff can be disabled under “Settings → General → Live playback”; both can still be adjusted manually afterward.
- Adds blocking actions to context menus for recommendation/following, search, and featured-video authors, live-stream hosts, commenters, and live-chat users.
- Adds a “block and mark as not interested” action to the context menu for video authors and live-stream hosts in the recommendation and following feeds. Videos submit Douyin's native “not interested” signal; live streams select “不想看该主播” from its second-level menu before the author or host is added to the local blocklist. Douyin's native context menu and the live second-level menu are not shown on screen during the action. The local success notice is centered directly above Douyin's native feedback and disappears with it.
- Optionally displays a “Local Block” shortcut in comments and supports confirmation before blocking.
- Includes an onboarding flow, a quick-settings button, and a dedicated settings interface.
- Supports searching, pagination, manual entry, removal, clearing, importing, and exporting of the blocklist.
- Provides separate filtering controls for comments, danmaku, live chat, site-wide videos and live streams, and profile works.
- Optionally provides GitHub Star reminders.

## Requirements

- Douyin desktop website: `https://www.douyin.com/`
- Douyin Live website: `https://live.douyin.com/`
- A desktop browser with userscript support
- [Tampermonkey](https://www.tampermonkey.net/) is recommended for script management

The project does not support the Douyin mobile application.

## Installation

1. Install Tampermonkey or another compatible userscript manager.
2. Open the [Greasy Fork installation page](https://greasyfork.org/zh-CN/scripts/588559-pynseq-for-douyin-%E5%B1%8F%E5%BA%8F-%E6%8A%96%E9%9F%B3-%E6%9C%AC%E5%9C%B0%E9%9A%90%E8%97%8F%E6%8C%87%E5%AE%9A%E7%94%A8%E6%88%B7%E7%9A%84%E6%8E%A8%E8%8D%90%E8%A7%86%E9%A2%91-%E4%B8%BB%E9%A1%B5-%E4%BD%9C%E5%93%81%E8%AF%84%E8%AE%BA?locale_override=1) and select "Install this script." Alternatively, open the [raw userscript on GitHub](https://raw.githubusercontent.com/DanielZenFlow/Pynseq-Douyin/main/pynseq-for-douyin.user.js).
3. Confirm the installation in the userscript manager.
4. Open or refresh the Douyin desktop website and complete the onboarding flow.

## Usage

### Add a user

- Right-click an author or host on recommendation/following, search, featured-video, or live pages, or right-click a commenter or live-chat user, and select the blocking action.
- Right-click a video author or live-stream host in the recommendation or following feed and select “屏蔽 @username+不感兴趣”. Videos trigger Douyin's native “not interested” action; live streams continue through the second-level menu and select “不想看该主播”. The author or host is then added to the local blocklist. When the signal succeeds, Douyin handles the transition and the local success notice appears centered directly above the native feedback until it disappears. When the current item is the last one loaded, opening the context menu preloads the following items, so the feed moves on to new content instead of returning to the previous item. If the signal cannot be triggered, the local blocking flow advances once and displays a standalone notice.
- Select the “Local Block” shortcut displayed beside a comment.
- Paste a profile link or enter identifiable user information under “Settings → Local Blocklist”.

### Configure filtering

Open “Settings → Blocking” to control filtering for:

- Comments and replies
- Video danmaku
- Live chat, including live danmaku on the player
- Site-wide videos and live streams (recommendations, following, search, featured videos, and live pages)
- Works on blocked user profiles

### Back up and restore

Export the blocklist under “Settings → Local Blocklist”. The exported file can be kept as a backup or imported into another browser.

## Local data and privacy

- The blocklist, settings, and reminder state are stored in the userscript storage of the current browser.
- The script does not call Douyin's official blocking API or modify the platform blocklist associated with the Douyin account.
- One exception: the “屏蔽 @username+不感兴趣” context-menu action triggers Douyin's own “not interested” feedback, which Douyin records against the account and uses to adjust recommendations. The plain blocking action never does this.
- Douyin pages open at the same time in one browser share the same blocklist and settings. Records added, removed, or imported and settings changed in any page are synchronized to the other pages immediately, and changes made in different pages do not overwrite each other.
- Local data is not automatically synchronized across browsers, browser profiles, or devices.
- Export the blocklist before clearing browser data, removing the userscript, or resetting userscript storage.

## Known limitations

- Filtering depends on user identifiers and page structures exposed by the current Douyin website. Some features may require updates after Douyin changes its interface.
- Content may remain visible until identity data becomes available when a page has not finished loading or does not expose identifiable user information.
- Some live rooms anonymize viewers (nicknames appear as “阿***” and no user identifier is sent). Chat messages and danmaku in these rooms cannot be attributed to a sender and are therefore not filtered.
- Douyin loads site content dynamically. The script can only process content received by the current browser whose author can be identified. Featured-video and multi-column search cards resolve the author identifier from the video they show, so users blocked from those cards are stored with stable identifiers; cards whose author still cannot be identified are matched only when their nickname exactly and uniquely matches an entry in the local blocklist.
- Local blocking is not the same as Douyin's official blocking feature. Blocked users are not notified, and the platform recommendation model is not directly changed. With “屏蔽 @username+不感兴趣”, only the “not interested” part affects recommendations.
- For videos, the “not interested” signal is submitted through Douyin's own context menu. For live streams, it is submitted through the player's context menu by selecting “不想看该主播” from the second level. Both flows depend on the current wording and structure of Douyin's menus and feedback notice. If Douyin changes them, the action or dual-notice alignment may stop working; the script still completes the local block, advances once, and displays a standalone status notice. When the native signal succeeds, the script does not advance again, preventing duplicate transitions or a return to the previous item.

## Support

- [Install or update Pynseq for Douyin on Greasy Fork](https://greasyfork.org/zh-CN/scripts/588559-pynseq-for-douyin-%E5%B1%8F%E5%BA%8F-%E6%8A%96%E9%9F%B3-%E6%9C%AC%E5%9C%B0%E9%9A%90%E8%97%8F%E6%8C%87%E5%AE%9A%E7%94%A8%E6%88%B7%E7%9A%84%E6%8E%A8%E8%8D%90%E8%A7%86%E9%A2%91-%E4%B8%BB%E9%A1%B5-%E4%BD%9C%E5%93%81%E8%AF%84%E8%AE%BA?locale_override=1)
- [Star Pynseq for Douyin on GitHub](https://github.com/DanielZenFlow/Pynseq-Douyin)
- [Support DanielZenFlow on Buy Me a Coffee](https://buymeacoffee.com/danielzenflow)
- [Report a bug or request a feature](https://github.com/DanielZenFlow/Pynseq-Douyin/issues)

## License

This project is available under the [MIT License](https://opensource.org/license/mit/).
