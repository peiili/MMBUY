$(function () {
    //1商品详情和商品评价接口
    function proRender(proid) {
        $.ajax({
            url: "http://mmb.ittun.com/api/getproduct",
            data: {
                "productid": proid
            },
            type: "get",
            success: function (res) {
                let getprohtml = template("setproduct",res);
                $(".contnet").html(getprohtml);
            }
        });

        //3.网友评价evaluate
        $.ajax({
            url: "http://mmb.ittun.com/api/getproductcom",
            data: {
                "productid": proid
            },
            type: "get",
            success: function (res) {
                let getprocom = template("comment",res);
                $(".evaluate").html(getprocom);
            }
        });
    }
    //获取跳转过来的url;
  
    
    var productid = urlTool();
    //1商品详情和商品评价接口
    proRender(productid.productId);
    //2面包屑导航   
    //商品分类ID
    var categoryid = 1;
    crumbs(categoryid);
})