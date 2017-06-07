const fs = require('fs');
fs.readFile('let.html',function (err,data) {
   var p1 = new Promise(function (resolve,reject) {
        if(err){
            reject(err)
        }else {
            resolve(data)
        }
   });
    p1.then(function (value) { //成功数据
        console.log(value.toString())
    },function (value) { //失败数据
        console.log(value)
    })
})