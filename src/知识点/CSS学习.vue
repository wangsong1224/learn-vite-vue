<template>
  <div>
    CSS
    <p>TodoList</p>
    <TodoList></TodoList>
    <p>TodoListHook</p>
    <TodoListHook></TodoListHook>
  </div>
</template>

<script setup>
/**
 * 渲染过程
 * 渲染引擎:Blink webkit
 * 1.解析文件
 * 通过HTML解析器将标签解析为DOM树
 * 读取HTML文档的字节,转换成字符,根据字符转换成标签,再装换成节点,以节点为基准构建DOM树
 * 读取css,解析为CSSOM树,跟DOM树过程完全一样
 * 在构建DOM树的过程中,遇到script标签会立刻阻塞DOM树的构建,将控制权交给JS引擎,等到JS运行完毕,浏览器会从
 * 中断的地方恢复构建DOM树
 * 将DOM树和CSSOM树合并生成渲染树,只渲染需要展示的节点及其样式
 * 三者并无先后顺序,非完全独立而是存在交叉并行的情况,因此会一边加载,一边解析,一边渲染的情况
 * 2.绘制图层
 * 绘制阶段,遍历渲染树,调用渲染器的paint()在屏幕中绘制内容
 * 根据渲染树布局计算样式
 * HTML是默认流式布局,css与JS会打破这种布局,改变几何属性和外观属性
 * 当生成渲染树后，至少会渲染一次，在后续交互时还会不断地重新渲染。
 * 3.合成图层
 * 将回流重绘的图层一张张合并并显示在屏幕上
 *
 * 兼容性
 * 1.可以使用normalize.css 提供浏览器默认样式
 * 2.加入浏览器私有属性
 * 在使用webpack打包代码时，可接入postcss-loader与postcss-preset-env，
 * postcss-preset-env内置了autoprefixer，它会根据Caniuse提供的数据对代码中的CSS3属性批量加入私有属性。
 */
/**
 * 回流/重排
 * 指的是改变几何属性的渲染
 * 过程为从左上角第一个元素到右下角最后一个
 * 因为几何属性的改变导致会重新计算并生成渲染树,导致渲染树的部分或全部发生变化
 *
 * 重绘
 * 指的是改变外观属性而不影响几何属性的渲染
 *
 * 回流成本比重绘成本高得多,一个节点的回流很有可能导致子节点,兄弟节点或祖先节点的回流
 * 在手机上会减缓加载速度,增加电量消耗
 * 浏览器刷新频率为60Hz，即每16.6ms更新一次
 * 执行事件循环完成微任务
 * 判断document是否需更新
 * 判断resize/scroll事件是否存在，存在则触发事件
 * 判断Media Query是否触发
 * 更新动作并发送事件
 * 判断document.isFullScreen是否为true(全屏)
 * 执行requestAnimationFrame回调
 * 执行IntersectionObserver回调
 * 更新界面
 *
 * 如何避免回流
 * 1.避免使用Table布局
 * 2.避免嵌套层级太多
 * css解析器在解析css文件时,对css规则是从右到左匹配查找,层级太多会影响效率,建议保持在3层左右
 * 3.避免频繁修改样式
 * 或者是预设类名,执行操作时修改变量,将最后的一系列类名一次性替换
 * document.getElementById("myDIV").classList.add("mystyle");
 * 4.将频繁回流重绘的节点设置为图层
 * will-change 为 web 开发者提供了一种告知浏览器该元素会有哪些变化的方法，
 * 这样浏览器可以在元素属性真正发生变化之前提前做好对应的优化准备工作。
 * 这种优化可以将一部分复杂的计算工作提前准备好，使页面的反应更为快速灵敏。
 *
 */
