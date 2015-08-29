//微博分享函数
function shareTSina(title,rLink,picUrl) {  
	var top = window.screen.height / 2 - 250;  
    var left = window.screen.width / 2 - 300;
    var pic = "http://123.57.24.32" + ( picUrl || "/GLF/resources/images/GL-LOGO.jpg" );
     
    window.open("http://service.weibo.com/share/share.php?appkey=" + encodeURIComponent("2693511263") + "&ralateUid" + encodeURIComponent('5665190364') + "&pic=" +encodeURIComponent(pic) +"&title=" +   
    encodeURIComponent(title.replace(/&nbsp;/g, " ").replace(/<br \/>/g, " "))+ "&url=" + encodeURIComponent(rLink),  
    "分享至新浪微博",  
    "height=500,width=600,top=" + top + ",left=" + left + ",toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no");    
} 
$(function () { 
    //底部微信的分享
    if ($('footer .icon-wechat').parent('a').attr('data-toggle') != "modal") {
        $('footer .icon-wechat').parent('a').attr({
             'data-content': "<img src='images/weichat-qocde.jpg'>",
             'data-original-title': '<h5>微信二维码</h5>',
             'data-placement':'top',
              'data-container': 'body',
             'data-toggle': 'popover',
             'href': 'JavaScript:',
             'data-trigger':'focus'
        }).popover({html : true });
    };
    //底部微博链接添加
    $('footer .icon-weibo').parent('a').attr({
        "href": 'http://www.weibo.com/GUOLINOZONE',
        "target": '_blank'
    });
    //询问资料处微信分享代码
    if ($('.request .icon-wechat').parent('a').attr('data-toggle') != "modal") {
        $('.request .icon-wechat').parent('a').attr({
             'data-content': "<img src='images/weichat-qocde.jpg'>",
             'data-original-title': '<h5>微信二维码</h5>',
             'data-placement':'bottom',
             'data-container': 'body',
             'data-toggle': 'popover',
             'href': 'JavaScript:',
             'data-trigger':'focus'
        }).popover({html : true });
    };
    //询问资料处微博链接添加
    $('.request .icon-weibo').parent('a').attr({
        "href": 'http://www.weibo.com/GUOLINOZONE',
        "target": '_blank'
    });
});

!function() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    // document.writeln("您的浏览设备为：");
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
         $('.request .icon-wechat').parent('a').attr({//询问资料微信
             'data-toggle': 'modal',
             'data-target': '#guanzhuweixin'
         });
         $('footer .icon-wechat').parent('a').attr({//底部微信
             'data-toggle': 'modal',
             'data-target': '#guanzhuweixin'
         });
         $('.news-content .icon-wechat').parents('li').attr({//新闻内容、案例内容页右侧微信分享
             'data-toggle': 'modal',
             'data-target': '#weixinModal'
         });
    } else {
    	if (navigator.userAgent.indexOf('Trident') > -1) {
    		$('#qrcodeCanvas').qrcode({  //table
    			render	: "table",
    			text	: "http://baidu.com",
    			width:150,
    			height:150
    		});	
            console.log("asdas")
    	}else{
    		$('#qrcodeCanvas').qrcode({   //canvas
    			text	: "http://baidu.com",
    			width:150,
    			height:150
    		});
    	};         
    }
}()	
// browserRedirect();

// $("footer .icon-wechat").click(function(e) {
//     if ($(this).parent("a").attr('data-toggle') != "modal") {
//         $("#qrcodeCanvas").fadeToggle(400);
//     };

// }); 
$(".news-content .icon-wechat").click(function(e) {//页面左侧分享
    if ($(this).parents("li").attr('data-toggle') != "modal") {
        $("#qrcodeCanvas").css({
                'left': $(this).offset().left -75,
                'top': $(this).offset().top+44,
                'height':"170px"
            }).fadeToggle(400);
    };
    e.preventDefault()
});
$(".news-content .icon-weibo").click(function(e) {
    var title = $(".news-content h3:first").text() + "\n" + "\t" + $(".editor p:first").text();
    var href = window.location.href;
    var img = $(".editor img:first").attr('src');
    shareTSina(title,href,img);
});