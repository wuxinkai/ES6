let a = ["A","B","C"]
var b = new Set(["D","E","F"])
let c = new Map([[1,'X'],[2,'Y'],[3,'Z']])

let d = ["A","B","C"]
d.name ='新增'

//（1）获取的是值
// for(let value of a){
//   console.log(value);// A, B, C
// }

// //（1）获取的是下标
// for(let x in a){
//   console.log(x);// 0 1 2
// }


//（2）获取每一个值
for(let x of b){
  console.log(x);// D,E,F
}
// (2) 不起作用
for(let x in a){
  console.log(x);
}

//（3）遍历map集合
//可以拿到值，也可以拿到属性名
for(let x of c){
  console.log(x[0]+ "==="+ x[1]);
}
//什么都拿不到 没有反应
for(let x in c){
  console.log(x[0]+"==="+x[1]);
}

//(4)新增后
//不会新增内容
for(let value of d){
  console.log(value);// A, B, C
}
//会新增内容
for(let value in d){
  console.log(value);// A, B, C ,name
}
