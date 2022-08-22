const arr = [{num: 10}, {num: 20}, {num: 30}];

//升序正数
arr.sort((a,b) => {
    return b.num - a.num
})

//降序负数
arr.sort((a,b) => {
    return a.num - b.num
})