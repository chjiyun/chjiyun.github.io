/*!
 * Adapted from Bootstrap docs JavaScript
 */


!function ($) {

  $(function () {
      
		orderTheLeftNavigations();

    function orderTheLeftNavigations(){
	    $('#navigation .sidenav').html($("#markdown-toc").html());
	    $('#navigation .sidenav ul').addClass("nav");
	    $("#markdown-toc").remove();

      // 添加Bootstrap表格样式 table-hover 
      $(".docs-content table").addClass("table table-hover");
  	}

  	$(window).load(initilizeAfterLoad);

    function initilizeAfterLoad(){
      // repairTheImagesWhichCrossTheMaxWidth();
      resetHeadersStyles();
    }

    // 重新计算图片显示大小。
  	function repairTheImagesWhichCrossTheMaxWidth(){
  		var images = $(".docs-content img");
  		if(images != undefined && images.length > 0){
  			for(var i=0; i< images.length;i++){
  				var imgWidth = images[i].width;
  				if( imgWidth >= 757 ){
  					 images[i].width = 757;
  				}
  			}
  		}
  	}

    // 设置标题样式
    function resetHeadersStyles(){
      resetHeaderItemStyles($(".docs-content h1"));
      resetHeaderItemStyles($(".docs-content h2"));
    }

    function resetHeaderItemStyles(headers){
      if(headers != undefined && headers.length > 0){
        for(var i=0; i< headers.length;i++){
          
          var header = headers[i];
          $(header).html($(header).html() + '<span class="anchor-target" id="' + header.id + '"></span>' +
            '<a href="#' + header.id + '" name="' + header.id + '" class="anchor glyphicon glyphicon-link"></a>');
          $(header).removeAttr('id');
        }
      }
    }

    //窗口滚动时改变回到顶部图标的状态
    function backToTopState(){
      var top = $(".back-to-top");
      $(window).scroll(function(){
        $(this).scrollTop() > 100 ? top.addClass("back-to-top-on") : top.removeClass("back-to-top-on");
      });

      top.on("click",function(){
        $("body").animate({scrollTop:0},300,"linear");
      });
    }


    //切换窗口时改变标题
    function resetTabTitle() {
      document.addEventListener('visibilitychange',function(){ //浏览器切换事件 
        if(document.visibilityState == 'hidden') { //状态判断 
            document.title = '页面崩溃啦 | 快回来'; 
        }else {
            document.title = 'chjiyun.com'; 
        }
      })
    }

    resetTabTitle();
    
  })

}(jQuery)
