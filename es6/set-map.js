{
  {
    //set
    {
      //Set声明,set中数据唯一,重复则不生效
      let list = new Set();
      list.add(5);
      list.add(7);
      list.add(5);
      console.log("size", list.size);
    }
    {
      //另一种声明
      let arr = [1, 2, 3, 4];
      let list = new Set(arr);
      console.log("size", list.size);
    }
    {
      //利用set去重,注意set不会转换数据类型
      arr = [1, 2, 3, 4, 1, 2, "2"];
      console.log(arr);
      let list = new Set(arr);
      console.log(list);
    }
    {
      //常用方法
      let arr = ["has", "add", "delete"];
      let list = new Set(arr);
      console.log("has", list.has("add")); //has判断是否包含该数据
      list.delete("add"); //删除数据
      console.log(list);
      list.clear(); //清空set
      console.log(list);
    }
    {
      //取出set中数据
      let arr = ["has", "add", "delete"];
      let list = new Set(arr);
      for (let key of list.keys()) {
        console.log("key:", key);
      } //set中key和value一致
      for (let value of list.values()) {
        console.log("value:", value);
      }
      for (let [key, value] of list.entries()) {
        console.log(key, ":", value);
      }
    }
  }
  {
    //weakset数据只能是对象，且都是弱引用
    let weakset = new WeakSet();
    //不支持size方法，不支持for-each
  }
  {
    {
      //map定义1
      let arr = ["123", "456"];
      let map = new Map();
      //map.set(key,value),第一个参数为key，第二个参数为value
      map.set(arr, 456); //map添加元素使用set方法，切记与Set中添加元素add()区分
      console.log(map, map.get(arr));
    }
    {
      //map定义2以及相关方法
      let map = new Map([["a", 123], ["b", 456]]);
      console.log(map);
      console.log("size", map.size); //size方法
      console.log("delete", map.delete("a"), map); //delete方法
      console.log("clear", map.clear(), map); //clear方法
      //map 的遍历与set完全一致
    }
  }
  {
    // WeakMap与map的区别和weakset与set的区别一致，见上
  }
}
