# ES6的开发环境搭建
建立工程目录
* src 书写es6
* dist 利用Babel编译成的ES5代码的文件夹
```
(1)项目初始化
npm init -y

(2)全局安装Babel-cli
npm install -g babel-cli

(3)本地安装babel-preset-es2015 和 babel-cli
npm install --save-dev babel-preset-es2015 babel-cli

(4) 在根目录新建.babelrc 文件
{
    "presets":[
        "es2015"
    ],
    "plugins":[]
}
(5) 简化转化命令：在wabpack.js中修改
"scripts": {
    "build": "babel src/index.js -o dist/index.js"
  },

(6)执行npm run build
```
# 新的声明方式
* let 被花括号包起来的都是私有变量,一对{}包括的区域称为代码块,块级作用域指一个变量或者函数只在该区域才起作用
* let 变量不能重复声明
* let 变量内容可以被覆盖
* let 不存在变量提升
```
 {
    let a = 12
    console.log('let ' + a);
  }
  // console.log('let '+a); //访问不到
```
能够解决的问题
* 获取当前点击的索引
```
  let button = document.getElementsByTagName('button')
  for (let i = 0; i < button.length; i++) {
    button[i].onclick = function () {
      console.log(i);
    }
  }
```
* 循环体外被污染
```
 for (var i = 0; i < 5; i++) {
    console.log(`var循环体内 ` + i);
  }
  console.warn(`var循环体外 ` + i);
```
### const 在定义之后值是固定不变的，即为常量

* const 只要被声明就无法修改
* const 重复声明会报错
* const 不能先声明 后赋值
```
const s = 12;
```
# 解构赋值
简单数组的解构赋值:数组模式和赋值模式统一：按照对应的顺序解构
```
let  [a,b,c]=[1,2,3];
```
简单对象， 按照属性名赋值
```
```
给默认值 nudefinde 和null
```
  let  [k,z='没有改变'] = ['赋值1',undefined]
  let  [l,x='改变'] = ['赋值2',null]
  console.log(k,z); //undefined不会被修改
  console.log(l,x);//null 会被修改
```
先声明后赋值出现的问题,解决办法
```
 let foo
  ({foo} = {foo:"0000"})
  console.log(foo);
```
# 数组扩展运算符（…）
* Array.from 从一个类似数组或可迭代对象中创建一个新的数组实例
```
//不在统一内存下互不影响
 let arr5 =[2,3,4,5]
  let arr6 = Array.from(arr5)
  arr6.pop()
  console.log(arr6,arr5);

 //JSON数组格式转换为数组
  let  json = {
    '0': '奔驰',
    '1': '宝马',
    '2': '大众',
    length:3
  }
  let arr9 = Array.from(json)
  console.log(arr9);
```
* Array.of 一堆文本或者变量转换成数组,一个类似数组的字符串，需要使用eval来进行转换
```
let arr =Array.of(3,4,5,6);
console.log(arr);
```
* find( )实例方法 从数组中查找
value：表示当前查找的值。
index：表示当前查找的数组索引。
arr：表示当前数组
```
let arr12=[1,2,3,4,5,6,7,8,9];
console.log(arr12.find(function(value,index,arr){
    return value > 5;
}))
//结果是6 查询一个结果
```
* filter() 过滤  查出比她大的所有的
```
console.log(arr12.filter(x=>{
  return x > 5;
}))
```
* fill( )实例方法 替换数组中的某一项
```
let arr5=[0,1,2,3,4,5,6,7,8,9];
arr5.fill('替换',2,5) //将2,3，4替换
console.log(arr5);
```

