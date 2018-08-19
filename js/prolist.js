$(function(){
    //商品分类ID
     var categoryid=1;
     //列表页数;
     var pageid=1;

     //渲染导航
    $.ajax({
        url:"http://mmb.ittun.com/api/getcategorybyid",
        type:"get",
        data:{"categoryid": categoryid,
            "pageid":pageid,    
            },
        success:function(data){
            var htmlcrumbs = template("crumbs",data);
            $('.crumbs').html(htmlcrumbs);
        }
    });


    //渲染商品列表
    $.ajax({
        url:"http://mmb.ittun.com/api/getproductlist",
        type:"get",
        data:{"categoryid":categoryid},
        success:function(data){
            var html = template("prolist",data);
            $(".prolist").html(html);
        }
    });

    // 点击翻页按钮进行翻页；

})