/**
 * 盒模型
 * 是css中最核心的概念,基本环绕在整个css体系中,所有样式与排版都围绕它进行
 * HTML解析时,每个节点都会被描述成一个盒模型,或嵌套,或排列 最终组成网页
 *
 * box=margin+border+padding+content
 * content :内容, 文本或节点存在的位置占用
 *
 * 类型
 * 1.标准盒模型 box-sizing:content-box
 * 节点尺寸:margin+border+padding+content
 * 节点宽高 width height
 * 2.怪异盒 box-sizing:border-box
 * width=border+padding+width
 * height=border+padding+width
 * 其实两者区别在于width/height包不包括border/padding
 *
 * 视觉格式化模型 指的是视觉媒体中 处理 与 显示文档 而使用的 计算规则
 * {
 * BFC 块级格式化上下文
 * IFC 行内格式化上下文
 * FFC 弹性格式化上下文
 * GFC 栅格格式化上下文
 * }
 * 当节点的display声明为block、list-item、table、flex或grid时，
 * 该节点被标记为块级元素。块级元素默认宽度为100%，在垂直方向上按顺序放置，同时参与块格式化上下文。
 *
 * 当节点的display声明为inline、inline-block、inline-table、inline-flex或inline-grid时，
 * 该节点被标记为行内元素。行内元素默认宽度为auto，在水平方向上按顺序放置，同时参与行内格式化上下文。
 *
 * <p>我是<span>JowayYoung</span>，我的公众号是<span>IQ前端</span></p>
 * 此时我是与，我的公众号是就会生成一个[匿名行内盒]，
 * 然后与两个<span>一起处于<p>参与行内格式化上下文后的行内盒中并保持水平排列。
 * 行内元素默认不独占一行(一行可多个)，默认宽度[随内容自动撑开]，可声明水平边距或填充，[不可声明垂直边距或宽高]
 *
 * 格式化上下文
 * 指决定渲染区域内节点的排版,关系和互相作用的渲染机制
 * 网页中有一个<ul>及其多个子节点<li>，
 * 格式上下文决定这些<li>如何排版，<li>与<li>间处于何种关系，以及<li>与<li>间如何互相影响。
 *
 * BFC是网页中一个[独立且隔离的渲染区域]，容器中的[子节点]不会在布局中影响到[外面的节点]，反之亦然。
 * 1.垂直方向顺序排列
 * 2.节点的垂直方向距离由margin决定，相邻节点的margin会发生重叠，以最大margin为合并值
 * 3.节点的margin-left/right与父节点的左边/右边相接触，即使处于浮动也如此，除非自行形成BFC
 * 4.BFC是一个隔离且不受外界影响的独立容器
 * 5.BFC不会与外部浮动区域重叠
 * 6.BFC在计算高度时其浮动子节点也参与计算
 *
 * 用overflow清除浮动是利用了触发BFC特性
 *
 * IFC的高度由容器中最大高度的子节点的实际高度确定，不受垂直方向的margin/padding的影响。
 * display: inline、inline-block、inline-table、inline-flex或inline-grid时
 * 1.节点在水平方向上按顺序排列
 * 2.节点无法声明[宽高]，其margin/padding在水平方向有效在垂直方向无效
 * 3.节点在垂直方向上以不同形式对齐
 * 4.节点宽度由包括块与浮动决定，[节点高度由行高决定]
 *
 * vertical-align:行内元素的基线相对于该元素所在行的基线的垂直对齐
 *
 * 文档流
 * 文档流指节点在排版布局时默认使用从左往右从上往下的流式排列方式。
 * 窗体从上往下分成一行行且每行根据从左往右的顺序排列节点，其显著特性就是从左往右从上往下。
 *
 * 脱流文档流
 * 脱流文档流指节点脱流正常文档流后，在正常文档流中的[其他节点将忽略该节点并填补其原先空间]。
 * 文档一旦脱流，计算其父节点高度时[不会将其高度纳入]，脱流节点不占据空间，
 * 因此声明浮动或定位后会对周围节点布局产生或多或少的影响。
 *
 * 层叠上下文
 * 层叠上下文指盒模型在三维空间Z轴中的表现行为。
 * 每个盒模型存在于一个三维空间中，分别是平面画布的X轴Y轴与表示层叠的Z轴。
 * z-index只在声明定位的节点中起效
 * 节点在Z轴的层叠顺序根据z-index、层叠上下文和层叠等级共同决定
 */

