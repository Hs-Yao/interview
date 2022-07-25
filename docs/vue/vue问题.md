# vue问题大全

### v-if和v-show

v-if是删除节点，v-show只是隐藏节点（相当于display：none)

####  扩展 display：none、visibility: hidden和opacity: 0的区别

- display:none 隐藏后元素不占据位置，触发不了绑定事件
- visibility: hidden 隐藏后元素占据位置，触发不了绑定事件
- opacity: 0 隐藏后元素占据位置，能触发绑定事件

### mvc和mvvm的区别

mvc是model，view，controller，模型层，视图层和控制层，在js中view就是html，model就是js，controller就是dom操作，model的数据需要通过controller传递给view来显示

mvvm是model模型层，view视图层和vm层，vm实现了数据的双向绑定，不需要手动操作dom，当view数据改变model层也会跟着改变，model层数据改变view也会跟着改变

### data为什么是一个函数

假设data是一个对象，那他就是一个引用类型，在多个vue实例中，就相当于共用一组数据，当某个实例的数据改变，另一个实例的数据也会跟着改变，如果是函数的话，就相当于给每个实例数据生成一个私人数据空间，每个实例维护自己的数据

### Vue通讯方式
- props和emit
- provide和inject
- bus总线
- vuex
- $parent和$children
- $attrs和$listeners 父传孙

### vuex

五个属性
state 存取状态变量
mutations  更改状态变量，但是一定要是同步函数，是一种规范，否则追踪不到变量的改变，使用this.$store.commit('setAge',data)去触发
```
setAge(state, data) {
    state.age = data
}
```
actions    更改状态变量，但是可以是异步函数，使用dispatch去触发mutations   this.$store.dispatch('updateAge',data)  
```
updateAge(context, data) {
    context.commit('setAge', data)
}
```
getters 类似computed属性，依赖于state变量，缓存数据
modules 模块

扩展：
1. vuex数据和localStorage缓存的区别

vuex存储在内存，localStorage以文件形式存储在本地
vuex数据刷新会丢失，localStorage不会
vuex能做到两个组件一个数据改变，另个响应改变，localStorage不可以

2. cookie，sessionStorage, localStorage的区别

cookie数据会在http请求中携带发给服务端，cookie会在客户端和服务端来回传递；cookie大小不超过4kb，有效期：设置过期时间，同源窗口数据共享
sessionStorage数据存储在客户端，关闭浏览器就会清除数据，大小不超过5m，在不同浏览器上数据不共享
localStorage数据存储在客户端，永久保存，大小不超过5M，同源窗口共存

3. cookie和session的区别
session是保存在服务端的，cookie是保存在客户端的，session比cookie安全，session数据是通过sessionId获取，sessionId是在cookie带的

### vue虚拟dom，v-for为什么要绑定key

v-for默认使用的是就地复用的策略，绑定key是为了标识标签，数据更新时候复用已有的标签，只更新新的元素，提高效率


### Vue scoped原理，v-deep穿透原理

scoped：给标签和style添加上data-v-xxx，实现完全封闭，v-deep穿透就是把data-v-xxx移到css样式的父级上实现穿透

### vue-router传参有几种方式
```
this.$router.push({
    path:`/home/${id}`,
})

路由配置
{
    path:"/home/:id",
    name:"Home",
    component:Home
}
在Home组件中获取参数值
this.$route.params.id
```
query
```
this.$router.push({
    name: 'home',
    query: {
        user: 123
    }
})
this.$router.push({
    path: '/home',
    query: {
        user: 123
    }
})
this.$route.query.user //获取
```
params
```
this.$router.push({
    name: 'home',
    params: {
        user: 123
    }
})
this.$route.params.user //获取
```
区别：
query参数会带在url上,有长度限制，不安全，刷新不会丢失数据
params参数保存在内存，没有长度限制，安全，但是刷新会丢失

### vue-router两种模式

1. hash  会有#号
2. histroy 没有#号，但是需要后端配置ng，否则刷新页面会出现404，利用了history的pushState和replaceState

### vue-router导航守卫
- 全局前置守卫beforeEach  参数to(去的那个路由)，from(即将离开的路由)，next(重定向)
- 全局解析守卫beforeResolve
- 全局后置守卫AfterEach
- 路由独享的守卫beforeEnter
- 组件独享的守卫 beforeRouteEnter(组件渲染前，没有this，通过next回调)  beforeRouteUpdate(路由被复用，即路由参数改变时)  beforeRouteLeave(路由跳转到其他的时候)

导航过程：
1. 导航被激活
2. 离开的组件触发beforeRouteLeave
3. 接着调用beforeEach全局前置守卫
4. 如果重用会调用组件独享守卫beforeRouteUpdate
5. 进入路由调用路由独享守卫beforeEnter
6. 解析异步路由组件
7. 在被激活的组件内调用组件独享守卫boforeRouteEnter
8. 调用全局解析组件beforeResolve
9. 导航确认
10. 调用全局后置守卫AfterEach
11. dom更新


beforeRouteLeave => beforeEach => beforeRouteUpdate => beforeEnter => beforeRouteEnter =>  beforeResolve => AfterEach

### Vue生命周期
beforeCreate 实例后，方法，data，监听还没配置
created 还没有$el,nextTick
beforeMount  dom挂载前
mounted  dom挂载后，可以调用$el
beforeUpdate 数据更新时调用，虚拟dom重新渲染和打补丁前，可以在这更新数据，且不会发生重渲染
updated 数据更新完后调用，不要在这更新数据，会进入死循环
beforeDestroy 实例销毁前调用，清除定时器
destoryed   实例销毁后调用
activated   keep-alive 组件激活的时候触发
deactivated  keep-alive 组件失活的时候触发




