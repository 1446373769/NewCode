{//map与数组的对比
    let map=new Map();
    let array=[];
    //增
    map.set('t',1);
    array.push({t:1})
    
    //查
    let map_exist=map.has('t');//返回布尔值
    let array_exist=array.find(item=>item.t)//返回对象
    console.log(map_exist);
    console.log(array_exist);
    
    //改
    map.set('t',2);
    array.forEach(item=>item?item.t=2:'')
    console.log(map);
    console.log(array);

    //删
    map.delete('t');
    let index=array.findIndex(item=>item.t);
    array.splice(index,1)
    console.log(map);
    console.log(array);
}
{//set与数组的对比
    let set=new Set();
    let array=[];

    //增
    set.add({'t':1})
    array.push({t:1})
    console.log(set);
    console.log(array);

    //查
    let set_exist=set.has({t:1});
    let array_exist=array.find(item=>item.t)//返回对象
    console.log(set_exist);
    console.log(array_exist);
    //改
    set.forEach(item=>item.t?item.t=2:'')
    array.forEach(item=>item?item.t=2:'')
    console.log(set);
    console.log(array);

    //删
    set.forEach(item=>item.t?set.delete(item):'');
    let index=array.findIndex(item=>item.t);
    array.splice(index,1)
    console.log(set);
    console.log(array);
}
{//map、set、object对比
    let item={t:1}
    let map=new Map()
    let set=new Set()
    let obj={}
    //增
    set.add(item)
    map.set('t',1)
    obj['t']=1
    console.log(set);
    console.log(map);
    console.log(obj);
    //查
    console.log('set_exist',set.has(item));
    console.log('map_exist',map.has('t'));
    console.log('obj_exist',('t')in obj); 
    //改
    map.set('t',2)
    item.t=2 //对于set修改来说直接修改对象，因为set是个引用
    obj['t']=2
    console.log('set',set);
    console.log('map',map);
    console.log('obj',obj);

    //删除
    map.delete('t');
    set.delete(item);
    delete obj['t']
    console.log('set',set);
    console.log('map',map);
    console.log('obj',obj);
}