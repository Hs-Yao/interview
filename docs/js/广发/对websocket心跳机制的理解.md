### 对websocket心跳机制的理解
websocket 生命周期：
1. onOpen
2. onMessage
3. onClose
4. onError

websocket在长时间不与服务器通信的时候会被断，这时候客户端是没有任何通知知道websocket断开的，这时候就需要心跳机制去保持连接

心跳机制：利用一个定时器定时给服务器发送消息send data，一个定时器关闭websocket，在定时器时间内服务器返回数据的话，就会清除定时器，如果服务器没有返回数据，就视为与服务器断开连接，关闭websocket，通过onClose去重新连接websocket实现websocket的长连接