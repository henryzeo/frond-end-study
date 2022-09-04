# 前言

## 标准流

学习 Position 之前我们先了解一下什么是标准流（normal flow）。

- 将元素放置在浏览器视口内，默认情况下，元素都是按照normal flow（标准流、常规流、正常流、文档流【document flow】）进行排布的。
  - 从左到右，从上到下 按顺序排放好
  - 默认情况下，互相之间不存在层叠现象。



## 标准流中的定位

### 实现

> 使用margin、padding对元素进行定位



### 缺点

1. 设置一个元素的margin或padding，通常会影响标准流中其他元素的定位效果
2. 不便于实现元素层叠的效果



### 解决

position



# 元素定位

定位允许开发者从正常的文档流布局中取出元素，并使他们具有不同的行为：

- 浮动在另一个元素上面
- 始终保持在浏览器视口内的同一位置，无论页面滚动多少。



# position 属性

- 常用取值
  - static [|](https://www.w3.org/TR/css-values-4/#comb-one) relative | absolute | sticky | fixed
- 默认值
  - static
- 元素 变成 定位元素，position设置以下值
  - relative    相对定位
  - absolute    绝对定位
  - fixed    固定定位
  - sticky    粘性定位



## 静态定位 - static

position属性的默认值

- 元素按照normal flow 布局
- left、right、top、bottom 没有任何作用



## 相对定位 - relative

- 元素按照normal flow 布局
- 可以通过left、right、top、bottom进行定位
  - 参照对象：元素自己原来的位置
- 应用场景
  - 微调

[![voq7NQ.png](https://s1.ax1x.com/2022/09/04/voq7NQ.png)](https://imgse.com/i/voq7NQ)



## 固定定位 - fixed

- 元素脱离normal flow（脱离标准流，脱标）
- 可以通过left、right、top、bottom进行定位
  - 参照对象：视口（viewport）
- 当画布滚动时，固定不动
- 画布 和 视口
  - 画布（Canvas）
    - 用于渲染文档的区域
    - 文档内容超出视口范围，可以通过滚动查看
  - 视口（viewport）
    - 文档的可视区域
  - 宽高对比
    - 画布 >= 视口

- 可以随意设置宽高
- 宽高默认由内容决定
- 不受标准流的约束
  - 不再 严格按照从上到下、从左到右排布
  - 不再 严格区分块级、行内级
  - 块级、行内级的许多特性都会消失
- 不再给父元素汇报宽高数据
- 脱标元素内部默认还是按照标准流布局

[![voL9N4.png](https://s1.ax1x.com/2022/09/04/voL9N4.png)](https://imgse.com/i/voL9N4)



## 绝对定位 - absolute

- 元素脱离normal flow（脱离标准流，脱标）
- 可以通过left、right、top、bottom进行定位
  - 参照对象：最邻近的**定位祖先元素**
    - 定位元素：position值为relative、absolute、fixed的元素
  - 如果找不到，参照对象：视口
- 如果希望子元素相对于父元素进行定位，又不希望父元素脱标
  - 父元素设置 position: relative
  - 子元素设置 position: absolute
  - “父绝子相”





## 粘性定位 - sticky

- 可以看作 相对定位和固定定位 的结合体
- 它允许被定位的元素 表现得像相对定位一样，直达它滚动到某个阙值点
- 当 达到这个阙值点 时，就会 变成固定定位。
- 参照对象：最近的滚动祖先包含的视口

[![voOAiQ.png](D:\Users\veren\Desktop\Zeo_coder\demo\frond_end_study\CSS\布局\position.assets\voOAiQ.png)](https://imgse.com/i/voOAiQ)



# position值对比

[![voOmMq.png](D:\Users\veren\Desktop\Zeo_coder\demo\frond_end_study\CSS\布局\position.assets\voOmMq.png)](https://imgse.com/i/voOmMq)



# CSS属性 - z-index

- 用来设置定位元素的层叠顺序（仅对定位元素有效）
  - 取值可以是 正整数、负整数、0

[![voO0oD.png](D:\Users\veren\Desktop\Zeo_coder\demo\frond_end_study\CSS\布局\position.assets\voO0oD.png)](https://imgse.com/i/voO0oD)



- 比较原则
  - 兄弟关系
    - z-index越大，层叠越在上面
    - z-index相等，写在后面的那个元素层叠在上面
  - 不是兄弟关系
    - 各自 从元素自己以及祖先元素中，找出最邻近的两个定位元素进行比较
    - 而且 这两个定位元素必须有设置z-index的具体数值







