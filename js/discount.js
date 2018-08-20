$(function(){
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
    // $.ajax({
    //     url:"http://mmb.ittun.com/api/getmoneyctrl",
    //     type:"get",
    //     // data:"productId: 20",
    //     success:function(res){
    //       console.log(res);
    //     }
    // })
    $.ajax({
        url:"http://mmb.ittun.com/api/getdiscountproduct",
        type:"get",
        data:{"productid":0},
        success:function(res){
          console.log(res);
          var html=template("temple",res);
          $('.mui-scroll').html(html);
        }
    })
})