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

