{ //数值扩展
    {
        console.log(0b01110); //二进制
        console.log(0o767); //八进制
    }
    {
        console.log('15',Number.isFinite(15));//判断一个数是否有尽
        console.log('NaN',Number.isFinite(NaN));
        console.log('1/0',Number.isFinite(1/0));
        console.log('NaN',Number.isNaN(NaN)); 
    }
    {
        console.log('25',Number.isInteger(25));//判断是否是整数
        console.log('25.0',Number.isInteger(25.0));
        console.log('25.1',Number.isInteger(25.1));
        console.log('25',Number.isInteger('25'));
    }
    {
        console.log(Number.MAX_SAFE_INTEGER);//常量:上限值
        console.log(Number.MIN_SAFE_INTEGER);//常量:下限值
        console.log('10',Number.isSafeInteger(10));//判断一个数是否在-2^53-2^53之间
        console.log('a',Number.isSafeInteger('a'));
    }
    {
        console.log('4.1取整',Math.trunc(4.1));//取整
        console.log('-5',Math.sign(-5)); //判断一个数是正数还是负数
        console.log('5',Math.sign(5));
        console.log('5',Math.sign('5'));//自动转换
        console.log('foo',Math.sign('foo'));
    }
    {
        console.log('-1',Math.cbrt(-1));//立方根
        //三角函数，对数查看相关api
    }
}