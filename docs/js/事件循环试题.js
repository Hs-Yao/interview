//试题1
async function async1() {
    console.log('async1 start');
    await async2();
    console.log('async1 end'); //这个相当于一个微任务then
}
async function async2() {
    console.log('async2');
}

console.log('start');
setTimeout(() => {
    console.log('setTimeout');
}, 0);
async1();
new Promise(resolve => {
    console.log('promise1');
    resolve();
}).then(() => {
    console.log('promise2');
})
var arr = [];
for (let index = 0; index < 10; index++) {
    arr.push(index);
}
console.log(arr);
console.log('end');

const result = ['start', 'async1 start', 'async2', 'async1 end', 'promise1', '0,1,..,9', 'end', 'promise2', 'setTimeout']

//试题2
setTimeout(function () {
    console.log('1')
});
new Promise(function (resolve) {
    console.log('2');
    resolve();
}).then(function () {
    console.log('3')
});
console.log('4');
new Promise(function (resolve) {
    console.log('5');
    resolve();
}).then(function () {
    console.log('6')
});
setTimeout(function () {
    console.log('7')
});

function bar() {
    console.log('8')
    foo()
}

function foo() {
    console.log('9')
}
console.log('10')
bar()

const result1 = ['2', '4', '5', '10', '8', '9', '3', '6', '1', '7']

//试题3
async function async1() {
    console.log('async1')
    await async2()
    console.log('async1 end') //这个相当于一个微任务then
}
async function async2() {
    console.log('async2')
}
console.log('script start')
setTimeout(() => {
    console.log('setTimeOut')
}, 0)
async1()
new Promise((resolve) => {
    console.log('promise')
    resolve('promise2')
}).then((data) => {
    console.log(data)
    return ('promise3')
}).then((data) => {
    console.log(data);
}).then((data) => {
    console.log(data);
})
console.log('script end')

const result2 = ['script start', 'async1', 'async2', 'promise', 'script end', 'async1 end', 'promise2', 'promise3', undefined, 'setTimeOut']


async function async1() {
    const res = await async2()
    console.log(res);
    console.log('async1 end')
}
async function async2() {
    console.log('async2 end')
    return Promise.resolve(11111).then(() => {
        console.log('async2 end1')
        return Promise.resolve(222222)
    })
}
async1()

let a = () => {
    setTimeout(() => {
        console.log('任务队列函数1')
    }, 10000)
    for (let i = 0; i < 5; i++) {
        console.log('a的for循环')
    }
    console.log('a事件执行完')
}
let b = () => {
    setTimeout(() => {
        console.log('任务队列函数2')
    }, 15000)
    for (let i = 0; i < 5; i++) {
        console.log('b的for循环')
    }
    console.log('b事件执行完')
}
let c = () => {
    setTimeout(() => {
        console.log('任务队列函数3')
    }, 12000)
    for (let i = 0; i < 5; i++) {
        console.log('c的for循环')
    }
    console.log('c事件执行完')
}
a();
b();
c();