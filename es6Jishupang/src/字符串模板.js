let a = 123
//支持标签
let blog = `${a}这个就可以,<b>需要包裹标签</b>`
let c = 123
//支持计算
let result = `${a+c}`
console.log(result);

document.write(blog);


//**** 字符串查找
let e = 'ES5的写法'
let d = '先来看一下ES5的写法，其实这种方法并不实用，给我们的索引位置'
//es5的写法包含
console.log(d.indexOf(e) > 0);

//es6的写法
let f = '用includes'
let k = 'ES6'
let r = '引值'
let g = 'ES6直接用includes就可以判断，不再返回索引值'
//查找里面有没有
console.log(g.includes(f));
//查找开头有没有
console.log(g.startsWith(k));
//查找结尾有没有
console.log(g.endsWith(r));

//赋值字符串
console.log(f.repeat(3));