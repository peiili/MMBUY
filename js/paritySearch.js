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
                    // console.log($this);
                    
                    if(!$this.hasClass("visible")){
                        renderFineClassification(id,$this);
                    }
                    if($this.next().hasClass('active')){
                        $this.next().removeClass('active');
                        $this.children('span').removeClass('mui-icon-arrowup').addClass('mui-icon-arrowdown');
                    }else{
                        $this.next().addClass('active');
                        $this.children('span').addClass('mui-icon-arrowup').removeClass('mui-icon-arrowdown');
                    }
                    // console.log($this);
                    
                    $('.subproductTitle').on('tap','.categoryPro',function(){
                        var $this = $(this);
                        var categoryId = $this.data('id');
                        console.log($this);
                        
                        console.log(categoryId);
                        $.ajax({
                            url:"http://mmb.ittun.com/api/getcategorybyid",
                            type:"get",
                            data: {
                                categoryid:categoryId
                            },
                            success:function(res){
                                // console.log(res);
                                window.location.href = "./categoryList.html?pageid=1&categoryid="+categoryId;
                            }
                        });
                    });
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
