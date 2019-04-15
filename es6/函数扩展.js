{
    { //函数默认值,默认值后边不允许有没有默认值的参数
        function test(x, y = 'world') {
            console.log('默认值', x, y);
        }
        test('hello');
    } 
    {
        let x = 'test'

        function test2(x, y = x) {
            console.log('作用域', x, y);
        }

        function test3(c, y = x) {
            console.log('作用域', c, y);
        }
        test2('kill');
        test2();
        test3('kill');
    } 
    { //rest参数之后
        function test4(...arg) {
            for (let v of arg) {
                console.log('rest', v);
            }
        }
        test4(1, 2, 3, 'a', 4)
    } 
    { //箭头函数
        let arrow = v => v * 2;
        console.log(arrow(3));
        let arrow2=()=>3;
        console.log(arrow2());
    }
    {//尾调用
        function tail(x){
            console.log('tail',x);
        }
        function fx(x){
            return tail(x)
        }
        fx(3)
    }
}