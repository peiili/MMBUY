$(function () {
    //从url中获取数据;
    // var prodata= urlTool();
    var prodata = {
        "categoryid": 1,
        "pageid": 2,
    }
    
    
    //商品分类ID
    //  var categoryid1=data.categoryid;
    //列表页数;
    //  var pageid2=data.pageid;
    //渲染导航
    crumbs(prodata.categoryid);

    //渲染商品列表
    function categoryList(prodata) {
        $.ajax({
            url: "http://mmb.ittun.com/api/getproductlist",
            type: "get",
            data: prodata,
            success: function (data) {
                var html = template("prolist", data);
                $(".prolist").html(html);
            }
        });
    }
    categoryList(prodata);

    // 点击翻页按钮进行翻页；
    // 传进来的值为:categoryid ： 分类id  ( Number类型)，
    //pageid :  页数id   ( Number类型);
    $('.mui-previous').click(function (e) {
        // e.defaultPrevented;
        if(prodata["pageid"] <= 1){
            prodata["pageid"]=1;
            return;
        }else {
             prodata["pageid"] -= 1;
              categoryList(prodata)
        }
       
    });
    $('.mui-next').click(function () {
        if(prodata["pageid"] >= 4){
            prodata["pageid"]=4;
            return;
        }else {
             prodata["pageid"] += 1;
              categoryList(prodata)
        }
    });
})