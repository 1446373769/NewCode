function getLength(str){
    return str.replace(/[^\x00-xff]/g,'xx').length;
}
function findStr(str,n){
    var tmp=0;
    for(var i=0;i<str.length;i++){
        if(str.charAt(i)==n){
            tmp++;
        }
    }
    return tmp;
}
window.onload = function () {
    var aInput = document.getElementsByTagName('input');
    var oName = aInput[0];
    var psw = aInput[1];
    var psw1 = aInput[2];
    var aP = document.getElementsByTagName('p');
    var name_msg = aP[0];
    var psw_msg = aP[1];
    var psw1_msg = aP[2];
    var count = document.getElementById('count');
    var aEm = document.getElementsByTagName('li');
    var name_length=0;

    //用户名
    oName.onfocus=function(){
        name_msg.style.display='block';
        name_msg.innerHTML='<i class="ati"></i> 5-25个字符，一个汉子为两个字符，推荐使用中文名';
    };
    oName.onkeyup=function(){
        count.style.visibility='visible';
        name_length=getLength(this.value);
        count.innerHTML=name_length+'个字符';
        if(name_length==0){
            count.style.visibility='hidden';
        }
    };
    oName.onblur=function(){
        var re = /[^\w\u4e00-\u9fa5]/g;
        if(re.test(this.value)){
            name_msg.innerHTML='<i class="no"></i>含有非法字符';
        }else if(this.value==''){
            name_msg.innerHTML='<i class="no"></i>不能为空';
        }else if(name_length>25){
            name_msg.innerHTML='<i class="no"></i>长度超过25个字符';
        }else if(name_length<6){
            name_msg.innerHTML='<i class="no"></i>长度少于6个字符';
        }else{
            name_msg.innerHTML='<i class="ok"></i>OK!';
        }
    };
    //密码
    psw.onfocus=function(){
        psw_msg.style.display='block';
        psw_msg.innerHTML='<i class="ati"></i>6-16个字符，请使用字母加数字或者符号的组合密码，不能单独使用字母、数字或符号';
    };
    psw.onblur=function(){
        var m=findStr(psw.value,psw.value[0]);
        var re_n=/[^\d]/g;
        var re_m=/[^a-zA-Z]/g;
        if(this.value==''){
            psw_msg.innerHTML='<i class="no"></i>不能为空';
        }else if(m==this.value.length){
            psw_msg.innerHTML='<i class="no"></i>不能用相同字符';
        }else if(this.value.length<6||this.value.length>16){
            psw_msg.innerHTML='<i class="no"></i>字符长度应为6-16字符';
        }else if(!re_n.test(this.value)){
            psw_msg.innerHTML='<i class="no"></i>不能全为数字';
        }else if(!re_m.test(this.value)){
            psw_msg.innerHTML='<i class="no"></i>不能全为字母';
        }else{
            psw_msg.innerHTML='<i class="ok"></i>OK!';
        }
    };
    psw.onkeyup=function(){
        if(this.value.length>5){
            aEm[1].className='active';
            psw1.removeAttribute('disabled');
            psw1_msg.style.display='block';
        }else{
            aEm[1].className='kiss';
            psw1.setAttribute('disabled');
            psw1_msg.style.display='none';
        }
        if(this.value.length>10){
            aEm[2].className='active';
            psw1.removeAttribute('disabled');
            psw1_msg.style.display='block';
        }else{
            aEm[2].className='kiss';
        }
    };
    //确认密码
    
    psw1.onblur=function(){
        if(this.value!=psw.value){
            psw1_msg.innerHTML='<i class="no"></i>两次密码不一致';
        }else{
            psw1_msg.innerHTML='<i class="ok"></i>OK!';
        }
    };
};