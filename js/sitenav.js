$(function(){
    $.ajax({
        url:"http://mmb.ittun.com/api/getsitenav",
        type:"get",
        success:function(res){
            var navlisthtml = template("list",res);
            $(".content").html(navlisthtml);
        }
    })
})