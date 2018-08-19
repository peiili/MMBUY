/**
 * Created by Du Mingwei on 2018/8/18.
 */
$(function(){


    mui('.wrap2').scroll({
            scrollY: true, //�Ƿ��������
            indicators: true, //�Ƿ���ʾ������
            deceleration:0.0006, //����ϵ��,ϵ��ԽС����Խ����
            bounce: true //�Ƿ����ûص�
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
    //�����������Ч
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
    //�����������Ч
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