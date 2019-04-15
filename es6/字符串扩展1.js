
{//判断字符串中是不是包含某些字符或以某些字符为起始或结尾
    require('babel-polyfill') 
    {
        let str="string";
        console.log('include',str.includes('s'));//是否包含
        console.log('start',str.startsWith('s'));//判断是否起始值
        console.log('end',str.endsWith('s'));//判断是否结束
        console.log('repeat',str.repeat(2));//将字符串重复n(n=2)次
    }
    {//模板字符串
        let name='list';
        let info='hello';
        let m=`i am ${name},${info}`
        console.log(m);
    }
    {//es7草案
        console.log('1'.padStart(2,'0'));//第一个参数为长度，第二个参数为补充字符，padStart前补 
        console.log('1'.padEnd(2,'0'));//第一个参数为长度，第二个参数为补充字符，padStart后补        
    }
    {//标签字符串模板,用来处理xss攻击，多语言处理
        let user={
            name:'zjq',
            info:'hello'
        }
        console.log(abc`i am ${user.name},${user.info}`)
        function abc(s,v1,v2) {
            console.log(s,v1,v2);
            return s+v1+v2
        }
    }
}
