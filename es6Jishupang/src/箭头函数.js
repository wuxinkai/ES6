function add(a, b = 3) { //b=3 给默认值
  return a + b
}
console.log(add(1, 2));

//this是window
//箭头函数不是使用构造函数
add2 = (a, b = 1) => {
  return a + b
}
console.log(add2(1, 6));