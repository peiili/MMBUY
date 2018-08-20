$(function(){
    function urlToll(urlStr) {
        var arr = urlStr.split("?").pop().split('&');
        // console.log(arr); //["proName=1", "page=1"]
        var query = {};
        arr.forEach(function (v) {
            var param = v.split("=");
            query[param[0]] = param[1];
        });

        return query;
    }
    var urlStr = window.location.href;
    var query = urlToll(urlStr);
    // console.log(query);
    var categoryName = query.productid;
    // console.log(categoryName);
    
    var brandname = window.sessionStorage.getItem('brandname');
    // window.sessionStorage.clear;
    // console.log(brandname);
    

    function renderPage(pid,brandname){
        $.ajax({
            url:"http://mmb.ittun.com/api/getproduct",
            type:"get",
            data:{
                productid:pid
            },
            success:function(res){
                // console.log(res);
                var htmlstr = template('proInfo',res);
                $('.theProduct').html(htmlstr);
                var categoryId = res.result[0].categoryId;
                $.ajax({
                    url:"http://mmb.ittun.com/api/getcategorybyid",
                    type:"get",
                    data:{
                        categoryid:categoryId
                    },
                    success:function(res){
                        // console.log(res);
                        // console.log(res.result[0].category);
                        var topNavObj = {
                            category:res.result[0].category,
                            brandname:brandname
                        }
                        // console.log(topNavObj);
                        
                        var topNavHtml = template('topNavTem',topNavObj);
                        $('.topNav').html(topNavHtml);
                    }
                });
                
            }
        });
    }
    renderPage(categoryName,brandname);

    function renderComments(pid){
        $.ajax({
            url:"http://mmb.ittun.com/api/getproductcom",
            type:"get",
            data:{
                productid:pid
            },
            success:function(res){
                console.log(res);
                var htmlstr = template('commentsTemplate',res);
                $('.commentsLink').html(htmlstr);
            }
        });
    }
    renderComments(categoryName);
});