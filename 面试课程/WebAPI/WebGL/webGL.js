/**
 * 初识 WebGL:
 * https://developer.mozilla.org/zh-CN/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL
 * 
 * 
 * WebGL:
 * WebGL 使得在支持 HTML 的 canvas 标签的浏览器中，
 * 不需要安装任何插件，便可以使用基于 OpenGL ES 2.0 的 API 
 * 在 canvas 中进行 2D 和 3D 渲染。
 * WebGL 程序包括用 JavaScript 写的控制代码，
 * 以及在图形处理单元（GPU, Graphics Processing Unit）中
 * 执行的着色代码（GLSL，注：GLSL 为 OpenGL 着色语言）。
 * WebGL 元素可以和其他 HTML 元素混合使用，
 * 并且可以和网页其他部分或者网页背景结合起来。
 * 
 * 
 * webGL和canvas的关系?
 * Canvas就是画布，只要浏览器支持，可以在canvas上获取2D上下文和3D上下文，
 * 其中3D上下文一般就是WebGL，当然WebGL也能用于2D绘制，
 * 并且WebGL提供硬件渲染加速，性能更好。
 */