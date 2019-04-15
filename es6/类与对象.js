{
    {//基本定义和生成实例
        class Parent{
            constructor(name='zjq'){
                this.name=name;
            }
        }
        let v_parent=new Parent('v')
        console.log(v_parent);
        
    }
    {
        class Parent{
            constructor(name='zjq'){
                this.name=name;
            }
        }
        //继承传递参数
        class Child extends Parent{
            constructor(name='child'){
                super(name);
                this.type='one'//在添加子类属性时，要放在super之后
            }
        }
        console.log('继承',new Child());
        
    }
    {
        //getter&&setter
        class Parent{
            constructor(name='zjq'){
                this.name=name;
            }
            get longName(){
                return 'mk'+this.name
            }
            set longName(value){
                this.name=value
            }
        }
        let parent=new Parent()
        console.log('getter',parent.longName);
        parent.longName='hello'
        console.log('setter',parent.longName); 
    }
    {
        class Parent{//静态方法,通过类去调用
            constructor(name='zjq'){
                this.name=name;
            }
            static tell(){
                console.log('静态方法'); 
            }
        }
        Parent.tell();
    }
    {
        class Parent{//静态属性，没有关键词，直接在类上定义,通过类去调用
            constructor(name='zjq'){
                this.name=name;
            } 
        }
        Parent.type='test' 
        console.log(Parent.type);
        
    }
}