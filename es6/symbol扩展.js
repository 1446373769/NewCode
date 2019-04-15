{
    {//symbol定义的变量唯一
        //声明
        let a1=Symbol();
        let a2=Symbol();
        console.log(a1===a2);//false
        //另一种声明
        let a3=Symbol.for('a3');
        let a4=Symbol.for('a3');//此处a3是一个key值，即a4与a3的值是一致的
    }
    {
        //应用场景
        let a1=Symbol.for('abc');
        let obj={ 
            [a1]:'123',
            'abc':345,
            'c':456
        }
        //对象中有用到symbol做key值，用for-in是取不到symbol属性的
        for(let [key,value] of Object.entries(obj)){
            console.log(key,':',value); 
        }
        //要用以下方法取出symbol定义的属性
        Object.getOwnPropertySymbols(obj).forEach(function(item){
            console.log(obj[item]);
        })
        //要想两种都取到要用以下API
        Reflect.ownKeys(obj).forEach(item => {
            console.log(obj[item]);
        });
    }
}