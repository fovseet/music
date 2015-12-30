function contactModle() {
    $("body").append("" +
    "<section id='contact_content'>" +
    "<div class='contact-left'>" +
    "<h1>0</h1>" +
    "</div>" +
    "<div class='contact-right'>" +
    "<h2>days</h2>" +
    "<p>we have Enduring Together</p>" +
    "</div>" +
    "</section>");
    var num = 0;
    var increase = setInterval(function () {
        increaseNum = parseInt(Math.random() * 5)
        $("#contact_content .contact-left h1").text(num += increaseNum)
        if (num >= 450) {
            clearInterval(increase)
        }
    }, 1)
}