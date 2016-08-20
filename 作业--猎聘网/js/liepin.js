/**
 * Created by xks on 2016/7/18.
 */
var oBox=document.getElementById('header');
var aDiv=oBox.getElementsByTagName('div');
var oA1=document.getElementById('oA');
var oSpan=document.getElementById('span');
var oHidden=document.getElementById('hiddenNav');
var oUl=document.getElementById('list').getElementsByTagName('a');
var oClient=document.getElementById('client');
console.log(oClient);
oSpan.onmouseover=function(){
    utils.css(oSpan,'color','white');
}
oSpan.onmouseout=function(){
    utils.css(oSpan,'color','#999999');
}
oA1.onmouseover=function(){
    utils.css(oClient,'display','block')
}
oA1.onmouseout=function(){
    utils.css(oClient,'display','none')
}
oSpan.onclick = function(){
    var bOk=utils.css(oHidden,'display')==='none'?true:false;
    if(bOk){
        utils.css(oHidden,'display','block');
    }else{
        utils.css(oHidden,'display','none');
    }
}
function setColor(curEle){
    var ary=['white'];
    Array.prototype.slice.call(curEle).forEach(function(el,index){
        var col=utils.css(el,'color');
        el.onmouseover=function(){
            var color='white';
            el.style.color=color;
        }
        el.onmouseout=function(){
            el.style.color=col;
        }
    })
}
setColor(oUl);



