const arr = [{num: 10}, {num: 20}, {num: 30}];

//降序负数
arr.sort((a,b) => {
    return b.num - a.num
})

//升序正数
arr.sort((a,b) => {
    return a.num - b.num
})


const resolve =  Promise.resolve(123);
const reject = Promise.reject(234);
const reject2 = Promise.reject(2344);

Promise.all([resolve,reject,reject2]).then(res => {
    console.log(res,123);
}).catch(err => {
    console.log(err,234);
})