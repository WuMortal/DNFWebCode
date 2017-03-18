/**
 * Created by hasee on 2016/12/11.
 */
var i=0;
var len;
var timer;
$(function () {
    len=$(".lunboImg ul li").length;
    timer=setInterval("pre()",3000);
    $(".lunboImg").mouseover(function () {
        clearInterval(timer);
        }).mouseout(function () {
          timer=setInterval("pre()",3000);
        })
        $(".next").click(function () {
            next();
        })
        $(".pre").click(function () {
            pre();
        })
})
        function  show(s) {
            console.log(i);
            $(".active").removeClass("active");
            $(".lunboImg ul li").eq(s).addClass("active");
        }
        function next() {
            i++;
            if(i==len){
                i=0;
            }
            show(i);
        }
        function pre() {
            i--;
            if(i<0){
                i=len-1;}
            show(i);
        }

   /* (function () {
        var times=null;
        function changeImage() {
           (".click div a").removeClass("active1");
           (".click a:nth-child("+times+")").addClass("active1");
            times++;
        }
        setInterval(function () {
            changeImage();
        },500);
    })*/