const arr = [1,2,3,3,2,2,1]
const array = []

// Set
// console.log([...new Set(arr)]);

//map + indexof 
// arr.map(item => {
//     if(array.indexOf(item) === -1) {
//         array.push(item)
//     }
// })
// console.log(array);

//双for循环 + splice，不需要创建新的变量
// for(let i = 0;i < arr.length;i++) {
//     for(let j = i+1;j < arr.length;j++) {
//         if(arr[i] === arr[j]) {
//             arr.splice(j, 1);
//             j--; //删掉一位需要减到一位
//         }
//     }
// }
// console.log(arr);

//fliter + indexof
// const a = arr.filter((item,index) => {
//     return index === arr.indexOf(item)
// })
// console.log(a);

//map + includes
arr.map(item => {
    if(!array.includes(item)) {
        array.push(item)
    }
})
console.log(array);