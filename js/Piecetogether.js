$(function (){
    // mui('.mui-scroll-wrapper').scroll({
    //     deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    // });

    // 导航条信息渲染
    $.ajax({
        url:"http://mmb.ittun.com/api/getgsshop",
        type:"GET",
        dataType:"json",
        success:function (obj){
           var html=template('shoplist',obj);
           $('#shop').html(html);
        }
    });
    //导航条地区信息渲染
    $.ajax({
        url:"http://mmb.ittun.com/api/getgsshoparea",
        type:"GET",
        dataType:"json",
        success:function (obj){
           var html=template('regionlist',obj);
           $('#region').html(html);
        }
    });
    //声明一个变量存储商铺id
    var shopId=0;
    var areaId=0;
    //监听select的值改变事件,获取店铺id
    $('#shop').change(function (){
        shopId=$('#shop').val();
    });  
    //监听select的值改变事件,获取地区id
    $('#shop').change(function (){
        shopId=$('#shop').val();
    }); 
    //渲染页面的函数
    function query(shopId,areaId){
        $.ajax({
            url:"http://mmb.ittun.com/api/getgsproduct",
            type:"GET",
            dataType:"json",
            data:{shopid:shopId,areaid:areaId },
            success:function (obj){
               var html=template('commodity',obj);
               $('.commoditylist').html(html);
            }
        });
    }
    //渲染页面
    query(shopId,areaId);
    //搜索按钮的点击事件
    $('.search').click(function (){
        //
        query(shopId,areaId);
    })
})