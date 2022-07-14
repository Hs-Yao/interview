var sex;
(function (sex) {
    sex[sex["male"] = 0] = "male";
    sex[sex["female"] = 1] = "female";
    sex[sex["special"] = 7] = "special";
    sex[sex["age"] = 8] = "age";
    sex["test"] = "aaa";
})(sex || (sex = {}));
console.log(sex.male);
console.log(sex[1]);
console.log(sex.age);
console.log(sex.test);
console.log(0 /* cosntan.A */);
var Info = /** @class */ (function () {
    //构造方法
    function Info(_name) {
        var _this = this;
        //成员属性，实际上是通过public上进行修饰，只是省略了
        this.nmae2 = 'Hello'; //ok 
        //成员方法
        this.getName4 = function () {
            return "\u6211\u662F\u6210\u5458\u65B9\u6CD5:".concat(_this.name4);
        };
        this.name4 = _name;
    }
    Object.defineProperty(Info.prototype, "name5", {
        //get 方法
        get: function () {
            return this.name4;
        },
        //set 方法
        set: function (name5) {
            this.name4 = name5;
        },
        enumerable: false,
        configurable: true
    });
    //静态属性
    Info.name1 = 'Domesy';
    //静态方法
    Info.getName = function () {
        return '我是静态方法';
    };
    return Info;
}());
var setName = new Info('你好');
console.log(Info.name1); //  "Domesy" 
console.log(Info.getName()); // "我是静态方法" 
setName.name5 = 'www';
console.log(setName.getName4()); // "我是成员方法:你好" 
