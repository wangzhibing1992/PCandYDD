/**
 * Created by dazhi on 2016/8/19.
 */
(function(){
    var oBox = document.getElementById('carousel');
    var oBoxInner = oBox.getElementsByTagName('div')[0];
    var aDiv = oBoxInner.getElementsByTagName('div');
    var aImg = oBoxInner.getElementsByTagName('img');
    var oUl = oBox.getElementsByTagName('ul')[0];
    var aLi = oBox.getElementsByTagName('li');

    zhufengAnimate(aDiv[0], {opacity: 1}, 1000);
    var step = 0;//用step=0来控制让哪张图片显示；
    var autoTimer = null;
    var interval = 2000;
    //1.图片渐隐渐现
    //开启一个定时
    clearInterval(autoTimer);
    autoTimer = setInterval(autoMove, interval)
    function autoMove() {
        if (step >= aDiv.length - 1) {
            step = -1;
        }
        step++;
        setBanner();

    }

    function setBanner() {
        for (var i = 0; i < aDiv.length; i++) {
            var curEle = aDiv[i];
            if (i === step) {
                utils.css(curEle, 'zIndex', 1);
                zhufengAnimate(curEle, {opacity: 1}, 1000, function () {
                    var siblings = utils.siblings(this);
                    for (var k = 0; k < siblings.length; k++) {
                        utils.css(siblings[k], 'opacity', 0)
                    }
                })
                continue;
            }
            utils.css(curEle, 'zIndex', 0);
        }
        bannerTip();

    };
    function bannerTip() {
        for (var i = 0; i < aLi.length; i++) {
            var curEle = aLi[i];
            curEle.className = i === step ? 'bg' : '';
        }
    }

    //3.移入停止移出继续
    oBox.onmouseover = function () {
        clearInterval(autoTimer);
    };
    oBox.onmouseout = function () {
        autoTimer = setInterval(autoMove, interval);
    };
    //4.点击焦点手动切换
    handleChange();
    function handleChange() {
        for (var i = 0; i < aLi.length; i++) {
            (function (index) {//闭包思想
                aLi[index].onclick = function () {
                    step = index;
                    setBanner();
                }
            })(i);
        }
    };
})()