{
    {
        // 所有图片加载完再加载页面
        function loading(src) {
            return new Promise((resolve,reject)=>{
                let img=document.createElement('img');
                img.src=src;
                img.onload=function(){
                    resolve(img);
                }
                img.onerror=function (err) {
                    reject(err)
                }
            })
        }
        function showImage(imgs) {
            imgs.forEach(img => {
                document.body.appendChild(img)
            });
        }
        //promise.all将多个promise实例当成一个promise
        // Promise.all([
        //     loading('http://www.pptbz.com/pptpic/UploadFiles_6909/201203/2012031220134655.jpg'),
        //     loading('http://img4.duitang.com/uploads/item/201210/06/20121006120433_CZXuC.jpeg'),
        //     loading('http://t8.baidu.com/it/u=3660968530,985748925&fm=191&app=48&wm=1,17,90,45,20,7&wmo=0,0&n=0&g=0n&f=JPEG?sec=1853310920&t=9b4f100f0eedfe853fad24a58a4e1ad7')
        // ]).then(showImage)
    }
    //只要有图片加载完就显示,其余的将不再显示
    {
        function loading(src) {
            return new Promise((resolve,reject)=>{
                let img=document.createElement('img');
                img.src=src;
                img.onload=function(){
                    resolve(img);
                }
                img.onerror=function (err) {
                    reject(err)
                }
            })
        }
        function showImgs(img) {
            let p=document.createElement('p');
            p.appendChild(img);
            document.body.appendChild(p)
        }
        Promise.race([//只要有图片加载完就显示,其余的将不再显示
            loading('http://www.pptbz.com/pptpic/UploadFiles_6909/201203/2012031220134655.jpg'),
            loading('http://img4.duitang.com/uploads/item/201210/06/20121006120433_CZXuC.jpeg'),
            loading('http://img4.duitang.com/up0433_CZXuC.jpeg')//该url链接是错误的
        ]).then(showImgs)
    }
}