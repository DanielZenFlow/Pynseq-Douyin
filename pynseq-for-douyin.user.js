// ==UserScript==
// @name         Pynseq for Douyin｜屏序·抖音｜本地隐藏指定用户的推荐视频 主页 作品评论
// @name:zh-CN   Pynseq for Douyin｜屏序·抖音｜本地隐藏指定用户的推荐视频 主页 作品评论
// @name:en      Pynseq for Douyin｜屏序·抖音｜本地隐藏指定用户的推荐视频 主页 作品评论
// @namespace    https://github.com/DanielZenFlow
// @version      1.3.0
// @description  不调用抖音官方拉黑接口，在浏览器本地隐藏指定用户的推荐视频、主页作品、评论、弹幕和直播聊天；支持名单管理、导入导出。
// @description:zh-CN  不调用抖音官方拉黑接口，在浏览器本地隐藏指定用户的推荐视频、主页作品、评论、弹幕和直播聊天；支持名单管理、导入导出。
// @description:en  Locally hide selected users' feed videos, profile posts, comments, danmaku, and live chat on Douyin, with blocklist management and import/export.
// @author       DanielZenFlow
// @homepage     https://github.com/DanielZenFlow/Pynseq-Douyin
// @supportURL   https://github.com/DanielZenFlow/Pynseq-Douyin/issues
// @icon         data:image/png;base64,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
// @license      MIT
// @match        https://www.douyin.com/*
// @match        https://live.douyin.com/*
// @run-at       document-start
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_registerMenuCommand
// @grant        GM_addStyle
// @grant        GM_setClipboard
// @grant        GM_openInTab
// @grant        unsafeWindow
// @noframes
// ==/UserScript==

