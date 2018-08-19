/**
 * Created by Du Mingwei on 2018/8/18.
 */
function back(){
    window.history.back();
}

function totop(){
    mui('.wrap2').scroll().scrollTo(0,0,500);//500毫秒滚动到顶
}



$(function() {
    setTimeout(function () {
        //让区域滚动生效
        mui('.mui-scroll-wrapper').scroll();

        //让图片轮播生效
        mui('.mui-slider').slider({
            interval:5000//自动轮播周期，若为0则不自动播放，默认为0；
        });
    },5000)
});
