# 这是一个为了方便个人使用制作的firefox版本 RSSHub-Radar 的仓库。
## 它能做什么？

手动拉取[上游代码](https://github.com/DIYgod/RSSHub-Radar), 手动合并，自动签名为firefox插件。

## 为什么要做它？

因为Firefox的内容安全策略（CSP），在 Firefox 扩展中，默认的 CSP 是非常严格的，DIYgod/RSSHub-Radar 的[Commit](https://github.com/DIYgod/RSSHub-Radar/pull/635#issuecomment-1100721069)提到这个问题。

我在[Rongronggg9/RSSHub-Radar](https://github.com/Rongronggg9/RSSHub-Radar)的基础上修改了CSP策略，应该可以正常签名。

## 为什么所有的署名都改变了？

我希望如果有用户在用我这个分支，可以从 `关于` 界面找到这个仓库，以便于后续更新。

如果指的是 `manifest.json` , 那是因为fiefox需要唯一的id。

## 那现在还需要执行 cyber chef 的结果吗？

不需要，在release点击即安装。

## 你的行为是否遵守 MIT LICENSE?

遵守的，如果有错误欢迎指出。

