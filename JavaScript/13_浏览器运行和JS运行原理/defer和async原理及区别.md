# 出现原因

浏览器再解析html时，遇到script会阻止html的解析

下载js文件并执行，之后再继续html的解析，构建dom树

- 因为JavaScript可以操作dom
- 等dom树构建完成并且渲染后再执行JavaScript，会造成回流和重绘，影响页面性能
- 所以在遇到script元素时，优先下载并执行JavaScript代码，再构建dom树

由于现如今的开发模式，造成脚本过重，处理时间较长

造成页面解析过长，在脚本下载、执行完成之前，用户什么都看不到

为了解决这个问题，script元素提供两个属性defer和async



# defer

defer告诉浏览器不要等待脚本下载，继续解析HTML，构建dom树

如果脚本提前下好，会等待dom树的构建完成，在DOMContentLoaded事件之前执行defer中的代码

- 多个defer会保证执行顺序
- 可以提高页面的性能，最好放到head元素中，优先下载
- 仅适用于外部脚本，忽略script默认内容



# async

async也告诉浏览器不要等待脚本下载，继续执行html，构建dom树

但async不会保证在DOMContentLoaded之前或之后执行

- 不会保证执行顺序，独立下载，独立运行，不会等待其他脚本

最好用于不操作dom的script，或独立模块，对页面不造成较大影响的

