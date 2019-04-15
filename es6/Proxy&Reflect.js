{
    {
        let obj = {
            time: '2017-01-11',
            name: 'net',
            _r: '2017'
        };
        let monitor = new Proxy(obj, {
            // 拦截对象属性读取
            // get(target,key){
            //     return target[key].replace('2017','2018')
            // },
            //设置对象属性
            set(target, key, value) {
                if (key === 'name') {
                    return target[key] = value;
                } else {
                    return target[key]
                }
            },
            //判断当前对象是否有某属性,拦截key in object操作
            has(target, key) {
                if (key === 'name') {
                    return target[key]
                } else {
                    return false
                }
            },
            //拦截删除操作
            deleteProperty(target, key) {
                if (key.indexOf('_') > -1) {
                    delete target[key]
                    return true;
                } else {
                    return target[key]
                }
            },
            //拦截Objeckt.keys,Objeckt.getOwnPropertySymbols,Objeckt.getOwnPropertyNames方法
            ownKeys(target) {
                return Object.keys(target).filter(item => item != 'time')
            }

        });
        console.log('get', monitor.time, monitor.name);

        monitor.time = '2019';
        monitor.name = 'newNet'
        console.log('set', monitor.time, monitor.name);

        console.log('has:', 'time' in monitor, 'name' in monitor);

        // delete monitor.time;
        // console.log('delete',monitor);

        // delete monitor._r;
        // console.log('delete',monitor);

        console.log('ownKeys', Object.keys(monitor));


    } {
        let obj = {
            time: '2017-01-11',
            name: 'net',
            _r: '2017'
        };

        console.log(Reflect.get(obj, 'time')); //get
        Reflect.set(obj, 'name', 'zjq')
        console.log(Reflect.get(obj, 'name'));
        console.log('hasName:', Reflect.has(obj, 'name'));
    } 
    { //应用场景
        //数据校验
        function validator(target, validator) {
            return new Proxy(target,{
                _validator: validator,
                set(target, key, value, proxy) {
                    if (target.hasOwnProperty(key)) {
                        let va = this._validator[key]
                        if (!!va(value)) {
                            return Reflect.set(target, key, value, proxy)
                        }else{
                            throw Error(`不能设置${key}到${value}`)
                        }
                    } else {
                        throw Error(`${key}不存在`)
                    }
                }
            })
        
        }
        const personValidators={
            name(val){
                return typeof val==='string';

            },
            age(val){
                return typeof val==='number'&&val>18
            }
        }
        class Person{
            constructor(name,age){
                this.name=name;
                this.age=age;
                return validator(this,personValidators)
            }
        }
        const person=new Person('lilei',11);
        console.info(person)
        person.name='hanmeimei'
        console.info(person)
    }
}