// 循环体外会被污染
for(var i=0; i<5; i++){
  console.log(`var循环体内 `+ i);
}
//会在循环体外获取 到第5个
console.log(`var循环体外 `+ i);

for(let j=0;j<5;j++){
  console.log('let循环体中:'+j);
  }
  //Uncaught ReferenceError: j is not defined  获取不到外面的直接报错
  // console.log('let循环体外:'+j);

  // var  全局声明
  // let  局部声明
  // const 声明后无法改变


//数组是按照顺序赋值  结构赋值给默认值
let  [a,b='，，，哈哈哈'] = ['这是我2我的']
console.log(a+b);

//undefined 和null 的区别
let [c,d='没有改变'] = ['haha',undefined]
console.log(c,d);
let [e,f='发生改变'] = ['haha',null]
console.log(e,f);

//对象按照 属性名
let {aaa,bbb} ={aaa:'123','bbb':'改备案'}
console.log(aaa,bbb);

//先声明后赋值出现的问题,解决办法
let foo
({foo} = {foo:"0000"})
console.log(foo);

// 在es6转es5单引号要比双引号 压缩要快

//字符串结构赋值
const [g,h,k]="西游记";
console.log(g,h,k);