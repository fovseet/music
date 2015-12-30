function welcome(){
    $("document").ready(function(){
        $("body").css({"margin":"0px","color":"white","text-align":"center"});
        //choiceLanguage();
        laugh()
    });
    function choiceLanguage(type){
        $("body").append("<div class='welcome'>" +
        "<div class='welcome_content'>" +
        "<span id='CH' onclick='laugh(1)'>中文</span>" +
        "<span id='EN' onclick='laugh(2)'>English</span>" +
        "</div>" +
        "</div>");
        $(".welcome").css({"width":"100%","height":"666px","background":"#282828","position":"absolute","z-index":"10",
            "left":"0px","top":"0px"});
        $(".welcome_content").css({"width":"40%","height":"500px","background":"gray","display":"inline-block"});
        $(".welcome_content span").css("cursor","pointer");
    }
}
function navModle(){
    $("nav").append("<div class='nav'>" +
    "<div class='nav_row1'></div>" +
    "<div class='nav_row2'></div>" +
    "<div class='nav_row3'></div>" +
    "</div>"+
    "<ul>"+
    "<li><a href='javascript:Introduction()'>Introduction</a></li>"+
    "<li><a href='javascript:Albums()'>Albums</a></li>"+
    "<li><a href=''>logo</a></li>"+
    "<li><a href='javascript:concert()'>concert</a></li>"+
    "<li><a href='javascript:contact()'>contact</a></li>"+
    "</ul>");
    $(".nav").css({"position":"absolute","width":"30px",
        "height":"30px","left":"30px","top":"30px",
        "cursor":"pointer","z-index":"5"});
    $(".nav div").css({"width":"30px","height":"3px","background":"white",
        "position":"relative","margin-bottom":"10px"});
    $("nav ul,nav ul li").css({"padding":"0px","margin":"0px","list-style":"none",
        "margin":"0px 20px","display":"inline-block","line-height":"60px","height":"60px"});
    $("nav ul li a").css({"text-decoration":"none","color":"white","text-transform":"uppercase"})
}
function section(){
    
}
function Introduction(){
    $("section").append("<div>" +
    "" +
    "</div>")
}
function Albums(){
    $("section").append("<div class='Albums_section'></div>")
    $(".Albums_section").css({"width":"100%","height":"606px","position":"relative",
        "left":"0px","top":"0px","overflow":"auto"});
    var AlArray=new Array("images/1.jpeg","images/2.jpg","images/3.jpg","images/4.jpeg"
        ,"images/5.jpg","images/6.jpg","images/7.jpg");
    AlbumsMode(AlArray);
    function AlbumsMode(AlbumsArray){
        $(".Albums_section").append("<div class='AlbumsVideo'>X</div>");
        for(var i=0;i<AlbumsArray.length;i++){
            $(".Albums_section").append("<div class='AlbumsVideo'>"+
            "<img src='"+AlbumsArray[i]+"'>"+
                "<div class='video_content'>"+
                "<p></p>"+
                "</div>"+
            "</div>")
        }
        $(".AlbumsVideo").css({"width":"25%","height":"35%","position":"relative",
            "display":"inline-block","float":"left","z-index":"6","background":"transparent",
            "overflow":"hidden"}).click(function(){
            videoAction(this);
        });
        $(".AlbumsVideo img").css({"width":"100%","height":"100%","display":"inline-block"});
    }
    function videoAction(a){
        console.log(a.childNodes);
        $("body").append("<div class='videoAction'>" +
        "<div>" +
        "<video src='video/amu.flv' controls>" +
        "</div>" +
        "</div>");
        $(".videoAction").css({"position":"absolute","display":"inline-block","background":"#282828",
            "left":"0px","top":"0px","height":"100%","width":"100%","z-index":"8"});
        $(".videoAction div video").css({"width":"60%"});
        $(".videoAction video").get(0).play();
    }
}
function concert(){
    console.log(111)
}
function contact(){
    console.log(111)
}
