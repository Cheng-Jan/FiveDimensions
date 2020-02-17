
$('.card-area').slick({
    "setting-name": "setting-value"
});

// member's card click effect start
$(".m_img_area").click(function () {

    let index = $(".m_img_area").index(this);

    index += 2;
    console.log("index: " + index);

    let sel = ".m_img_area:nth-child(" + index + ")";
    let sel_img = sel + ">.m_img";
    let sel_name = sel + ">.m_name";

    let m_img = sel_img + ">div>img";
    // $(“#MYIMG”).attr(“src”); 
    console.log($(m_img).attr("src"));
    let m_img_src = $(m_img).attr("src");
    let res = m_img_src.substring(0, 16);
    res = res + ".jpg"
    $(m_img).attr("src", res);
    console.log(res);

    if (index % 2 == 0) {

        $(sel_img).animate({
            top: "16%",
            height: "47%",
        }, 750);
        $(sel_img + ">div").animate({
            marginTop: "20%",
            // height: "60%",
        }, 750);

        $(sel_name).animate({
            top: "52%",
        }, 750);
        $(sel_name).css({
            color: "#033B4E",
        }, 750);

        $(sel + ">.discribe").fadeIn(1200);

    } else {
        $(sel_img).animate({
            top: "35%",
            height: "47%",
        }, 750);
        $(sel_img + ">div").animate({
            marginTop: "21%",
            // height: "60%",
        }, 750);

        $(sel_name).animate({
            top: "71%",
        }, 750);
        $(sel_name).css({
            color: "#033B4E",
        }, 750);

        $(sel + ">.discribe").fadeIn(1200);
    }
});
// member's card click effect end