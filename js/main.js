function shareTSina(title,rLink,site,pic) {  
		var top = window.screen.height / 2 - 250;  
		var left = window.screen.width / 2 - 300;
    // title = "标题。";  
  // pic = $(".p-img img").attr("src");  
   // rLink = "http://www.abc.com/heeh.html";  
   pic = "http://www.jb51.net/images/logo.gif"
   // pic2 = "http://assets.changyan.sohu.com/upload/asset/scs/images/pic/pic42_null.gif"
     
    window.open("http://service.weibo.com/share/share.php?pic=" +encodeURIComponent(pic) +"&title=" +   
    encodeURIComponent(title.replace(/&nbsp;/g, " ").replace(/<br \/>/g, " "))+ "&url=" + encodeURIComponent(rLink),  
    "分享至新浪微博",  
    "height=500,width=600,top=" + top + ",left=" + left + ",toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no");  
      
} 
$("footer .icon-weibo").click(function(e) {
	shareTSina("欢迎访问乙醛酸分公司网站","http://123.57.24.32:8080/GLF/gl/index","3842512498",$("img").attr('src'))
});
$(".request .icon-weibo").click(function(e) {
	shareTSina("欢迎索要技术资料","http://123.57.24.32:8080/GLF/gl/index","3842512498",$("img").attr('src'))
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
         $('#qrcodeCanvas').parent('li').attr({
             'data-toggle': 'modal',
             'data-target': '#myModal'
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

$("footer .icon-wechat").click(function(e) {
    if ($(this).parents("li").attr('data-toggle') != "modal") {
        $("#qrcodeCanvas").fadeToggle(400);
    };

}); 