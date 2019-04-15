//字符串扩展
{
    require('babel-polyfill') 
    {//如何处理Unix编码大于'\uxfff'的情况
        console.log('a', `\u0061`);
        console.log('s', `\u20BB7`);
        console.log('s', `\u{20BB7}`);
    } 
    { //es5中的处理
        let s = '𠮷';
        console.log('s的长度', s.length);
        console.log('0', s.charAt(0)); //取第一个长度位置内容
        console.log('1', s.charAt(1));
        console.log('at0', s.charCodeAt(0)); //取第一个长度位置ascll码值
        console.log('at1', s.charCodeAt(1));
    } 
    { //es6中处理
        let s1 = '𠮷a';
        console.log('length', s1.length);
        console.log('code0', s1.codePointAt(0).toString(16));
        console.log('code1', s1.codePointAt(1));
    } 
    { //根据码值取字符
        console.log(String.fromCharCode('0x20bb7')); //es5方法
        console.log(String.fromCodePoint('0x20bb7')); //es6方法
        //其主要区别就是能不能识别Unix字符
    } 
    {//遍历字符串的区别
        let str = '\u{20bb7}abc'
        for (let i = 0; i < str.length; i++) { //es5遍历字符串
            console.log('es5', str[i])
        }
        for (let code of str) {
            console.log('es6', code); //es6遍历

        }
    }
}