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
