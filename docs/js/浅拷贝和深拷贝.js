const a = [1,2,3];
b = a;
a[1] = 5;
console.log(b);

//一层深拷贝，多层浅拷贝
function simpleCopy(data) {
    if(typeof data === 'object') {
        let newTarget = Array.isArray(data) ? [] : {};
        for(let key in data) {
            newTarget[key] = data[key];
        }
        return newObj;
    }
}
// const obj = {
//     a: {
//         b: 1
//     }
// }
// const obj1 = simpleCopy(obj);
// obj.a.b = 2;
// console.log(obj);
// console.log(obj1);
const g = [1,2,3,[4]];
const h = simpleCopy(g);
// const h = g;
g[1] = 5;
g[3][0] = 7;
console.log(g);
console.log(h);

//一层深拷贝，多层浅拷贝
const c = [1,2,3];
const d = [...c];
c[1] = 7;
console.log(c);
console.log(d);
//一层深拷贝，多层浅拷贝
const e = [1,2,3,[4]];
const f = Object.assign([], e);
e[3][0] = 6;
e[1] = 4;
console.log(e);
console.log(f);

//map和weakMap的区别就是一个是强引用一个是弱引用，弱引用会被垃圾回收机制回收
function clone(target, map = new WeakMap()) {
    if (typeof target === 'object') {
        let cloneTarget = Array.isArray(target) ? [] : {};
        //避免死循环
        if (map.get(target)) {
            return map.get(target);
        }
        map.set(target, cloneTarget);
        //end
        for (const key in target) {
            cloneTarget[key] = clone(target[key], map);
        }
        return cloneTarget;
    } else {
        return target;
    }
};
const target = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8]
};
target.target = target;
const target1 = clone(target);
console.log(target1);