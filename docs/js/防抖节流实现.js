function fangdou(fn,wait) {
    let timer;
    return function() {
        if(timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn.call(this,arguments)
        },wait)
    }
}
// 防抖常用场景：监听输入事件，鼠标移动事件


function jieliu(fn,wait) {
    let timer;
    return function() {
        if(timer) {
            return;
        }
        timer = setTimeout(() => {
            fn.call(this, arguments)
            timer = null
        },wait);
    }
}   