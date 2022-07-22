//如何收集数组内数字出现的次数
const arr = [1,2,3,3,2,2,1]

const map = {};

arr.map(item => {
    map[item] = map[item] ? map[item] + 1 : 1
})

console.log(map);