* for Of循环 entries() 索引和值都能出来
```
let arr14=['本田','丰田','奔驰']
for (let [index,item] of arr14.entries()){
    console.log(`for Of循环`,index,item);
}

//断开循环转为对象
let arr15=['迈凯伦','尼桑','比亚迪']
let list=arr15.entries();
console.log(`next断开循环`,list.next().value);
console.log(`next断开循环`,list.next().value);
console.log(`next断开循环`,list.next().value);
```
# 模板
支持页面标签，但必须在页面输出，不能再控制台打印
```
let a = `奔驰`
let b = `这个<b style="color:red">${a}</b>我要了`
console.log(b)
```
支持计算
```
  let c= 2
  let d= 3
  let e = `结果: ${c+d}`
  console.log(e);
```
# 数字
判断是否是数字
```
let a= 11/4;
console.log(Number.isFinite(a));//true
console.log(Number.isFinite('不是数字'));//false
console.log(Number.isFinite(NaN));//false
console.log(Number.isFinite(undefined));//false
```
判断一个数字是不是NAN
```
console.log(Number.isNaN(NaN));
```
判断是否为整数Number.isInteger(xx)
```
let a =3.1416926
console.log(Number.isInteger(a));
```
整数转换Number.parseInt(xxx)和浮点型转换
 ```
 Number.parseFloat(xxx)
console.log(Number.parseInt(a));
console.log(Number.parseFloat(a));
 ```
 Math
 ```
  var num  = 22.234;
	console.log(Math.trunc(num))//干掉小数点
	console.log(Math.sign(-0));//判断参数是正数、负数、正0还是负0
 ```
### 字符串查询
通过indexOf索引去查询
```
let a = `而且支持中文`
let b = `ES6还增加了字符串的查找功能，而且支持中文哦，小伙伴是不是很兴奋`
console.log(b.indexOf(a) > -1);
```
字符串查询 startsWith endsWith 和 includes

```
//ES6直接用includes就可以判断，不再返回索引值
let c = 'includes';
let y = 'ES6';
let u = '喜欢';
let d = 'ES6直接用includes就可以判断，不再返回索引值，这样的结果我们更喜欢';
//判断内容当中
console.log(d.includes(c));
//判断开通
console.log(d.startsWith(y));
//判断结尾
console.log(d.endsWith(u));
```
复制字符串
```
let f = '赋值字符串, ';
document.write(f.repeat(3));
console.log(f.repeat(3));
```
# Symbol对对象的保护
没有Symbol保护的对象
```
var obj2 = {
    name: '杨明',
    skill: 'web',
    age: 32
};
for (let item in obj2) {
    console.log(obj2[item]); //可以获取32
}
```
被Symbol保护的对象
```
let obj3 = {
  name: 'jspang',
  skill: 'web'
};
let age = Symbol(); 
obj3[age] = 18;
for (let item in obj3) {
  console.log(obj3[item]); //获取不到18
}
console.log(obj3) //里面是有18的
```
# Set数组数据结构
* Set数据结构，和json数据一样 都是数据结构
* Set的声明,里面都是数组
* 不能有相同的内容

