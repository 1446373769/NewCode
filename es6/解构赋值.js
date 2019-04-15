//数组解构赋值
{
    {
        let a, b, ret;
        [a, b, ret] = [1, 2, 3];
        //console.log(a, b, ret);
      }
      {
        //数组解构赋值
        let a, b, ret;
        [a, b, ...ret] = [1, 2, 3, 4, 5];
        //console.log(a, b, ret);
      }
      
      {
        //默认赋值
        let a, b, ret;
        [a, b, ret = 3] = [1, 2];
        //console.log(a, b, ret);
      }
      {
        //数组解构赋值常用场景1交换数值
        let a = 1;
        let b = 2;
        [a, b] = [b, a];
        //console.log(a,b);
      }
      {
        //数组解构赋值常用场景2获取函数返回值
        function f() {
          return [1, 2, 3, 4];
        }
        let a, b;
        [a, , , b] = f();
        //console.log(a,b);
      }
      {
        //数组解构赋值常用场景2.x获取函数返回值
        function f() {
          return [1, 2, 3, 4];
        }
        let a, b;
        [a, , ...b] = f();
        //console.log(a,b);
      }
}
//对象解构赋值
{
    {
        //对象结构赋值
        let o = { p: 42, q: true };
        let { p, q } = o;
        //console.log(p, q);
      }
      {
        //对象结构赋值默认值处理
        let { a = 10, b = 5 } = { a: 3 };
        //console.log(a, b);
      }
      {//对象结构嵌套使用
          let metaDate={
              title:'abc',
              test:[{
                  title:'test',
                  description:'desc'
              }]
          }
          let {title:esTitle,test:[{title:cnTitle}]}=metaDate
          console.log(esTitle,cnTitle);
          
      }
}