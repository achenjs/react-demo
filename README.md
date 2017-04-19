# 生命周期
componentWillMount 和 componentDidMount 都是可以像 render 方法一样自定义在组件的内部。挂载的时候，React.js 会在组件的 render 之前调用 componentWillMount，在 DOM 元素塞入页面以后调用 componentDidMount。
从页面中删除 调用 componentWillUnmount()

# 组件内容编写顺序
1.static 开头的类属性，如 defaultProps、propTypes。
2.构造函数，constructor。
3.getter/setter（还不了解的同学可以暂时忽略）。
4.组件生命周期。
5._ 开头的私有方法。
6.事件监听方法，handle*。
7.render*开头的方法，有时候 render() 方法里面的内容会分开到不同函数里面进行，这些函数都以 render* 开头。
8.render() 方法。

如果所有的组件都按这种顺序来编写，那么维护起来就会方便很多，多人协作的时候别人理解代码也会一目了然。

