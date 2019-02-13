//判断是否是数字
let a= 11/4;
console.log(Number.isFinite(a));//true
console.log(Number.isFinite('不是数字'));//false
console.log(Number.isFinite(NaN));//false
console.log(Number.isFinite(undefined));//false

//判断是否是NaN
console.log(Number.isNaN(NaN)); //true

// 整数转换Number.parseInt(xxx)和浮点型转换Number.parseFloat(xxx)
let b='9.18';
console.log(Number.parseInt(b)); //转成整数
console.log(Number.parseFloat(b)); //不变
