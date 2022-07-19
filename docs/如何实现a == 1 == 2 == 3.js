Object.defineProperty(window,'a',{
    value: 1,
    writable: true,
    get() {
        window.a++
    },
})