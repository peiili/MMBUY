$(function(){
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
    $.ajax({
        url:"http://mmb.ittun.com/api/getinlanddiscount",
        type:"GET",
        // dataType:"json",
        success:function(res){
            console.log(res);    
        //   var str=JSON.parse(res);
        //   console.log(str);
        var htmler=template("product",res);
        $('.mui-scroll').html(htmler);
          }
     })
    
});