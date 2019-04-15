{
    {
        let arr=Array.of(3,4,'foo',9)//将一组数据转换为数组,若不传参则返回空数组
        console.log('arr=',arr);
    }
    {//通过回调函数对数组做运算
        console.log(Array.from([1,3,4],function(item){
            return item*2;
        }));
    }
    // {//在index运行
    //     let p=document.querySelectorAll('p');
    //     let pArr=Array.from(p);//将伪数组转换为真正的数组
    //     pArr.forEach(function(item){
    //         console.log(item.textContent);
    //     });
    // }
    {//fill(content,pos,last)content:替换的内容，pos：开始的位置，last：结束位置，后两个参数不写则为填充
        console.log('fill-7',[1,'a',undefined].fill(7));
        console.log('fill,pos',['a',1,'c','d','f'].fill(7,2,4)); 
    }
    {//用keys获取数组索引值
        for(let index of ['1','a','ks'].keys()){
            console.log('keys',index);
        }
        //用values获取数组值
        for(let index of ['1','a','ks'].values()){
            console.log('values',index);
        }
        //用entries获取索引和数值，同样适用于对象
        for(let [index,values] of ['1','a','ks'].entries()){
            console.log('[keys,values]',index,values);
        }
        {
            //copyWithin(position,first,last)position:从position位置开始替换，first:替换内容的开始位置，last:替换内我那个的结束位置
            console.log([1,2,3,4,5].copyWithin(0,2,4));
        }
    }
    {//查找find只找第一个返回的是值，findIndex只找第一个返回索引
        console.log([1,2,3,4,5,6].find(function(item){
            return item>3
        }));
        console.log([1,2,3,4,5,6].findIndex(function(item){
            return item>3
        }));
    }
    {//与find解决问题差不多，解决了NaN的问题
        console.log([1,2,3,4,5,NaN].includes(2));
        console.log([1,2,3,4,5,NaN].includes(NaN))
    }
}