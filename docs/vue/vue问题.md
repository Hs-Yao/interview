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





