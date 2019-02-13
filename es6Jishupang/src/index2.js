//对象扩展运算符 ...
//在不确定参数个数的时候使用
function text(...arg) {
  console.log(arg[0]);
  console.log(arg[1]);
  console.log(arg[2]);
  console.log(arg[3]);
}
text(1, 2, 3)

// 数组内容改变
let arr1 = ['aaa', 'bbb', 'ccc']
let arr2 = arr1
console.log(arr2); //["aaa", "bbb", "ccc"]
arr2.push('ddd')
//arr1 和arr2 指向一个地址，所有arr1也变了
console.log(arr1); // ["aaa", "bbb", "ccc", "ddd"]

//数组内容不改变
let arr3 = ['ddd', 'eee', 'fff']
let arr4 = [...arr3]
console.log(arr4);
arr4.push('ggg')
console.log(arr3);
console.log(arr4);

//rest运算，剩余部分不确定可以用
function text2(first, ...arg) {
  console.log(first, arg.length); //结果是7 是从第二个开始数数的
  
  //开辟内存读取内容
  // for (let i = 0; i < arg.length; i++) {
  //   console.log(arg[i]);
  // }
  //for of循环
  for(let value of arg){
    console.log(value);
  }
}
text2(0, 1, 2, 3, 4, 5, 6, 7);