{
    {
        //异步调用基本定义
        let  ajax=function (callback) {
            console.log('run')
            setTimeout(() => {
                callback&&callback.call()
            }, 1000);
        }
        ajax(function () {
            console.log('timeout1');
        })
    }
    {//promise的基本定义
        let ajax=function () {
            console.log('run2');
            return new Promise(function(resolve,reject){
                setTimeout(() => {
                    resolve()
                }, 1000);
            })
        }
        //then有两个参数，then（resolve，reject）第一个参数为处理resolve调用，第二个为处理reject调用
        ajax().then(function () {
            console.log('promise','timeout2');
        })
    }
    {
        let ajax=function () {
            console.log('run3');
            return new Promise(function(resolve,reject){
                setTimeout(() => {
                    resolve()
                }, 1000);
            })
        }
        ajax().then(function () {
            return new Promise(function (resolve,reject) {
                setTimeout(() => {
                    resolve()
                }, 1000);
            })
        }).then(function () {
            console.log('timeout3');
        })
    }
    {
        let ajax=function (num) {
            console.log('run4');
            return new Promise(function(resolve,reject){
                if (num>5){
                    resolve()
                }else{
                    throw new Error('出错了')
                }
            })
        }
        ajax(3).then(function () {
            console.log('log',6);
        }).catch(function(err){
            console.error('catch',err)
        })
    }
}