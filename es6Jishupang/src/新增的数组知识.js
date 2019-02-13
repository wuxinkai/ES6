//json 数字格式 必须到length
let json ={
  "0":'小米',
  "1":'华为',
  "2":'三星',
  length:3
}

//Array.from, json字符串转成数组
let arr=Array.from(json);
console.log(arr);

//字符串转为 数字类型
let string = '2,3,4,5'
let arrNum  =string.split(',')
console.log(arrNum); //转成数组
let  arr2 =[]
for(let value of arrNum){
  arr2.push(Number(value))
}
console.log(arr2); //转成字符串

//Array.of 数字转换成数组。
console.log(Array.of(6,7,8,9));
//将字符串转为数组
let arr3 =Array.of('222','333','444');
console.log(arr3);

//find查找
// let arr4=[1,2,3,4,5,6,7,8,9];
let arr4=['000','111','222']
//value：表示当前查找的值。
//index：表示当前查找的数组索引。
//arr：表示当前数组。
let box = arr4.find(function(value,index,arr){
  return value == '222';
})
console.log(box);

//fill( )实例方法 替换数组中的某一项
let arr5=[0,1,2,3,4,5,6,7,8,9];
arr5.fill('替换',2,5) //将2,3，4替换
console.log(arr5);

//数组的循环 for of
let arr6=['本田','丰田','奔驰']
//entries() 索引和值都能出来
for (let [index,item] of arr6.entries()){
    console.log(index,item);
}

let arr8=['jspang','技术胖','大胖逼逼叨']
let list=arr8.entries();
console.log(list.next().value);
console.log("********************");
console.log(list.next().value);
console.log("--------------------");
console.log(list.next().value);