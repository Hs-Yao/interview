let str = '1';
let Str = new String('1');
let num = 1;
let Num = new Number(1);
let arr = [1,2,3];
let Arr = new Array(1,2,3);
let obj = {
    a: 1
};
let bol = true;
let udf = undefined;
let nl = null;
let func = function(){}
let date = new Date()

// 第一种typeof  无法判断array，null, object
// console.log(typeof str); // string
// console.log(typeof num); // number
// console.log(typeof arr); // object
// console.log(typeof obj); // object
// console.log(typeof udf); // undefined
// console.log(typeof nl);  // object
// console.log(typeof func); // function

// 第二种instanceof 检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上,缺陷：判断不了undefined和null
// console.log(str instanceof String); //false
// console.log(Str instanceof String); //true
// console.log(num instanceof Number); //false
// console.log(Num instanceof Number); //true
// console.log(nl instanceof Object); //false
// console.log(arr instanceof Array); //true
// console.log(obj instanceof Object); // true
// console.log(func instanceof Object); //true
// console.log(func instanceof Function); //true
// console.log(date instanceof Date); // true
// console.log(date instanceof Object); //true

//第三种 constructor,undefined和null没有constructor属性，而且不安全，可改
// console.log(bol.constructor === Boolean);// true
// console.log(num.constructor === Number);// true
// console.log(str.constructor === String);// true
// console.log(arr.constructor === Array);// true
// console.log(obj.constructor === Object);// true
// console.log(func.constructor === Function);// true

//第四种 Object.prototype.toString.call(data)
function formatType(data) {
    return Object.prototype.toString.call(data).split(' ')[1].slice(0, -1)
}
console.log(formatType(bol));

