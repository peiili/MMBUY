$(function (){
   
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
               //手动结束下拉刷新
               mui(".main").pullRefresh().endPulldownToRefresh();
            }
        });
    }
  
    //搜索按钮的点击事件
    $('.search').click(function (){
        console.log('1');
        //手动触发下拉刷新
        mui(".main").pullRefresh().pulldownLoading();
    });


    mui.init({
        pullRefresh : {
          container:".main",//下拉刷新容器标识，querySelector能定位的css选择器均可，比如：id、.class等
          down : {
            style:'circle',//必选，下拉刷新样式，目前支持原生5+ ‘circle’ 样式
            auto: true,//可选,默认false.首次加载自动下拉刷新一次
            callback :function (){
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
                query(shopId,areaId);
                
            }
          }
        }
      });
})