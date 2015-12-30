$("body").ready(function(){
    nav();
    fov();
});
function fov(){
    nav();
    $("nav>div").get(0).className="main_nav nav_choice";
    $("section,.videoBox").remove();
    $("body").append("" +
    "<div class='videoBox'>" +
    "<div class='float'></div>" +
    "<video src='video/Eminem_WithoutMe.mkv' autoplay='autoplay' loop defaultMuted></video>" +
    "</div>" +
    "<section class='section1'>" +
    "<section>" +
    "<div class='jump'></div>" +
    "<h3>Since 1993</h3>" +
    "</section>" +
    "<section>" +
    "<h3>A production</h3>" +
    "<h3>company</h3>" +
    "</section>" +
    "<section>" +
    "<div class='jump'></div>" +
    "<h3><a href='#'>view more</a></h3>" +
    "</section>" +
    "<section>" +
    "<div class='jump'></div>" +
    "<h3>Tool selected for the FWA Hall Of Fame!</h3>" +
    "</section>" +
    "</section>" +
    "");
    $(".videoBox>video").get(0).muted="true";
    for(var i=0;i<$(".section1 section .jump").length;i++){
        $($(".section1 section .jump").get(i)).delay(400+i*100)
            .animate({"width":"10%","opacity":"1"},200)
            .animate({"width":"5%"},200);
    }
    $($(".section1 section h3").get(1)).delay(0).animate({"left":"20%","opacity":"1"},200);
    $($(".section1 section h3").get(2)).delay(100).animate({"left":"20%","opacity":"1"},200);
    $($(".section1 section h3").get(0)).delay(600).animate({"left":"20%","opacity":"1"},200);
    $($(".section1 section h3").get(3)).delay(700).animate({"opacity":"1"},100);
    setTimeout(function(){
        $(".section1 section h3 a").css({"background":"white","-webkit-transition":"all .1s ease","color":"#000"});
    },700);
    setTimeout(function(){
        $(".section1 section h3 a").css({"background":"transparent","-webkit-transition":"all .1s ease","color":"#fff"});
    },800);
    $($(".section1 section h3").get(4)).delay(1000).animate({"left":"20%","opacity":"1"},200);
    $(".section1 section h3 a").mouseenter(function(){
        $(".section1 section h3 a").css({"background":"white","-webkit-transition":"all .1s ease","color":"#000"});
    })
    $(".section1 section h3 a").mouseleave(function(){
        $(".section1 section h3 a").css({"background":"transparent","-webkit-transition":"all .1s ease","color":"#fff"});
    })
}
function albums(){
    nav();
    $("nav>div").get(1).className="main_nav nav_choice";
    $("section,.videoBox").remove();
    respjson=[{imgsrc:"images/1.jpeg",h2title:"LIVE",h1title:"ACTION",h3title:"ACTION",boxcontent:"LIVE",videosrc:"From funny to dramatic. From docu-style to cinematic. From Oscars to Lions.",ahref:1},
        {imgsrc:"images/2.jpg",h2title:"LIVE",h1title:"ACTION",h3title:"ACTION",boxcontent:"LIVE",videosrc:"From funny to dramatic. From docu-style to cinematic. From Oscars to Lions.",ahref:1},
        {imgsrc:"images/3.jpg",h2title:"LIVE",h1title:"ACTION",h3title:"ACTION",boxcontent:"LIVE",videosrc:"From funny to dramatic. From docu-style to cinematic. From Oscars to Lions.",ahref:1},
        {imgsrc:"images/4.jpeg",h2title:"LIVE",h1title:"ACTION",h3title:"ACTION",boxcontent:"LIVE",videosrc:"From funny to dramatic. From docu-style to cinematic. From Oscars to Lions.",ahref:1},
        {imgsrc:"images/5.jpg",h2title:"LIVE",h1title:"ACTION",h3title:"ACTION",boxcontent:"LIVE",videosrc:"From funny to dramatic. From docu-style to cinematic. From Oscars to Lions.",ahref:1},
        {imgsrc:"images/6.jpg",h2title:"LIVE",h1title:"ACTION",h3title:"ACTION",boxcontent:"LIVE",videosrc:"From funny to dramatic. From docu-style to cinematic. From Oscars to Lions.",ahref:1},
        {imgsrc:"images/7.jpg",h2title:"LIVE",h1title:"ACTION",h3title:"ACTION",boxcontent:"LIVE",videosrc:"From funny to dramatic. From docu-style to cinematic. From Oscars to Lions.",ahref:1},
        {imgsrc:"images/concert.jpg",h2title:"LIVE",h1title:"ACTION",h3title:"ACTION",boxcontent:"LIVE",videosrc:"From funny to dramatic. From docu-style to cinematic. From Oscars to Lions.",ahref:1}];
    AlbumsModole(respjson);
}
function concert(){
    nav();
    $("nav>div").get(2).className="main_nav nav_choice";
    $("section,.videoBox").remove();
    //$("#concertWeb").load("page/concert.html")
    concertModle();
}
function contact(){
    nav();
    $("nav>div").get(3).className="main_nav nav_choice";
    $("section,.videoBox").remove();
    contactModle();
}
function about(){
    nav();
    $("nav>div").get(4).className="main_nav nav_choice";
    $("section,.videoBox").remove();
    //$("#concertWeb").load("page/about.html")
    aboutModle()
}
function blog(){
    nav();
    $("nav>div").get(5).className="main_nav nav_choice";
    $("section,.videoBox").remove();
}