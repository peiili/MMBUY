/**
 * Created by Du Mingwei on 2018/8/18.
 */
function back(){
    window.history.back();
}

function totop(){
    mui('.wrap2').scroll().scrollTo(0,0,500);//500�����������
}



$(function() {
    setTimeout(function () {
        //�����������Ч
        mui('.mui-scroll-wrapper').scroll();

        //��ͼƬ�ֲ���Ч
        mui('.mui-slider').slider({
            interval:5000//�Զ��ֲ����ڣ���Ϊ0���Զ����ţ�Ĭ��Ϊ0��
        });
    },5000)
});

//1面包屑导航
function crumbs(cateid) {
    $.ajax({
        url: "http://mmb.ittun.com/api/getcategorybyid",
        type: "get",
        data: {
            "categoryid": cateid, 
        },
        success: function (data) {
            var htmlcrumbs = template("crumbs",data);
            $('.crumbs').html(htmlcrumbs);
        }
    });   

}
//2 从url中获取有效信息的工具,直接调用,返回值为一个对象;

function urlTool(){
    let url = location.href;
    //将url分割;
    let array = url.split("?").pop().split("&");        
    var data ={};
    array.forEach(function(ele,index){
        //将获得到的每个元素用 "="进行分割
      let dataarr = ele.split("=");
     //将数组的每一个元素遍历到对象中;
      data[dataarr[0]]=dataarr[1]; 
    });
   return data;  
};
