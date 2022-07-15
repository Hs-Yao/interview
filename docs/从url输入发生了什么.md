# 从url输入发生了什么

- dns解析
- tcp连接
- http请求
- 服务器处理请求后返回响应报文
- 浏览器解析渲染页面
- 连接结束

# dns解析

页面访问的是域名，并不是他真实的ip地址，如www.baidu.com，需要经过dns解析出ip地址（查找过程 根域名服务器. => com顶级域名服务器 => baidu.com服务器 => www.baidu.com服务器），获取到ip地址后进行dns缓存到本地