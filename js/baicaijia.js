/**
 * Created by Du Mingwei on 2018/8/18.
 */
$(function(){


    mui('.wrap2').scroll({
            scrollY: true, //是否竖向滚动
            indicators: true, //是否显示滚动条
            deceleration:0.0006, //阻尼系数,系数越小滑动越灵敏
            bounce: true //是否启用回弹
    });


    $('.tablist').on('click','p', function () {
        $(this).addClass('active').siblings().removeClass('active');
    })

    function renderlist(){
        $.ajax({
            url:'http://mmb.ittun.com/api/getbaicaijiatitle',

            type:'get',

            success: function (res) {
                var html=template('tablist',res);

                $(".tablist").html(html);
            }
        })
    }

    renderlist();
    //让区域滚动生效
    mui('.wrap1').scroll();

    function renderproduct(titleId){
        $.ajax({
            url:'http://mmb.ittun.com/api/getbaicaijiaproduct',

            type:'get',

            data:{titleid:titleId},
            
            success: function (res) {
                var html=template('productlist',res);

                $('.productlist').html(html);
            }
        })
    }

    $('.tablist').on('click','p', function () {
        var titleId=$(this).data('id');
        //alert(titleId);

        renderproduct(titleId);
    })

    renderproduct(0);
    //让区域滚动生效
    mui('.wrap2').scroll();

    $('.arrow').hide();

    document.querySelector('.wrap2' ).addEventListener('scroll', function (e ) {

        if (e.detail.y< -300) {
            //$('.arrow').removeClass('none');
            //alert('a');
            $('.arrow').show();
        }else {
            //$('.arrow').addClass('none');

            $('.arrow').hide();
        }
    })

    $('.arrow').on('click', function(){
        //alert('a');
        totop();
    });

})