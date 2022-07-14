enum sex  {
    male,
    female,
    special = 7,
    age,
    test = 'aaa'
}
console.log(sex.male);
console.log(sex[1]);
console.log(sex.age);
console.log(sex.test);


const enum cosntan {
    A,
    B,
}
console.log(cosntan.A);


class Info {
    //静态属性
    static name1: string = 'Domesy'

    //成员属性，实际上是通过public上进行修饰，只是省略了
    nmae2:string = 'Hello' //ok 
    name3:string //error
    name4!:string //ok 不设置默认值的时候必须加入 !

    //构造方法
    constructor(_name:string){
      this.name4 = _name
    }

    //静态方法
    static getName = () => {
      return '我是静态方法'
    }

    //成员方法
    getName4 = () => {
      return `我是成员方法:${this.name4}`
    }

    //get 方法
    get name5(){
      return this.name4
    }

    //set 方法
    set name5(name5){
      this.name4 = name5
    }
  }

  const setName = new Info('你好')
  console.log(Info.name1) //  "Domesy" 
  console.log(Info.getName()) // "我是静态方法" 
  setName.name5 = 'www'
  console.log(setName.getName4()) // "我是成员方法:你好" 

  

