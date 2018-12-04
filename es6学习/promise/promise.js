/**
 * Created by strive-智能社 on 2016/8/9.
 */
const fs=require('fs');

fs.readFile('let.html',function(err,data){
    var p1=new Promise(function(resolve,reject){
        if(err){
            reject(err);
        }else{
            resolve(data);
        }
    });

    p1.then(function(value){
        console.log(value.toString()); //读取成功 
    },function(value){
        console.log(value);
    });
});

// 执行 node promise.js






































