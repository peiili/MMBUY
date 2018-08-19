$(function(){
    function renderCategory(){
        
        $.ajax({
            url:"http://mmb.ittun.com/api/getcategorytitle",
            type:"get",
            success:function(res){
                // console.log(res);
                var htmlstr = template('categoryList',res);
                $('.categoryContainer').html(htmlstr);
                $('.categoryContainer').on('tap','.productTitle',function(){
                    var $this = $(this);
                    var id = $this.data('id');
                    // console.log(id);
                    console.log($this);
                    
                    if(!$this.hasClass("visible")){
                        renderFineClassification(id,$this);
                    }
                    if($this.next().hasClass('active')){
                        $this.next().removeClass('active');
                    }else{
                        $this.next().addClass('active');
                    }
                    
                });
            }
        });
    }

    renderCategory();
    
    function renderFineClassification(id,$this){
        $.ajax({
            url:"http://mmb.ittun.com/api/getcategory",
            type:"get",
            data:{
                titleid:id
            },
            success:function(res){
                // console.log(res);
                var htmlstr = template('fineClassification',res);
                $($this).next('.subproductTitle').append(htmlstr);
                $($this).addClass('visible');
            }
        });
    }
    
});
