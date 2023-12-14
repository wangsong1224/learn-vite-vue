/**
 * 直播技术相关
 * https://github.com/galaxy-s10/billd-live
 * 简介:
 * billd 直播间，目前实现了类似 bilibili 的 Web 在线直播功能，
 * 即你（房主）可以发布直播，别人进入你的直播间后能看到你的直播内容；
 * 而你也可以作为观众，进入别人的直播间看别人的直播内容。
 * 
 * 相关技术栈:
 * 前端相关：Vue3 以及相关技术栈、Typescript、WebRTC、Web Worker、Web Audio、Canvas
 * 后端相关：Nodejs 以及相关技术栈、Koa2、Sequelize、Mysql、Redis、Socket.io
 * 流媒体服务器相关：SRS、 FFmpeg、Coturn
 * Docker 相关：Docker
 * 
 */

/**
 * WebRTC
 * 是一个由Google发起的实时通讯解决方案，其中包含视频音频采集，
 * 编解码，数据传输，音视频展示等功能，我们可以通过技术快速地构建出一个音视频通讯应用。
 * [详情见链接 https://zhuanlan.zhihu.com/p/451666554]
 * 
 * WebRTC是一个开源项目，旨在使得浏览器能为实时通信（RTC）提供简单的JavaScript接口。
 * 说的简单明了一点就是让浏览器提供JS的即时通信接口。
 * 这个接口所创立的信道并不是像WebSocket一样，打通一个浏览器与WebSocket服务器之间的通信，
 * 而是通过一系列的信令，建立一个浏览器与浏览器之间（-to-peer）的信道，
 * 这个信道可以发送任何数据，而不需要经过服务器。
 * 并且WebRTC通过实现MediaStream，通过浏览器调用设备的摄像头、话筒，
 * 使得浏览器之间可以传递音频和视频。
 * 
 * 使用WebRTC能做什么？
 * 能用于音视频实时互动
 * 能用于游戏、即时通讯、文件传输等等
 * 它是一个百宝箱，传输、音视频处理（回音消除、降噪等）
 * 
 * 学习WebRTC的过程中我们能掌握什么？
 * 音视频设备的访问与管理
 * 音视频数据的采集
 * 数据的传输与实时互动
 * WebRTC的整体工作机制
 * 
 * 学习WebRTC思路
 * (1). 学习NodeJS的基本使用，尝试搭建一个简单的Web服务器并实现简单的HTTP服务。
 * (2). 学习JavaScript，了解并掌握其基本的使用方法，为后续开发及完善Web服务做技术铺垫。
 * (3). 了解音视频设备相关的Web API，尝试使用MediaDevices实现音视频设备的访问，包括摄像头、麦克风及屏幕采集。
 * (4). 学习使用http://Socket.IO，尝试使用http://Socket.IO实现简单的聊天室，为后续开发WebRTC信令服务器做技术铺垫。
 * (5). 了解和学习使用SDP，并使用WebRTC的Web API实现本地的1v1视频互通。
 * (6). 搭建STUN/TURN服务器，使用ICE框架及http://Socket.IO实现WebRTC正式的1V1连麦
 * (7). 实现WebRTC的移动端开发，做到浏览器和手机客户端能进行连麦操作。
 * 
 */

