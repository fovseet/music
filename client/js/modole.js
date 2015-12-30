function nav(){
    var navlength=$(".main_nav").length;
    var navwidth=100/navlength+"%";
    $(".main_nav").css("width",navwidth);
    for(var i=0;i<$("nav>div").length;i++){
        $("nav>div").get(i).className="main_nav";
    }
}
function AlbumsModole(josn){
    $(".AlbumsModole").remove();
    $("body").append("<section class='AlbumsModole'></section>");
    for(var i=0;i<josn.length;i++){
        $("body .AlbumsModole").append("<div class='backColor'></div>"+
        "<div class='content_box' style='background:url("+josn[i].imgsrc+"),no-repeat'>" +
            "<h2>"+josn[i].h2title+"</h2>" +
            "<h1>"+josn[i].h1title+"</h1>" +
            "<h3>"+josn[i].h3title+"</h3>" +
            "<p>"+josn[i].boxcontent+"</p>" +
            "<a href='#'>"+josn[i].ahref+"</a>" +
        "</div>");
    }
    $(".content_box").css({"background-position":"center 20%","background-size":"cover"});
    $(".content_box").css("-webkit-animation","albumsRotateOdd .25s linear forwards");
    var amount=Math.max.apply(Math,$(".AlbumsModole .content_box").map(function(){return $(this).outerWidth(true);}).get());
    $(".AlbumsModole").mCustomScrollbar({
        axis:"x",
        theme:"inset",
        advanced:{
            autoExpandHorizontalScroll:true
        },
        scrollButtons:{
            enable:true,
            scrollType:"stepped"
        },
        keyboard:{scrollType:"stepped"},
        snapAmount:amount,
        mouseWheel:{scrollAmount:amount}
    });
}