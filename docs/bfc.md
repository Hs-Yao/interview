# bfc原理

block format context 块级格式化上下文 是块级盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域

### 创建bfc

- 根元素
- float不为none的元素
- position为absolute和fixed 
- display为inline-block 行内块元素
- display为flex和grid
- 表格单元格元素 display为table-cell
- overflow不为visible和clip的块元素
- 表格元素

### bfc作用

- 包含内部浮动
- 排除外部浮动
- 阻止外边距重叠


参考：[bfc mdn] https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context