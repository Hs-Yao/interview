const a = {
    i: 1,
    toString: () => {
        return a.i++
    }
}

console.log(a == 1 && a == 2 && a == 3);

let value = 1;
Object.defineProperty(window, 'a', {
    get() {
        return value++;
    }
})
console.log(a == 1 && a == 2 && a == 3);

const b = {
    value: 1,
    valueOf: () => {
        return b.value++
    }
}
console.log(b == 1 && b == 2 && b == 3);
