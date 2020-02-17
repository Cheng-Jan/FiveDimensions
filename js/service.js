'use strict;'

$(".s-option").click(
    function () {
        if ($(".s-top-fadein").hasClass("s-fadein")) {
            $(".s-top-fadein").addClass("s-fadeout").removeClass("s-fadein")
            $(".s-top-fadein").hide()
        }
        else {
            $(".s-top-fadein").addClass("s-fadein").removeClass("s-fadeout")
            $(".s-top-fadein").fadeIn(1500)
        };

        if ($(".s-bottom-fadeout").hasClass("s-fadein")) {
            $(".s-bottom-fadeout").addClass("s-fadeout").removeClass("s-fadein")
            $(".s-bottom-fadeout").hide()
        }
        else {
            $(".s-bottom-fadeout").addClass("s-fadein").removeClass("s-fadeout")
            $(".s-bottom-fadeout").fadeIn(1500)
        };
        //置換服務主題-淡出動畫 end

        if ($(".s-infor-top").hasClass("s-fadein")) {
            $(".s-infor-top").addClass("s-fadeout").removeClass("s-fadein")
            $(".s-infor-top").hide()
        }
        else {
            $(".s-infor-top").addClass("s-fadein").removeClass("s-fadeout")
            $(".s-infor-top").fadeIn(1500)
        };

        if ($(".s-infor-bottom").hasClass("s-fadein")) {
            $(".s-infor-bottom").addClass("s-fadeout").removeClass("s-fadein")
            $(".s-infor-bottom").hide()
        }
        else {
            $(".s-infor-bottom").addClass("s-fadein").removeClass("s-fadeout")
            $(".s-infor-bottom").fadeIn(1500)
        };

        //置換服務內容資訊及作品連結-淡出動畫 end

        console.log("test")
        $(".s-option").removeClass("s-select-active")
        $(".s-option").find("span").removeClass("s-select-active-text")
        $(this).addClass("s-select-active")
        $(this).find("span").addClass("s-select-active-text")
        // $(".s-content-theme ")
    }
);

$(".s-infor-brandImage").click(
    function () {

        console.log("brandImage");
        $(".s-infor-box .s-text").text(" 品牌形象：我們將與您一同討論，根據您的目標客群，打造出良好的互動品牌形象，讓消費者有品牌認同之效果，建立起了良好的品牌忠誠度。");
        console.log($(".s-infor-brandImage>.s-works-btn>a").attr("href"));
        $(".s-infor-box>.s-works-btn>a ").attr("href", $(".s-infor-brandImage>.s-works-btn>a").attr("href"))
        console.log($(".s-content-image-brandImage").attr("style"));
        $(".s-content-image").attr("style", $(".s-content-image-brandImage").attr("style"));
        $(".s-content-theme p").text("品牌形象");
    }
)
// brandimage end////////////////////////////////////////

$(".s-infor-webDesign").click(
    function () {

        console.log("webDesign")
        $(".s-infor-box .s-text").text(" 網站設計：根據您的需求與品牌風格，透過創意，設計出實用且符合品牌形象的網站，能加深顧客對品牌的印象與好感度，並提升回流率。");
        console.log($(".s-infor-webDesign>.s-works-btn>a").attr("href"));
        $(".s-infor-box>.s-works-btn>a ").attr("href", $(".s-infor-webDesign>.s-works-btn>a").attr("href"))
        console.log($(".s-content-image-webDesign").attr("style"));
        $(".s-content-image").attr("style", $(".s-content-image-webDesign").attr("style"));
        $(".s-content-theme p").text("網站設計");
    }
)
// webDesign end////////////////////////////////////////

$(".s-infor-graphicDesign").click(
    function () {

        console.log("graphicDesign")
        $(".s-infor-box .s-text").text("  平面設計：好的設計，能抓住顧客眼睛、準確的傳達資訊，更要表現出品牌的理念與價值，透過不斷的潛移默化，讓消費者自然的認同或想起您的品牌，是我們共同追求的目標。");
        console.log($(".s-infor-graphicDesign>.s-works-btn>a").attr("href"));
        $(".s-infor-box>.s-works-btn>a ").attr("href", $(".s-infor-graphicDesign>.s-works-btn>a").attr("href"));
        console.log($(".s-content-image-graphicDesign").attr("style"));
        $(".s-content-image").attr("style", $(".s-content-image-graphicDesign").attr("style"));
        $(".s-content-theme p").text("平面設計");
    }
)
// graphicDesign end//

$(".s-infor-seoPromote").click(
    function () {
        console.log("seoPromote")
        $(".s-infor-box .s-text").text("SEO優化：透過網站的關鍵字優化可提升網站觸及率，讓潛在顧客或消費者能輕鬆地找到您的網站，以增加品牌曝光度與知名度。");
        console.log($(".s-infor-seoPromote>.s-works-btn>a").attr("href"));
        $(".s-infor-box>.s-works-btn>a ").attr("href", $(".s-infor-seoPromote>.s-works-btn>a").attr("href"));
        console.log($(".s-content-image-seoPromote").attr("style"));
        $(".s-content-image").attr("style", $(".s-content-image-seoPromote").attr("style"));
        $(".s-content-theme p").text("SEO優化");
    }
)