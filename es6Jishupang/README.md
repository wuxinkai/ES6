### dist 是转义好的内容，src是es6的写法
```
```
### (1)初始化 生成package
```
npm  init -y
```
### (2)安装转换插件 全局安装Babel-cli
```
npm install -g babel-cli
```
### (3)本地安装babel-preset-es2015 和 babel-cli ,必须安装否则转换不成功
```
npm install --save-dev babel-preset-es2015 babel-cli
```
### (4)在根目录下创建 .babelrc 文件
```
{
    "presets":[
        "es2015"
    ],
    "plugins":[]
}
```
### (5)执行 npm run build  在package.js中修改scripts里的内容
```
"scripts": {
    "build": "babel src/index.js -o dist/index.js"
  },
```
### 新的声明方式
* var：它是variable的简写，可以理解成变量的意思。
* let：它在英文中是“让”的意思，也可以理解为一种声明的意思。
* const：它在英文中也是常量的意思，在ES6也是用来声明常量的，常量你可以简单理解为不变的量
```
for(var i=0;i<10;i++){
console.log('循环体中:'+i); //1,2,3,4,5,6,7,8,9
}
console.log('循环体外:'+i); //10

for(let i=0;i<10;i++){
console.log('循环体中:'+i); //1,2,3,4,5,6,7,8,9
}
console.log('循环体外:'+i); //报错
```
### 变量的解构赋值
数组结构赋值，安装顺序结构赋值
```
let [a,b="赋值"]=['结构']

console.log(a+b) //结构赋值
```
对象结构赋值：安装属性名结构赋值
```
let {foo,bar} = {foo:'结构',bar:'赋值'};
console.log(foo+bar) //结构赋值

先声明后赋值
let foo;
({foo} ={foo:'必须加中括号才可以'});
console.log(foo); //控制台输出jspang
```
字符串结构赋值
```
const [a,b,c]="西游记";
console.log(a);//西
console.log(b);//游
console.log(c);//记
```
### 扩展运算符
数组arr1的内容改变
```
let arr1 = ['aaa','bbb','ccc']
let arr2 = arr1
console.log(arr2); //["aaa", "bbb", "ccc"]
arr2.push('ddd')
//arr1 和arr2 指向一个地址，所有arr1也变了
console.log(arr1); // ["aaa", "bbb", "ccc", "ddd"]
```
数组arr2的内容不变
```
let arr3 =['ddd','eee','fff']
let arr4 =[...arr3]
console.log(arr4); //['ddd','eee','fff']
arr4.push('ggg')
console.log(arr3); //['ddd','eee','fff']
console.log(arr4); //['ddd','eee','fff','ggg']
```
### rest运算符
```
//rest运算，剩余部分不确定可以用
function text2(first, ...arg) {
  console.log(first, arg.length); //结果是first =0,  arg.length=7 是从第二个开始数数的
  
  //开辟内存读取内容
  // for (let i = 0; i < arg.length; i++) {
  //   console.log(arg[i]); // 1,2,3,4,5,6,7
  // }

  //for of循环 不会开辟内容
  for(let value of arg){
    console.log(value); //1, 2, 3, 4, 5, 6, 7
  }
}
text2(0, 1, 2, 3, 4, 5, 6, 7);
```
### 字符串模板，字符串查询
includes()字符串查询
```
let f = '用includes'
let k = 'ES6'
let r = '引值'
let g = 'ES6直接用includes就可以判断，不再返回索引值，'

//查找里面有没有
console.log(g.includes(f));

//查找开头有没有
console.log(g.startsWith(k));

//查找结尾有没有
console.log(g.endsWith(r));

//赋值字符串,赋值三次
console.log(f.repeat(3));
```
### 数字操作
判断是否是数字
```
let a= 11/4;
console.log(Number.isFinite(a));//true
console.log(Number.isFinite(NaN));//false
console.log(Number.isFinite(undefined));//false
```
判断是否是整数
```
let a=123.1;
console.log(Number.isInteger(a)); //false
```

### ES6中新增的数组知识
Array.from 的json转为数组
```
let  json = {
    '0': '000',
    '1': '111',
    '2': '222',
    length:3
}
let arr=Array.from(json);
console.log(arr) // ["000", "111", "222"]
```
Array.of 转为对象
```
console.log(Array.of(6,7,8,9)); //[6,7,8,9]
```
find() 实例方法,
```
let arr4=[1,2,3,4,5,6,7,8,9];
//value：表示当前查找的值。
//index：表示当前查找的数组索引。
//arr：表示当前数组。

arr4.find(function(value,index,arr){
  console.log(value,index,arr);
})
```
### 数组的循环 for of
```
let arr6=['本田','丰田','奔驰']
//entries() 索引和值都能出来
for (let [index,item] of arr6.entries()){
    console.log(index,item);
}
```
### 箭头函数

```

```