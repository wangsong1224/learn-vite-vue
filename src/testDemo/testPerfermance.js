
let timing = window.performance && window.performance.timing
let navigation = window.performance && window.performance.navigation

// DNS 解析：
let dns = timing.domainLookupEnd - timing.domainLookupStart

// 总体网络交互耗时：
let network = timing.responseEnd - timing.navigationStart

// 渲染处理：
let processing = (timing.domComplete || timing.domLoading) - timing.domLoading

// 可交互：
let active = timing.domInteractive - timing.navigationStart