/**
 * 样式计算
 * 优先级
 * !important>内联样式>内嵌样式>外部样式>导入样式
 * 1.内联样式
 * style=''  不推荐,会导致HTML变得臃肿,不利于后期维护
 * 2.内嵌样式
 * 写在<head> 的 <style>中的样式. 通常在[开发环境]中使用,像webpack的style-loader
 * 就是将样式文件全部提取出来,以该方式声明网页文件样式 还是少用为好
 * 3.外部样式
 * <link>标签中引入的样式,通常[生产环境]使用 这样方便将HTML和css代码完全分离
 * 为HTML语义化与结构与表现完全分离提供技术上的支持。
 * 这样的处理不仅利于开发也利于维护，同时也是团队协作的最优CSS代码组织方式。
 * 4.导入样式
 * CSS类型文件中通过@import导入其他样式。导入样式其实与外部样式很相似，在HTML初始化时，
 * 会被导入到文件中成为文件的一部分。对于多个网页的公有样式，可将它们抽离出来，
 * 再通过@import导入样式到这些网页的css文件中。
 *
 * 权重
 * 选择器有着明显不可逾越的等级制度，可将其划分为六个权重等级。
 * 每个等级间的优先级别差距不可逾越，这些等级又称为权重。
 * 10000：!important
 * 1000：内联样式
 * 100：ID选择器
 * 10：类选择器、伪类选择器、属性选择器
 * 1：标签选择器、伪元素选择器
 * 0：通配选择器、兄弟选择器、后代选择器
 * !important > 内联样式 > ID选择器 > 类选择器 = 伪类选择器 = 属性选择器 > 标签选择器 = 伪元素选择器 > 通配选择器 = 兄弟选择器 = 后代选择器
 *
 * 长度单位
 * vw 相对视窗 1%宽
 * vh 相对视窗 1%高
 * em 相对于当前字体
 * rem 相对于根节点字体
 *
 * 屏幕分辨率
 * px像素不是现实的长度单位,比如两个显示器尺寸一样,分辨率高的px绝对长度就小,低的就大
 * 屏幕分辨率就是屏幕中显示的像素个数，分辨率1920×1080意味着水平方向含有1920个像素数，垂直方向含有1080个像素数。
 * 在同一网页中以px作为长度单位时，在不同屏幕分辨率中显示的大小可能不同。
 * 在低屏幕分辨率中像素较大，显示的网页元素也偏大偏模糊。
 * 实际上所有单位无论是绝对单位还是相对单位，最终都会转化为px在屏幕中显示，因此在设计与开发时都以px为准。
 *
 * em和rem的区别
 * em相对父节点，rem相对根节点。
 * 在CSS3中增加了四个与viewport相关长度单位。随着时间推移，
 * 目前很多浏览器对这些长度单位都有较好的兼容，这也是未来最建议在伸缩方案中使用的长度单位。
 * 1vw：1%视窗宽度
 * 1vh：1%视窗高度
 * 1vmin：1%视窗宽度与1%视窗高度中最小者
 * 1vmax：1%视窗宽度与1%视窗高度中最大者
 *
 *
 */