追加add
```
  let setArr = new Set(['jspang', '刘德华', 'web', '马化腾', '王健林']);
  console.log(setArr);

  setArr.add('小明');
  setArr.add('刘德华'); //追加不进去已经有了
  console.log(`1`, setArr)
```
查询
```
  console.log(`2`, setArr.has('刘德华'));
  console.log(`3`, setArr.has('马云'));
```
获取个数
```
  console.log(setArr.size);
```
删除某一个
```
  setArr.delete('王健林')
  console.log(setArr);
```
删除所有
```
  setArr.clear()
  console.log(setArr);
```
循环set的循环 for…of…循环
```
let setArr2 = new Set(['刘德华', '刘德华', 'web', '马化腾', '王健林']);
for (let item of setArr2) {
  console.log(`for…of…循环`, item);
}

setArr2.forEach((value) => console.log(`forEach`, value));
```
# WeakSet对象数据结构
不在同一内容是可以存在的
```
  let weakObj = new WeakSet();
  let obj3 = {
    a: '马化腾',
    b: '马云'
  }
  let obj4 = {
    a: '马化腾',
    b: '马云'
  }
  weakObj.add(obj3); //不再同一内容是可以存在的
  weakObj.add(obj4);
  console.log(`WeakSet`, weakObj);
```
把内存3指向内存4就相同了
```
obj3 = obj4
weakObj.add(obj3);
console.log(`在同一内存下`, weakObj);
```
# map对象数据结构
json数据
```
let json = {
  name: '小米',
  skill: '华为'
}
console.log(`json`, json.name);

var map = new Map();
```
set设置属性名和属性值
```
//内容作为属性名
map.set(json, '11111');
console.log(`Map`, map);

//内容作为属性值
map.set('22222', json);
console.log(`Map`, map);
```
get 获取
```
//获取
console.log(map.get(json));
console.log(map.get('22222'));
```
delete 删除一个
```
//删除
console.log(map.delete(json));
console.log(map);
```
size 获取长度
```
//长度
console.log(map.size);
```
has 查找
```
//查找
console.log(map.has('22222'))
```
clear 删除全部
```
//删除全部
// console.log(map.clear());
```
# Promise 的应用
* Promise.all方法用于将多个Promise实例，包装成一个新的Promise实例，
* resolve 成功   reject 失败
* then 捕获成功  catch 捕获失败
```
  var p1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('p1');
    }, 20)
  });
  var p2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('p2');
    }, 400)
  });
  var p3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('p3');
    }, 1000)
  });


 //把失败信息返回回来，只有所有的Promise对象都正确才会走成功，
 //只要有一个失败就不会进入 console.log(val,'成功');
  var p4 = Promise.all([p1, p2, p3]);
  p4.then(function (val) {  
    console.log(val,'成功');
    return val;
  }).catch(function (val) { //catch 捕获错误
    console.log(val,'失败');
    return val;
  });
```
* Promise.race 返回第一个先执行的Promise
```
  var p1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('p1');
    }, 20)
  });
  var p2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('p2');
    }, 400)
  });
  var p3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('p3');
    }, 1000)
  });

 var p4 = Promise.all([p1, p2, p3]);
  p4.then(function (val) {  
    console.log(val,'成功'); //结果p1 
    return val;
  })
```
# class类的使用
es5 面向继承
```
  function Person(name, age) {
    this.name = name;
    this.age = age;
    Person.prototype.showName = function () {
      return this.name
    }
    Person.prototype.showAge = function () {
      return this.age
    }
  }
```
es6的面向对象
```
class Coder {
    //私有变量
    name(val) {
      console.log(val);
      return val
    } //不用加逗号
    skill(val) {
      //引用name的js
      console.log(`技能`, this.name('小米'), val);
    }
    //原型上的方法
    constructor(a, b) {
      this.a = a
      this.b = b
    }
    add() {
      return this.a + this.b
    }
  }
  let p1 = new Coder(1, 2)
  p1.name('wu')
  p1.skill('web')
  console.log(p1.add());
```
继承
* se5继承
```
  function Person(name,age){
    this.name =name;
    this.age  =age;
    Person.prototype.showName =function(){
      return this.name
    }
    Person.prototype.showAge = function(){
      return this.age
    }
  }
  //apply继承
  function Workey(name,age){
    //调用一个对象的一个方法，用另一个对象替换当前对象
    Person.apply(this,arguments)
  }
  //原型继承
  Worker.prototype=new Person();

  let p1 = new Person('科比',34)
  let p2 = new Person('詹姆斯',24)
  let  w1=new Person('姚明',40);

  console.log(p1.showName())
  console.log(p2.showName())
  console.log(w1.showName())

```
se6继承
```
  class Person2{
    constructor(name='梅西',age=32){
      this.name =name
      this.age =age
      this.jos = '继承应用'
    }
    showAge(){
      return this.age
    }
    showName(){
      return this.name
    }
  }

//se6继承
class Worker2 extends Person2{
  constructor(name,age,jos='不买扫地机'){
    super(name,age); //不覆盖上面内容
    this.jos2 =jos
  }
  showJos(){
    return this.jos
  }
}
  

  var p3=new Person2();
  var p4 = new Person2('c罗',34)
  var w2=new Worker2('内马尔',26); //继承

  console.log(p3.showAge(),p3.showName())
  console.log(p4.showAge(),p4.showName())
  console.log(w2.showAge(),w2.showName(),w2.showJos(),w2.jos2)

```
generator
```
```