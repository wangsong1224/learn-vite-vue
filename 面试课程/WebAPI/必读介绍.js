/**
 * 2023 年十大前端发展趋势: https://www.51cto.com/article/759630.html
 * 2023年前端技术趋势:https://juejin.cn/post/7253824068202151992
 * 2023年前端流行什么技术和框架了？: https://www.zhihu.com/question/609395923
 */

/**
 * Web API 简介:
 * https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Client-side_web_APIs/Introduction
 * 
 * 
 * 常见浏览器 API:
 * 1.操作文档的 API内置于浏览器中。
 * 最明显的例子是DOM（文档对象模型）API，
 * 它允许你操作 HTML 和 CSS — 创建、移除以及修改 HTML，
 * 动态地将新样式应用到你的页面，等等。
 * 每当你看到一个弹出窗口出现在一个页面上，或者显示一些新的内容时，
 * 这都是 DOM 的行为。你可以在在Manipulating documents中找到关于这些类型的
 *  API 的更多信息。
 * 
 * 2.从服务器获取数据的 API 用于更新网页的一小部分是相当好用的。
 * 这个看似很小的细节能对网站的性能和行为产生巨大的影响 — 
 * 如果你只是更新一个股票列表或者一些可用的新故事而不需要从服务器重新加载整个页面
 * 将使网站或应用程序感觉更加敏感和“活泼”。
 * 使这成为可能的 API 包括XMLHttpRequest和Fetch API。
 * 你也可能会遇到描述这种技术的术语Ajax。
 * 你可以在Fetching data from the server找到关于类似的 API 的更多信息。
 * 
 * 3.用于绘制和操作图形的 API
 * 目前已被浏览器广泛支持 — 
 * 最流行的是允许你以编程方式更新包含在 HTML <canvas> 
 * 元素中的像素数据以创建 2D 和 3D 场景的Canvas和WebGL。
 * 例如，你可以绘制矩形或圆形等形状，将图像导入到画布上，
 * 然后使用 Canvas API 对其应用滤镜（如棕褐色滤镜或灰度滤镜），
 * 或使用 WebGL 创建具有光照和纹理的复杂 3D 场景。
 * 这些 API 经常与用于创建动画循环的 API（
 * 例如window.requestAnimationFrame()）和
 * 其他 API 一起不断更新诸如动画和游戏之类的场景。
 * 
 * 4.音频和视频 API 例如 
 * HTMLMediaElement、Web Audio API 和 WebRTC 
 * 允许你使用多媒体来做一些非常有趣的事情，
 * 比如创建用于播放音频和视频的自定义 UI 控件，
 * 显示字幕字幕和你的视频，从网络摄像机抓取视频，通过画布操纵（见上），
 * 或在网络会议中显示在别人的电脑上，或者添加效果到音轨（如增益、失真、平移等）
 * 
 * 5.设备 API基本上是以对网络应用程序有用的方式操作和检索现代设备硬件中的数据的 API。
 * 我们已经讨论过访问设备位置数据的地理定位 API，
 * 因此你可以在地图上标注你的位置。
 * 其他示例还包括通过系统通知（参见Notifications API）或
 * 振动硬件（参见Vibration API）告诉用户 Web 应用程序有用的更新可用。
 * 
 * 6.客户端存储 API
 * 在 Web 浏览器中的使用变得越来越普遍 - 
 * 如果你想创建一个应用程序来保存页面加载之间的状态，
 * 甚至让设备在处于脱机状态时可用，那么在客户端存储数据将会是非常有用的。
 * 例如使用Web Storage API的简单的键 - 值存储以及
 * 使用IndexedDB API的更复杂的表格数据存储。
 */