/**
 * 布局方式
 * 普通布局：display:block/inline
 * 浮动布局：float:left/right
 * 定位布局：position:relative/absolute/fixed、left/right/top/bottom/z-index
 * 表格布局：table系列属性
 * 弹性布局：display:flex/inline-flex、flex系列属性
 * 多列布局：column系列属性
 * 格栅布局：display:grid/inline-grid、grid系列属性
 * 响应式布局：em/rem/vw/vh/vmin/vmax、媒体查询
 *
 * 我还是推荐浮动布局、定位布局和弹性布局，熟悉这三种布局基本上能解决很多网页排版问题。
 * 表格布局尽量不要用,小小的改动就会引起整个table回流
 * 栅格布局是一种很好的二维布局方式,就是兼容性不是很好
 *
 * 使用float会使节点脱流导致父节点高度坍塌，若不对父节点显式声明高度则很有必要给父节点清除浮动。
 * .clearfix::after {
 * display: block;
 * visibility: hidden;
 * clear: both;
 * height: 0;
 * font-size: 0;
 * content: "";
 * }
 *
 * 水平居中
 * margin:0 auto + width:fit-content：应用于全部元素
 * display:flex + justify-content:center：应用于全部元素的子节点
 * position + left/right + transform:translateX(-50%)：应用于全部元素
 * 行内元素 + text-aligin:center：应用于行内元素
 *  父节点声明text-align
 *  若节点不是行内元素需声明display:inline/inline-block
 *
 *
 * 垂直居中
 * 行内元素 + line-height：应用于行内元素
 *    父节点声明line-height
 *    若节点不是行内元素需声明display:inline/inline-block
 * position + top/bottom + transform:translateY(-50%)：应用于全部元素
 * display:flex + align-items:center：应用于全部元素的子节点
 * display:flex + margin:auto 0：应用于全部元素
 *    父节点中声明display:flex
 *    子节点声明margin:auto 0
 *
 * <div>声明display:inline-block将其变成行内块级元素
 * ，那可用text-align与line-height声明水平垂直居中了，
 * 但[行内块级元素]与[匿名行内盒]的[基线对齐存在很大差异]，
 * 所以需声明vertical-align:middle将其调整到垂直居中的位置，
 * 不过这也是近似垂直居中，父节点最后还需声明[font-size:0]消除该差异。
 *
 * 文本环绕
 * 使用清除浮动
 *
 * 文字溢出
 * 1.单行文字溢出使用overflow + text-overflow
 * overflow: hidden;
 * text-overflow: ellipsis;
 * white-space: nowrap;
 *
 * 2.多行文字溢出
 * display: -webkit-box;
 * overflow: hidden;
 * text-overflow: ellipsis;
 * word-break: break-all;
 * -webkit-box-orient: vertical;
 * -webkit-line-clamp: 3;
 *
 *
 */

/**
 * 函数计算
 * 有了函数后，可将一系列相关计算交给浏览器处理，减少大量人工计算甚至无需人工计算，大大提高代码的编写效率。
 *
 * 属性函数
 * attr()
 * attr(val)用于返回节点属性，通常结合伪元素的content使用，是一个很优雅的函数。
 * 兼容性好不说了，还极其低调，导致很多同学都以为它是一个CSS3特性。
 * <h1 class="Hello" data-name=" JowayYoung"></h1>
 * &::before {
 * content: attr(class);
 * }
 * 获取class名 Hello
 * 有点意思
 * attr()可灵活结合选择器返回节点属性并赋值到伪元素的content中，
 * 通过attr()结合:hover与:empty抓取节点需显示的内容是一个很不错的技巧。
 *
 *
 * 数学函数
 * calc()
 * calc(exp)用于动态计算单位，数值、长度、角度、时间和百分比都能作为参数。
 * 因为执行数学表达式返回运算后的计算值，可减少大量人工计算甚至无需人工计算，是最有用的函数之一。
 */

/**
 * 变量计算
 * CSS使用变量有如下好处。
 * 减少样式代码的重复性
 * 增加样式代码的扩展性
 * 提高样式代码的灵活性
 * 增加一种CSS与JS的通讯方式
 * 无需深层遍历DOM改变某个样式
 */

/**
 * 选择器
 *
 * elemP elemC	后代选择器	元素的后代元素
 * elemP>elemC	子代选择器	元素的子代元素
 * elem1+elem2	相邻同胞选择器	元素相邻的同胞元素
 * elem1~elem2	通用同胞选择器	元素后面的同胞元素
 *
 * elem1,elem2	并集选择器	多个指定的元素
 * elem.class	交集选择器	指定类名的元素
 *
 * :has	包括指定元素的元素
 * :is	指定条件的元素
 * :not	非指定条件的元素
 *
 * :nth-child(n)	元素中指定顺序索引的元素
 * :nth-last-child(n)	元素中指定逆序索引的元素
 * :first-child	元素中为首的元素
 * :last-child	元素中为尾的元素
 *
 * [attr]	指定属性的元素
 */

/**
 * 变换与动画
 *
 */
</script>

<style scoped></style>
