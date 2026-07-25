# Pynseq for Douyin｜屏序·抖音

> 屏其不欲见者，复其应有之序。

**Pynseq for Douyin 是由 Daniel Zenflow 开发的抖音桌面端本地屏蔽工具。** 它允许你建立独立于抖音账户的本地屏蔽名单，持续过滤名单用户及其可识别内容，避免被屏蔽的人通过不同页面和内容入口反复出现。名单与数据保存在本地，由用户自行掌控，不受平台黑名单容量和同步机制限制。

[English](#english)

## 功能

- 在推荐页和关注页隐藏名单用户发布的视频，并在切换视频时跳过已屏蔽内容。
- 在名单用户主页隐藏作品区域，同时提供快捷解除屏蔽入口。
- 隐藏名单用户发布的视频评论、回复、弹幕和直播聊天内容。
- 在视频作者、评论用户和直播用户的右键菜单中提供屏蔽操作。
- 可选择在评论区显示“本地屏蔽”快捷按钮，并可开启屏蔽前确认。
- 提供首次设置向导、快捷设置按钮和独立设置页面。
- 支持搜索、分页、手动添加、移除、清空、导入和导出屏蔽名单。
- 可分别控制评论、弹幕、直播、推荐/关注视频和用户主页作品的过滤范围。
- 可选启用 GitHub Star 提醒。

## 运行环境

- 抖音桌面端网页：`https://www.douyin.com/`
- 抖音直播网页：`https://live.douyin.com/`
- 支持用户脚本的桌面浏览器
- 推荐使用 [Tampermonkey](https://www.tampermonkey.net/) 管理脚本

本项目不适用于抖音移动端应用。

## 安装

1. 在浏览器中安装 Tampermonkey 或其他兼容的用户脚本管理器。
2. 打开 [Greasy Fork 安装页面](https://greasyfork.org/zh-CN/scripts/588559-pynseq-for-douyin-%E5%B1%8F%E5%BA%8F-%E6%8A%96%E9%9F%B3-%E6%9C%AC%E5%9C%B0%E9%9A%90%E8%97%8F%E6%8C%87%E5%AE%9A%E7%94%A8%E6%88%B7%E7%9A%84%E6%8E%A8%E8%8D%90%E8%A7%86%E9%A2%91-%E4%B8%BB%E9%A1%B5-%E4%BD%9C%E5%93%81%E8%AF%84%E8%AE%BA?locale_override=1)，然后选择“安装此脚本”。也可以直接打开 [GitHub 上的用户脚本原始文件](https://raw.githubusercontent.com/DanielZenFlow/Pynseq-Douyin/main/douyin-local-user-blocker.user.js)。
3. 在用户脚本管理器中确认安装。
4. 打开或刷新抖音桌面端网页，按照首次设置向导完成配置。

## 使用

### 添加用户

- 在推荐视频作者、评论用户或直播用户上点击鼠标右键，然后选择屏蔽。
- 在评论区点击“本地屏蔽”快捷按钮。
- 在“设置 → 本地屏蔽名单”中粘贴用户主页链接或输入可识别的用户信息。

### 管理过滤范围

打开“设置 → 屏蔽设置”，可分别控制：

- 评论和回复
- 视频弹幕
- 直播聊天
- 推荐与关注视频
- 已屏蔽用户的主页作品

### 备份与恢复

在“设置 → 本地屏蔽名单”中导出名单文件。导出的文件可用于备份，或在另一浏览器中重新导入。

## 本地数据与隐私

- 屏蔽名单、设置和提醒状态保存在当前浏览器的用户脚本存储空间中。
- 脚本不会调用抖音官方拉黑接口，也不会修改抖音账户中的平台黑名单。
- 本地名单不会自动同步到其他浏览器、浏览器配置文件或设备。
- 清除浏览器数据、删除用户脚本或重置用户脚本存储前，建议先导出名单。

## 已知限制

- 过滤依赖抖音网页当前提供的用户标识和页面结构；抖音更新页面后，部分功能可能需要适配。
- 用户信息尚未加载或页面未提供可识别身份时，相关内容可能需要等待数据加载后才能被过滤。
- 推荐内容由抖音动态加载，脚本只能处理浏览器当前接收到并能够识别的内容。
- 本地屏蔽不等同于抖音官方拉黑，被屏蔽用户不会收到通知，平台推荐模型也不会因此直接改变。

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

- Hides videos posted by blocked users in the recommendation and following feeds and skips blocked items during feed navigation.
- Hides the works section on a blocked user's profile and provides a quick unblock action.
- Hides video comments, replies, danmaku, and live-chat messages posted by blocked users.
- Adds blocking actions to context menus for video authors, commenters, and live users.
- Optionally displays a “Local Block” shortcut in comments and supports confirmation before blocking.
- Includes an onboarding flow, a quick-settings button, and a dedicated settings interface.
- Supports searching, pagination, manual entry, removal, clearing, importing, and exporting of the blocklist.
- Provides separate filtering controls for comments, danmaku, live chat, feed videos, and profile works.
- Optionally provides GitHub Star reminders.

## Requirements

- Douyin desktop website: `https://www.douyin.com/`
- Douyin Live website: `https://live.douyin.com/`
- A desktop browser with userscript support
- [Tampermonkey](https://www.tampermonkey.net/) is recommended for script management

The project does not support the Douyin mobile application.

## Installation

1. Install Tampermonkey or another compatible userscript manager.
2. Open the [Greasy Fork installation page](https://greasyfork.org/zh-CN/scripts/588559-pynseq-for-douyin-%E5%B1%8F%E5%BA%8F-%E6%8A%96%E9%9F%B3-%E6%9C%AC%E5%9C%B0%E9%9A%90%E8%97%8F%E6%8C%87%E5%AE%9A%E7%94%A8%E6%88%B7%E7%9A%84%E6%8E%A8%E8%8D%90%E8%A7%86%E9%A2%91-%E4%B8%BB%E9%A1%B5-%E4%BD%9C%E5%93%81%E8%AF%84%E8%AE%BA?locale_override=1) and select "Install this script." Alternatively, open the [raw userscript on GitHub](https://raw.githubusercontent.com/DanielZenFlow/Pynseq-Douyin/main/douyin-local-user-blocker.user.js).
3. Confirm the installation in the userscript manager.
4. Open or refresh the Douyin desktop website and complete the onboarding flow.

## Usage

### Add a user

- Right-click a video author, commenter, or live user and select the blocking action.
- Select the “Local Block” shortcut displayed beside a comment.
- Paste a profile link or enter identifiable user information under “Settings → Local Blocklist”.

### Configure filtering

Open “Settings → Blocking” to control filtering for:

- Comments and replies
- Video danmaku
- Live chat
- Recommendation and following videos
- Works on blocked user profiles

### Back up and restore

Export the blocklist under “Settings → Local Blocklist”. The exported file can be kept as a backup or imported into another browser.

## Local data and privacy

- The blocklist, settings, and reminder state are stored in the userscript storage of the current browser.
- The script does not call Douyin's official blocking API or modify the platform blocklist associated with the Douyin account.
- Local data is not automatically synchronized across browsers, browser profiles, or devices.
- Export the blocklist before clearing browser data, removing the userscript, or resetting userscript storage.

## Known limitations

- Filtering depends on user identifiers and page structures exposed by the current Douyin website. Some features may require updates after Douyin changes its interface.
- Content may remain visible until identity data becomes available when a page has not finished loading or does not expose identifiable user information.
- Douyin loads recommendations dynamically. The script can only process content received and identified by the current browser.
- Local blocking is not the same as Douyin's official blocking feature. Blocked users are not notified, and the platform recommendation model is not directly changed.

## Support

- [Install or update Pynseq for Douyin on Greasy Fork](https://greasyfork.org/zh-CN/scripts/588559-pynseq-for-douyin-%E5%B1%8F%E5%BA%8F-%E6%8A%96%E9%9F%B3-%E6%9C%AC%E5%9C%B0%E9%9A%90%E8%97%8F%E6%8C%87%E5%AE%9A%E7%94%A8%E6%88%B7%E7%9A%84%E6%8E%A8%E8%8D%90%E8%A7%86%E9%A2%91-%E4%B8%BB%E9%A1%B5-%E4%BD%9C%E5%93%81%E8%AF%84%E8%AE%BA?locale_override=1)
- [Star Pynseq for Douyin on GitHub](https://github.com/DanielZenFlow/Pynseq-Douyin)
- [Support DanielZenFlow on Buy Me a Coffee](https://buymeacoffee.com/danielzenflow)
- [Report a bug or request a feature](https://github.com/DanielZenFlow/Pynseq-Douyin/issues)

## License

This project is available under the [MIT License](https://opensource.org/license/mit/).
