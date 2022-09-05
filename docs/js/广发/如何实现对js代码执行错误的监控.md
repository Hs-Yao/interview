# js 代码错误监控

1. window.onerror 监听 js 代码错误

```
 const a = JSON.parse(' ');
 new Array(-1);
window.onerror = function (e, source, lineno, colno, error) {
    console.log(e, source, lineno, colno);
    console.log(111, error);
}
```
2. unhandledrejection 处理未显式捕获的Promise异常
```
new Promise((resolve, reject) => {
                setTimeout(() => reject('woops'), 500);
            })
window.addEventListener("unhandledrejection", event => {
            console.warn(`UNHANDLED PROMISE REJECTION: ${event.reason}`);
            event.preventDefault()
        });
```
3. try...catch
4. Vue全局配置 Vue.config.errorHandler   生命周期errorCaptured return false阻止向上触发