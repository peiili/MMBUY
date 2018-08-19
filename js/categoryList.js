$(function () {
    function urlToll(urlStr) {
        var arr = urlStr.split("?").pop().split("&");
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
    var categoryName = query.categoryid;
    // console.log(categoryName);

    // 渲染顶部导航
    function getCategotyName(categoryName) {
        $.ajax({
            url: "http://mmb.ittun.com/api/getcategorybyid",
            type: "get",
            data: {
                categoryid: categoryName
            },
            success: function (res) {
                // console.log(res);
                var htmlstr = template('topNavTem', res);
                $('.topNav').html(htmlstr);
            }
        });
    }
    getCategotyName(categoryName);


    // 渲染产品列表
    function renderProducte(pageid, currentPage, categoryid) {
        $.ajax({
            url: "http://mmb.ittun.com/api/getproductlist",
            type: "get",
            data: {
                pageid: pageid,
                categoryid: categoryid
            },
            success: function (res) {
                // console.log(res);

                // console.log(res.result[0].brandName);
                var htmlstr = template('productTemplate', res);
                $('.productList').html(htmlstr);
                var pageNumber = Math.ceil(res.totalCount / res.pagesize);
                // console.log(pageNumber);
                totalCount = res.totalCount;

                var numArr = [pageNumber];
                for (var i = 0; i < pageNumber; i++) {
                    numArr[i] = i + 1;
                }
                // console.log(numArr);
                var seleObj = {
                    pageNum: numArr,
                    maxPageNum: pageNumber,
                    currentPageNum: currentPage
                }
                // console.log(seleObj);

                var selectHtml = template('selectTemplate', seleObj);
                $('#pageNum').html(selectHtml);
            }
        })
    }
    renderProducte(1, 1, categoryName);



    // 下拉框的change事件
    $('select').change(function () {
        var pageid = $('#pageNum').val();
        // console.log(pageid);

        sessionStorage.setItem('selectedNumber', pageid);
        var currentPage = parseInt(pageid);
        renderProducte(pageid, currentPage, categoryName);
        $('.currentPage').html(currentPage);
        if (sessionStorage.getItem('selectedNumber')) {
            setTimeout(function () {
                var currentNumber = Number(sessionStorage.getItem('selectedNumber')) - 1;
                // console.log(currentNumber);
                $($('option')[currentNumber]).attr('selected', 'selected').siblings().removeAttr('selected');
                // console.log($('option')[currentNumber]);
            }, 200)
        }

    });

    $('.prePageNumber').click(function () {
        var pageid = Number($('#pageNum').val());
        console.log(pageid);
        var currentNumber = pageid - 1;
        console.log(currentNumber);
        var pre = currentNumber - 1;
        if(pageid > 0){
            renderProducte(currentNumber, currentNumber, categoryName);
            setTimeout(function(){
                $($('option')[pre]).val(currentNumber);
                
                $($('option')[pre]).attr('selected', 'selected').siblings().removeAttr('selected');
            },200);
        }

    })

    $('.nextPage').click(function () {
        var pageid = Number($('#pageNum').val()) + 1;
        // console.log(pageid);
        var maxPageNum = $('option').length;
        if(pageid <= maxPageNum){
            renderProducte(pageid, pageid, categoryName);
            setTimeout(function(){
                var currentNumber = pageid - 1;
                $($('option')[currentNumber]).val(pageid);
                // console.log(currentNumber);
                $($('option')[currentNumber]).attr('selected', 'selected').siblings().removeAttr('selected');
            },200);
        }
        
    });

    // 产品的点击事件
    $('.productList').on('click', '.theProduct', function () {
        // var brandname = $('.theProduct').data('brandName');
        var brandname = $($('.theProduct')[0]).data('brandname');
        console.log($($('.theProduct')[0]).data('brandname'));
        var productid = $('.theProduct').data('id');
        console.log(productid);
        // window.sessionStorage.setItem('brandname','');
        window.sessionStorage.setItem('brandname', brandname);
        // console.log(bigCategoryName);
        // window.sessionStorage.getItem('brandname');
        window.location.href = "./productDetail.html?productid=" + productid;
    });

});