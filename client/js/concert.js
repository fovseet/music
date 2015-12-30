function concertModle(){
    $("body").append("<section id='directors'>"+
    "<div class='background-left'></div>"+
    "<div class='background-right'></div>"+
    "<div id='directors-category-left' class='category-left'>"+
    "<span class='redblock'></span>"+
    "<h1 style=''>LIVE</h1>"+
    "<h1 style=''>ACTION</h1>"+
    "<p>From funny to dramatic. From docu-style to cinematic. From Oscars to Lions. </p>"+
    "<span class='blackblock' style=''></span>"+
    "</div>"+
    "<div id='directors-category-right' class='category-right'>"+
    "<span class='redblock'></span>"+
    "<h1 style=''>INTER-</h1>"+
    "<h1 style=''>ACTIVE</h1>"+
    "<p>World-class digital creatives and technologists who specialize in the interactive space.</p>"+
    "<span class='blackblock' style=''></span>"+
    "</div>"+
    "<div class='divider'>"+
    "<div></div>"+
    "</div>"+
    "<div id='background-reveal-left' style='display: none;'></div>"+
    "<div id='background-reveal-right' style='display: none;'></div>"+
    "<div class='divider-reveal'>"+
    "<div id='directors-divider' style='display: none;'></div>"+
    "</div>"+
    "</section>")
    $(".category-left").mouseenter(function(){
       $("#directors").get(0).className="category-left-hover";
       $("#directors").css("cursor","pointer");
    })
    $(".category-left").mouseleave(function(){
        $("#directors").get(0).className="";
        $("#directors").css("cursor","auto");
    })
    $(".category-right").mouseenter(function(){
        $("#directors").get(0).className="category-right-hover";
        $("#directors").css("cursor","pointer");
    })
    $(".category-right").mouseleave(function(){
        $("#directors").get(0).className="";
        $("#directors").css("cursor","auto");
    })
}

