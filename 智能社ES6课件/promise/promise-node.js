let fs =require('fs');
fs.readFile('promise-all.html',function (err,data) {
    var p1 = new Promise((resolve, reject) => {
        if(err){
            reject(err)
        }else {
            resolve(data)
        }
    })
    p1.then(function (value) {
        console.log(value.toString())
    },function () {

    })
});
// node promise-node  成功