(() => {
  'use strict';

  const SCRIPT_NAME = 'Pynseq for Douyin｜屏序·抖音';
  const SCRIPT_VERSION = '1.3.0';
  const GITHUB_URL = 'https://github.com/DanielZenFlow/Douyin-User-Blocker';
  const BUY_ME_A_COFFEE_URL = 'https://buymeacoffee.com/danielzenflow';
  const BUY_ME_A_COFFEE_ICON_URL = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODg0IiBoZWlnaHQ9IjEyNzkiIHZpZXdCb3g9IjAgMCA4ODQgMTI3OSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTc5MS4xMDkgMjk3LjUxOEw3OTAuMjMxIDI5Ny4wMDJMNzg4LjIwMSAyOTYuMzgzQzc4OS4wMTggMjk3LjA3MiA3OTAuMDQgMjk3LjQ3MiA3OTEuMTA5IDI5Ny41MThWMjk3LjUxOFoiIGZpbGw9IiMwRDBDMjIiLz4KPHBhdGggZD0iTTgwMy44OTYgMzg4Ljg5MUw4MDIuOTE2IDM4OS4xNjZMODAzLjg5NiAzODguODkxWiIgZmlsbD0iIzBEMEMyMiIvPgo8cGF0aCBkPSJNNzkxLjQ4NCAyOTcuMzc3Qzc5MS4zNTkgMjk3LjM2MSA3OTEuMjM3IDI5Ny4zMzIgNzkxLjExOCAyOTcuMjlDNzkxLjExMSAyOTcuMzcxIDc5MS4xMTEgMjk3LjQ1MyA3OTEuMTE4IDI5Ny41MzRDNzkxLjI1MiAyOTcuNTE2IDc5MS4zNzkgMjk3LjQ2MiA3OTEuNDg0IDI5Ny4zNzdWMjk3LjM3N1oiIGZpbGw9IiMwRDBDMjIiLz4KPHBhdGggZD0iTTc5MS4xMTMgMjk3LjUyOUg3OTEuMjQ0VjI5Ny40NDdMNzkxLjExMyAyOTcuNTI5WiIgZmlsbD0iIzBEMEMyMiIvPgo8cGF0aCBkPSJNODAzLjExMSAzODguNzI2TDgwNC41OTEgMzg3Ljg4M0w4MDUuMTQyIDM4Ny41NzNMODA1LjY0MSAzODcuMDRDODA0LjcwMiAzODcuNDQ0IDgwMy44NDYgMzg4LjAxNiA4MDMuMTExIDM4OC43MjZWMzg4LjcyNloiIGZpbGw9IiMwRDBDMjIiLz4KPHBhdGggZD0iTTc5My42NjkgMjk5LjUxNUw3OTIuMjIzIDI5OC4xMzhMNzkxLjI0MyAyOTcuNjA1Qzc5MS43NyAyOTguNTM1IDc5Mi42NDEgMjk5LjIyMSA3OTMuNjY5IDI5OS41MTVWMjk5LjUxNVoiIGZpbGw9IiMwRDBDMjIiLz4KPHBhdGggZD0iTTQzMC4wMTkgMTE4Ni4xOEM0MjguODY0IDExODYuNjggNDI3Ljg1MiAxMTg3LjQ2IDQyNy4wNzYgMTE4OC40NUw0MjcuOTg4IDExODcuODdDNDI4LjYwOCAxMTg3LjMgNDI5LjQ4NSAxMTg2LjYzIDQzMC4wMTkgMTE4Ni4xOFoiIGZpbGw9IiMwRDBDMjIiLz4KPHBhdGggZD0iTTY0MS4xODcgMTE0NC42M0M2NDEuMTg3IDExNDMuMzMgNjQwLjU1MSAxMTQzLjU3IDY0MC43MDUgMTE0OC4yMUM2NDAuNzA1IDExNDcuODQgNjQwLjg2IDExNDcuNDYgNjQwLjkyOSAxMTQ3LjFDNjQxLjAxNSAxMTQ2LjI3IDY0MS4wODQgMTE0NS40NiA2NDEuMTg3IDExNDQuNjNaIiBmaWxsPSIjMEQwQzIyIi8+CjxwYXRoIGQ9Ik02MTkuMjg0IDExODYuMThDNjE4LjEyOSAxMTg2LjY4IDYxNy4xMTggMTE4Ny40NiA2MTYuMzQyIDExODguNDVMNjE3LjI1NCAxMTg3Ljg3QzYxNy44NzMgMTE4Ny4zIDYxOC43NTEgMTE4Ni42MyA2MTkuMjg0IDExODYuMThaIiBmaWxsPSIjMEQwQzIyIi8+CjxwYXRoIGQ9Ik0yODEuMzA0IDExOTYuMDZDMjgwLjQyNyAxMTk1LjMgMjc5LjM1NCAxMTk0LjggMjc4LjIwNyAxMTk0LjYxQzI3OS4xMzYgMTE5NS4wNiAyODAuMDY1IDExOTUuNTEgMjgwLjY4NCAxMTk1Ljg1TDI4MS4zMDQgMTE5Ni4wNloiIGZpbGw9IiMwRDBDMjIiLz4KPHBhdGggZD0iTTI0Ny44NDEgMTE2NC4wMUMyNDcuNzA0IDExNjIuNjYgMjQ3LjI4OCAxMTYxLjM1IDI0Ni42MTkgMTE2MC4xNkMyNDcuMDkzIDExNjEuMzkgMjQ3LjQ4OSAxMTYyLjY2IDI0Ny44MDYgMTE2My45NEwyNDcuODQxIDExNjQuMDFaIiBmaWxsPSIjMEQwQzIyIi8+CjxwYXRoIGQ9Ik00NzIuNjIzIDU5MC44MzZDNDI2LjY4MiA2MTAuNTAzIDM3NC41NDYgNjMyLjgwMiAzMDYuOTc2IDYzMi44MDJDMjc4LjcxIDYzMi43NDYgMjUwLjU4IDYyOC44NjggMjIzLjM1MyA2MjEuMjc0TDI3MC4wODYgMTEwMS4wOEMyNzEuNzQgMTEyMS4xMyAyODAuODc2IDExMzkuODMgMjk1LjY3OSAxMTUzLjQ2QzMxMC40ODIgMTE2Ny4wOSAzMjkuODcgMTE3NC42NSAzNDkuOTkyIDExNzQuNjVDMzQ5Ljk5MiAxMTc0LjY1IDQxNi4yNTQgMTE3OC4wOSA0MzguMzY1IDExNzguMDlDNDYyLjE2MSAxMTc4LjA5IDUzMy41MTYgMTE3NC42NSA1MzMuNTE2IDExNzQuNjVDNTUzLjYzNiAxMTc0LjY1IDU3My4wMTkgMTE2Ny4wOCA1ODcuODE5IDExNTMuNDVDNjAyLjYxOSAxMTM5LjgyIDYxMS43NTIgMTEyMS4xMyA2MTMuNDA2IDExMDEuMDhMNjYzLjQ1OSA1NzAuODc2QzY0MS4wOTEgNTYzLjIzNyA2MTguNTE2IDU1OC4xNjEgNTkzLjA2OCA1NTguMTYxQzU0OS4wNTQgNTU4LjE0NCA1MTMuNTkxIDU3My4zMDMgNDcyLjYyMyA1OTAuODM2WiIgZmlsbD0iI0ZGREQwMCIvPgo8cGF0aCBkPSJNNzguNjg4NSAzODYuMTMyTDc5LjQ3OTkgMzg2Ljg3Mkw3OS45OTYyIDM4Ny4xODJDNzkuNTk4NyAzODYuNzg3IDc5LjE2MDMgMzg2LjQzNSA3OC42ODg1IDM4Ni4xMzJWMzg2LjEzMloiIGZpbGw9IiMwRDBDMjIiLz4KPHBhdGggZD0iTTg3OS41NjcgMzQxLjg0OUw4NzIuNTMgMzA2LjM1MkM4NjYuMjE1IDI3NC41MDMgODUxLjg4MiAyNDQuNDA5IDgxOS4xOSAyMzIuODk4QzgwOC43MTEgMjI5LjIxNSA3OTYuODIxIDIyNy42MzMgNzg4Ljc4NiAyMjAuMDFDNzgwLjc1MSAyMTIuMzg4IDc3OC4zNzYgMjAwLjU1IDc3Ni41MTggMTg5LjU3MkM3NzMuMDc2IDE2OS40MjMgNzY5Ljg0MiAxNDkuMjU3IDc2Ni4zMTQgMTI5LjE0M0M3NjMuMjY5IDExMS44NSA3NjAuODYgOTIuNDI0MyA3NTIuOTI4IDc2LjU2Qzc0Mi42MDQgNTUuMjU4NCA3MjEuMTgyIDQyLjgwMDkgNjk5Ljg4IDM0LjU1OUM2ODguOTY1IDMwLjQ4NDQgNjc3LjgyNiAyNy4wMzc1IDY2Ni41MTcgMjQuMjM1MkM2MTMuMjk3IDEwLjE5NDcgNTU3LjM0MiA1LjAzMjc3IDUwMi41OTEgMi4wOTA0N0M0MzYuODc1IC0xLjUzNTc3IDM3MC45ODMgLTAuNDQzMjM0IDMwNS40MjIgNS4zNTk2OEMyNTYuNjI1IDkuNzk4OTQgMjA1LjIyOSAxNS4xNjc0IDE1OC44NTggMzIuMDQ2OUMxNDEuOTEgMzguMjI0IDEyNC40NDUgNDUuNjM5OSAxMTEuNTU4IDU4LjczNDFDOTUuNzQ0OCA3NC44MjIxIDkwLjU4MjkgOTkuNzAyNiAxMDIuMTI4IDExOS43NjVDMTEwLjMzNiAxMzQuMDEyIDEyNC4yMzkgMTQ0LjA3OCAxMzguOTg1IDE1MC43MzdDMTU4LjE5MiAxNTkuMzE3IDE3OC4yNTEgMTY1Ljg0NiAxOTguODI5IDE3MC4yMTVDMjU2LjEyNiAxODIuODc5IDMxNS40NzEgMTg3Ljg1MSAzNzQuMDA3IDE4OS45NjhDNDM4Ljg4NyAxOTIuNTg2IDUwMy44NyAxOTAuNDY0IDU2OC40NCAxODMuNjE4QzU4NC40MDggMTgxLjg2MyA2MDAuMzQ3IDE3OS43NTggNjE2LjI1NyAxNzcuMzA0QzYzNC45OTUgMTc0LjQzIDY0Ny4wMjIgMTQ5LjkyOCA2NDEuNDk5IDEzMi44NTlDNjM0Ljg5MSAxMTIuNDUzIDYxNy4xMzQgMTA0LjUzOCA1OTcuMDU1IDEwNy42MThDNTk0LjA5NSAxMDguMDgyIDU5MS4xNTMgMTA4LjUxMiA1ODguMTkzIDEwOC45NDJMNTg2LjA2IDEwOS4yNTJDNTc5LjI1NyAxMTAuMTEzIDU3Mi40NTUgMTEwLjkxNSA1NjUuNjUzIDExMS42NjFDNTUxLjYwMSAxMTMuMTc1IDUzNy41MTUgMTE0LjQxNCA1MjMuMzk0IDExNS4zNzhDNDkxLjc2OCAxMTcuNTggNDYwLjA1NyAxMTguNTk1IDQyOC4zNjMgMTE4LjY0N0MzOTcuMjE5IDExOC42NDcgMzY2LjA1OCAxMTcuNzY5IDMzNC45ODMgMTE1LjcyMkMzMjAuODA1IDExNC43OTMgMzA2LjY2MSAxMTMuNjExIDI5Mi41NTIgMTEyLjE3N0MyODYuMTM0IDExMS41MDYgMjc5LjczMyAxMTAuODAxIDI3My4zMzMgMTEwLjAwOUwyNjcuMjQxIDEwOS4yMzVMMjY1LjkxNyAxMDkuMDQ2TDI1OS42MDIgMTA4LjEzNEMyNDYuNjk3IDEwNi4xODkgMjMzLjc5MiAxMDMuOTUzIDIyMS4wMjUgMTAxLjI1MUMyMTkuNzM3IDEwMC45NjUgMjE4LjU4NCAxMDAuMjQ5IDIxNy43NTggOTkuMjE5M0MyMTYuOTMyIDk4LjE5MDEgMjE2LjQ4MiA5Ni45MDk5IDIxNi40ODIgOTUuNTkwM0MyMTYuNDgyIDk0LjI3MDYgMjE2LjkzMiA5Mi45OTA0IDIxNy43NTggOTEuOTYxMkMyMTguNTg0IDkwLjkzMTkgMjE5LjczNyA5MC4yMTUyIDIyMS4wMjUgODkuOTI5M0gyMjEuMjY2QzIzMi4zMyA4Ny41NzIxIDI0My40NzkgODUuNTU4OSAyNTQuNjYzIDgzLjgwMzhDMjU4LjM5MiA4My4yMTg4IDI2Mi4xMzEgODIuNjQ1MyAyNjUuODgyIDgyLjA4MzJIMjY1Ljk4NUMyNzIuOTg4IDgxLjYxODYgMjgwLjAyNiA4MC4zNjI1IDI4Ni45OTQgNzkuNTM2NkMzNDcuNjI0IDczLjIzMDIgNDA4LjYxNCA3MS4wODAxIDQ2OS41MzggNzMuMTAxNEM0OTkuMTE1IDczLjk2MTggNTI4LjY3NiA3NS42OTk2IDU1OC4xMTYgNzguNjkzNUM1NjQuNDQ4IDc5LjM0NzQgNTcwLjc0NiA4MC4wMzU3IDU3Ny4wNDMgODAuODA5OUM1NzkuNDUyIDgxLjEwMjUgNTgxLjg3OCA4MS40NDY1IDU4NC4zMDUgODEuNzM5MUw1ODkuMTkxIDgyLjQ0NDVDNjAzLjQzOCA4NC41NjY3IDYxNy42MSA4Ny4xNDE5IDYzMS43MDggOTAuMTcwM0M2NTIuNTk3IDk0LjcxMjggNjc5LjQyMiA5Ni4xOTI1IDY4OC43MTMgMTE5LjA3N0M2OTEuNjczIDEyNi42MzggNjkzLjAxNSAxMzQuNDA4IDY5NC42NDkgMTQyLjAzTDY5Ni43MzEgMTUxLjc1MkM2OTYuNzg2IDE1MS45MjYgNjk2LjgyNiAxNTIuMTA1IDY5Ni44NTIgMTUyLjI4NUM3MDEuNzczIDE3NS4yMjcgNzA2LjcgMTk4LjE2OSA3MTEuNjMyIDIyMS4xMTFDNzExLjk5NCAyMjIuODA2IDcxMi4wMDIgMjI0LjU1NyA3MTEuNjU3IDIyNi4yNTVDNzExLjMxMiAyMjcuOTU0IDcxMC42MjEgMjI5LjU2MiA3MDkuNjI2IDIzMC45ODJDNzA4LjYzMiAyMzIuNDAxIDcwNy4zNTUgMjMzLjYgNzA1Ljg3NyAyMzQuNTA0QzcwNC4zOTggMjM1LjQwOCA3MDIuNzUgMjM1Ljk5NyA3MDEuMDMzIDIzNi4yMzZINzAwLjg5NUw2OTcuODg0IDIzNi42NDlMNjk0LjkwOCAyMzcuMDQ0QzY4NS40NzggMjM4LjI3MiA2NzYuMDM4IDIzOS40MTkgNjY2LjU4NiAyNDAuNDg2QzY0Ny45NjggMjQyLjYwOCA2MjkuMzIyIDI0NC40NDMgNjEwLjY0OCAyNDUuOTkyQzU3My41MzkgMjQ5LjA3NyA1MzYuMzU2IDI1MS4xMDIgNDk5LjA5OCAyNTIuMDY2QzQ4MC4xMTQgMjUyLjU3IDQ2MS4xMzUgMjUyLjgwNiA0NDIuMTYyIDI1Mi43NzFDMzY2LjY0MyAyNTIuNzEyIDI5MS4xODkgMjQ4LjMyMiAyMTYuMTczIDIzOS42MjVDMjA4LjA1MSAyMzguNjYyIDE5OS45MyAyMzcuNjI5IDE5MS44MDggMjM2LjU4QzE5OC4xMDYgMjM3LjM4OSAxODcuMjMxIDIzNS45NiAxODUuMDI5IDIzNS42NTFDMTc5Ljg2NyAyMzQuOTI4IDE3NC43MDUgMjM0LjE3NyAxNjkuNTQzIDIzMy4zOTdDMTUyLjIxNiAyMzAuNzk4IDEzNC45OTMgMjI3LjU5OCAxMTcuNyAyMjQuNzkzQzk2Ljc5NDQgMjIxLjM1MiA3Ni44MDA1IDIyMy4wNzMgNTcuODkwNiAyMzMuMzk3QzQyLjM2ODUgMjQxLjg5MSAyOS44MDU1IDI1NC45MTYgMjEuODc3NiAyNzAuNzM1QzEzLjcyMTcgMjg3LjU5NyAxMS4yOTU2IDMwNS45NTYgNy42NDc4NiAzMjQuMDc1QzQuMDAwMDkgMzQyLjE5MyAtMS42NzgwNSAzNjEuNjg4IDAuNDcyNzUxIDM4MC4yODhDNS4xMDEyOCA0MjAuNDMxIDMzLjE2NSA0NTMuMDU0IDczLjUzMTMgNDYwLjM1QzExMS41MDYgNDY3LjIzMiAxNDkuNjg3IDQ3Mi44MDcgMTg3Ljk3MSA0NzcuNTU2QzMzOC4zNjEgNDk1Ljk3NSA0OTAuMjk0IDQ5OC4xNzggNjQxLjE1NSA0ODQuMTI5QzY1My40NCA0ODIuOTgyIDY2NS43MDggNDgxLjczMiA2NzcuOTU5IDQ4MC4zNzhDNjgxLjc4NiA0NzkuOTU4IDY4NS42NTggNDgwLjM5OCA2ODkuMjkyIDQ4MS42NjhDNjkyLjkyNiA0ODIuOTM4IDY5Ni4yMyA0ODUuMDA1IDY5OC45NjIgNDg3LjcxN0M3MDEuNjk0IDQ5MC40MjkgNzAzLjc4NCA0OTMuNzE4IDcwNS4wOCA0OTcuMzQyQzcwNi4zNzcgNTAwLjk2NyA3MDYuODQ2IDUwNC44MzYgNzA2LjQ1MyA1MDguNjY1TDcwMi42MzMgNTQ1Ljc5N0M2OTQuOTM2IDYyMC44MjggNjg3LjIzOSA2OTUuODU0IDY3OS41NDIgNzcwLjg3NEM2NzEuNTEzIDg0OS42NTcgNjYzLjQzMSA5MjguNDM0IDY1NS4yOTggMTAwNy4yQzY1My4wMDQgMTAyOS4zOSA2NTAuNzEgMTA1MS41NyA2NDguNDE2IDEwNzMuNzRDNjQ2LjIxMyAxMDk1LjU4IDY0NS45MDQgMTExOC4xIDY0MS43NTcgMTEzOS42OEM2MzUuMjE4IDExNzMuNjEgNjEyLjI0OCAxMTk0LjQ1IDU3OC43MyAxMjAyLjA3QzU0OC4wMjIgMTIwOS4wNiA1MTYuNjUyIDEyMTIuNzMgNDg1LjE2MSAxMjEzLjAxQzQ1MC4yNDkgMTIxMy4yIDQxNS4zNTUgMTIxMS42NSAzODAuNDQzIDEyMTEuODRDMzQzLjE3MyAxMjEyLjA1IDI5Ny41MjUgMTIwOC42MSAyNjguNzU2IDExODAuODdDMjQzLjQ3OSAxMTU2LjUxIDIzOS45ODYgMTExOC4zNiAyMzYuNTQ1IDEwODUuMzdDMjMxLjk1NyAxMDQxLjcgMjI3LjQwOSA5OTguMDM5IDIyMi45IDk1NC4zODFMMTk3LjYwNyA3MTEuNjE1TDE4MS4yNDQgNTU0LjUzOEMxODAuOTY4IDU1MS45NCAxODAuNjkzIDU0OS4zNzYgMTgwLjQzNSA1NDYuNzZDMTc4LjQ3MyA1MjguMDIzIDE2NS4yMDcgNTA5LjY4MSAxNDQuMzAxIDUxMC42MjdDMTI2LjQwNyA1MTEuNDE4IDEwNi4wNjkgNTI2LjYyOSAxMDguMTY4IDU0Ni43NkwxMjAuMjk4IDY2My4yMTRMMTQ1LjM4NSA5MDQuMTA0QzE1Mi41MzIgOTcyLjUyOCAxNTkuNjYxIDEwNDAuOTYgMTY2Ljc3MyAxMTA5LjQxQzE2OC4xNSAxMTIyLjUyIDE2OS40NCAxMTM1LjY3IDE3MC44ODUgMTE0OC43OEMxNzguNzQ5IDEyMjAuNDMgMjMzLjQ2NSAxMjU5LjA0IDMwMS4yMjQgMTI2OS45MUMzNDAuNzk5IDEyNzYuMjggMzgxLjMzNyAxMjc3LjU5IDQyMS40OTcgMTI3OC4yNEM0NzIuOTc5IDEyNzkuMDcgNTI0Ljk3NyAxMjgxLjA1IDU3NS42MTUgMTI3MS43MkM2NTAuNjUzIDEyNTcuOTUgNzA2Ljk1MiAxMjA3Ljg1IDcxNC45ODcgMTEzMC4xM0M3MTcuMjgyIDExMDcuNjkgNzE5LjU3NiAxMDg1LjI1IDcyMS44NyAxMDYyLjhDNzI5LjQ5OCA5ODguNTU5IDczNy4xMTUgOTE0LjMxMyA3NDQuNzIgODQwLjA2MUw3NjkuNjAxIDU5Ny40NTFMNzgxLjAwOSA0ODYuMjYzQzc4MS41NzcgNDgwLjc0OSA3ODMuOTA1IDQ3NS41NjUgNzg3LjY0OSA0NzEuNDc4Qzc5MS4zOTIgNDY3LjM5MSA3OTYuMzUyIDQ2NC42MTcgODAxLjc5NCA0NjMuNTY3QzgyMy4yNSA0NTkuMzg2IDg0My43NjEgNDUyLjI0NSA4NTkuMDIzIDQzNS45MTZDODgzLjMxOCA0MDkuOTE4IDg4OC4xNTMgMzc2LjAyMSA4NzkuNTY3IDM0MS44NDlaTTcyLjQzMDEgMzY1LjgzNUM3Mi43NTcgMzY1LjY4IDcyLjE1NDggMzY4LjQ4NCA3MS44OTY3IDM2OS43OTJDNzEuODQ1MSAzNjcuODEzIDcxLjk0ODMgMzY2LjA1OCA3Mi40MzAxIDM2NS44MzVaTTc0LjUxMjEgMzgxLjk0Qzc0LjY4NDIgMzgxLjgxOSA3NS4yMDAzIDM4Mi41MDggNzUuNzMzNyAzODMuMzM0Qzc0LjkyNSAzODIuNTc2IDc0LjQwODkgMzgyLjAwOSA3NC40OTQ5IDM4MS45NEg3NC41MTIxWk03Ni41NTk3IDM4NC42NDFDNzcuMjk5NiAzODUuODk3IDc3LjY5NTMgMzg2LjY4OSA3Ni41NTk3IDM4NC42NDFWMzg0LjY0MVpNODAuNjcyIDM4Ny45NzlIODAuNzc1MkM4MC43NzUyIDM4OC4xIDgwLjk2NDUgMzg4LjIyIDgxLjAzMzMgMzg4LjM0MUM4MC45MTkyIDM4OC4yMDggODAuNzkyNSAzODguMDg3IDgwLjY1NDggMzg3Ljk3OUg4MC42NzJaTTgwMC43OTYgMzgyLjk4OUM3OTMuMDg4IDM5MC4zMTkgNzgxLjQ3MyAzOTMuNzI2IDc2OS45OTYgMzk1LjQzQzY0MS4yOTIgNDE0LjUyOSA1MTAuNzEzIDQyNC4xOTkgMzgwLjU5NyA0MTkuOTMyQzI4Ny40NzYgNDE2Ljc0OSAxOTUuMzM2IDQwNi40MDcgMTAzLjE0NCAzOTMuMzgyQzk0LjExMDIgMzkyLjEwOSA4NC4zMTk3IDM5MC40NTcgNzguMTA4MiAzODMuNzk4QzY2LjQwNzggMzcxLjIzNyA3Mi4xNTQ4IDM0NS45NDQgNzUuMjAwMyAzMzAuNzY4Qzc3Ljk4NzggMzE2Ljg2NSA4My4zMjE4IDI5OC4zMzQgOTkuODU3MiAyOTYuMzU1QzEyNS42NjcgMjkzLjMyNyAxNTUuNjQgMzA0LjIxOCAxODEuMTc1IDMwOC4wOUMyMTEuOTE3IDMxMi43ODEgMjQyLjc3NCAzMTYuNTM4IDI3My43NDUgMzE5LjM2QzQwNS45MjUgMzMxLjQwNSA1NDAuMzI1IDMyOS41MjkgNjcxLjkyIDMxMS45MUM2OTUuOTA1IDMwOC42ODYgNzE5LjgwNSAzMDQuOTQxIDc0My42MTkgMzAwLjY3NEM3NjQuODM1IDI5Ni44NzEgNzg4LjM1NiAyODkuNzMxIDgwMS4xNzUgMzExLjcwM0M4MDkuOTY3IDMyNi42NzMgODExLjEzNyAzNDYuNzAxIDgwOS43NzggMzYzLjYxNUM4MDkuMzU5IDM3MC45ODQgODA2LjEzOSAzNzcuOTE1IDgwMC43NzkgMzgyLjk4OUg4MDAuNzk2WiIgZmlsbD0iIzBEMEMyMiIvPgo8L3N2Zz4K';
  const STORAGE_KEY = 'dy_local_user_blocker_entries_v1';
  const ENABLED_KEY = 'dy_local_user_blocker_enabled_v1';
  const SETTINGS_KEY = 'dy_local_user_blocker_settings_v1';
  const ONBOARDING_DONE_KEY = 'dy_local_user_blocker_onboarding_done_v1';
  const STAR_REMINDER_DISABLED_KEY = 'dy_local_user_blocker_star_disabled_v1';
  const STAR_REMINDER_LAST_KEY = 'dy_local_user_blocker_star_last_v1';
  const STAR_REMINDER_STAGE_KEY = 'dy_local_user_blocker_star_stage_v1';
  const HIDDEN_CLASS = 'dy-local-user-blocker-hidden';
  const MARK_ATTR = 'data-dy-local-user-blocked';
  const COMMENT_BUTTON_CLASS = 'dy-local-user-blocker-button';
  const CONTEXT_MENU_CLASS = 'dy-local-user-context-menu';
  const SETTINGS_BUTTON_ID = 'dy-local-blocker-settings-button';
  const PROFILE_PLACEHOLDER_CLASS = 'dy-local-blocker-profile-placeholder';
  const PROFILE_UNBLOCK_CLASS = 'dy-local-blocker-profile-unblock';
  const PROFILE_LIST_HIDDEN_CLASS = 'dy-local-blocker-profile-list-hidden';
  const PROFILE_WORKS_HIDDEN_CLASS = 'dy-local-blocker-profile-works-hidden';
  const PROFILE_MODE_CLASS = 'dy-local-blocker-profile-mode';
  const COMMENT_ITEM_SELECTOR = '[data-e2e="comment-item"], .comment-item';
  const COMMENT_NICKNAME_SELECTOR = [
    '[data-e2e="comment-username"]',
    '[data-e2e*="nickname"]',
    '[data-e2e*="user-name"]',
    '[class*="nickname"]',
    '[class*="user-name"]',
    '[class*="username"]',
  ].join(', ');
  const DANMAKU_ITEM_SELECTOR = '[data-danmu-id], [data-danmaku-id], [data-danmaku-user-id], [data-danmu-user-id]';
  const LIVE_ITEM_SELECTOR = '.webcast-chatroom___item, [data-e2e="chat-message"], [data-e2e="live-chat-item"]';
  const FEED_VIDEO_SELECTOR = '[data-e2e-vid][data-e2e^="feed-"]';
  const FEED_SLIDE_SELECTOR = '[data-e2e="feed-item"]';
  const FEED_AUTHOR_SELECTOR = '[data-e2e="feed-video-nickname"], [data-e2e="video-avatar"]';
  const FEED_PREV_SELECTOR = '[data-e2e="video-switch-prev-arrow"]';
  const FEED_NEXT_SELECTOR = '[data-e2e="video-switch-next-arrow"]';
  const FEED_BLOCKED_ATTR = 'data-dy-local-blocker-feed-blocked';
  const FEED_BLOCKED_VIDEO_ATTR = 'data-dy-local-blocker-feed-video-id';
  const FEED_ORIGINAL_AUTOPLAY_ATTR = 'data-dy-local-blocker-original-autoplay';
  const FEED_BLOCKED_CARD_CLASS = 'dy-local-blocker-feed-card';
  const FEED_BLOCKED_CARD_AUTHOR_CLASS = 'dy-local-blocker-feed-card-author';
  const FEED_BLOCKED_CARD_ACTION_CLASS = 'dy-local-blocker-feed-card-action';
  // 抖音自带的视频右键菜单没有稳定的 data-e2e/class，只能按菜单项文字定位；「（R）」是它标注的快捷键。
  const DOUYIN_DISLIKE_ITEM_PATTERN = /^不感兴趣(?:\s*[（(]\s*[A-Za-z]\s*[)）])?$/;
  const DOUYIN_MENU_WAIT_MS = 1000;
  const DOUYIN_MENU_POLL_MS = 50;
  // 推荐流单批响应实测在 100KB 以上；低于此长度的响应不可能是视频列表，直接跳过解析。
  const MIN_FEED_PAYLOAD_LENGTH = 20000;
  const MANAGER_PAGE_SIZE = 20;
  const MAX_BLOCK_ENTRIES = 20000;
  const MAX_IMPORT_FILE_BYTES = 8 * 1024 * 1024;
  const MAX_NICKNAME_LENGTH = 120;
  const MAX_ID_LENGTH = 512;
  const MAX_NOTE_LENGTH = 240;
  const MAX_DANMAKU_ID_CACHE = 2000;
  const MAX_DANMAKU_USER_CACHE = 1000;
  const MAX_BLOCKED_FEED_VIDEO_CACHE = 500;
  const CONTENT_ITEM_SELECTOR = `${COMMENT_ITEM_SELECTOR}, ${DANMAKU_ITEM_SELECTOR}, ${LIVE_ITEM_SELECTOR}, ${FEED_VIDEO_SELECTOR}`;
  const DEFAULT_SETTINGS = Object.freeze({
    showCommentButton: true,
    showSettingsButton: true,
    confirmBeforeBlocking: true,
    hideComments: true,
    hideDanmaku: true,
    hideLiveChat: true,
    hideFeedVideos: true,
    hideBlockedProfileVideos: true,
  });

  const SETTINGS_ICON_URL = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFIklEQVR4nO0ZyW4cVbBjJA5sAolFEcl0VXdXtee9GRvIKQuQBDDbBSJxQxGnHAARGZKwSWyHROaQoMg5sggFfoADCpDkQIhYBHHAgYC4gEHCSCDFbLHAAVXP2HTXm3Z3jyN7QCnpSaN+9Wp5r/bxvHPwP4Moii6xBNsN41HDMNlaeNQSbIvj+GKvl8FwsM4Sfm8Z/+60DON3loO1Xi9Csz9cZQh/zRN+bhH80h/WrvN6DPoMwaeFws++BMFxOeP1Chj2b3MFhZ2DtOJqWZZgl7MfwZDXK2AYn8/eML6qcSzBfoUz4vUKGMLDWTsPNmkc+aYUOLxY8vX19wcNG8OtNvY3MPPl6c06BzdZxpm0cGI2jgJhuFKZ0YzhYGMaR2jLNzHJZhw0F+Qn93jeeTaGrYZhQoXCvwzDW4bhKcv4iiWYVlHm3TyahuCIwp0WGi1a8LbQzvKCCZFBZKkk/Krlyy8wjAfKRpW0cnWCG/LoNiK4UQtpy9E9IDKVVkA7XMl1xhA+WES7QfCQ4FanD6+VE56DtR0OnzIMb1jGT3KS01d19m8ve0GCK2dsZ2E/bvGCU+5LBOtKKAAvqecbuyaKrpjdj2MfDMEWsVvDOCxm0aWz9bVNajihRbClXgd/dlN4WsZjKgG+WEaB8Yzmsb/BWyIwHGxUL/1ZiUNScKUOheHKKkwl5BrCFyzjCamNWvURjMs32aukQBDUlCl/U3yI4EOl9eZSzIw53xDs0znBCcEE+wS3FE3y71M03i9xCEdUxvzZxuGaIuEtwcHSEYXgYJESNg7XJLyzL7CzUAFxUp2cDONvjQhvyVc6uflqYZFgNFf4CIYM4+9K+NNiUoUKJAIxDrvPD5PpaJSxeZ1BCb+os3+XdGCy5LchPOkkvTC0mt5AEFxpGH50FI5haynh526BYYeTcAifcZRtOWxG+EHfv1TjNZu1yxwlCPc4fAmf0wlSWtRKws8Jx/CoesZxV1E8kcaR286j1yD/7iJ6hvFzhbOjK+ETYsZcpF7hD8/zlmUUIJhKM5yvcU8a/qwfTCmUZWLr6dsfGLjqwq4VEGH+0woYwsfPpgnppsaWMCEx4+6E5+Ax7cSG4ekOSu5RjnlSHFbjyTdL8KV6gd2ukvisduLKSsgQqkMY/aFsGBVBxWHFZFqDrmCTFr4gjE66/HG4lPBNqgWdElmd8OZ5FB6tnMgY9+bRk6QpPNWlTKer1dITBkv4UyP0V5/lUuKdolKiEfqrnVKCYFexAgQfpQ81GO8tPPSvEqPztYztvb1lizlLsFk5/QeVy+lmFK3wKoDYtTin1O4yRmwv+b27k83PB2IylctpHRaXsqGpt0Y21Roay/iyevYxiQxpJzeMDyThjmBbe7bTVUtppOMi2N4OnfcPcA2z0QjHKreUyYjcdbqp1iwoSzAVYr9uUHBnWcnrFNwhZ2xnPxkTXonpOfslR/MywugiLJ4pU/IKTldjFYL9izLYsrG/Pl94f303gy1L+GalwZaAjPNkCGUYvlV2+GeiHOETYpOq+JL99/Joyp6KKqeTMQ7hk0JTaOuo0x6WLei/hD4T1Yxk4jrh9brOkSilG/lOoVe+qZud0RFOaAsP4SU8F+1PEEN4qIvx+iGvV8AtP1yHswyv9+wfHDaCIcehCUfEbGQ5CkqJMs+UYymgLy9H5KxjPfUnn0A98q/tnHzcpGgJBr1eBCvTND1bzWbsiaLSfMlBJhmG8BGJ+dLFJYvgiGF8eEEN+jnwehP+AUhQNeKS/IZlAAAAAElFTkSuQmCC';

  /** @typedef {{id:string, secUid:string, userId:string, nickname:string, profileUrl:string, nicknameOnly:boolean, createdAt:string, note:string}} BlockEntry */
  /** @typedef {{secUid?:string, userId?:string, nickname?:string, profileUrl?:string, danmakuId?:string}} UserInfo */

  /** @type {BlockEntry[]} */
  let entries = normalizeEntries(GM_getValue(STORAGE_KEY, []));
  let enabled = Boolean(GM_getValue(ENABLED_KEY, true));
  let settings = loadSettings();

  /** @type {Map<string, UserInfo>} */
  const danmakuById = new Map();
  /** @type {Map<string, UserInfo>} */
  const danmakuByUserId = new Map();
  /** @type {Map<string, UserInfo>} */
  const danmakuBySecUid = new Map();
  /** @type {Set<string>} */
  const blockedFeedVideoIds = new Set();
  // 卡片上的“解除屏蔽”是一次临时查看：只对当前这一条、且只在它仍停留在当前位置时有效。
  // 一旦切走，屏蔽立即恢复，符合“屏蔽是持久状态”的常规预期。
  let revealedFeedVideoId = '';

  let observer = null;
  let domLayerInitialized = false;
  let scanQueued = false;
  let profileScanQueued = false;
  let panel = null;
  let contextMenu = null;
  let activeContext = null;
  let contextMenuOpenedAt = 0;
  let contextNicknameRequestToken = 0;
  let managerPage = 1;
  let starReminderScheduled = false;
  let entryNicknameRepairTimer = 0;
  let entryNicknameRepairRunning = false;
  const pendingEntryNicknameRepairs = new Set();
  const attemptedEntryNicknameRepairs = new Set();

  const FIBONACCI_STAR_DAYS = Object.freeze([1, 2, 3, 5, 8, 13, 21]);

  const pageWindow = typeof unsafeWindow === 'object' ? unsafeWindow : window;

  GM_addStyle(`
    .${HIDDEN_CLASS} { display: none !important; }
    .${PROFILE_LIST_HIDDEN_CLASS} { display: none !important; }
    .${PROFILE_WORKS_HIDDEN_CLASS} > :not(.${PROFILE_PLACEHOLDER_CLASS}) {
      display: none !important;
      animation: none !important;
    }
    #${SETTINGS_BUTTON_ID} {
      position: fixed !important;
      z-index: 2147483644 !important;
      right: 24px !important;
      bottom: 24px !important;
      width: 46px !important;
      height: 46px !important;
      display: grid !important;
      place-items: center !important;
      padding: 0 !important;
      border: 1px solid rgba(0,0,0,.1) !important;
      border-radius: 50% !important;
      background: rgba(255,255,255,.94) !important;
      box-shadow: 0 8px 26px rgba(0,0,0,.18) !important;
      backdrop-filter: blur(10px) !important;
      cursor: pointer !important;
      transition: transform .18s ease, box-shadow .18s ease, background .18s ease !important;
    }
    #${SETTINGS_BUTTON_ID}:hover {
      background: #fff !important;
      transform: translateY(-2px) !important;
      box-shadow: 0 12px 32px rgba(0,0,0,.22) !important;
    }
    #${SETTINGS_BUTTON_ID}:active { transform: translateY(0) scale(.96) !important; }
    html:has(#dy-onboarding-overlay) #${SETTINGS_BUTTON_ID},
    html:has(#dy-local-blocker-overlay) #${SETTINGS_BUTTON_ID} { display: none !important; }
    #${SETTINGS_BUTTON_ID} img {
      width: 22px !important;
      height: 22px !important;
      display: block !important;
      transition: transform .22s ease !important;
    }
    #${SETTINGS_BUTTON_ID}:hover img { transform: rotate(24deg) !important; }
    .${PROFILE_PLACEHOLDER_CLASS} {
      min-height: 280px !important;
      width: 100% !important;
      display: grid !important;
      place-items: center !important;
      box-sizing: border-box !important;
      padding: 48px 24px !important;
      border: 1px solid rgba(127,127,127,.18) !important;
      background: rgba(127,127,127,.045) !important;
      color: inherit !important;
      text-align: center !important;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif !important;
    }
    .${PROFILE_PLACEHOLDER_CLASS} strong {
      display: block !important;
      max-width: 560px !important;
      color: rgba(185,185,185,.78) !important;
      font-size: 18px !important;
      line-height: 1.55 !important;
      font-weight: 650 !important;
    }
    .${PROFILE_PLACEHOLDER_CLASS} span {
      display: block !important;
      margin-top: 9px !important;
      color: rgba(127,127,127,.88) !important;
      font-size: 13px !important;
      line-height: 1.6 !important;
    }
    .${PROFILE_UNBLOCK_CLASS} {
      display: inline-block !important;
      margin-top: 17px !important;
      padding: 2px 0 !important;
      border: 0 !important;
      border-radius: 0 !important;
      background: transparent !important;
      color: rgba(185,185,185,.52) !important;
      cursor: pointer !important;
      font: 550 12.5px/1.45 system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif !important;
    }
    .${PROFILE_UNBLOCK_CLASS}:hover {
      color: rgba(210,210,210,.8) !important;
    }
    html.${PROFILE_MODE_CLASS} .__pre_create_player__,
    html.${PROFILE_MODE_CLASS} .douyin-player-loading,
    html.${PROFILE_MODE_CLASS} [data-e2e="loading"],
    html.${PROFILE_MODE_CLASS} [data-e2e="feed-loading"] {
      display: none !important;
      animation: none !important;
    }
    [${FEED_BLOCKED_ATTR}="1"] {
      position: relative !important;
      background: #111217 !important;
    }
    [${FEED_BLOCKED_ATTR}="1"] > *:not(.${FEED_BLOCKED_CARD_CLASS}) {
      visibility: hidden !important;
      pointer-events: none !important;
    }
    /* 播放控制条嵌在被隐藏的子树里，而抖音自己的样式在部分状态下又会把它重新点亮，
       表现为时有时无。这里统一强制常显，并置于信息卡之上，保持操作入口稳定。 */
    [${FEED_BLOCKED_ATTR}="1"] xg-controls,
    [${FEED_BLOCKED_ATTR}="1"] .xgplayer-controls {
      visibility: visible !important;
      opacity: 1 !important;
      pointer-events: auto !important;
      z-index: 3 !important;
    }
    .${FEED_BLOCKED_CARD_CLASS} {
      appearance: none !important;
      position: absolute !important;
      inset: 0 !important;
      /* 抖音的 .playerContainer 是 z-index:2 的层叠上下文，控制条被关在它内部。
         卡片压到 1，让被隐藏（因而不绘制）的播放器留在上层，
         唯独强制可见的控制条能浮在卡片之上。 */
      z-index: 1 !important;
      display: flex !important;
      flex-direction: column !important;
      align-items: center !important;
      justify-content: center !important;
      box-sizing: border-box !important;
      margin: 0 !important;
      padding: clamp(24px, 5vw, 64px) !important;
      border: 0 !important;
      border-radius: 0 !important;
      background: #111217 !important;
      color: rgba(210,210,210,.82) !important;
      text-align: center !important;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif !important;
      cursor: pointer !important;
      pointer-events: auto !important;
      visibility: visible !important;
    }
    .${FEED_BLOCKED_CARD_CLASS}:hover {
      background: #16171d !important;
    }
    .${FEED_BLOCKED_CARD_CLASS}:focus-visible {
      outline: 1px solid rgba(218,119,87,.9) !important;
      outline-offset: -4px !important;
    }
    .${FEED_BLOCKED_CARD_CLASS} strong {
      display: block !important;
      max-width: 22em !important;
      color: rgba(196,196,196,.78) !important;
      font-size: 18px !important;
      font-weight: 650 !important;
      line-height: 1.55 !important;
    }
    .${FEED_BLOCKED_CARD_CLASS} span {
      display: block !important;
      max-width: 22em !important;
      margin-top: 10px !important;
      color: rgba(160,160,160,.78) !important;
      font-size: 13px !important;
      font-weight: 450 !important;
      line-height: 1.65 !important;
    }
    .${FEED_BLOCKED_CARD_CLASS} .${FEED_BLOCKED_CARD_AUTHOR_CLASS} {
      margin-top: 8px !important;
      color: rgba(188,188,188,.8) !important;
      font-size: 14px !important;
      font-weight: 550 !important;
    }
    .${FEED_BLOCKED_CARD_CLASS} .${FEED_BLOCKED_CARD_ACTION_CLASS} {
      margin-top: 14px !important;
      color: rgba(214,214,214,.92) !important;
      font-size: 14px !important;
      font-weight: 700 !important;
    }
    .${COMMENT_BUTTON_CLASS} {
      appearance: none !important;
      position: static !important;
      display: inline-flex !important;
      flex: 0 0 auto !important;
      align-items: center !important;
      align-self: center !important;
      border: 0 !important;
      background: transparent !important;
      color: rgba(128, 128, 128, .82) !important;
      cursor: pointer !important;
      font: inherit !important;
      font-size: 12px !important;
      line-height: 1.4 !important;
      margin-left: 8px !important;
      padding: 1px 3px !important;
      opacity: .62 !important;
      vertical-align: middle !important;
      white-space: nowrap !important;
      transform: none !important;
    }
    .${COMMENT_BUTTON_CLASS}:hover {
      opacity: 1 !important;
      text-decoration: underline !important;
    }
    .${CONTEXT_MENU_CLASS} {
      position: fixed !important;
      z-index: 2147483647 !important;
      min-width: 248px !important;
      max-width: min(360px, calc(100vw - 16px)) !important;
      padding: 6px !important;
      display: none !important;
      box-sizing: border-box !important;
      background: #fff !important;
      color: #111 !important;
      border: 1px solid rgba(0,0,0,.08) !important;
      border-radius: 10px !important;
      box-shadow: 0 12px 32px rgba(0,0,0,.18) !important;
      font: 14px/1.4 system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif !important;
      pointer-events: auto !important;
      user-select: none !important;
    }
    .${CONTEXT_MENU_CLASS}[data-dy-open="1"] { display: block !important; }
    .${CONTEXT_MENU_CLASS} [hidden] { display: none !important; }
    .${CONTEXT_MENU_CLASS} button {
      appearance: none !important;
      width: 100% !important;
      display: block !important;
      border: 0 !important;
      border-radius: 8px !important;
      padding: 9px 10px !important;
      background: transparent !important;
      color: inherit !important;
      text-align: left !important;
      cursor: pointer !important;
      font: inherit !important;
      white-space: normal !important;
    }
    .${CONTEXT_MENU_CLASS} button:hover { background: #f5f5f5 !important; }
    .${CONTEXT_MENU_CLASS} button:disabled {
      opacity: .5 !important;
      cursor: default !important;
      background: transparent !important;
    }
    .dy-local-user-context-menu-separator {
      height: 1px !important;
      margin: 5px 6px !important;
      background: rgba(0,0,0,.1) !important;
    }
    #dy-local-blocker-toast {
      position: fixed !important;
      z-index: 2147483647 !important;
      left: 50% !important;
      top: 50% !important;
      bottom: auto !important;
      transform: translate(-50%, -50%) !important;
      box-sizing: border-box !important;
      width: min(215px, calc(100vw - 32px)) !important;
      padding: 12px 14px !important;
      border: 1px solid #cfc5bb !important;
      border-radius: 0 !important;
      background: #f7f3ee !important;
      box-shadow: 0 10px 34px rgba(45,35,28,.24) !important;
      color: #27231f !important;
      font: 14px/1.45 system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif !important;
      text-align: center !important;
      pointer-events: none !important;
      opacity: 0 !important;
      transition: opacity .16s ease !important;
    }
    #dy-local-blocker-toast.dy-show { opacity: 1 !important; }
    #dy-local-blocker-overlay {
      position: fixed !important;
      z-index: 2147483646 !important;
      inset: 0 !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      padding: 24px !important;
      background: rgba(27,23,20,.52) !important;
      backdrop-filter: blur(4px) !important;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif !important;
      color: #27231f !important;
    }
    #dy-local-blocker-panel {
      width: min(940px, 95vw) !important;
      height: min(690px, 88vh) !important;
      display: grid !important;
      grid-template-rows: 56px minmax(0, 1fr) 56px !important;
      overflow: hidden !important;
      border: 1px solid #c9beb2 !important;
      border-radius: 0 !important;
      outline: 1px solid rgba(255,255,255,.32) !important;
      outline-offset: -2px !important;
      background: #f6f1eb !important;
      box-shadow: 0 30px 90px rgba(35,28,23,.38) !important;
      color: #27231f !important;
    }
    #dy-local-blocker-panel * { box-sizing: border-box !important; }
    .dy-lb-header {
      display: flex !important;
      align-items: center !important;
      padding: 0 24px !important;
      border-bottom: 1px solid #d5cbc1 !important;
      background: #faf6f1 !important;
    }
    .dy-lb-title { font-size: 15px !important; font-weight: 720 !important; letter-spacing: -.01em !important; }
    .dy-lb-subtitle {
      margin-top: 1px !important;
      color: #8b8178 !important;
      font-size: 9px !important;
      line-height: 1.15 !important;
      letter-spacing: .04em !important;
    }
    .dy-set-shell {
      min-height: 0 !important;
      display: grid !important;
      grid-template-columns: 178px minmax(0, 1fr) !important;
    }
    .dy-set-nav {
      padding: 18px 10px !important;
      overflow: auto !important;
      border-right: 1px solid #d5cbc1 !important;
      background: #ebe4dc !important;
      display: flex !important;
      flex-direction: column !important;
    }
    .dy-set-nav-pages {
      flex: 0 0 auto !important;
    }
    .dy-set-nav button {
      width: 100% !important;
      min-height: 34px !important;
      margin: 1px 0 !important;
      padding: 8px 11px !important;
      border: 1px solid transparent !important;
      border-radius: 0 !important;
      background: transparent !important;
      color: #6d655e !important;
      cursor: pointer !important;
      font-family: inherit !important;
      font-size: 11.5px !important;
      font-weight: 700 !important;
      line-height: 1.3 !important;
      text-align: left !important;
    }
    .dy-set-nav button:hover { background: rgba(217,119,87,.075) !important; color: #27231f !important; }
    .dy-set-nav button.is-active {
      border-color: #d7cabd !important;
      background: #fbf8f4 !important;
      box-shadow: inset 3px 0 #c96849 !important;
      color: #27231f !important;
    }
    .dy-set-author {
      min-height: 36px !important;
      margin: 0 !important;
      padding: 8px 0 !important;
      display: flex !important;
      align-items: center !important;
      gap: 8px !important;
      color: #655d56 !important;
      font-size: 12px !important;
      font-weight: 650 !important;
      text-decoration: none !important;
    }
    .dy-set-author:hover { color: #a84e34 !important; }
    .dy-set-author svg {
      flex: 0 0 auto !important;
      width: 17px !important;
      height: 17px !important;
      fill: currentColor !important;
    }
    .dy-set-content {
      min-width: 0 !important;
      overflow: auto !important;
      padding: 24px 28px 30px !important;
      background: #f6f1eb !important;
      scrollbar-color: #c8b9aa transparent !important;
    }
    .dy-set-page { display: none !important; }
    .dy-set-page.is-active { display: block !important; }
    .dy-set-page-head { margin-bottom: 18px !important; }
    .dy-set-page-head h2,
    .dy-about-hero h3 {
      font: 600 22px/1.22 Georgia, "Songti SC", "STSong", serif !important;
      letter-spacing: -.015em !important;
    }
    .dy-set-page-head h2 { margin: 0 0 5px !important; }
    .dy-set-page-head p { margin: 0 !important; color: #7c7269 !important; font-size: 12px !important; }
    .dy-set-section {
      margin-bottom: 14px !important;
      overflow: hidden !important;
      border: 1px solid #ddd3c9 !important;
      border-radius: 0 !important;
      background: #fffaf5 !important;
      box-shadow: 0 1px 0 rgba(64,49,38,.025) !important;
    }
    .dy-set-section-title {
      padding: 10px 14px 9px !important;
      border-bottom: 1px solid #e2d9d0 !important;
      background: #f8f2eb !important;
      color: #4a423b !important;
      font-size: 12px !important;
      font-weight: 700 !important;
      letter-spacing: .01em !important;
    }
    .dy-set-setting {
      position: relative !important;
      display: flex !important;
      align-items: center !important;
      justify-content: space-between !important;
      gap: 20px !important;
      padding: 12px 14px !important;
      border-bottom: 1px solid #e8dfd6 !important;
      cursor: pointer !important;
    }
    .dy-set-setting:last-child { border-bottom: 0 !important; }
    .dy-set-setting:hover { background: rgba(217,119,87,.055) !important; }
    .dy-set-setting-copy { min-width: 0 !important; display: grid !important; gap: 3px !important; }
    .dy-set-setting-copy strong { font-size: 12.5px !important; font-weight: 660 !important; }
    .dy-set-setting-copy span { color: #7c7269 !important; font-size: 11.5px !important; line-height: 1.45 !important; }
    .dy-set-action-row {
      min-height: 56px !important;
      display: flex !important;
      align-items: center !important;
      justify-content: space-between !important;
      gap: 20px !important;
      padding: 10px 14px !important;
    }
    .dy-set-action-row span { color: #7c7269 !important; font-size: 11.5px !important; line-height: 1.5 !important; }
    .dy-set-setting input[type="checkbox"], .dy-onboard-option input[type="checkbox"] {
      flex: 0 0 auto !important;
      width: 17px !important;
      height: 17px !important;
      margin: 0 !important;
      border-radius: 0 !important;
      accent-color: #c96849 !important;
      cursor: pointer !important;
    }
    .dy-lb-toolbar {
      display: flex !important;
      flex-wrap: wrap !important;
      gap: 8px !important;
      padding: 12px 15px !important;
      border-bottom: 1px solid #e3dcd4 !important;
    }
    .dy-lb-btn {
      border: 1px solid #cfc5bb !important;
      border-radius: 0 !important;
      background: #eee7df !important;
      color: #2d2824 !important;
      cursor: pointer !important;
      padding: 8px 12px !important;
      font-size: 13px !important;
    }
    .dy-lb-btn:hover { background: #e4dad0 !important; }
    .dy-lb-btn.dy-primary { border-color: #b85f43 !important; background: #c96849 !important; color: #fff !important; }
    .dy-lb-btn.dy-danger { border-color: #c89483 !important; color: #a43f2e !important; }
    .dy-lb-btn:disabled { opacity: .5 !important; cursor: default !important; }
    #dy-local-blocker-panel .dy-lb-btn {
      min-height: 30px !important;
      padding: 6px 10px !important;
      font-size: 12px !important;
      line-height: 1.25 !important;
    }
    #dy-local-blocker-panel button:focus-visible,
    #dy-local-blocker-panel input:focus-visible,
    #dy-local-blocker-panel a:focus-visible {
      outline: 2px solid rgba(184,95,67,.72) !important;
      outline-offset: 2px !important;
    }
    .dy-lb-search {
      flex: 1 1 180px !important;
      min-width: 160px !important;
      border: 1px solid #cfc5bb !important;
      border-radius: 0 !important;
      outline: none !important;
      background: #fffdf9 !important;
      color: #27231f !important;
      min-height: 30px !important;
      padding: 6px 9px !important;
      font-size: 12px !important;
    }
    .dy-lb-list { overflow: auto !important; max-height: 330px !important; padding: 4px 15px 18px !important; }
    .dy-lb-empty { padding: 42px 10px !important; text-align: center !important; color: #786f67 !important; }
    .dy-lb-pagination {
      min-height: 48px !important;
      display: flex !important;
      align-items: center !important;
      justify-content: flex-end !important;
      flex-wrap: wrap !important;
      gap: 8px !important;
      padding: 10px 15px 15px !important;
      border-top: 1px solid #e6ded3 !important;
      color: #6c6259 !important;
      font-size: 12px !important;
    }
    .dy-lb-page-status { min-width: 72px !important; text-align: center !important; }
    .dy-lb-page-input {
      width: 66px !important;
      height: 30px !important;
      padding: 0 8px !important;
      border: 1px solid #cfc4b7 !important;
      border-radius: 0 !important;
      outline: none !important;
      background: #fffdf8 !important;
      color: #2f2924 !important;
      font: inherit !important;
    }
    .dy-lb-page-input:focus { border-color: #9b6c4a !important; box-shadow: 0 0 0 2px rgba(155,108,74,.12) !important; }
    .dy-lb-pagination .dy-lb-btn:disabled {
      opacity: .42 !important;
      cursor: default !important;
    }
    .dy-lb-data-tools {
      display: flex !important;
      align-items: center !important;
      justify-content: space-between !important;
      flex-wrap: wrap !important;
      gap: 12px !important;
      padding: 14px 15px !important;
    }
    .dy-lb-data-tools-copy { min-width: 220px !important; flex: 1 1 280px !important; }
    .dy-lb-data-tools-copy strong { display: block !important; margin-bottom: 4px !important; font-size: 13px !important; }
    .dy-lb-data-tools-copy span { display: block !important; color: #786f67 !important; font-size: 12px !important; line-height: 1.55 !important; }
    .dy-lb-data-tools-actions { display: flex !important; align-items: center !important; flex-wrap: wrap !important; gap: 8px !important; }
    .dy-lb-row {
      display: grid !important;
      grid-template-columns: minmax(140px, 1fr) minmax(220px, 2fr) auto !important;
      gap: 14px !important;
      align-items: center !important;
      padding: 12px 2px !important;
      border-bottom: 1px solid #e3dcd4 !important;
    }
    .dy-lb-name { min-width: 0 !important; font-weight: 650 !important; overflow: hidden !important; text-overflow: ellipsis !important; white-space: nowrap !important; }
    .dy-lb-name-link { color: #8f442f !important; text-decoration: none !important; }
    .dy-lb-name-link:hover { text-decoration: underline !important; }
    .dy-lb-meta { min-width: 0 !important; color: #786f67 !important; font: 12px/1.55 ui-monospace, SFMono-Regular, Consolas, monospace !important; overflow-wrap: anywhere !important; }
    .dy-set-footer {
      display: flex !important;
      align-items: center !important;
      justify-content: space-between !important;
      gap: 9px !important;
      padding: 0 24px !important;
      border-top: 1px solid #d5cbc1 !important;
      background: #faf6f1 !important;
    }
    .dy-set-footer-actions { display: flex !important; align-items: center !important; gap: 9px !important; }
    .dy-set-stat-grid { display: grid !important; grid-template-columns: repeat(2, 1fr) !important; gap: 10px !important; margin-bottom: 16px !important; }
    .dy-set-stat { padding: 11px 14px !important; border: 1px solid #ddd3c9 !important; background: #fffaf5 !important; }
    .dy-set-stat span { display: block !important; color: #7c7269 !important; font-size: 11px !important; }
    .dy-set-stat strong { display: block !important; margin-top: 3px !important; font-size: 20px !important; }
    .dy-set-row { display: flex !important; flex-wrap: wrap !important; align-items: center !important; gap: 9px !important; padding: 14px 15px !important; }
    .dy-set-note { color: #786f67 !important; font-size: 12px !important; line-height: 1.55 !important; }
    .dy-set-link { color: #a84e34 !important; text-decoration: underline !important; }
    .dy-about-hero {
      margin-bottom: 16px !important;
      padding: 22px 24px !important;
      border: 1px solid #d8d0c7 !important;
      background: #fbf8f4 !important;
    }
    .dy-about-eyebrow {
      color: #b75f43 !important;
      font-size: 10px !important;
      font-weight: 750 !important;
      letter-spacing: .12em !important;
    }
    .dy-about-hero h3 {
      margin: 7px 0 8px !important;
    }
    .dy-about-title-link {
      display: inline-flex !important;
      align-items: center !important;
      color: inherit !important;
      font-family: "Songti SC", "STSong", "SimSun", serif !important;
      text-decoration: none !important;
    }
    .dy-about-title-link:hover { color: #a84e34 !important; }
    .dy-about-title-link:focus-visible {
      outline: 2px solid #b85f43 !important;
      outline-offset: 3px !important;
    }
    .dy-about-hero p {
      max-width: 620px !important;
      margin: 0 !important;
      color: #786f67 !important;
      font-size: 13px !important;
      line-height: 1.65 !important;
    }
    .dy-about-version {
      display: inline-block !important;
      margin-top: 14px !important;
      padding: 3px 7px !important;
      border: 1px solid #d8d0c7 !important;
      color: #655d56 !important;
      font: 10px/1.2 ui-monospace, SFMono-Regular, Consolas, monospace !important;
    }
    .dy-about-grid {
      display: grid !important;
      grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
      gap: 12px !important;
      margin-bottom: 12px !important;
    }
    .dy-about-grid.is-single { grid-template-columns: 1fr !important; }
    .dy-about-grid.is-single .dy-about-card { min-height: 154px !important; }
    .dy-about-card {
      min-width: 0 !important;
      min-height: 190px !important;
      display: flex !important;
      flex-direction: column !important;
      padding: 18px !important;
      border: 1px solid #d8d0c7 !important;
      background: #fbf8f4 !important;
    }
    .dy-about-card h3 { margin: 0 0 7px !important; font-size: 14px !important; }
    .dy-about-card p { margin: 0 !important; color: #786f67 !important; font-size: 12px !important; line-height: 1.6 !important; }
    .dy-about-card-actions {
      min-height: 36px !important;
      display: flex !important;
      flex-wrap: wrap !important;
      align-items: flex-end !important;
      gap: 8px !important;
      margin-top: auto !important;
      padding-top: 18px !important;
    }
    .dy-about-card-actions .dy-lb-btn { min-height: 30px !important; }
    .dy-about-card-actions.dy-support-actions {
      display: grid !important;
      grid-template-columns: minmax(0, 1fr) !important;
      align-items: stretch !important;
    }
    .dy-support-link {
      width: 100% !important;
      display: grid !important;
      grid-template-columns: 28px minmax(0, 1fr) auto !important;
      align-items: center !important;
      gap: 11px !important;
      padding: 10px 11px !important;
      border: 1px solid #d8d0c7 !important;
      background: #fffaf5 !important;
      color: #443d37 !important;
      cursor: pointer !important;
      text-align: left !important;
      text-decoration: none !important;
    }
    .dy-support-link:hover { border-color: #bd8b75 !important; background: #fffdf8 !important; }
    .dy-support-link:focus-visible { outline: 2px solid #b85f43 !important; outline-offset: 2px !important; }
    .dy-support-icon {
      width: 24px !important;
      height: 24px !important;
      display: grid !important;
      place-items: center !important;
      overflow: hidden !important;
    }
    .dy-support-icon svg {
      width: 100% !important;
      height: 100% !important;
      display: block !important;
    }
    .dy-support-link-copy { display: grid !important; gap: 2px !important; min-width: 0 !important; }
    .dy-support-link-copy strong { font-size: 12.5px !important; }
    .dy-support-link-copy span { color: #786f67 !important; font-size: 10.5px !important; line-height: 1.4 !important; }
    .dy-support-link-action { color: #9e4d36 !important; font-size: 10.5px !important; font-weight: 700 !important; white-space: nowrap !important; }
    .dy-about-facts {
      display: grid !important;
      gap: 8px !important;
      margin-top: 14px !important;
    }
    .dy-about-fact {
      display: flex !important;
      justify-content: space-between !important;
      gap: 16px !important;
      padding-top: 8px !important;
      border-top: 1px solid #e3dcd4 !important;
      color: #786f67 !important;
      font-size: 12px !important;
    }
    .dy-about-fact strong { color: #443d37 !important; font-weight: 650 !important; text-align: right !important; }
    .dy-star-status { margin-top: 12px !important; color: #8f442f !important; font-size: 12px !important; font-weight: 650 !important; }
    .dy-star-overlay {
      position: fixed !important;
      z-index: 2147483647 !important;
      inset: 0 !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      padding: 20px !important;
      background: rgba(30,25,21,.46) !important;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif !important;
    }
    .dy-star-card {
      width: min(430px, calc(100vw - 32px)) !important;
      padding: 24px !important;
      border: 1px solid #cfc5bb !important;
      border-radius: 0 !important;
      background: #f7f3ee !important;
      box-shadow: 0 18px 60px rgba(45,35,28,.3) !important;
      color: #655d56 !important;
    }
    .dy-star-card h2 { margin: 0 0 10px !important; color: #655d56 !important; font-size: 19px !important; }
    .dy-star-card p { margin: 0 !important; color: #655d56 !important; font-size: 13px !important; line-height: 1.65 !important; }
    .dy-star-actions { display: flex !important; flex-wrap: wrap !important; justify-content: flex-end !important; gap: 9px !important; margin-top: 22px !important; }
    .dy-confirm-overlay {
      position: fixed !important;
      z-index: 2147483647 !important;
      inset: 0 !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      padding: 20px !important;
      background: rgba(30,25,21,.46) !important;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif !important;
    }
    .dy-confirm-card {
      width: min(430px, calc(100vw - 32px)) !important;
      padding: 24px !important;
      border: 1px solid #cfc5bb !important;
      border-radius: 0 !important;
      background: #f7f3ee !important;
      box-shadow: 0 18px 60px rgba(45,35,28,.3) !important;
      color: #27231f !important;
    }
    .dy-confirm-card h2 { margin: 0 0 10px !important; color: #655d56 !important; font-size: 19px !important; }
    .dy-confirm-card p { margin: 0 !important; color: #655d56 !important; font-size: 13px !important; line-height: 1.6 !important; }
    .dy-confirm-actions { display: flex !important; justify-content: flex-end !important; gap: 9px !important; margin-top: 22px !important; }
    #dy-onboarding-overlay {
      position: fixed !important;
      z-index: 2147483646 !important;
      inset: 0 !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      padding: 24px !important;
      background: rgba(31,25,21,.46) !important;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif !important;
    }
    .dy-onboard-card {
      width: min(700px, 94vw) !important;
      height: min(520px, 86vh) !important;
      display: grid !important;
      grid-template-rows: auto minmax(0, 1fr) auto !important;
      overflow: hidden !important;
      border: 1px solid #d8cfc2 !important;
      border-radius: 0 !important;
      background: #f5efe5 !important;
      box-shadow: 0 20px 64px rgba(45,35,28,.24) !important;
      color: #2d2926 !important;
    }
    .dy-onboard-top { display: flex !important; align-items: flex-start !important; justify-content: space-between !important; gap: 18px !important; padding: 16px 18px 0 !important; }
    .dy-onboard-progress { width: 156px !important; display: grid !important; grid-template-columns: repeat(5, 1fr) !important; gap: 6px !important; padding-top: 7px !important; }
    .dy-onboard-progress span { height: 3px !important; background: #d9cec1 !important; }
    .dy-onboard-progress span.is-active { background: #d97757 !important; }
    .dy-onboard-skip {
      border: 1px solid #d8cfc2 !important;
      border-radius: 0 !important;
      background: #fbf8f2 !important;
      color: #514942 !important;
      cursor: pointer !important;
      padding: 4px 7px !important;
      font: 600 10px/1.2 inherit !important;
    }
    .dy-onboard-body { min-height: 0 !important; display: flex !important; align-items: center !important; padding: 24px 40px 20px !important; overflow: auto !important; }
    .dy-onboard-step { width: min(570px, 100%) !important; }
    .dy-onboard-kicker { margin-bottom: 8px !important; color: #b75f43 !important; font-size: 10px !important; font-weight: 750 !important; letter-spacing: .12em !important; text-transform: uppercase !important; }
    .dy-onboard-step h1 { margin: 0 0 12px !important; font-family: Georgia, "Songti SC", "STSong", serif !important; font-size: clamp(22px, 2.8vw, 27px) !important; font-weight: 600 !important; line-height: 1.3 !important; letter-spacing: -.008em !important; }
    .dy-onboard-step > p { max-width: 540px !important; margin: 0 !important; color: #665d55 !important; font-size: 13.5px !important; line-height: 1.68 !important; }
    .dy-onboard-options { display: grid !important; gap: 8px !important; margin-top: 18px !important; }
    .dy-onboard-options.is-grid { grid-template-columns: repeat(2, 1fr) !important; }
    .dy-onboard-option {
      display: flex !important;
      align-items: flex-start !important;
      justify-content: space-between !important;
      gap: 18px !important;
      padding: 11px 13px !important;
      border: 1px solid #ddd4c8 !important;
      border-radius: 0 !important;
      background: #fbf8f2 !important;
      cursor: pointer !important;
    }
    .dy-onboard-option:hover { background: #fffdf8 !important; }
    .dy-onboard-option-copy { display: grid !important; gap: 3px !important; }
    .dy-onboard-option-copy strong { font-size: 12.5px !important; }
    .dy-onboard-option-copy span { color: #756b62 !important; font-size: 11px !important; line-height: 1.45 !important; }
    .dy-onboard-summary { display: grid !important; grid-template-columns: repeat(2, 1fr) !important; gap: 9px !important; margin-top: 18px !important; }
    .dy-onboard-summary div { padding: 10px 0 !important; border-top: 1px solid #d9cec1 !important; }
    .dy-onboard-summary span { display: block !important; color: #75685e !important; font-size: 11px !important; }
    .dy-onboard-summary strong { display: block !important; margin-top: 5px !important; font-size: 14px !important; }
    .dy-onboard-supports {
      display: grid !important;
      gap: 9px !important;
      margin-top: 18px !important;
    }
    .dy-onboard-github {
      width: 100% !important;
      margin: 0 !important;
      display: grid !important;
      grid-template-columns: auto minmax(0, 1fr) auto !important;
      align-items: center !important;
      gap: 13px !important;
      padding: 15px 16px !important;
      border: 1px solid #d3c8bc !important;
      border-radius: 0 !important;
      background: #fbf8f2 !important;
      color: #443a32 !important;
      cursor: pointer !important;
      text-align: left !important;
    }
    .dy-onboard-github:hover { background: #fffdf8 !important; border-color: #bd8b75 !important; }
    .dy-onboard-github:focus-visible { outline: 2px solid #b85f43 !important; outline-offset: 3px !important; }
    .dy-onboard-github svg {
      width: 24px !important;
      height: 24px !important;
      fill: currentColor !important;
    }
    .dy-onboard-github .dy-support-icon {
      width: 24px !important;
      height: 24px !important;
    }
    .dy-onboard-github-copy { min-width: 0 !important; display: grid !important; gap: 3px !important; }
    .dy-onboard-github-copy strong { font-size: 14px !important; }
    .dy-onboard-github-copy span { color: #756b62 !important; font-size: 11px !important; line-height: 1.45 !important; }
    .dy-onboard-github-action { color: #9e4d36 !important; font-size: 12px !important; font-weight: 700 !important; white-space: nowrap !important; }
    .dy-onboard-footer { display: flex !important; align-items: center !important; justify-content: space-between !important; gap: 12px !important; padding: 0 18px 22px 40px !important; }
    .dy-onboard-step-label { color: #756b62 !important; font-size: 11px !important; }
    .dy-onboard-actions { display: flex !important; gap: 9px !important; margin-left: auto !important; }
    .dy-onboard-button {
      border: 1px solid rgba(75,58,47,.3) !important;
      border-radius: 0 !important;
      background: rgba(255,252,246,.62) !important;
      color: #443a32 !important;
      cursor: pointer !important;
      padding: 8px 15px !important;
      font: 650 12px/1.2 inherit !important;
    }
    .dy-onboard-button.primary { border-color: #bf6448 !important; background: #d97757 !important; color: #fffaf4 !important; }
    @media (max-width: 720px) {
      #dy-local-blocker-overlay, #dy-onboarding-overlay { padding: 10px !important; }
      #dy-local-blocker-panel { width: 100% !important; height: 94vh !important; }
      .dy-set-shell { grid-template-columns: 1fr !important; grid-template-rows: auto minmax(0, 1fr) !important; }
      .dy-set-nav {
        display: block !important;
        padding: 8px !important;
        overflow-x: auto !important;
        border-right: 0 !important;
        border-bottom: 1px solid #d8d0c7 !important;
      }
      .dy-set-nav-pages { width: max-content !important; display: flex !important; gap: 4px !important; }
      .dy-set-nav button { width: auto !important; white-space: nowrap !important; }
      .dy-set-nav button.is-active { box-shadow: inset 0 -2px #c96849 !important; }
      .dy-set-content { padding: 22px 16px 28px !important; }
      .dy-onboard-card { width: 100% !important; height: min(560px, 92vh) !important; }
      .dy-onboard-body { align-items: flex-start !important; padding: 28px 20px 20px !important; }
      .dy-onboard-card[data-step="0"] .dy-onboard-body { align-items: center !important; }
      .dy-onboard-footer { padding: 0 18px 18px 20px !important; }
      .dy-onboard-options.is-grid, .dy-onboard-summary { grid-template-columns: 1fr !important; }
      .dy-about-grid { grid-template-columns: 1fr !important; }
      .dy-lb-row { grid-template-columns: 1fr auto !important; }
      .dy-lb-meta { grid-column: 1 / -1 !important; }
    }
  `);

  registerMenus();
  patchDouyinDataStreams();
  startWhenReady();

  function registerMenus() {
    GM_registerMenuCommand('设置', openSettings);
    GM_registerMenuCommand('关于', () => openSettings('about'));
  }

  function loadSettings() {
    const stored = GM_getValue(SETTINGS_KEY, {});
    const value = stored && typeof stored === 'object' ? stored : {};
    return {
      showCommentButton: value.showCommentButton !== false,
      showSettingsButton: value.showSettingsButton !== false,
      confirmBeforeBlocking: value.confirmBeforeBlocking !== false,
      hideComments: value.hideComments !== false,
      hideDanmaku: value.hideDanmaku !== false,
      hideLiveChat: value.hideLiveChat !== false,
      hideFeedVideos: value.hideFeedVideos !== false,
      hideBlockedProfileVideos: value.hideBlockedProfileVideos !== false,
    };
  }

  function saveSettings(nextSettings) {
    settings = {
      ...DEFAULT_SETTINGS,
      ...(nextSettings && typeof nextSettings === 'object' ? nextSettings : {}),
    };
    GM_setValue(SETTINGS_KEY, settings);
    if (!enabled || !settings.hideFeedVideos) {
      blockedFeedVideoIds.clear();
      clearFeedSkip();
    }
    syncSettingsButton();
  }

  function openGitHub() {
    openExternalTab(GITHUB_URL);
  }

  function openBuyMeACoffee() {
    openExternalTab(BUY_ME_A_COFFEE_URL);
  }

  function openExternalTab(url) {
    if (!url) return;
    let safeUrl = '';
    try {
      const parsed = new URL(url, location.href);
      if (!['https:', 'http:'].includes(parsed.protocol)) return;
      safeUrl = parsed.href;
    } catch {
      return;
    }
    if (typeof GM_openInTab === 'function') {
      GM_openInTab(safeUrl, { active: true, insert: true, setParent: true });
      return;
    }
    window.open(safeUrl, '_blank', 'noopener');
  }

  function checkStarReminder() {
    if (starReminderScheduled || Boolean(GM_getValue(STAR_REMINDER_DISABLED_KEY, false))) return;
    const now = Date.now();
    const last = Number(GM_getValue(STAR_REMINDER_LAST_KEY, 0)) || 0;
    if (!last) {
      GM_setValue(STAR_REMINDER_LAST_KEY, now);
      GM_setValue(STAR_REMINDER_STAGE_KEY, 0);
      return;
    }
    const stage = Math.max(0, Number(GM_getValue(STAR_REMINDER_STAGE_KEY, 0)) || 0);
    const days = FIBONACCI_STAR_DAYS[Math.min(stage, FIBONACCI_STAR_DAYS.length - 1)];
    if (now - last < days * 24 * 60 * 60 * 1000) return;

    starReminderScheduled = true;
    window.setTimeout(() => {
      starReminderScheduled = false;
      if (Boolean(GM_getValue(STAR_REMINDER_DISABLED_KEY, false))) return;
      if (
        document.getElementById('dy-onboarding-overlay') ||
        document.getElementById('dy-local-blocker-overlay') ||
        document.querySelector('.dy-confirm-overlay, .dy-star-overlay')
      ) {
        window.setTimeout(checkStarReminder, 60 * 1000);
        return;
      }
      showStarReminder(stage);
    }, 4000);
  }

  function advanceStarReminder(stage) {
    GM_setValue(STAR_REMINDER_LAST_KEY, Date.now());
    GM_setValue(STAR_REMINDER_STAGE_KEY, Math.max(0, Number(stage) || 0) + 1);
  }

  function showStarReminder(stage) {
    if (!document.body || document.querySelector('.dy-star-overlay')) return;
    const overlay = document.createElement('div');
    overlay.className = 'dy-star-overlay';
    overlay.innerHTML = `
      <section class="dy-star-card" role="dialog" aria-modal="true" aria-labelledby="dy-star-title">
        <h2 id="dy-star-title">给 Pynseq 一颗 Star</h2>
        <p>GitHub Star 提醒按 1、2、3、5、8、13、21 天递增，之后每 21 天显示一次，可永久关闭。</p>
        <div class="dy-star-actions">
          <button class="dy-lb-btn" type="button" data-star-action="later">稍后提醒</button>
          <button class="dy-lb-btn" type="button" data-star-action="never">不再提醒</button>
          <button class="dy-lb-btn dy-primary" type="button" data-star-action="open">打开 GitHub</button>
        </div>
      </section>
    `;
    overlay.addEventListener('click', (event) => {
      if (!event.isTrusted) return;
      const action = event.target.closest('[data-star-action]')?.getAttribute('data-star-action');
      if (!action) return;
      if (action === 'never') {
        GM_setValue(STAR_REMINDER_DISABLED_KEY, true);
        toast('已关闭 GitHub Star 提醒');
      } else {
        advanceStarReminder(stage);
        if (action === 'open') openGitHub();
      }
      overlay.remove();
    });
    document.body.appendChild(overlay);
  }

  function toggleStarReminder() {
    const wasDisabled = Boolean(GM_getValue(STAR_REMINDER_DISABLED_KEY, false));
    GM_setValue(STAR_REMINDER_DISABLED_KEY, !wasDisabled);
    if (wasDisabled) {
      GM_setValue(STAR_REMINDER_LAST_KEY, Date.now());
      GM_setValue(STAR_REMINDER_STAGE_KEY, 0);
      toast('已开启 GitHub Star 提醒');
    } else {
      toast('已关闭 GitHub Star 提醒');
    }
    renderStarReminderStatus();
  }

  function renderStarReminderStatus() {
    if (!panel) return;
    const disabled = Boolean(GM_getValue(STAR_REMINDER_DISABLED_KEY, false));
    const status = panel.querySelector('.dy-star-status');
    const button = panel.querySelector('.dy-star-toggle');
    if (status) status.textContent = disabled ? '当前状态：已关闭' : '当前状态：已开启';
    if (button) button.textContent = disabled ? '重新开启提醒' : '关闭提醒';
  }

  function syncSettingsButton() {
    const existing = document.getElementById(SETTINGS_BUTTON_ID);
    if (!settings.showSettingsButton) {
      existing?.remove();
      return;
    }
    if (existing || !document.documentElement) return;

    const button = document.createElement('button');
    button.id = SETTINGS_BUTTON_ID;
    button.type = 'button';
    button.title = '打开抖音本地屏蔽设置';
    button.setAttribute('aria-label', '打开抖音本地屏蔽设置');

    const icon = document.createElement('img');
    icon.src = SETTINGS_ICON_URL;
    icon.alt = '';
    icon.setAttribute('aria-hidden', 'true');

    button.appendChild(icon);
    button.addEventListener('click', (event) => {
      if (!event.isTrusted) return;
      openSettings();
    });
    document.documentElement.appendChild(button);
  }

  function startWhenReady() {
    if (document.documentElement) {
      initializeDomLayer();
      return;
    }
    const rootObserver = new MutationObserver(() => {
      if (!document.documentElement) return;
      rootObserver.disconnect();
      initializeDomLayer();
    });
    rootObserver.observe(document, { childList: true });
    document.addEventListener('DOMContentLoaded', initializeDomLayer, { once: true });
  }

  function initializeDomLayer() {
    if (domLayerInitialized || !document.documentElement) return;
    domLayerInitialized = true;

    document.addEventListener('contextmenu', onUserContextMenu, true);
    document.addEventListener('play', onFeedMediaPlayback, true);
    document.addEventListener('playing', onFeedMediaPlayback, true);
    document.addEventListener('canplay', onFeedMediaPlayback, true);
    document.addEventListener('volumechange', onFeedMediaPlayback, true);
    document.addEventListener('pointerdown', (event) => {
      if (event.button !== 0 || Date.now() - contextMenuOpenedAt < 80) return;
      if (contextMenu?.contains(event.target)) return;
      hideUserContextMenu();
    }, true);
    window.addEventListener('resize', hideUserContextMenu);
    window.addEventListener('popstate', queueFullScan);
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') hideUserContextMenu();
      if (event.altKey && event.shiftKey && event.code === 'KeyB') {
        if (!event.isTrusted) return;
        event.preventDefault();
        openSettings('list');
      }
    }, true);

    observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.target.nodeType === Node.ELEMENT_NODE) {
          processClosestItem(/** @type {Element} */ (mutation.target));
        } else if (mutation.target.parentElement) {
          processClosestItem(mutation.target.parentElement);
        }
        for (const node of mutation.addedNodes) {
          if (node.nodeType === Node.ELEMENT_NODE) {
            processRelatedRoot(/** @type {Element} */ (node));
          } else if (node.parentElement) {
            processRelatedRoot(node.parentElement);
          }
        }
      }
      queueProfileScan();
    });
    observer.observe(document.documentElement, {
      childList: true,
      characterData: true,
      attributes: true,
      attributeFilter: ['data-e2e', 'data-e2e-vid', 'href'],
      subtree: true,
    });
    processRoot(document.documentElement);
    syncSettingsButton();
    queueProfileScan();
    if (!Boolean(GM_getValue(ONBOARDING_DONE_KEY, false))) {
      requestAnimationFrame(() => openOnboarding());
    } else {
      checkStarReminder();
    }
  }

  function processClosestItem(root) {
    if (!(root instanceof Element)) return;
    const item = root.closest(CONTENT_ITEM_SELECTOR);
    if (item) processRoot(item);
  }

  function processRelatedRoot(root) {
    if (!(root instanceof Element)) return;
    processRoot(root);
    const item = root.closest(CONTENT_ITEM_SELECTOR);
    if (item && item !== root) processRoot(item);
  }

  function processRoot(root) {
    if (!(root instanceof Element)) return;

    const selectors = {
      comments: COMMENT_ITEM_SELECTOR,
      danmaku: DANMAKU_ITEM_SELECTOR,
      live: LIVE_ITEM_SELECTOR,
      feed: FEED_VIDEO_SELECTOR,
    };

    processMatching(root, selectors.comments, processCommentItem);
    processMatching(root, selectors.danmaku, processDanmakuItem);
    processMatching(root, selectors.live, processLiveChatItem);
    processMatching(root, selectors.feed, processFeedVideoItem);
  }

  function processMatching(root, selector, callback) {
    if (root.matches(selector)) callback(root);
    for (const element of root.querySelectorAll(selector)) callback(element);
  }

  function processCommentItem(item) {
    if (
      !item.matches('[data-e2e="comment-item"]') &&
      item.matches(`${DANMAKU_ITEM_SELECTOR}, ${LIVE_ITEM_SELECTOR}`)
    ) {
      return;
    }
    const info = extractCommentInfo(item);
    if (!hasAnyIdentity(info)) {
      item.classList.remove(HIDDEN_CLASS);
      item.removeAttribute(MARK_ATTR);
      item.querySelector(`.${COMMENT_BUTTON_CLASS}`)?.remove();
      return;
    }

    applyVisibility(item, info, settings.hideComments);
    syncCommentButton(item);
  }

  function processDanmakuItem(item) {
    const info = extractDanmakuInfo(item);
    if (!hasAnyIdentity(info)) {
      item.classList.remove(HIDDEN_CLASS);
      item.removeAttribute(MARK_ATTR);
      return;
    }
    applyVisibility(item, info, settings.hideDanmaku);
  }

  function processLiveChatItem(item) {
    const info = extractLiveInfo(item);
    if (!hasAnyIdentity(info)) {
      item.classList.remove(HIDDEN_CLASS);
      item.removeAttribute(MARK_ATTR);
      return;
    }
    applyVisibility(item, info, settings.hideLiveChat);
  }

  function processFeedVideoItem(item) {
    const slide = item.closest(FEED_SLIDE_SELECTOR) || item;
    const videoId = normalizeId(item.getAttribute('data-e2e-vid'));
    const markedVideoId = normalizeId(slide.getAttribute(FEED_BLOCKED_VIDEO_ATTR));
    if (markedVideoId && videoId && markedVideoId !== videoId) {
      // 虚拟列表复用同一个滑块节点时，旧的屏蔽标记必须随视频 ID 一起失效。
      blockedFeedVideoIds.delete(markedVideoId);
      clearBlockedFeedSlide(slide);
    }

    if (!enabled || !settings.hideFeedVideos) {
      if (videoId) blockedFeedVideoIds.delete(videoId);
      clearBlockedFeedSlide(slide);
      return;
    }
    if (videoId && videoId === revealedFeedVideoId) {
      clearBlockedFeedSlide(slide);
      return;
    }
    if (
      revealedFeedVideoId &&
      videoId &&
      videoId !== revealedFeedVideoId &&
      isConfirmedActiveFeedSlide(item, slide)
    ) {
      // 另一条视频成为当前项，说明用户已经离开临时查看的那一条，立即恢复它的屏蔽。
      revokeRevealedFeedVideo();
    }

    const info = extractFeedAuthorInfo(item);
    const hasIdentity = hasAnyIdentity(info);
    if (
      !hasIdentity &&
      !videoId &&
      markedVideoId &&
      blockedFeedVideoIds.has(markedVideoId)
    ) {
      // React 更新同一个虚拟滑块时，data-e2e-vid 和作者信息可能短暂同时消失。
      // 在新视频 ID 出现前保留已确认的屏蔽状态，避免旧媒体泄漏。
      neutralizeFeedMedia(slide);
      ensureFeedBlockedCard(slide, item);
      return;
    }

    const blocked = (
      (hasIdentity && isBlocked(info)) ||
      (!hasIdentity && videoId && blockedFeedVideoIds.has(videoId))
    );
    if (!blocked) {
      // 作者身份已经明确且不在名单中时，必须清掉虚拟列表复用节点留下的旧标记。
      if (hasIdentity && videoId) blockedFeedVideoIds.delete(videoId);
      if (hasIdentity || !videoId || !blockedFeedVideoIds.has(videoId)) {
        clearBlockedFeedSlide(slide);
      }
      return;
    }
    guardBlockedFeedVideo(item);
  }

  function applyVisibility(element, info, scopeEnabled = true) {
    const blocked = enabled && scopeEnabled && isBlocked(info);
    element.classList.toggle(HIDDEN_CLASS, blocked);
    if (blocked) element.setAttribute(MARK_ATTR, '1');
    else element.removeAttribute(MARK_ATTR);
  }

  // 数据层过滤会在 React 拿到响应之前移除被屏蔽的推荐条目，因此正常浏览时
  // feed 里根本不会出现屏蔽项。这里只负责唯一的残留场景：用户刚刚屏蔽了
  // 缓冲区内已经渲染出来的作者，这些条目无法再退回数据层处理。
  function guardBlockedFeedVideo(item) {
    if (!item?.isConnected) return;
    const slide = item.closest(FEED_SLIDE_SELECTOR) || item;
    const videoId = normalizeId(item.getAttribute('data-e2e-vid'));

    // 不删除 React/Swiper 管理的 feed-item。直接删除会让抖音的 activeIndex 与播放器实例失配，
    // 表面切到下一条，实际仍由上一条视频占用播放器并继续发声。
    item.classList.remove(HIDDEN_CLASS);
    item.setAttribute(MARK_ATTR, '1');
    slide.setAttribute(FEED_BLOCKED_ATTR, '1');
    if (videoId) {
      rememberBlockedFeedVideoId(videoId);
      slide.setAttribute(FEED_BLOCKED_VIDEO_ATTR, videoId);
    }
    neutralizeFeedMedia(slide);
    ensureFeedBlockedCard(slide, item);
  }

  function clearBlockedFeedSlide(slide) {
    if (!slide) return;
    const markedVideoId = normalizeId(slide.getAttribute(FEED_BLOCKED_VIDEO_ATTR));
    if (markedVideoId) blockedFeedVideoIds.delete(markedVideoId);
    removeFeedBlockedCard(slide);
    slide.removeAttribute(FEED_BLOCKED_ATTR);
    slide.removeAttribute(FEED_BLOCKED_VIDEO_ATTR);
    for (const item of slide.matches?.(FEED_VIDEO_SELECTOR)
      ? [slide]
      : slide.querySelectorAll?.(FEED_VIDEO_SELECTOR) || []) {
      item.classList.remove(HIDDEN_CLASS);
      item.removeAttribute(MARK_ATTR);
    }
    restoreFeedMedia(slide);
  }

  function rememberBlockedFeedVideoId(videoId) {
    const key = normalizeId(videoId);
    if (!key) return;
    blockedFeedVideoIds.delete(key);
    blockedFeedVideoIds.add(key);
    while (blockedFeedVideoIds.size > MAX_BLOCKED_FEED_VIDEO_CACHE) {
      blockedFeedVideoIds.delete(blockedFeedVideoIds.values().next().value);
    }
  }

  function getActiveFeedItem() {
    const visibleMarked = pickNearestFeedItem(
      [...document.querySelectorAll('[data-e2e="feed-active-video"]')]
    );
    if (visibleMarked) return visibleMarked;

    // 直播/视频切换或首屏装载时，active 标记可能短暂缺席。此时只信任正在播放的媒体，
    // 不按 DOM 顺序猜测，避免把预加载项误判为活动视频。
    const playingItems = new Set();
    for (const media of document.querySelectorAll(`${FEED_SLIDE_SELECTOR} video, ${FEED_SLIDE_SELECTOR} audio`)) {
      if (!media.paused) {
        const item = media.closest(FEED_VIDEO_SELECTOR);
        if (item) playingItems.add(item);
      }
    }
    return pickNearestFeedItem([...playingItems]);
  }

  function pickNearestFeedItem(items) {
    let bestItem = null;
    let bestScore = Number.POSITIVE_INFINITY;
    const viewportCenter = window.innerHeight / 2;
    for (const item of items) {
      const slide = item.closest(FEED_SLIDE_SELECTOR) || item;
      const rect = slide.getBoundingClientRect();
      if (rect.width < 2 || rect.height < 2) continue;
      const visibleHeight = Math.max(0, Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0));
      if (visibleHeight <= 1) continue;
      const visibleRatio = Math.min(1, visibleHeight / Math.max(1, Math.min(rect.height, window.innerHeight)));
      const centerDistance = Math.abs(rect.top + rect.height / 2 - viewportCenter);
      const score = centerDistance - visibleRatio * window.innerHeight;
      if (score < bestScore) {
        bestScore = score;
        bestItem = item;
      }
    }
    return bestItem;
  }

  function isFeedSlideAtViewportCenter(slide) {
    if (!slide?.isConnected) return false;
    const rect = slide.getBoundingClientRect();
    if (rect.width < 2 || rect.height < 2) return false;
    const viewportHeight = Math.max(1, window.innerHeight);
    const visibleHeight = Math.max(0, Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0));
    const visibleRatio = visibleHeight / Math.max(1, Math.min(rect.height, viewportHeight));
    const viewportCenter = viewportHeight / 2;
    return (
      visibleRatio >= .55 &&
      rect.top <= viewportCenter &&
      rect.bottom >= viewportCenter
    );
  }

  function isConfirmedActiveFeedSlide(item, slide = item?.closest(FEED_SLIDE_SELECTOR) || item) {
    if (!item?.isConnected || !slide?.isConnected) return false;
    const activeItem = getActiveFeedItem();
    if (activeItem) {
      const activeSlide = activeItem.closest(FEED_SLIDE_SELECTOR) || activeItem;
      if (activeItem === item || activeSlide === slide) return true;
      // 切换过程中抖音可能已经把下一条移到中央，却仍把 active 标记留在屏外的旧条目。
      // 只有旧 active 自身仍位于中央时才优先相信它，否则以实际居中的滑块为准。
      if (isFeedSlideAtViewportCenter(activeSlide)) return false;
    }
    return isFeedSlideAtViewportCenter(slide);
  }

  function feedSlideVideoId(slide) {
    return normalizeId(
      slide?.querySelector?.(FEED_VIDEO_SELECTOR)?.getAttribute('data-e2e-vid')
    );
  }

  function getVisibleFeedNavigationControl(direction = 1) {
    const selector = direction < 0 ? FEED_PREV_SELECTOR : FEED_NEXT_SELECTOR;
    return [...document.querySelectorAll(selector)].find((button) => {
      const style = getComputedStyle(button);
      const rect = button.getBoundingClientRect();
      return (
        style.display !== 'none' &&
        style.visibility !== 'hidden' &&
        Number(style.opacity || 1) > 0 &&
        rect.width > 0 &&
        rect.height > 0
      );
    }) || null;
  }

  // 信息卡直接画在被屏蔽的滑块内部，而不是浮在视口上。它随轨道一起移动、
  // 随滑块回收一起消失，因此不需要定位、就绪判定或任何定时器；那个屏幕位置
  // 永远有内容，空白在结构上不可能出现。
  function ensureFeedBlockedCard(slide, item) {
    if (!slide?.isConnected) return;
    let card = slide.querySelector(`:scope > .${FEED_BLOCKED_CARD_CLASS}`);
    if (!card) {
      card = document.createElement('button');
      card.type = 'button';
      card.className = FEED_BLOCKED_CARD_CLASS;
      card.title = '解除屏蔽';
      card.innerHTML = `
        <strong>已被「${SCRIPT_NAME}」屏蔽</strong>
        <span class="${FEED_BLOCKED_CARD_AUTHOR_CLASS}"></span>
        <span>该用户的内容已隐藏，后续推荐不会再出现。</span>
        <span class="${FEED_BLOCKED_CARD_ACTION_CLASS}">点击解除屏蔽</span>
      `;
      card.addEventListener('click', onFeedBlockedCardClick, true);
      slide.appendChild(card);
    }
    const authorLine = card.querySelector(`.${FEED_BLOCKED_CARD_AUTHOR_CLASS}`);
    if (authorLine) {
      const nickname = item ? visibleUserName(extractFeedAuthorInfo(item), '') : '';
      authorLine.textContent = nickname ? `由 @${nickname} 发布` : '由该用户发布';
    }
  }

  function removeFeedBlockedCard(slide) {
    slide?.querySelector?.(`:scope > .${FEED_BLOCKED_CARD_CLASS}`)?.remove();
  }

  // 点击卡片只做一件事：撤掉这一格的屏蔽标记。视频本来就还在原地，
  // 不涉及任何导航或轮播状态，因此没有可失败的步骤。
  function onFeedBlockedCardClick(event) {
    if (!event?.isTrusted) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    const slide = event.currentTarget.closest(FEED_SLIDE_SELECTOR);
    const videoId = feedSlideVideoId(slide);
    revealedFeedVideoId = videoId;
    clearBlockedFeedSlide(slide);
    resumeRevealedFeedVideo(slide);
  }

  function revokeRevealedFeedVideo() {
    const videoId = revealedFeedVideoId;
    // 先清空再重扫，避免重入。
    revealedFeedVideoId = '';
    if (!videoId) return;
    for (const item of document.querySelectorAll(FEED_VIDEO_SELECTOR)) {
      if (normalizeId(item.getAttribute('data-e2e-vid')) === videoId) processFeedVideoItem(item);
    }
  }

  // 解除屏蔽后只需恢复播放。音量与静音一律交给抖音自己的播放器，
  // 脚本不去覆盖用户的全局声音设置。
  function resumeRevealedFeedVideo(slide) {
    if (!slide?.isConnected) return;
    const media = slide.querySelector('video');
    if (media && isFeedSlideAtViewportCenter(slide)) {
      try { media.play?.()?.catch?.(() => {}); } catch {}
    }
  }

  // 屏蔽正在观看的这一条时，替用户点一次抖音自己的“下一条”。
  // 这是全脚本仅剩的自动动作：只在用户刚刚按下屏蔽的那一刻触发一次，
  // 单次、无重试、无方向推断。主动滚到某张屏蔽卡片上时不会触发，
  // 否则会与用户的滚动方向对抗。即便点击没生效，用户看到的也是信息卡而不是空白。
  function advanceFromBlockedActiveSlide(slide) {
    if (!enabled || !settings.hideFeedVideos || !slide?.isConnected) return;
    const control = getVisibleFeedNavigationControl(1);
    if (!control) return;
    try { control.click(); } catch {}
  }

  // 绝不写 media.muted。抖音把播放器的静音状态视为全局用户偏好：脚本一旦把某条
  // 被屏蔽的视频设为静音，这个状态会被同步到播放器，之后所有视频都会跟着静音。
  // 屏蔽项只需要暂停即可无声；万一抖音重新播放它，play/playing 事件会立刻再次进到
  // 这里把它暂停，代价最多是一瞬的声音，而不是让整个会话失去声音。
  function neutralizeFeedMedia(root) {
    for (const media of root.querySelectorAll('video, audio')) {
      try {
        if (!media.hasAttribute(FEED_ORIGINAL_AUTOPLAY_ATTR)) {
          media.setAttribute(
            FEED_ORIGINAL_AUTOPLAY_ATTR,
            media.hasAttribute('autoplay') || media.autoplay ? '1' : '0',
          );
        }
        media.pause();
        media.removeAttribute('autoplay');
      } catch {}
    }
  }

  function restoreFeedMedia(root) {
    for (const media of root.querySelectorAll('video, audio')) {
      const originalAutoplay = media.getAttribute(FEED_ORIGINAL_AUTOPLAY_ATTR);
      try {
        if (originalAutoplay === '1') {
          media.autoplay = true;
          media.setAttribute('autoplay', '');
        }
      } catch {}
      media.removeAttribute(FEED_ORIGINAL_AUTOPLAY_ATTR);
    }
  }

  function onFeedMediaPlayback(event) {
    const media = event.target;
    if (!(media instanceof Element) || !/^(VIDEO|AUDIO)$/i.test(media.tagName)) return;
    const item = media.closest(FEED_VIDEO_SELECTOR);
    if (!item) return;
    processFeedVideoItem(item);
  }

  function clearFeedSkip() {
    revealedFeedVideoId = '';
    for (const slide of document.querySelectorAll(`[${FEED_BLOCKED_ATTR}="1"]`)) {
      clearBlockedFeedSlide(slide);
    }
  }

  function syncCommentButton(item) {
    let button = item.querySelector(`.${COMMENT_BUTTON_CLASS}`);
    if (!settings.showCommentButton || item.classList.contains(HIDDEN_CLASS)) {
      button?.remove();
      return;
    }

    if (!button) {
      button = document.createElement('button');
      button.type = 'button';
      button.className = COMMENT_BUTTON_CLASS;
      button.textContent = '本地屏蔽';
      button.title = '仅在此浏览器隐藏该用户，不占用抖音黑名单';
      button.addEventListener('click', async (event) => {
        if (!event.isTrusted) return;
        event.preventDefault();
        event.stopPropagation();
        const currentItem = button.closest(COMMENT_ITEM_SELECTOR);
        if (!currentItem) return;
        await requestAddEntry(extractCommentInfo(currentItem), '评论区按钮');
      }, true);
    }

    placeCommentButton(item, button);
  }

  function placeCommentButton(item, button) {
    const nicknameElement = findCommentNicknameElement(item);
    const authorLink = findAuthorProfileLink(item, nicknameElement);
    const anchor = authorLink || nicknameElement;
    if (anchor?.parentElement && item.contains(anchor.parentElement)) {
      if (anchor.nextElementSibling !== button) anchor.insertAdjacentElement('afterend', button);
      return;
    }
    if (button.parentElement !== item || button !== item.firstElementChild) {
      item.insertBefore(button, item.firstChild);
    }
  }

  function onUserContextMenu(event) {
    if (!event.isTrusted) return;
    const target = event.target instanceof Element ? event.target : null;
    if (!target) return;

    const comment = target.closest(COMMENT_ITEM_SELECTOR);
    const danmaku = target.closest(DANMAKU_ITEM_SELECTOR);
    const live = target.closest(LIVE_ITEM_SELECTOR);
    const feedAuthor = target.closest(FEED_AUTHOR_SELECTOR);
    const feed = feedAuthor?.closest(FEED_VIDEO_SELECTOR);

    let info = null;
    let source = '';
    let item = null;
    if (live) {
      info = extractClickedUserInfo(target, live, extractLiveInfo);
      source = '直播聊天右键菜单';
      item = live;
    } else if (danmaku) {
      info = extractClickedUserInfo(target, danmaku, extractDanmakuInfo);
      source = '视频弹幕右键菜单';
      item = danmaku;
    } else if (comment) {
      info = extractClickedUserInfo(target, comment, extractCommentInfo);
      source = '评论区右键菜单';
      item = comment;
    } else if (feed) {
      info = extractFeedAuthorInfo(feed);
      source = '推荐/关注视频作者右键菜单';
      item = feed;
    }

    if (!item || !info || !hasAnyIdentity(info)) {
      hideUserContextMenu();
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    activeContext = {
      info,
      item,
      source,
      profileUrl: info.profileUrl || getProfileUrl(item, info),
    };
    showUserContextMenu(event.clientX, event.clientY);
  }

  function ensureUserContextMenu() {
    if (contextMenu?.isConnected) return contextMenu;

    contextMenu = document.createElement('div');
    contextMenu.className = CONTEXT_MENU_CLASS;
    contextMenu.setAttribute('data-dy-local-blocker-ui', '1');
    contextMenu.innerHTML = `
      <button type="button" data-action="open">在选项卡中打开链接</button>
      <div class="dy-local-user-context-menu-separator" role="separator"></div>
      <button type="button" data-action="block"></button>
      <button type="button" data-action="block-dislike"></button>
    `;
    for (const eventName of ['pointerdown', 'mousedown', 'mouseup']) {
      contextMenu.addEventListener(eventName, (event) => event.stopPropagation());
    }
    contextMenu.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      event.stopPropagation();
    });
    contextMenu.addEventListener('click', async (event) => {
      if (!event.isTrusted) return;
      event.preventDefault();
      event.stopPropagation();
      const button = event.target.closest('button[data-action]');
      if (!button || !activeContext) return;
      const action = button.getAttribute('data-action');
      const context = activeContext;
      hideUserContextMenu();

      if (action === 'block') await requestAddEntry(context.info, context.source);
      if (action === 'block-dislike') await blockAndDislike(context);
      if (action === 'open' && context.profileUrl) {
        openExternalTab(context.profileUrl);
      }
    });
    (document.body || document.documentElement).appendChild(contextMenu);
    return contextMenu;
  }

  function showUserContextMenu(x, y) {
    const menu = ensureUserContextMenu();
    renderUserContextMenu(menu);
    menu.setAttribute('data-dy-open', '1');
    menu.style.left = `${x}px`;
    menu.style.top = `${y}px`;

    const rect = menu.getBoundingClientRect();
    const left = Math.min(x, window.innerWidth - rect.width - 8);
    const top = Math.min(y, window.innerHeight - rect.height - 8);
    menu.style.left = `${Math.max(8, left)}px`;
    menu.style.top = `${Math.max(8, top)}px`;
    contextMenuOpenedAt = Date.now();

    if (!visibleUserName(activeContext?.info, '')) {
      hydrateActiveContextNickname(activeContext, menu);
    }
  }

  function renderUserContextMenu(menu) {
    const openButton = menu.querySelector('[data-action="open"]');
    const separator = menu.querySelector('.dy-local-user-context-menu-separator');
    const blockButton = menu.querySelector('[data-action="block"]');
    const dislikeButton = menu.querySelector('[data-action="block-dislike"]');
    const nickname = visibleUserName(activeContext?.info, '');
    // 「不感兴趣」是抖音针对单条视频的操作，只有推荐/关注视频的右键菜单才提供。
    const canDislike = Boolean(activeContext?.item?.matches?.(FEED_VIDEO_SELECTOR));

    openButton.hidden = !activeContext?.profileUrl;
    separator.hidden = !activeContext?.profileUrl;
    blockButton.disabled = !nickname;
    blockButton.textContent = nickname ? `屏蔽 @${nickname}` : '正在读取用户昵称…';
    dislikeButton.hidden = !canDislike || !nickname;
    dislikeButton.textContent = nickname ? `屏蔽 @${nickname}+不感兴趣` : '';
  }

  async function hydrateActiveContextNickname(context, menu) {
    if (!context || context !== activeContext) return;
    const requestToken = ++contextNicknameRequestToken;
    const enriched = await enrichManualInfo({
      ...context.info,
      profileUrl: context.profileUrl || context.info.profileUrl,
    });
    if (
      requestToken !== contextNicknameRequestToken ||
      context !== activeContext ||
      menu !== contextMenu ||
      !menu.hasAttribute('data-dy-open')
    ) {
      return;
    }

    const nickname = visibleUserName(enriched, '');
    if (nickname) {
      context.info = cleanInfo({ ...context.info, ...enriched, nickname });
      context.profileUrl = context.profileUrl || enriched.profileUrl || getProfileUrl(context.item, context.info);
      renderUserContextMenu(menu);
      return;
    }
    const blockButton = menu.querySelector('[data-action="block"]');
    blockButton.disabled = true;
    blockButton.textContent = '未能读取用户昵称';
  }

  async function blockAndDislike(context) {
    const item = context.item;
    const added = await requestAddEntry(context.info, context.source);
    // 确认对话框被取消或昵称读取失败时不再动抖音的推荐反馈。
    if (!added && !findMatchingEntry(cleanInfo(context.info))) return;
    if (!(await markVideoNotInterested(item))) {
      toast('已加入本地名单，但没能触发抖音的「不感兴趣」');
    }
  }

  async function markVideoNotInterested(item) {
    if (!item?.isConnected) return false;
    const surface = findFeedPlayerSurface(item);
    if (!surface) return false;

    dispatchMouseSequence(surface, ['pointerdown', 'mousedown', 'contextmenu'], 2);
    const menuItem = await waitForDouyinDislikeItem(item);
    if (!menuItem) {
      closeDouyinContextMenu();
      return false;
    }
    dispatchMouseSequence(menuItem, ['pointerdown', 'mousedown', 'pointerup', 'mouseup', 'click'], 0);
    return true;
  }

  function findFeedPlayerSurface(item) {
    // 抖音的 contextmenu 监听挂在播放器内部节点上，事件派发到 .basePlayerContainer 本身不会冒泡到它。
    return (
      item.querySelector('xg-video-container') ||
      item.querySelector('video')?.parentElement ||
      item.querySelector('.basePlayerContainer > *') ||
      null
    );
  }

  function findDouyinDislikeItem(item) {
    const matches = [...item.querySelectorAll('div')].filter((node) =>
      DOUYIN_DISLIKE_ITEM_PATTERN.test(normalizeText(node.textContent)),
    );
    // 菜单项外层带快捷键后缀、内层只有文字，优先点整行。
    return matches.find((node) => /[（(]\s*[A-Za-z]\s*[)）]/.test(node.textContent)) || matches[0] || null;
  }

  function waitForDouyinDislikeItem(item) {
    return new Promise((resolve) => {
      const deadline = Date.now() + DOUYIN_MENU_WAIT_MS;
      const poll = () => {
        const found = findDouyinDislikeItem(item);
        if (found || Date.now() >= deadline) {
          resolve(found || null);
          return;
        }
        setTimeout(poll, DOUYIN_MENU_POLL_MS);
      };
      poll();
    });
  }

  function closeDouyinContextMenu() {
    document.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
  }

  function dispatchMouseSequence(target, names, button) {
    const rect = target.getBoundingClientRect();
    const clientX = Math.round(rect.left + rect.width / 2) || 0;
    const clientY = Math.round(rect.top + rect.height / 2) || 0;
    for (const name of names) {
      const pressed = name === 'pointerdown' || name === 'mousedown';
      const init = {
        bubbles: true,
        cancelable: true,
        composed: true,
        view: window,
        clientX,
        clientY,
        button,
        buttons: pressed ? (button === 2 ? 2 : 1) : 0,
        detail: name === 'click' ? 1 : 0,
      };
      target.dispatchEvent(
        name.startsWith('pointer')
          ? new PointerEvent(name, { ...init, pointerId: 1, pointerType: 'mouse', isPrimary: true })
          : new MouseEvent(name, init),
      );
    }
  }

  function hideUserContextMenu() {
    contextNicknameRequestToken += 1;
    if (contextMenu) contextMenu.removeAttribute('data-dy-open');
    activeContext = null;
  }

  function getProfileUrl(item, info = {}) {
    if (info.profileUrl) return normalizeProfileUrl(info.profileUrl, info);
    let link = null;
    if (item.matches?.(LIVE_ITEM_SELECTOR)) {
      link = findAuthorProfileLink(item, findLiveNicknameElement(item));
    } else if (item.matches?.(FEED_VIDEO_SELECTOR)) {
      link = item.querySelector('[data-e2e="video-avatar"][href*="/user/"]');
    } else if (item.matches?.(COMMENT_ITEM_SELECTOR)) {
      link = findAuthorProfileLink(item, findCommentNicknameElement(item));
    }
    const href = link?.getAttribute('href') || '';
    return normalizeProfileUrl(href, info);
  }

  function extractFeedAuthorInfo(item) {
    const nickname = normalizeUserNickname(
      textOf(item.querySelector('[data-e2e="feed-video-nickname"]')),
    );
    const link = item.querySelector('[data-e2e="video-avatar"][href*="/user/"]');
    const href = link?.getAttribute('href') || '';
    const fromHref = parseUserReference(href);
    const reactInfo = (!hasStableIdentity(fromHref) && nickname)
      ? extractUserFromReact(item, nickname)
      : {};

    return cleanInfo({
      secUid: firstNonEmpty(fromHref.secUid, reactInfo.secUid),
      userId: firstNonEmpty(fromHref.userId, reactInfo.userId),
      nickname: firstNonEmpty(nickname, reactInfo.nickname),
      profileUrl: normalizeProfileUrl(href, fromHref),
    });
  }

  function extractCommentInfo(item) {
    const nicknameElement = findCommentNicknameElement(item);
    const link = findAuthorProfileLink(item, nicknameElement);
    const href = link?.getAttribute('href') || '';
    const fromHref = parseUserReference(href);
    const nickname = normalizeUserNickname(firstNonEmpty(
      textOf(nicknameElement),
      nicknameElement?.getAttribute?.('aria-label'),
      nicknameElement?.getAttribute?.('title'),
      link?.getAttribute('aria-label'),
      textOf(link),
    ));
    const domSecUid = firstNonEmpty(fromHref.secUid, readAttr(item, ['data-sec-uid', 'data-secuid']));
    const domUserId = firstNonEmpty(fromHref.userId, readAttr(item, ['data-user-id', 'data-uid']));
    const reactInfo = ((!domSecUid && !domUserId) || !nickname)
      ? extractUserFromReact(item, nickname)
      : {};

    return cleanInfo({
      secUid: firstNonEmpty(domSecUid, reactInfo.secUid),
      userId: firstNonEmpty(domUserId, reactInfo.userId),
      nickname: firstNonEmpty(nickname, reactInfo.nickname),
      profileUrl: normalizeProfileUrl(href, fromHref),
    });
  }

  function findCommentNicknameElement(item) {
    // 当前评论 DOM 通常先放一个无文字的头像链接，再放一个指向同一主页的昵称链接，
    // 两者都没有稳定的 data-e2e/class。以首个主页链接确定作者身份，再找同身份的可见文字链接。
    const profileLinks = [...item.querySelectorAll('a[href*="/user/"]')];
    const firstLink = profileLinks[0];
    const explicitCandidates = [...item.querySelectorAll(COMMENT_NICKNAME_SELECTOR)];
    if (!firstLink) {
      return explicitCandidates.find((candidate) => readElementNickname(candidate)) || null;
    }
    const authorReference = parseUserReference(firstLink.getAttribute('href') || '');
    const namedAuthorLink = profileLinks.find((link) => {
      if (!readElementNickname(link)) return false;
      const reference = parseUserReference(link.getAttribute('href') || '');
      return isSameUserInfo(authorReference, reference);
    });
    if (namedAuthorLink) return namedAuthorLink;

    for (const candidate of explicitCandidates) {
      if (!readElementNickname(candidate)) continue;
      const candidateLink =
        (candidate.matches?.('a[href*="/user/"]') && candidate) ||
        candidate.closest?.('a[href*="/user/"]') ||
        candidate.querySelector?.('a[href*="/user/"]');
      if (candidateLink) {
        const candidateReference = parseUserReference(candidateLink.getAttribute('href') || '');
        if (
          hasStableIdentity(authorReference) &&
          hasStableIdentity(candidateReference) &&
          !isSameUserInfo(authorReference, candidateReference)
        ) {
          continue;
        }
      }
      return candidate;
    }
    return readElementNickname(firstLink) ? firstLink : null;
  }

  function readElementNickname(element) {
    if (!element) return '';
    return normalizeUserNickname(firstNonEmpty(
      textOf(element),
      element.getAttribute?.('aria-label'),
      element.getAttribute?.('title'),
    ));
  }

  function findAuthorProfileLink(item, nicknameElement) {
    if (nicknameElement) {
      if (nicknameElement.matches?.('a[href*="/user/"]')) return nicknameElement;
      const closest = nicknameElement.closest?.('a[href*="/user/"]');
      if (closest && item.contains(closest)) return closest;
      const nested = nicknameElement.querySelector?.('a[href*="/user/"]');
      if (nested) return nested;
      const authorRow = nicknameElement.parentElement;
      if (authorRow && authorRow !== item) {
        const siblingLink = authorRow.querySelector('a[href*="/user/"]');
        if (siblingLink) return siblingLink;
      }
      // 有明确昵称节点时宁可只按昵称处理，也不能把正文中的 @提及 链接当作作者主页。
      return null;
    }
    return item.querySelector('a[href*="/user/"]');
  }

  function extractDanmakuInfo(item) {
    const danmakuId = firstNonEmpty(
      readAttr(item, ['data-danmu-id', 'data-danmaku-id']),
      item.id,
    );
    const rawUserId = readAttr(item, ['data-danmaku-user-id', 'data-danmu-user-id', 'data-user-id', 'data-uid']);
    const rawSecUid = readAttr(item, ['data-sec-uid', 'data-secuid']);

    const text = readableItemText(item);
    const prefixNickname = /^([^：:\n]{1,40})[：:]/.exec(text)?.[1] || '';
    const nicknameElement = item.querySelector(
      '[data-e2e*="nickname"], [data-e2e*="user-name"], [class*="nickname"], [class*="user-name"], [class*="username"]',
    );
    const primaryNickname = normalizeUserNickname(firstNonEmpty(
      readAttr(item, ['data-nickname', 'data-user-name']),
      prefixNickname,
    ));
    const elementNickname = normalizeUserNickname(
      textOf(nicknameElement).replace(/[：:]\s*$/, ''),
    );
    const meta =
      (danmakuId && danmakuById.get(danmakuId)) ||
      (rawSecUid && danmakuBySecUid.get(rawSecUid)) ||
      (rawUserId && danmakuByUserId.get(rawUserId)) ||
      (primaryNickname ? extractUserFromReact(item, primaryNickname) : null) ||
      (elementNickname ? extractUserFromReact(item, elementNickname) : null) ||
      {};

    return cleanInfo({
      danmakuId,
      secUid: firstNonEmpty(rawSecUid, meta.secUid),
      userId: firstNonEmpty(rawUserId, meta.userId),
      nickname: firstNonEmpty(primaryNickname, meta.nickname, elementNickname),
    });
  }

  function extractClickedUserInfo(target, item, fallbackExtractor) {
    const fallback = fallbackExtractor(item);
    const clickedLink = target.closest('a[href*="/user/"]');
    if (!clickedLink || !item.contains(clickedLink)) return fallback;

    const href = clickedLink.getAttribute('href') || '';
    const reference = parseUserReference(href);
    const clickedNickname = normalizeUserNickname(firstNonEmpty(
      textOf(clickedLink),
      clickedLink.getAttribute('aria-label'),
      clickedLink.getAttribute('title'),
    ));
    const clickedIsFallbackUser = isSameUserInfo(reference, fallback);

    return cleanInfo({
      secUid: firstNonEmpty(reference.secUid, clickedIsFallbackUser && fallback.secUid),
      userId: firstNonEmpty(reference.userId, clickedIsFallbackUser && fallback.userId),
      // 只有点击链接与内容作者是同一身份时，才允许借用作者昵称。
      // 否则正文里一个无文字的 @链接会把“被提及者 ID + 评论作者昵称”错误地拼成同一人。
      nickname: firstNonEmpty(clickedNickname, clickedIsFallbackUser && fallback.nickname),
      profileUrl: normalizeProfileUrl(href, reference) || (clickedIsFallbackUser ? fallback.profileUrl : ''),
    });
  }

  function extractLiveInfo(item) {
    const nicknameElement = findLiveNicknameElement(item);
    const text = readableItemText(item);
    const prefixNickname = /^([^：:\n]{1,40})[：:]/.exec(text)?.[1] || '';
    const nicknameFromElement = textOf(nicknameElement).replace(/[：:]\s*$/, '');
    const explicitNickname = normalizeUserNickname(firstNonEmpty(prefixNickname, nicknameFromElement));
    const link = findAuthorProfileLink(item, nicknameElement);
    const hrefInfo = parseUserReference(link?.getAttribute('href') || '');
    const domSecUid = firstNonEmpty(hrefInfo.secUid, readAttr(item, ['data-sec-uid', 'data-secuid']));
    const domUserId = firstNonEmpty(hrefInfo.userId, readAttr(item, ['data-user-id', 'data-uid']));
    const reactInfo = (!domSecUid && !domUserId && explicitNickname)
      ? extractUserFromReact(item, explicitNickname)
      : {};

    return cleanInfo({
      secUid: firstNonEmpty(domSecUid, reactInfo.secUid),
      userId: firstNonEmpty(domUserId, reactInfo.userId),
      nickname: firstNonEmpty(explicitNickname, reactInfo.nickname, link?.getAttribute('aria-label'), textOf(link)),
      profileUrl: normalizeProfileUrl(link?.getAttribute('href') || '', hrefInfo),
    });
  }

  function findLiveNicknameElement(item) {
    // 当前直播页的昵称 class 是每次构建都会变化的哈希值，但昵称本身是消息正文前、
    // 以中英文冒号结尾的短 span。按结构读取比写死哈希 class 更稳定。
    for (const span of item.querySelectorAll('span')) {
      const text = textOf(span);
      if (/^[^：:\n]{1,40}[：:]$/.test(text)) return span;
    }

    const explicit = item.querySelector(
      '[data-e2e*="nickname"], [data-e2e*="user-name"]',
    );
    if (explicit) return explicit;

    // 直播页的进场、关注等系统消息不会在昵称后加冒号。此时昵称通常是
    // 消息正文之前的第一个非空短 span，class 则是每次构建都会变化的哈希值。
    const itemText = readableItemText(item);
    for (const span of item.querySelectorAll('span')) {
      const text = textOf(span);
      if (!text || text === itemText || text.length > 40 || /^\d+[+万wW]?$/.test(text)) continue;
      if (/^(来了|进入直播间|关注了主播|分享了直播间|点赞了|为主播点赞了|加入了粉丝团|送出|管理员|房管)$/.test(text)) continue;
      return span;
    }
    return item.querySelector(
      '[class*="nickname"], [class*="user-name"], [class*="username"]',
    );
  }

  function readableItemText(item) {
    const clone = item.cloneNode(true);
    for (const ui of clone.querySelectorAll(
      `.${COMMENT_BUTTON_CLASS}, .${CONTEXT_MENU_CLASS}, [data-dy-local-blocker-ui="1"]`,
    )) {
      ui.remove();
    }
    return normalizeText(clone.textContent || '');
  }

  function extractUserFromReact(element, expectedNickname = '') {
    let current = element;
    for (let level = 0; current && level < 4; level += 1, current = current.parentElement) {
      const keys = Object.keys(current).filter((key) => key.startsWith('__reactProps$') || key.startsWith('__reactFiber$'));
      for (const key of keys) {
        try {
          const found = deepFindUser(current[key], expectedNickname);
          if (found && hasAnyIdentity(found)) return found;
        } catch {
          // React 私有字段结构随版本变化；读取失败时回退到 DOM / API 元数据。
        }
      }
    }
    return {};
  }

  function deepFindUser(root, expectedNickname = '') {
    const queue = [{ value: root, depth: 0 }];
    const seen = new WeakSet();
    let visited = 0;
    const expectedKey = normalizeNickname(expectedNickname);

    while (queue.length && visited < 260) {
      const { value, depth } = queue.shift();
      if (!value || typeof value !== 'object') continue;
      if (seen.has(value)) continue;
      seen.add(value);
      visited += 1;

      const candidate = userCandidateFromObject(value);
      const candidateKey = normalizeNickname(candidate.nickname);
      if (
        (!expectedKey && (hasStableIdentity(candidate) || (candidate.nickname && looksUserLike(value)))) ||
        (expectedKey && candidateKey === expectedKey && (hasStableIdentity(candidate) || looksUserLike(value)))
      ) {
        return candidate;
      }
      if (depth >= 6) continue;

      const preferredKeys = [
        'user', 'author', 'owner', 'message', 'payload', 'data', 'item', 'content',
        'memoizedProps', 'pendingProps', 'return', 'child', 'sibling', 'props', 'children',
      ];
      const keys = [...new Set([...preferredKeys, ...Object.keys(value).slice(0, 45)])];
      for (const key of keys) {
        let child;
        try { child = value[key]; } catch { continue; }
        if (child && typeof child === 'object') queue.push({ value: child, depth: depth + 1 });
      }
    }
    return {};
  }

  function looksUserLike(object) {
    const keys = Object.keys(object).map((key) => key.toLowerCase());
    return keys.some((key) => key.includes('user') || key.includes('author') || key.includes('nickname'));
  }

  function userCandidateFromObject(object) {
    const nestedUser = object.user && typeof object.user === 'object' ? object.user : null;
    const rootLooksLikeUser = Boolean(firstNonEmpty(
      scalar(object.sec_uid), scalar(object.secUid), scalar(object.user_id), scalar(object.userId), scalar(object.uid),
      scalar(object.nickname), scalar(object.nick_name), scalar(object.user_nickname), scalar(object.display_name),
    ));
    return cleanInfo({
      secUid: firstNonEmpty(
        scalar(object.sec_uid), scalar(object.secUid), scalar(object.sec_user_id), scalar(object.user_sec_id),
        nestedUser && firstNonEmpty(scalar(nestedUser.sec_uid), scalar(nestedUser.secUid), scalar(nestedUser.user_sec_id)),
      ),
      userId: firstNonEmpty(
        scalar(object.user_id), scalar(object.userId), scalar(object.uid),
        rootLooksLikeUser && scalar(object.id_str),
        nestedUser && firstNonEmpty(
          scalar(nestedUser.user_id), scalar(nestedUser.userId), scalar(nestedUser.uid),
          scalar(nestedUser.id_str), scalar(nestedUser.id),
        ),
      ),
      nickname: firstNonEmpty(
        scalar(object.nickname), scalar(object.nick_name), scalar(object.user_nickname), scalar(object.display_name),
        nestedUser && firstNonEmpty(scalar(nestedUser.nickname), scalar(nestedUser.nick_name), scalar(nestedUser.display_name)),
      ),
    });
  }

  function patchDouyinDataStreams() {
    patchFetch();
    patchXHR();
    patchFeedResponses();
  }

  // 数据层过滤：在 React 读到响应之前把被屏蔽作者的条目从推荐流/关注流列表里删掉。
  // 抖音的滑块与列表条目严格一一对应，被删掉的条目根本不会生成滑块，
  // 因此不存在“跳过”这个动作，也就没有过渡、等待和状态机。
  function patchFeedResponses() {
    try {
      const XHR = pageWindow.XMLHttpRequest;
      if (!XHR?.prototype || XHR.prototype.__dyLocalBlockerFeedPatched) return;
      const responseTextDescriptor = Object.getOwnPropertyDescriptor(XHR.prototype, 'responseText');
      const responseDescriptor = Object.getOwnPropertyDescriptor(XHR.prototype, 'response');
      if (typeof responseTextDescriptor?.get !== 'function') return;
      const originalSend = XHR.prototype.send;

      XHR.prototype.send = function (...args) {
        let cache = null;
        // 惰性求值 + 缓存：抖音安全 SDK 会在脚本之后再包一层 XHR，
        // 实例属性始终遮蔽原型属性，因此无论包装顺序如何都能拿到过滤后的结果。
        const readFiltered = () => {
          const raw = responseTextDescriptor.get.call(this);
          if (typeof raw !== 'string' || raw.length < MIN_FEED_PAYLOAD_LENGTH) return raw;
          if (cache && cache.raw === raw) return cache.filtered;
          const filtered = filterFeedPayloadText(raw);
          cache = { raw, filtered };
          return filtered;
        };
        try {
          Object.defineProperty(this, 'responseText', {
            configurable: true,
            get: readFiltered,
          });
          if (typeof responseDescriptor?.get === 'function') {
            Object.defineProperty(this, 'response', {
              configurable: true,
              get: () => {
                const type = this.responseType;
                if (type === '' || type === 'text') return readFiltered();
                const value = responseDescriptor.get.call(this);
                if (
                  type === 'json' &&
                  value &&
                  typeof value === 'object' &&
                  enabled &&
                  settings.hideFeedVideos &&
                  entries.length
                ) {
                  filterFeedPayload(value);
                }
                return value;
              },
            });
          }
        } catch {
          // 属性被锁定时放弃过滤，DOM 层仍会兜底。
        }
        return Reflect.apply(originalSend, this, args);
      };
      Object.defineProperty(XHR.prototype, '__dyLocalBlockerFeedPatched', { value: true });
    } catch {
      // 拦截失败时脚本退化为纯 DOM 屏蔽，不影响页面本身。
    }
  }

  function filterFeedPayloadText(raw) {
    if (!enabled || !settings.hideFeedVideos || !entries.length) return raw;
    if (!raw.includes('aweme_id')) return raw;
    let payload;
    try {
      payload = JSON.parse(raw);
    } catch {
      return raw;
    }
    if (!filterFeedPayload(payload)) return raw;
    try {
      return JSON.stringify(payload);
    } catch {
      return raw;
    }
  }

  /**
   * 就地过滤响应对象，返回是否发生了删除。
   * 推荐流/精选：{ aweme_list: [ {author, aweme_id} ] }
   * 关注流：{ data: [ { aweme: {author, aweme_id} } ] }
   * has_more、cursor、log_pb 等分页字段保持原样，抖音会照常继续补货。
   */
  function filterFeedPayload(payload) {
    if (!payload || typeof payload !== 'object') return false;
    let removed = false;
    for (const key of ['aweme_list', 'data']) {
      const list = payload[key];
      if (!Array.isArray(list) || !list.length) continue;
      const kept = list.filter((record) => !isBlockedFeedRecord(record));
      if (kept.length === list.length) continue;
      removed = true;
      payload[key] = kept;
    }
    return removed;
  }

  function isBlockedFeedRecord(record) {
    if (!record || typeof record !== 'object') return false;
    const media = (record.aweme && typeof record.aweme === 'object' && record.aweme) ||
      (record.aweme_info && typeof record.aweme_info === 'object' && record.aweme_info) ||
      record;
    const author = media.author;
    if (!author || typeof author !== 'object') return false;
    const info = cleanInfo({
      secUid: author.sec_uid,
      userId: author.uid || media.author_user_id,
      nickname: author.nickname,
    });
    if (!hasAnyIdentity(info)) return false;
    // 数据层只做只读匹配，绝不在这里回写本地名单：
    // 响应读取可能发生在渲染的关键路径上，任何存储写入都会拖慢页面。
    if (!findBlockingEntry(info)) return false;
    const videoId = normalizeId(media.aweme_id || media.awemeId);
    if (videoId) rememberBlockedFeedVideoId(videoId);
    return true;
  }

  function patchFetch() {
    try {
      const originalFetch = pageWindow.fetch;
      if (typeof originalFetch !== 'function' || originalFetch.__dyLocalBlockerPatched) return;

      const wrapped = function (...args) {
        const requestUrl = extractRequestUrl(args[0]);
        const result = Reflect.apply(originalFetch, this, args);
        if (isDanmakuUrl(requestUrl)) {
          Promise.resolve(result)
            .then((response) => response?.clone?.().json?.())
            .then(captureDanmakuPayload)
            .catch(() => {});
        }
        return result;
      };
      Object.defineProperty(wrapped, '__dyLocalBlockerPatched', { value: true });
      pageWindow.fetch = wrapped;
    } catch {
      // 某些页面会锁定 fetch；DOM 与 React 数据提取仍可继续工作。
    }
  }

  function patchXHR() {
    try {
      const XHR = pageWindow.XMLHttpRequest;
      if (!XHR?.prototype || XHR.prototype.__dyLocalBlockerPatched) return;
      const originalOpen = XHR.prototype.open;
      const originalSend = XHR.prototype.send;

      XHR.prototype.open = function (method, url, ...rest) {
        this.__dyLocalBlockerUrl = String(url || '');
        return Reflect.apply(originalOpen, this, [method, url, ...rest]);
      };
      XHR.prototype.send = function (...args) {
        if (isDanmakuUrl(this.__dyLocalBlockerUrl || '')) {
          this.addEventListener('load', () => {
            try {
              if (typeof this.responseText === 'string' && this.responseText) {
                captureDanmakuPayload(JSON.parse(this.responseText));
              }
            } catch {
              // 非 JSON、压缩或 protobuf 响应会在这里被忽略。
            }
          }, { once: true });
        }
        return Reflect.apply(originalSend, this, args);
      };
      Object.defineProperty(XHR.prototype, '__dyLocalBlockerPatched', { value: true });
    } catch {
      // 回退到 DOM / React 数据。
    }
  }

  function isDanmakuUrl(url) {
    const value = String(url || '').toLowerCase();
    return value.includes('danmaku') || value.includes('danmu') || value.includes('bullet');
  }

  function extractRequestUrl(input) {
    if (typeof input === 'string') return input;
    if (input && typeof input.url === 'string') return input.url;
    return String(input || '');
  }

  function captureDanmakuPayload(payload) {
    if (!payload || typeof payload !== 'object') return;
    const queue = [{ value: payload, depth: 0 }];
    const seen = new WeakSet();
    let visited = 0;
    let captured = 0;

    while (queue.length && visited < 1500) {
      const { value, depth } = queue.shift();
      if (!value || typeof value !== 'object') continue;
      if (seen.has(value)) continue;
      seen.add(value);
      visited += 1;

      if (Array.isArray(value)) {
        for (const item of value) {
          if (item && typeof item === 'object') {
            if (captureDanmakuRecord(item)) captured += 1;
            if (depth < 7) queue.push({ value: item, depth: depth + 1 });
          }
        }
        continue;
      }

      if (captureDanmakuRecord(value)) captured += 1;
      if (depth >= 7) continue;
      for (const key of Object.keys(value).slice(0, 90)) {
        let child;
        try { child = value[key]; } catch { continue; }
        if (child && typeof child === 'object') queue.push({ value: child, depth: depth + 1 });
      }
    }

    if (captured > 0) queueFullScan();
  }

  function captureDanmakuRecord(record) {
    const authorObject =
      (record.user && typeof record.user === 'object' && record.user) ||
      (record.author && typeof record.author === 'object' && record.author) ||
      (record.owner && typeof record.owner === 'object' && record.owner) ||
      record;
    const candidate = userCandidateFromObject(authorObject);
    const explicitDanmakuId = firstNonEmpty(
      scalar(record.danmaku_id), scalar(record.danmu_id), scalar(record.danmakuId), scalar(record.danmuId),
    );
    const content = firstNonEmpty(scalar(record.content), scalar(record.text), scalar(record.message));
    const messageLike = Boolean(explicitDanmakuId || content || looksDanmakuLike(record));
    if (!messageLike) return false;
    const danmakuId = firstNonEmpty(
      explicitDanmakuId,
      scalar(record.id_str), scalar(record.id),
    );

    if (!hasStableIdentity(candidate) && !candidate.nickname) return false;

    const info = cleanInfo({ ...candidate, danmakuId });
    rememberMapValue(danmakuById, danmakuId, info, MAX_DANMAKU_ID_CACHE);
    rememberMapValue(danmakuByUserId, info.userId, info, MAX_DANMAKU_USER_CACHE);
    rememberMapValue(danmakuBySecUid, info.secUid, info, MAX_DANMAKU_USER_CACHE);
    return true;
  }

  function rememberMapValue(map, key, value, limit) {
    const normalizedKey = normalizeId(key);
    if (!normalizedKey) return;
    map.delete(normalizedKey);
    map.set(normalizedKey, value);
    while (map.size > limit) {
      map.delete(map.keys().next().value);
    }
  }

  function looksDanmakuLike(record) {
    const keys = Object.keys(record).map((key) => key.toLowerCase());
    return keys.some((key) => key.includes('danmaku') || key.includes('danmu') || key.includes('bullet'));
  }

  function findBlockingEntry(clean) {
    if (!hasAnyIdentity(clean)) return undefined;
    const nicknameKey = normalizeNickname(clean.nickname);
    return entries.find((entry) => {
      if (clean.secUid && entry.secUid && clean.secUid === entry.secUid) return true;
      if (clean.userId && entry.userId && clean.userId === entry.userId) return true;
      return Boolean(entry.nicknameOnly && nicknameKey && normalizeNickname(entry.nickname) === nicknameKey);
    });
  }

  function isBlocked(info) {
    const clean = cleanInfo(info);
    if (!hasAnyIdentity(clean)) return false;

    const matched = findBlockingEntry(clean);

    // 同一条页面数据同时暴露 secUid 与 userId 时，自动补全本地记录，提升跨评论/弹幕匹配率。
    // 仅凭同名命中的 nicknameOnly 记录保持“按昵称精确匹配”，不能被页面里
    // 第一个同名账号被动升级成某个稳定 ID，否则会悄悄改变原有屏蔽范围。
    if (matched && !matched.nicknameOnly && mergeEntry(matched, clean, '')) saveEntries();
    return Boolean(matched);
  }

  function isSameUserInfo(left, right) {
    const a = cleanInfo(left);
    const b = cleanInfo(right);
    if (a.secUid && b.secUid && a.secUid === b.secUid) return true;
    if (a.userId && b.userId && a.userId === b.userId) return true;
    if (hasStableIdentity(a) && hasStableIdentity(b)) return false;
    return Boolean(
      a.nickname &&
      b.nickname &&
      normalizeNickname(a.nickname) === normalizeNickname(b.nickname)
    );
  }

  function isBlockedProfile(info) {
    if (isBlocked(info)) return true;
    const clean = cleanInfo(info);
    const nicknameKey = normalizeNickname(clean.nickname);
    if (!nicknameKey) return false;

    // 评论、视频弹幕和直播页面有时只暴露 userId 或昵称，而用户主页 URL 只暴露 secUid。
    // 在主页这个明确场景中用精确昵称补全同一条记录，之后即可稳定按 secUid 匹配。
    const nicknameMatches = entries.filter((entry) =>
      normalizeNickname(entry.nickname) === nicknameKey
    );
    if (nicknameMatches.length !== 1) return false;
    const [matched] = nicknameMatches;
    // 同名只用于桥接“评论只有 userId、主页只有 secUid”这类缺少同类 ID 的场景。
    // 如果双方已经给出了同一种稳定 ID 且值不同，就明确是不同账号，不能按昵称误伤。
    if (matched.secUid && clean.secUid && matched.secUid !== clean.secUid) return false;
    if (matched.userId && clean.userId && matched.userId !== clean.userId) return false;
    if (mergeEntry(matched, clean, '')) saveEntries();
    return true;
  }

  async function resolveBlockingInfo(info) {
    let clean = cleanInfo(info);
    if (!clean.nickname && hasStableIdentity(clean)) {
      clean = await enrichManualInfo({
        ...clean,
        profileUrl: clean.profileUrl || normalizeProfileUrl('', clean),
      });
    }
    return cleanInfo(clean);
  }

  async function requestAddEntry(info, note = '') {
    const clean = await resolveBlockingInfo(info);
    if (!clean.nickname) {
      toast('没有读到该用户的昵称，暂未加入本地名单');
      return false;
    }
    if (!hasAnyIdentity(clean)) return addEntry(clean, note);
    if (
      settings.confirmBeforeBlocking &&
      !findMatchingEntry(clean) &&
      !(await showBlockConfirmation(clean))
    ) {
      return false;
    }
    return addEntry(clean, note);
  }

  function showBlockConfirmation(info) {
    return new Promise((resolve) => {
      const overlay = document.createElement('div');
      overlay.className = 'dy-confirm-overlay';
      overlay.innerHTML = `
        <section class="dy-confirm-card" role="alertdialog" aria-modal="true" aria-labelledby="dy-confirm-title">
          <h2 id="dy-confirm-title">确认本地屏蔽</h2>
          <p>屏蔽后，该用户的推荐视频、主页作品、评论、弹幕和直播发言会按当前设置隐藏。</p>
          <div class="dy-confirm-actions">
            <button class="dy-lb-btn" type="button" data-confirm="cancel">取消</button>
            <button class="dy-lb-btn dy-primary" type="button" data-confirm="accept"></button>
          </div>
        </section>
      `;
      const acceptButton = overlay.querySelector('[data-confirm="accept"]');
      acceptButton.textContent = `屏蔽 @${visibleUserName(info)}`;

      let settled = false;
      const finish = (accepted) => {
        if (settled) return;
        settled = true;
        document.removeEventListener('keydown', onKeyDown, true);
        overlay.remove();
        resolve(accepted);
      };
      const onKeyDown = (event) => {
        if (event.key === 'Escape') finish(false);
      };
      overlay.addEventListener('click', (event) => {
        if (!event.isTrusted) return;
        const action = event.target.closest('[data-confirm]')?.getAttribute('data-confirm');
        if (action === 'accept') finish(true);
        if (action === 'cancel') finish(false);
      });
      document.addEventListener('keydown', onKeyDown, true);
      document.body.appendChild(overlay);
      acceptButton.focus();
    });
  }

  function addEntry(info, note = '') {
    const clean = cleanInfo(info);
    if (!clean.nickname) {
      toast('没有读到该用户的昵称，无法加入本地名单');
      return false;
    }
    if (!hasAnyIdentity(clean)) {
      toast('没有读到可用的用户信息，无法加入名单');
      return false;
    }

    const existing = findMatchingEntry(clean);
    if (existing) {
      const changed = mergeEntry(existing, clean, note);
      if (changed) saveEntries();
      toast(`已经在本地名单中：${displayName(existing)}`);
      queueFullScan();
      return false;
    }

    /** @type {BlockEntry} */
    const entry = {
      id: makeId(),
      secUid: clean.secUid || '',
      userId: clean.userId || '',
      nickname: clean.nickname || '',
      profileUrl: clean.profileUrl || normalizeProfileUrl('', clean),
      nicknameOnly: !clean.secUid && !clean.userId,
      createdAt: new Date().toISOString(),
      note: String(note || ''),
    };
    entries.unshift(entry);
    saveEntries();
    queueFullScan();

    // 只有“屏蔽正在观看的这一条”才自动前进；其余情况一律由用户自己浏览到卡片。
    const activeItem = getActiveFeedItem();
    if (
      activeItem &&
      enabled &&
      settings.hideFeedVideos &&
      isBlocked(extractFeedAuthorInfo(activeItem))
    ) {
      guardBlockedFeedVideo(activeItem);
      advanceFromBlockedActiveSlide(activeItem.closest(FEED_SLIDE_SELECTOR) || activeItem);
    }

    toast(`已屏蔽：${displayName(entry)}`);
    return true;
  }

  function findMatchingEntry(info) {
    const nicknameKey = normalizeNickname(info.nickname);
    return entries.find((entry) => {
      if (info.secUid && entry.secUid && info.secUid === entry.secUid) return true;
      if (info.userId && entry.userId && info.userId === entry.userId) return true;
      return Boolean(!info.secUid && !info.userId && entry.nicknameOnly && nicknameKey && normalizeNickname(entry.nickname) === nicknameKey);
    });
  }

  function mergeEntry(entry, info, note, { refreshIdentityData = true } = {}) {
    let changed = false;
    for (const key of ['secUid', 'userId']) {
      if (!entry[key] && info[key]) {
        entry[key] = info[key];
        changed = true;
      }
    }
    const sameStableIdentity = Boolean(
      (entry.secUid && info.secUid && entry.secUid === info.secUid) ||
      (entry.userId && info.userId && entry.userId === info.userId)
    );
    if (
      info.nickname &&
      (!entry.nickname || (refreshIdentityData && sameStableIdentity)) &&
      entry.nickname !== info.nickname
    ) {
      entry.nickname = info.nickname;
      changed = true;
    }
    if (
      info.profileUrl &&
      (!entry.profileUrl || (refreshIdentityData && sameStableIdentity)) &&
      entry.profileUrl !== info.profileUrl
    ) {
      entry.profileUrl = info.profileUrl;
      changed = true;
    }
    if ((entry.secUid || entry.userId) && entry.nicknameOnly) {
      entry.nicknameOnly = false;
      changed = true;
    }
    if (!entry.note && note) {
      entry.note = String(note);
      changed = true;
    }
    return changed;
  }

  function removeEntry(id) {
    const before = entries.length;
    entries = entries.filter((entry) => entry.id !== id);
    if (entries.length !== before) {
      blockedFeedVideoIds.clear();
      saveEntries();
      queueFullScan();
      return true;
    }
    return false;
  }

  function saveEntries() {
    entries = normalizeEntries(entries);
    GM_setValue(STORAGE_KEY, entries);
    if (panel) renderManagerList(panel.querySelector('.dy-lb-search')?.value || '');
  }

  function queueFullScan() {
    if (scanQueued) return;
    scanQueued = true;
    requestAnimationFrame(() => {
      scanQueued = false;
      if (document.documentElement) processRoot(document.documentElement);
      queueProfileScan();
    });
  }

  function queueProfileScan() {
    if (profileScanQueued) return;
    profileScanQueued = true;
    requestAnimationFrame(() => {
      profileScanQueued = false;
      processBlockedProfilePage();
    });
  }

  function processBlockedProfilePage() {
    const placeholders = [...document.querySelectorAll(`.${PROFILE_PLACEHOLDER_CLASS}`)];
    const restore = () => {
      document.documentElement.classList.remove(PROFILE_MODE_CLASS);
      for (const list of document.querySelectorAll(`.${PROFILE_LIST_HIDDEN_CLASS}`)) {
        list.classList.remove(PROFILE_LIST_HIDDEN_CLASS);
      }
      for (const root of document.querySelectorAll(`.${PROFILE_WORKS_HIDDEN_CLASS}`)) {
        root.classList.remove(PROFILE_WORKS_HIDDEN_CLASS);
      }
      for (const placeholder of placeholders) placeholder.remove();
    };

    if (!/^\/user\/[^/?#]+/i.test(location.pathname)) {
      restore();
      return;
    }

    const profileInfo = parseUserReference(location.href);
    profileInfo.nickname = firstNonEmpty(
      textOf(document.querySelector('h1')),
      textOf(document.querySelector('[data-e2e="user-title"]')),
      document.title.replace(/\s*[-_–—|].*$/, ''),
    );
    profileInfo.profileUrl = normalizeProfileUrl(location.href, profileInfo);

    const shouldHide =
      enabled &&
      settings.hideBlockedProfileVideos &&
      isBlockedProfile(profileInfo);

    if (!shouldHide) {
      restore();
      return;
    }

    document.documentElement.classList.add(PROFILE_MODE_CLASS);

    const lists = collectProfileWorksLists();
    if (!lists.length) return;
    const targetList = lists.find((list) => list.getClientRects().length) || lists[0];
    for (const list of lists) list.classList.add(PROFILE_LIST_HIDDEN_CLASS);
    const worksContainer =
      targetList.closest('[data-e2e="user-post-list"]') ||
      targetList.parentElement;
    let placeholder = placeholders[0];
    for (const duplicate of placeholders.slice(1)) duplicate.remove();
    if (!placeholder) {
      placeholder = document.createElement('section');
      placeholder.className = PROFILE_PLACEHOLDER_CLASS;
      placeholder.setAttribute('role', 'status');
      placeholder.innerHTML = `
        <div>
          <strong>已被「${SCRIPT_NAME}」屏蔽</strong>
          <span>该用户的主页作品已隐藏；可在本地屏蔽名单中移除该用户。</span>
          <button class="${PROFILE_UNBLOCK_CLASS}" type="button">解除屏蔽</button>
        </div>
      `;
    }
    const unblockButton = placeholder.querySelector(`.${PROFILE_UNBLOCK_CLASS}`);
    if (unblockButton) {
      unblockButton.onclick = (event) => {
        if (!event.isTrusted) return;
        let matchedEntry = findMatchingEntry(cleanInfo(profileInfo));
        if (!matchedEntry) {
          const nicknameMatches = entries.filter((entry) =>
            normalizeNickname(entry.nickname) === normalizeNickname(profileInfo.nickname)
          );
          if (nicknameMatches.length === 1) [matchedEntry] = nicknameMatches;
        }
        if (!matchedEntry || !removeEntry(matchedEntry.id)) {
          toast('未找到对应的本地屏蔽记录');
          return;
        }
        toast(`已解除屏蔽：${displayName(matchedEntry)}`);
      };
    }
    if (worksContainer) {
      if (placeholder.parentElement !== worksContainer || worksContainer.firstElementChild !== placeholder) {
        worksContainer.prepend(placeholder);
      }
      worksContainer.classList.add(PROFILE_WORKS_HIDDEN_CLASS);
    } else if (placeholder.nextElementSibling !== targetList) {
      targetList.before(placeholder);
    }
  }

  function collectProfileWorksLists() {
    const lists = new Set();
    for (const list of document.querySelectorAll(
      '[data-e2e="user-post-list"] [data-e2e="scroll-list"]'
    )) {
      lists.add(list);
    }
    for (const link of document.querySelectorAll(
      'a[href*="/video/"], a[href*="/note/"]'
    )) {
      const list = link.closest('ul, ol, [data-e2e="scroll-list"]');
      if (list) lists.add(list);
    }
    return [...lists];
  }

  async function manualAdd(rawValue = '') {
    let input = normalizeText(rawValue);
    if (!input) {
      input = prompt(
        '粘贴用户主页链接，或直接输入昵称。\n\n只有昵称时会按昵称精确匹配；同名账号可能一起被隐藏，优先使用用户主页链接。',
        '',
      );
    }
    if (input == null) return false;
    input = normalizeText(input);
    const info = await resolveBlockingInfo(parseManualInput(input));
    if (!hasAnyIdentity(info)) {
      alert('没有识别到可用内容。');
      return false;
    }
    if (!info.nickname) {
      toast('没有读到该用户的昵称，暂未加入本地名单');
      return false;
    }
    return addEntry(info, '手动添加');
  }

  async function enrichManualInfo(info) {
    const clean = cleanInfo(info);
    if (clean.nickname || (!clean.secUid && !clean.userId)) return clean;

    const visibleNickname = findVisibleNickname(clean);
    if (visibleNickname) return cleanInfo({ ...clean, nickname: visibleNickname });
    if (!clean.profileUrl) return clean;

    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 2800);
    try {
      const response = await fetch(clean.profileUrl, {
        credentials: 'include',
        signal: controller.signal,
      });
      if (!response.ok) return clean;
      const profileDocument = new DOMParser().parseFromString(await response.text(), 'text/html');
      const nickname = normalizeText(profileDocument.title)
        .replace(/\s*[-_–—|].*$/, '')
        .replace(/的抖音$/, '');
      return nickname ? cleanInfo({ ...clean, nickname }) : clean;
    } catch {
      return clean;
    } finally {
      clearTimeout(timeout);
    }
  }

  function findVisibleNickname(info) {
    for (const anchor of document.querySelectorAll('a[href*="/user/"]')) {
      const reference = parseUserReference(anchor.href);
      if (info.secUid && reference.secUid !== info.secUid) continue;
      if (info.userId && reference.userId !== info.userId) continue;
      const ownNickname = readElementNickname(anchor);
      if (ownNickname) return ownNickname;

      const scope = anchor.closest(CONTENT_ITEM_SELECTOR);
      if (!scope) continue;
      const namedSameUserLink = [...scope.querySelectorAll('a[href*="/user/"]')].find((candidate) => {
        const candidateNickname = readElementNickname(candidate);
        if (!candidateNickname) return false;
        return isSameUserInfo(reference, parseUserReference(candidate.getAttribute('href') || ''));
      });
      const linkedNickname = readElementNickname(namedSameUserLink);
      if (linkedNickname) return linkedNickname;

      let scopeAuthor = {};
      if (scope.matches(LIVE_ITEM_SELECTOR)) scopeAuthor = extractLiveInfo(scope);
      else if (scope.matches(DANMAKU_ITEM_SELECTOR)) scopeAuthor = extractDanmakuInfo(scope);
      else if (scope.matches(FEED_VIDEO_SELECTOR)) scopeAuthor = extractFeedAuthorInfo(scope);
      else if (scope.matches(COMMENT_ITEM_SELECTOR)) scopeAuthor = extractCommentInfo(scope);
      if (isSameUserInfo(info, scopeAuthor)) {
        const authorNickname = normalizeUserNickname(scopeAuthor.nickname);
        if (authorNickname) return authorNickname;
      }
    }
    return '';
  }

  function parseManualInput(raw) {
    const value = normalizeText(raw);
    if (!value) return {};
    const ref = parseUserReference(value);
    if (ref.secUid || ref.userId) return { ...ref, profileUrl: normalizeProfileUrl(value, ref) };
    if (/^\d{5,30}$/.test(value)) return { userId: value };
    if (/^[A-Za-z0-9._~-]{20,}$/.test(value)) return { secUid: value };
    return { nickname: value };
  }

  function parseUserReference(raw) {
    const value = String(raw || '');
    const result = { secUid: '', userId: '' };
    const pathMatch = /\/user\/([^/?#]+)/i.exec(value);
    if (pathMatch) result.secUid = safeDecode(pathMatch[1]);

    try {
      const hasScheme = /^[A-Za-z][A-Za-z0-9+.-]*:/.test(value);
      const url = hasScheme ? new URL(value) : new URL(value, location.href);
      result.userId = firstNonEmpty(url.searchParams.get('uid'), url.searchParams.get('user_id'), url.searchParams.get('userId'));
      result.secUid = firstNonEmpty(result.secUid, url.searchParams.get('sec_uid'), url.searchParams.get('secUid'));
    } catch {
      // 不是 URL 时由手动输入解析继续处理。
    }
    return cleanInfo(result);
  }

  function normalizeProfileUrl(raw, info = {}) {
    let pathSecUid = '';
    try {
      const url = raw ? new URL(raw, location.href) : null;
      const pathMatch = url && /^\/user\/([^/?#]+)/i.exec(url.pathname);
      const hostname = url?.hostname?.toLowerCase() || '';
      const isDouyinHost = hostname === 'douyin.com' || hostname.endsWith('.douyin.com');
      if (
        url &&
        ['https:', 'http:'].includes(url.protocol) &&
        isDouyinHost &&
        pathMatch
      ) {
        pathSecUid = normalizeId(safeDecode(pathMatch[1]));
      }
    } catch {
      // 无法确定主页地址时只保留稳定 ID，名单仍然可以正常匹配。
    }
    const secUid = pathSecUid || normalizeId(info.secUid);
    return secUid
      ? new URL(`/user/${encodeURIComponent(secUid)}`, 'https://www.douyin.com').href
      : '';
  }

  function openOnboarding({ force = false } = {}) {
    if (!document.body) {
      document.addEventListener('DOMContentLoaded', () => openOnboarding({ force }), { once: true });
      return;
    }
    if (!force && Boolean(GM_getValue(ONBOARDING_DONE_KEY, false))) return;
    document.getElementById('dy-onboarding-overlay')?.remove();

    const draft = { ...settings };
    let stepIndex = 0;
    const overlay = document.createElement('div');
    overlay.id = 'dy-onboarding-overlay';
    overlay.innerHTML = `
      <section class="dy-onboard-card" role="dialog" aria-modal="true" aria-labelledby="dy-onboard-title">
        <div class="dy-onboard-top">
          <div class="dy-onboard-progress" aria-label="首次设置进度">
            <span></span><span></span><span></span><span></span><span></span>
          </div>
          <button class="dy-onboard-skip" type="button">使用默认设置</button>
        </div>
        <div class="dy-onboard-body"></div>
        <footer class="dy-onboard-footer">
          <span class="dy-onboard-step-label"></span>
          <div class="dy-onboard-actions">
            <button class="dy-onboard-button dy-onboard-back" type="button">上一步</button>
            <button class="dy-onboard-button primary dy-onboard-next" type="button">继续</button>
          </div>
        </footer>
      </section>
    `;

    const body = overlay.querySelector('.dy-onboard-body');
    const backButton = overlay.querySelector('.dy-onboard-back');
    const nextButton = overlay.querySelector('.dy-onboard-next');
    const stepLabel = overlay.querySelector('.dy-onboard-step-label');
    overlay.addEventListener('click', guardTrustedUiEvent, true);

    const finish = (nextSettings = settings) => {
      saveSettings(nextSettings);
      GM_setValue(ONBOARDING_DONE_KEY, true);
      overlay.remove();
      queueFullScan();
      toast('设置已保存');
      checkStarReminder();
    };

    const bindDraftInputs = () => {
      for (const input of body.querySelectorAll('[data-setting]')) {
        const key = input.getAttribute('data-setting');
        input.checked = Boolean(draft[key]);
        input.addEventListener('change', () => {
          draft[key] = input.checked;
        });
      }
    };

    const render = () => {
      overlay.querySelector('.dy-onboard-card').setAttribute('data-step', String(stepIndex));
      for (const [index, progress] of [...overlay.querySelectorAll('.dy-onboard-progress span')].entries()) {
        progress.classList.toggle('is-active', index <= stepIndex);
      }
      stepLabel.textContent = `${stepIndex + 1} / 5`;
      backButton.hidden = stepIndex === 0;
      nextButton.textContent = stepIndex === 4 ? '开始使用' : '继续';

      if (stepIndex === 0) {
        body.innerHTML = `
          <div class="dy-onboard-step">
            <div class="dy-onboard-kicker">设置向导</div>
            <h1 id="dy-onboard-title">屏其不欲见者，复其应有之序。</h1>
            <p>在推荐、关注、用户主页、评论、弹幕和直播中隐藏名单用户的内容。</p>
          </div>
        `;
      }
      if (stepIndex === 1) {
        body.innerHTML = `
          <div class="dy-onboard-step">
            <div class="dy-onboard-kicker">操作方式</div>
            <h1 id="dy-onboard-title">选择快捷入口和确认方式</h1>
            <p>右键菜单始终可用；评论快捷按钮、设置按钮和屏蔽前确认可以分别启用。</p>
            <div class="dy-onboard-options">
              <label class="dy-onboard-option">
                <span class="dy-onboard-option-copy"><strong>显示「本地屏蔽」</strong><span>在视频评论用户旁显示快捷按钮。</span></span>
                <input type="checkbox" data-setting="showCommentButton">
              </label>
              <label class="dy-onboard-option">
                <span class="dy-onboard-option-copy"><strong>显示快捷设置按钮</strong><span>在页面右下角保留一个随时可打开设置的入口。</span></span>
                <input type="checkbox" data-setting="showSettingsButton">
              </label>
              <label class="dy-onboard-option">
                <span class="dy-onboard-option-copy"><strong>屏蔽用户前确认</strong><span>启用后，按钮和右键菜单会先显示确认对话框。</span></span>
                <input type="checkbox" data-setting="confirmBeforeBlocking">
              </label>
            </div>
          </div>
        `;
        bindDraftInputs();
      }
      if (stepIndex === 2) {
        body.innerHTML = `
          <div class="dy-onboard-step">
            <div class="dy-onboard-kicker">屏蔽范围</div>
            <h1 id="dy-onboard-title">选择名单生效范围</h1>
            <p>评论、弹幕、直播、推荐视频和用户主页作品可以分别启用或关闭。</p>
            <div class="dy-onboard-options is-grid">
              <label class="dy-onboard-option">
                <span class="dy-onboard-option-copy"><strong>评论和回复</strong><span>视频评论区与回复。</span></span>
                <input type="checkbox" data-setting="hideComments">
              </label>
              <label class="dy-onboard-option">
                <span class="dy-onboard-option-copy"><strong>视频弹幕</strong><span>视频播放时的弹幕。</span></span>
                <input type="checkbox" data-setting="hideDanmaku">
              </label>
              <label class="dy-onboard-option">
                <span class="dy-onboard-option-copy"><strong>直播聊天</strong><span>直播评论与互动消息。</span></span>
                <input type="checkbox" data-setting="hideLiveChat">
              </label>
              <label class="dy-onboard-option">
                <span class="dy-onboard-option-copy"><strong>推荐与关注视频</strong><span>不再显示名单用户发布的流内视频。</span></span>
                <input type="checkbox" data-setting="hideFeedVideos">
              </label>
              <label class="dy-onboard-option">
                <span class="dy-onboard-option-copy"><strong>用户主页作品</strong><span>进入名单用户主页时，隐藏整个作品区域。</span></span>
                <input type="checkbox" data-setting="hideBlockedProfileVideos">
              </label>
            </div>
          </div>
        `;
        bindDraftInputs();
      }
      if (stepIndex === 3) {
        body.innerHTML = `
          <div class="dy-onboard-step">
            <div class="dy-onboard-kicker">确认设置</div>
            <h1 id="dy-onboard-title">检查当前选项</h1>
            <p>完成后立即应用，下列选项可以在脚本设置中修改。</p>
            <div class="dy-onboard-summary">
              <div><span>评论快捷按钮</span><strong>${draft.showCommentButton ? '显示' : '隐藏'}</strong></div>
              <div><span>快捷设置按钮</span><strong>${draft.showSettingsButton ? '显示' : '隐藏'}</strong></div>
              <div><span>屏蔽前确认</span><strong>${draft.confirmBeforeBlocking ? '开启' : '关闭'}</strong></div>
              <div><span>屏蔽范围</span><strong>${[draft.hideComments, draft.hideDanmaku, draft.hideLiveChat, draft.hideFeedVideos, draft.hideBlockedProfileVideos].filter(Boolean).length} / 5 开启</strong></div>
            </div>
          </div>
        `;
      }
      if (stepIndex === 4) {
        body.innerHTML = `
          <div class="dy-onboard-step">
            <div class="dy-onboard-kicker">支持项目</div>
            <h1 id="dy-onboard-title">让屏序继续生长</h1>
            <p>欢迎为项目点亮一颗 Star，或通过 Buy Me a Coffee 支持后续维护。</p>
            <div class="dy-onboard-supports">
              <button class="dy-onboard-github" type="button">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .7a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.56v-2.23c-3.22.7-3.9-1.37-3.9-1.37-.52-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.27 3.38.97.1-.75.41-1.27.74-1.56-2.57-.29-5.27-1.29-5.27-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.47.11-3.05 0 0 .97-.31 3.16 1.18a10.9 10.9 0 0 1 5.76 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.58.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.4-2.71 5.38-5.29 5.67.42.36.79 1.06.79 2.14v3.17c0 .31.21.68.8.56A11.5 11.5 0 0 0 12 .7Z"/></svg>
                <span class="dy-onboard-github-copy">
                  <strong>DanielZenFlow</strong>
                  <span>打开 Pynseq for Douyin 的 GitHub 项目页</span>
                </span>
                <span class="dy-onboard-github-action">打开 GitHub</span>
              </button>
              <button class="dy-onboard-github dy-onboard-bmc" type="button">
                ${buyMeACoffeeIconMarkup()}
                <span class="dy-onboard-github-copy">
                  <strong>Buy me a coffee</strong>
                  <span>打开 DanielZenFlow 的 Buy Me a Coffee 页面</span>
                </span>
                <span class="dy-onboard-github-action">打开链接</span>
              </button>
            </div>
          </div>
        `;
        body.querySelector('.dy-onboard-github:not(.dy-onboard-bmc)')?.addEventListener('click', openGitHub);
        body.querySelector('.dy-onboard-bmc')?.addEventListener('click', openBuyMeACoffee);
      }
    };

    overlay.querySelector('.dy-onboard-skip').addEventListener('click', () => finish(DEFAULT_SETTINGS));
    backButton.addEventListener('click', () => {
      if (stepIndex > 0) stepIndex -= 1;
      render();
    });
    nextButton.addEventListener('click', () => {
      if (stepIndex < 4) {
        stepIndex += 1;
        render();
      } else {
        finish(draft);
      }
    });
    document.body.appendChild(overlay);
    render();
  }

  function openSettings(initialPage = 'general') {
    if (!document.body) {
      document.addEventListener('DOMContentLoaded', () => openSettings(initialPage), { once: true });
      return;
    }
    if (panel) {
      panel.dispatchEvent(new CustomEvent('dy-settings:page', { detail: initialPage }));
      return;
    }

    const overlay = document.createElement('div');
    overlay.id = 'dy-local-blocker-overlay';
    overlay.innerHTML = `
      <section id="dy-local-blocker-panel" role="dialog" aria-modal="true" aria-labelledby="dy-settings-title">
        <header class="dy-lb-header">
          <div>
            <div class="dy-lb-title" id="dy-settings-title">${SCRIPT_NAME}</div>
            <div class="dy-lb-subtitle">v${SCRIPT_VERSION}</div>
          </div>
        </header>
        <div class="dy-set-shell">
          <nav class="dy-set-nav" role="tablist" aria-label="设置分类">
            <div class="dy-set-nav-pages">
              <button type="button" role="tab" data-page="general">常规</button>
              <button type="button" role="tab" data-page="blocking">屏蔽设置</button>
              <button type="button" role="tab" data-page="list">本地屏蔽名单</button>
              <button type="button" role="tab" data-page="about">关于</button>
            </div>
          </nav>
          <main class="dy-set-content">
            <section class="dy-set-page" data-section="general">
              <div class="dy-set-page-head">
                <h2>常规</h2>
                <p>控制屏蔽功能与快捷入口。</p>
              </div>
              <div class="dy-set-section">
                <div class="dy-set-section-title">运行状态</div>
                <label class="dy-set-setting">
                  <span class="dy-set-setting-copy"><strong>启用本地屏蔽</strong><span>关闭后保留名单，但暂时不隐藏任何内容。</span></span>
                  <input type="checkbox" id="dy-set-enabled">
                </label>
              </div>
              <div class="dy-set-section">
                <div class="dy-set-section-title">快捷入口</div>
                <label class="dy-set-setting">
                  <span class="dy-set-setting-copy"><strong>显示「本地屏蔽」</strong><span>在视频评论用户旁显示快捷按钮；右键菜单始终可用。</span></span>
                  <input type="checkbox" id="dy-set-show-comment-button">
                </label>
                <label class="dy-set-setting">
                  <span class="dy-set-setting-copy"><strong>显示右下角设置按钮</strong><span>关闭后仍可从 Tampermonkey 菜单中的「设置」进入。</span></span>
                  <input type="checkbox" id="dy-set-show-settings-button">
                </label>
              </div>
              <div class="dy-set-section">
                <div class="dy-set-section-title">设置向导</div>
                <div class="dy-set-action-row">
                  <span>逐项配置快捷入口、确认方式和屏蔽范围。</span>
                  <button class="dy-lb-btn dy-replay-onboarding" type="button">打开</button>
                </div>
              </div>
            </section>
            <section class="dy-set-page" data-section="blocking">
              <div class="dy-set-page-head">
                <h2>屏蔽设置</h2>
                <p>控制屏蔽前是否确认，以及名单在哪些内容类型中生效。</p>
              </div>
              <div class="dy-set-section">
                <div class="dy-set-section-title">操作确认</div>
                <label class="dy-set-setting">
                  <span class="dy-set-setting-copy"><strong>屏蔽用户前确认</strong><span>通过评论快捷按钮或右键菜单屏蔽时，先显示确认对话框。</span></span>
                  <input type="checkbox" id="dy-set-confirm">
                </label>
              </div>
              <div class="dy-set-section">
                <div class="dy-set-section-title">屏蔽范围</div>
                <label class="dy-set-setting">
                  <span class="dy-set-setting-copy"><strong>评论和回复</strong><span>隐藏名单用户发布的视频评论与回复。</span></span>
                  <input type="checkbox" id="dy-set-hide-comments">
                </label>
                <label class="dy-set-setting">
                  <span class="dy-set-setting-copy"><strong>视频弹幕</strong><span>隐藏名单用户发送的视频弹幕。</span></span>
                  <input type="checkbox" id="dy-set-hide-danmaku">
                </label>
                <label class="dy-set-setting">
                  <span class="dy-set-setting-copy"><strong>直播聊天</strong><span>隐藏名单用户发送的直播评论和互动消息。</span></span>
                  <input type="checkbox" id="dy-set-hide-live">
                </label>
                <label class="dy-set-setting">
                  <span class="dy-set-setting-copy"><strong>推荐与关注视频</strong><span>从推荐页和关注页中移除名单用户发布的视频。</span></span>
                  <input type="checkbox" id="dy-set-hide-feed-videos">
                </label>
                <label class="dy-set-setting">
                <span class="dy-set-setting-copy"><strong>隐藏已屏蔽用户的主页作品</strong><span>无论用户从评论、弹幕、直播或推荐页加入名单，进入其主页时都替换整个作品区域。</span></span>
                  <input type="checkbox" id="dy-set-hide-profile-videos">
                </label>
              </div>
            </section>
            <section class="dy-set-page" data-section="list">
              <div class="dy-set-page-head">
                <h2>本地屏蔽名单</h2>
                <p>搜索、添加或移除保存在当前浏览器中的用户。</p>
              </div>
              <div class="dy-set-stat-grid">
                <div class="dy-set-stat"><span>已保存用户</span><strong class="dy-lb-count">0</strong></div>
                <div class="dy-set-stat"><span>当前匹配</span><strong class="dy-lb-match-count">0</strong></div>
              </div>
              <div class="dy-set-section">
                <div class="dy-lb-toolbar">
                  <input class="dy-lb-search" type="search" placeholder="粘贴或搜索用户主页链接、昵称">
                  <button class="dy-lb-btn dy-add" type="button">加入名单</button>
                </div>
                <div class="dy-lb-list"></div>
                <div class="dy-lb-pagination" aria-label="屏蔽名单分页">
                  <button class="dy-lb-btn dy-lb-page-prev" type="button">上一页</button>
                  <span class="dy-lb-page-status">第 1 / 1 页</span>
                  <button class="dy-lb-btn dy-lb-page-next" type="button">下一页</button>
                  <label for="dy-lb-page-input">跳至</label>
                  <input class="dy-lb-page-input" id="dy-lb-page-input" type="number" min="1" step="1" inputmode="numeric" aria-label="页码">
                  <button class="dy-lb-btn dy-lb-page-go" type="button">跳转</button>
                </div>
              </div>
              <div class="dy-set-section">
                <div class="dy-set-section-title">名单数据</div>
                <div class="dy-lb-data-tools">
                  <div class="dy-lb-data-tools-copy">
                    <strong>备份与恢复</strong>
                    <span>导出或导入本地名单；清空会移除当前浏览器中的全部屏蔽记录。</span>
                  </div>
                  <div class="dy-lb-data-tools-actions">
                    <button class="dy-lb-btn dy-export" type="button">导出名单</button>
                    <button class="dy-lb-btn dy-import" type="button">导入名单</button>
                    <button class="dy-lb-btn dy-danger dy-clear" type="button">清空名单</button>
                  </div>
                </div>
              </div>
            </section>
            <section class="dy-set-page" data-section="about">
              <section class="dy-about-hero">
                <div class="dy-about-eyebrow">PYNSEQ FOR DOUYIN</div>
                <h3>
                  <a class="dy-about-title-link" href="${GITHUB_URL}" target="_blank" rel="noopener">
                    <span>${SCRIPT_NAME}</span>
                  </a>
                </h3>
                <p>在推荐、关注、用户主页、评论、弹幕和直播中隐藏本地名单用户的内容。</p>
                <span class="dy-about-version">v${SCRIPT_VERSION}</span>
                <span class="dy-about-version">MIT License</span>
              </section>
              <div class="dy-about-grid">
                <section class="dy-about-card">
                  <h3>Star 提醒</h3>
                  <p>采用 1、2、3、5、8、13、21 天的斐波那契节奏，之后每 21 天提醒一次。</p>
                  <div class="dy-star-status"></div>
                  <div class="dy-about-card-actions">
                    <button class="dy-lb-btn dy-star-toggle" type="button"></button>
                  </div>
                </section>
                <section class="dy-about-card">
                  <h3>支持项目</h3>
                  <p>在 GitHub 为项目点亮 Star，或通过 Buy Me a Coffee 支持后续维护。</p>
                  <div class="dy-about-card-actions dy-support-actions">
                    <a class="dy-support-link dy-support-github" href="${GITHUB_URL}" target="_blank" rel="noopener">
                      <span class="dy-support-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24"><path d="M12 .7a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.56v-2.23c-3.22.7-3.9-1.37-3.9-1.37-.52-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.27 3.38.97.1-.75.41-1.27.74-1.56-2.57-.29-5.27-1.29-5.27-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.47.11-3.05 0 0 .97-.31 3.16 1.18a10.9 10.9 0 0 1 5.76 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.58.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.4-2.71 5.38-5.29 5.67.42.36.79 1.06.79 2.14v3.17c0 .31.21.68.8.56A11.5 11.5 0 0 0 12 .7Z"/></svg>
                      </span>
                      <span class="dy-support-link-copy">
                        <strong>DanielZenFlow</strong>
                        <span>为 Pynseq for Douyin 点亮一颗 Star</span>
                      </span>
                      <span class="dy-support-link-action">打开 GitHub</span>
                    </a>
                    <a class="dy-support-link dy-support-bmc" href="${BUY_ME_A_COFFEE_URL}" target="_blank" rel="noopener">
                      ${buyMeACoffeeIconMarkup()}
                      <span class="dy-support-link-copy">
                        <strong>Buy me a coffee</strong>
                        <span>DanielZenFlow</span>
                      </span>
                      <span class="dy-support-link-action">打开链接</span>
                    </a>
                  </div>
                </section>
              </div>
            </section>
          </main>
        </div>
        <footer class="dy-set-footer">
          <a class="dy-set-author" href="${GITHUB_URL}" target="_blank" rel="noopener" aria-label="DanielZenFlow 的 GitHub 项目">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .7a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.56v-2.23c-3.22.7-3.9-1.37-3.9-1.37-.52-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.27 3.38.97.1-.75.41-1.27.74-1.56-2.57-.29-5.27-1.29-5.27-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.47.11-3.05 0 0 .97-.31 3.16 1.18a10.9 10.9 0 0 1 5.76 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.58.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.4-2.71 5.38-5.29 5.67.42.36.79 1.06.79 2.14v3.17c0 .31.21.68.8.56A11.5 11.5 0 0 0 12 .7Z"/></svg>
            <span>DanielZenFlow</span>
          </a>
          <div class="dy-set-footer-actions">
            <button class="dy-lb-btn dy-cancel" type="button">取消</button>
            <button class="dy-lb-btn dy-primary dy-save" type="button">保存设置</button>
          </div>
        </footer>
      </section>
    `;

    panel = overlay;
    managerPage = 1;
    document.body.appendChild(overlay);
    overlay.addEventListener('click', guardTrustedUiEvent, true);
    let escHandler = null;
    const close = () => {
      if (escHandler) document.removeEventListener('keydown', escHandler, true);
      overlay.remove();
      panel = null;
    };
    const switchPage = (pageName) => {
      const validPage = ['general', 'blocking', 'list', 'about'].includes(pageName) ? pageName : 'general';
      for (const button of overlay.querySelectorAll('.dy-set-nav [data-page]')) {
        const active = button.getAttribute('data-page') === validPage;
        button.classList.toggle('is-active', active);
        button.setAttribute('aria-selected', String(active));
      }
      for (const section of overlay.querySelectorAll('.dy-set-page')) {
        section.classList.toggle('is-active', section.getAttribute('data-section') === validPage);
      }
      if (validPage === 'list') {
        renderManagerList(overlay.querySelector('.dy-lb-search')?.value || '');
        overlay.querySelector('.dy-lb-search')?.focus();
      }
      if (validPage === 'about') renderStarReminderStatus();
    };

    overlay.querySelector('#dy-set-enabled').checked = enabled;
    overlay.querySelector('#dy-set-show-comment-button').checked = settings.showCommentButton;
    overlay.querySelector('#dy-set-show-settings-button').checked = settings.showSettingsButton;
    overlay.querySelector('#dy-set-confirm').checked = settings.confirmBeforeBlocking;
    overlay.querySelector('#dy-set-hide-comments').checked = settings.hideComments;
    overlay.querySelector('#dy-set-hide-danmaku').checked = settings.hideDanmaku;
    overlay.querySelector('#dy-set-hide-live').checked = settings.hideLiveChat;
    overlay.querySelector('#dy-set-hide-feed-videos').checked = settings.hideFeedVideos;
    overlay.querySelector('#dy-set-hide-profile-videos').checked = settings.hideBlockedProfileVideos;

    overlay.addEventListener('click', (event) => { if (event.target === overlay) close(); });
    overlay.querySelector('.dy-cancel').addEventListener('click', close);
    for (const button of overlay.querySelectorAll('.dy-set-nav [data-page]')) {
      button.addEventListener('click', () => switchPage(button.getAttribute('data-page')));
    }
    const manualInput = overlay.querySelector('.dy-lb-search');
    const manualAddButton = overlay.querySelector('.dy-add');
    const submitManualAdd = async () => {
      const value = normalizeText(manualInput.value);
      if (!value) {
        toast('请先粘贴用户主页链接或输入昵称');
        manualInput.focus();
        return;
      }
      manualAddButton.disabled = true;
      const added = await manualAdd(value);
      manualAddButton.disabled = false;
      if (added) {
        manualInput.value = '';
        renderManagerList('');
      }
    };
    manualInput.addEventListener('input', (event) => {
      managerPage = 1;
      renderManagerList(event.target.value);
    });
    manualInput.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter') return;
      event.preventDefault();
      submitManualAdd();
    });
    manualAddButton.addEventListener('click', submitManualAdd);
    const pageInput = overlay.querySelector('.dy-lb-page-input');
    const goToManagerPage = () => {
      managerPage = Math.max(1, Math.trunc(Number(pageInput.value)) || 1);
      renderManagerList(manualInput.value);
    };
    overlay.querySelector('.dy-lb-page-prev').addEventListener('click', () => {
      managerPage -= 1;
      renderManagerList(manualInput.value);
    });
    overlay.querySelector('.dy-lb-page-next').addEventListener('click', () => {
      managerPage += 1;
      renderManagerList(manualInput.value);
    });
    overlay.querySelector('.dy-lb-page-go').addEventListener('click', goToManagerPage);
    pageInput.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter') return;
      event.preventDefault();
      goToManagerPage();
    });
    overlay.querySelector('.dy-export').addEventListener('click', exportEntries);
    overlay.querySelector('.dy-import').addEventListener('click', importEntriesFromFile);
    overlay.querySelector('.dy-set-author').addEventListener('click', (event) => {
      event.preventDefault();
      openGitHub();
    });
    overlay.querySelector('.dy-about-title-link').addEventListener('click', (event) => {
      event.preventDefault();
      openGitHub();
    });
    overlay.querySelector('.dy-support-github').addEventListener('click', (event) => {
      event.preventDefault();
      openGitHub();
    });
    overlay.querySelector('.dy-support-bmc').addEventListener('click', (event) => {
      event.preventDefault();
      openBuyMeACoffee();
    });
    overlay.querySelector('.dy-star-toggle').addEventListener('click', toggleStarReminder);
    overlay.querySelector('.dy-replay-onboarding').addEventListener('click', () => {
      close();
      openOnboarding({ force: true });
    });
    overlay.querySelector('.dy-save').addEventListener('click', () => {
      enabled = overlay.querySelector('#dy-set-enabled').checked;
      GM_setValue(ENABLED_KEY, enabled);
      saveSettings({
        showCommentButton: overlay.querySelector('#dy-set-show-comment-button').checked,
        showSettingsButton: overlay.querySelector('#dy-set-show-settings-button').checked,
        confirmBeforeBlocking: overlay.querySelector('#dy-set-confirm').checked,
        hideComments: overlay.querySelector('#dy-set-hide-comments').checked,
        hideDanmaku: overlay.querySelector('#dy-set-hide-danmaku').checked,
        hideLiveChat: overlay.querySelector('#dy-set-hide-live').checked,
        hideFeedVideos: overlay.querySelector('#dy-set-hide-feed-videos').checked,
        hideBlockedProfileVideos: overlay.querySelector('#dy-set-hide-profile-videos').checked,
      });
      queueFullScan();
      close();
      toast('设置已保存并即时应用');
    });
    overlay.querySelector('.dy-clear').addEventListener('click', () => {
      if (!entries.length) return;
      if (!confirm(`确定清空 ${entries.length} 条本地屏蔽记录？建议先导出备份。`)) return;
      entries = [];
      blockedFeedVideoIds.clear();
      saveEntries();
      queueFullScan();
      toast('本地屏蔽名单已清空');
    });
    escHandler = (event) => {
      if (event.key === 'Escape' && panel === overlay) close();
    };
    document.addEventListener('keydown', escHandler, true);
    overlay.addEventListener('dy-settings:page', (event) => switchPage(event.detail));
    renderManagerList('');
    switchPage(initialPage);
  }

  function renderManagerList(query) {
    if (!panel) return;
    const list = panel.querySelector('.dy-lb-list');
    const count = panel.querySelector('.dy-lb-count');
    const matchCount = panel.querySelector('.dy-lb-match-count');
    const previousButton = panel.querySelector('.dy-lb-page-prev');
    const nextButton = panel.querySelector('.dy-lb-page-next');
    const pageStatus = panel.querySelector('.dy-lb-page-status');
    const pageInput = panel.querySelector('.dy-lb-page-input');
    const needle = normalizeText(query).toLowerCase();
    const filtered = entries.filter((entry) => {
      const haystack = [entry.nickname, entry.secUid, entry.userId, entry.note].join('\n').toLowerCase();
      return !needle || haystack.includes(needle);
    });

    count.textContent = String(entries.length);
    if (matchCount) matchCount.textContent = String(filtered.length);
    const totalPages = Math.max(1, Math.ceil(filtered.length / MANAGER_PAGE_SIZE));
    managerPage = Math.min(totalPages, Math.max(1, Math.trunc(managerPage) || 1));
    if (previousButton) previousButton.disabled = managerPage <= 1;
    if (nextButton) nextButton.disabled = managerPage >= totalPages;
    if (pageStatus) pageStatus.textContent = `第 ${managerPage} / ${totalPages} 页`;
    if (pageInput) {
      pageInput.max = String(totalPages);
      pageInput.value = String(managerPage);
    }
    list.textContent = '';
    if (!filtered.length) {
      const empty = document.createElement('div');
      empty.className = 'dy-lb-empty';
      empty.textContent = entries.length ? '没有匹配项' : '名单为空。可右键视频作者、评论、弹幕和直播发言进行屏蔽。';
      list.appendChild(empty);
      return;
    }

    const pageStart = (managerPage - 1) * MANAGER_PAGE_SIZE;
    const pageEntries = filtered.slice(pageStart, pageStart + MANAGER_PAGE_SIZE);
    for (const entry of pageEntries) {
      const row = document.createElement('div');
      row.className = 'dy-lb-row';

      const profileUrl = entryProfileUrl(entry);
      const name = document.createElement(profileUrl ? 'a' : 'div');
      name.className = 'dy-lb-name';
      name.textContent = entry.nickname
        ? displayName(entry)
        : (attemptedEntryNicknameRepairs.has(entry.id) ? '昵称暂不可用' : '正在读取昵称…');
      if (profileUrl) {
        name.classList.add('dy-lb-name-link');
        name.href = profileUrl;
        name.target = '_blank';
        name.rel = 'noopener';
        name.title = `打开 ${displayName(entry)} 的抖音主页`;
      }

      const meta = document.createElement('div');
      meta.className = 'dy-lb-meta';
      const parts = [];
      if (entry.nicknameOnly) parts.push('按昵称精确匹配');
      if (entry.note) parts.push(`来源: ${entry.note}`);
      meta.textContent = parts.join('\n');

      const remove = document.createElement('button');
      remove.type = 'button';
      remove.className = 'dy-lb-btn dy-danger';
      remove.textContent = '移除';
      remove.addEventListener('click', () => {
        if (removeEntry(entry.id)) toast(`已移除：${displayName(entry)}`);
      });

      row.append(name, meta, remove);
      list.appendChild(row);
    }
    queueEntryNicknameRepairs(pageEntries);
  }

  function queueEntryNicknameRepairs(candidates) {
    for (const entry of candidates) {
      if (
        entry.nickname ||
        !hasStableIdentity(entry) ||
        attemptedEntryNicknameRepairs.has(entry.id)
      ) {
        continue;
      }
      pendingEntryNicknameRepairs.add(entry.id);
    }
    if (!pendingEntryNicknameRepairs.size || entryNicknameRepairRunning || entryNicknameRepairTimer) return;
    entryNicknameRepairTimer = window.setTimeout(runEntryNicknameRepairs, 0);
  }

  async function runEntryNicknameRepairs() {
    entryNicknameRepairTimer = 0;
    if (entryNicknameRepairRunning) return;
    entryNicknameRepairRunning = true;
    let changed = false;
    try {
      while (pendingEntryNicknameRepairs.size) {
        const id = pendingEntryNicknameRepairs.values().next().value;
        pendingEntryNicknameRepairs.delete(id);
        attemptedEntryNicknameRepairs.add(id);
        const entry = entries.find((candidate) => candidate.id === id);
        if (!entry || entry.nickname || !hasStableIdentity(entry)) continue;
        const enriched = await enrichManualInfo(entry);
        if (enriched.nickname && mergeEntry(entry, enriched, '')) changed = true;
      }
    } finally {
      entryNicknameRepairRunning = false;
    }
    if (changed) {
      entries = normalizeEntries(entries);
      GM_setValue(STORAGE_KEY, entries);
      queueFullScan();
    }
    if (panel) renderManagerList(panel.querySelector('.dy-lb-search')?.value || '');
  }

  function exportFilename(date = new Date()) {
    const pad = (value) => String(value).padStart(2, '0');
    const timestamp = [
      date.getFullYear(),
      pad(date.getMonth() + 1),
      pad(date.getDate()),
    ].join('-') + 'T' + [
      pad(date.getHours()),
      pad(date.getMinutes()),
      pad(date.getSeconds()),
    ].join('-');
    return `pynseq-for-douyin-blocklist-${timestamp}.json`;
  }

  function exportEntries() {
    const payload = JSON.stringify({
      format: 'douyin-local-user-blocker',
      version: 1,
      exportedAt: new Date().toISOString(),
      entries,
    }, null, 2);

    try { GM_setClipboard(payload, 'text'); } catch {}
    try {
      const blob = new Blob([payload], { type: 'application/json;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = exportFilename();
      document.body.appendChild(link);
      link.click();
      link.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1500);
      toast(`已导出 ${entries.length} 条记录，并复制到剪贴板`);
    } catch {
      toast('名单已复制到剪贴板');
    }
  }

  function importEntriesFromFile() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/json,.json';
    input.addEventListener('change', async () => {
      const file = input.files?.[0];
      if (!file) return;
      try {
        if (file.size > MAX_IMPORT_FILE_BYTES) {
          throw new Error(`文件不能超过 ${Math.round(MAX_IMPORT_FILE_BYTES / 1024 / 1024)} MB`);
        }
        const imported = parseImportPayload(JSON.parse(await file.text()));
        mergeImported(imported);
      } catch (error) {
        alert(`导入失败：${error instanceof Error ? error.message : String(error)}`);
      }
    }, { once: true });
    input.click();
  }

  function parseImportPayload(payload) {
    const rawEntries = Array.isArray(payload) ? payload : payload?.entries;
    if (!Array.isArray(rawEntries)) throw new Error('文件中没有 entries 数组');
    if (rawEntries.length > MAX_BLOCK_ENTRIES) {
      throw new Error(`名单不能超过 ${MAX_BLOCK_ENTRIES} 条`);
    }
    return normalizeEntries(rawEntries);
  }

  function mergeImported(imported) {
    let added = 0;
    let updated = 0;
    for (const candidate of imported) {
      const existing = findMatchingEntry(candidate);
      if (existing) {
        if (mergeEntry(existing, candidate, candidate.note, { refreshIdentityData: false })) updated += 1;
      } else {
        entries.push({ ...candidate, id: candidate.id || makeId() });
        added += 1;
      }
    }
    saveEntries();
    queueFullScan();
    toast(`导入完成：新增 ${added}，补全 ${updated}`);
  }

  function normalizeEntries(value) {
    let raw = value;
    if (typeof raw === 'string') {
      try { raw = JSON.parse(raw); } catch { raw = []; }
    }
    if (!Array.isArray(raw)) return [];

    const output = [];
    const seen = new Set();
    const seenIds = new Set();
    for (const item of raw) {
      if (output.length >= MAX_BLOCK_ENTRIES) break;
      if (!item || typeof item !== 'object') continue;
      const info = cleanInfo(item);
      if (!hasAnyIdentity(info)) continue;
      const nicknameOnly = Boolean(item.nicknameOnly || (!info.secUid && !info.userId));
      const fingerprint = info.secUid ? `s:${info.secUid}` : info.userId ? `u:${info.userId}` : `n:${normalizeNickname(info.nickname)}`;
      if (!fingerprint || seen.has(fingerprint)) continue;
      seen.add(fingerprint);
      let id = scalar(item.id).slice(0, 128) || makeId();
      while (seenIds.has(id)) id = makeId();
      seenIds.add(id);
      output.push({
        id,
        secUid: info.secUid || '',
        userId: info.userId || '',
        nickname: info.nickname || '',
        profileUrl: info.profileUrl || normalizeProfileUrl('', info),
        nicknameOnly,
        createdAt: scalar(item.createdAt).slice(0, 64) || new Date().toISOString(),
        note: scalar(item.note).slice(0, MAX_NOTE_LENGTH),
      });
    }
    return output;
  }

  function cleanInfo(info) {
    if (!info || typeof info !== 'object') return {};
    const secUid = normalizeId(info.secUid);
    const userId = normalizeId(info.userId);
    return {
      secUid,
      userId,
      nickname: normalizeUserNickname(info.nickname),
      profileUrl: normalizeProfileUrl(info.profileUrl, { secUid, userId }),
      danmakuId: normalizeId(info.danmakuId),
    };
  }

  function hasStableIdentity(info) {
    return Boolean(info && (info.secUid || info.userId));
  }

  function hasAnyIdentity(info) {
    return Boolean(info && (info.secUid || info.userId || info.nickname));
  }

  function cleanVisibleNickname(value) {
    return normalizeText(value).replace(/^@\s*/, '').replace(/[：:]\s*$/, '').trim();
  }

  function normalizeUserNickname(value) {
    const nickname = cleanVisibleNickname(value).slice(0, MAX_NICKNAME_LENGTH);
    if (!nickname) return '';
    if (/^(?:该用户|未知用户|未命名用户|用户昵称|用户主页|用户头像|头像|secuid|uid)$/i.test(nickname)) {
      return '';
    }
    if (/^抖音(?:\s*[-_–—|].*)?$/i.test(nickname)) return '';
    if (/^MS4wLjABAAAA[A-Za-z0-9._~-]+$/i.test(nickname)) return '';
    if (/^(?:https?:)?\/\/|^\/?user\//i.test(nickname)) return '';
    return nickname;
  }

  function visibleUserName(info, fallback = '该用户') {
    return normalizeUserNickname(info?.nickname) || fallback;
  }

  function displayName(entry) {
    return visibleUserName(entry, '未命名用户');
  }

  function buyMeACoffeeIconMarkup() {
    try {
      const encoded = BUY_ME_A_COFFEE_ICON_URL.split(',', 2)[1] || '';
      const svg = atob(encoded);
      if (!svg.trimStart().startsWith('<svg')) throw new Error('Invalid icon');
      return `<span class="dy-support-icon" aria-hidden="true">${svg}</span>`;
    } catch {
      return '<span class="dy-support-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path fill="#FFDD00" d="M5 3h12l-1 13H7L5 3Z"/><path fill="#0D0C22" d="M4 1h14l-.2 3H4.2L4 1Zm3 17h9v3H7v-3Zm10-12h2.5a3.5 3.5 0 0 1 0 7H17V6Zm.5 2-.3 3h2.3a1.5 1.5 0 0 0 0-3h-2Z"/></svg></span>';
    }
  }

  function entryProfileUrl(entry) {
    return normalizeProfileUrl(entry.profileUrl || '', entry);
  }

  function normalizeId(value) {
    return scalar(value).trim().slice(0, MAX_ID_LENGTH);
  }

  function normalizeNickname(value) {
    return normalizeText(value).normalize('NFKC').toLocaleLowerCase();
  }

  function normalizeText(value) {
    return scalar(value).replace(/\s+/g, ' ').trim();
  }

  function scalar(value) {
    if (value == null) return '';
    if (typeof value === 'string' || typeof value === 'number' || typeof value === 'bigint') return String(value);
    return '';
  }

  function firstNonEmpty(...values) {
    for (const value of values) {
      const text = scalar(value).trim();
      if (text) return text;
    }
    return '';
  }

  function textOf(element) {
    return normalizeText(element?.textContent || '');
  }

  function readAttr(element, names) {
    for (const name of names) {
      const value = element?.getAttribute?.(name);
      if (value) return value;
    }
    return '';
  }

  function safeDecode(value) {
    try { return decodeURIComponent(value); } catch { return value; }
  }

  function makeId() {
    if (globalThis.crypto?.randomUUID) return globalThis.crypto.randomUUID();
    return `dy-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
  }

  function guardTrustedUiEvent(event) {
    if (event.isTrusted) return;
    event.preventDefault();
    event.stopImmediatePropagation();
  }

  function toast(message) {
    if (!document.body) return;
    let element = document.getElementById('dy-local-blocker-toast');
    if (!element) {
      element = document.createElement('div');
      element.id = 'dy-local-blocker-toast';
      document.body.appendChild(element);
    }
    element.textContent = String(message);
    element.classList.add('dy-show');
    clearTimeout(toast.timer);
    toast.timer = setTimeout(() => element?.classList.remove('dy-show'), 2400);
  }
})();
