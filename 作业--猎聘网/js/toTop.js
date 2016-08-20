/**
 * Created by dazhi on 2016/8/19.
 */
(function () {
    var oJump = document.getElementById('jump');
    var oInp = oJump.getElementsByTagName('input')[0];
    var oBtn = document.getElementById('top');
    var bOk = false;
    var timer1 = null;
    oInp.onfocus = function () {
        this.value = '';
    };
    oInp.onclick = function (e) {
        e = e || window.event;
        e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;
    };
    document.body.onclick = function () {
        oInp.value = '输入职位关键词：如 销售总监等'
    };
    window.onscroll = function () {
        if (utils.win('scrollTop') >= 360) {
            utils.css(oJump, 'height', '78');
            utils.css(oBtn, 'display', 'block');
            utils.css(oJump, 'transition', '0.3s');

        } else {
            utils.css(oJump, 'height', '0');
            utils.css(oBtn, 'display', 'none')
        }
        if (bOk) {
            clearInterval(timer1)
        }
        bOk = true;
    };
    oBtn.onclick = function () {
        var target = utils.win('scrollTop');
        var duration = 2000;
        var interval = 50;
        var step = target / duration * interval;
        timer1 = setInterval(function () {
            var curTop = utils.win('scrollTop');
            if (curTop <= 0) {
                clearInterval(timer1);
                return
            }
            curTop -= step;
            utils.win('scrollTop', curTop);
            bOk = false
        }, 30)
    }
})();