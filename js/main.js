$(window).ready(function () {
    console.log($(window).width());
    if ($(window).width() >= 769) {
        $(".main").onepage_scroll({
            sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
            easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
            // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
            animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
            pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
            updateURL: true,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
            beforeMove: function (index) { },  // This option accepts a callback function. The function will be called before the page moves.
            afterMove: function (index) { },   // This option accepts a callback function. The function will be called after the page moves.
            loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
            keyboard: true,                  // You can activate the keyboard controls
            responsiveFallback: 769,        // You can fallback to normal page scroll by defining the width of the browser in which
            // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
            // the browser's width is less than 600, the fallback will kick in.
            direction: "horizontal"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
        });

        $(".arrow").show();

        $(".about_container").show();
        $(".mobile_about_container").hide();

        $(".s-service-space").show();
        $(".s-header").show();

        $(".m-member-title").hide();

        $(".s-service-mobile").hide();
        $(".members").show();
        $(".card-area").hide();

    } else {

        // $("body").removeAttr("class style");
        // $(".onepage-pagination").remove();
        $(".arrow").hide();
        // $(".main").removeClass(".onepage-wrapper");
        // $("section").removeAttr("class data-index style");


        $(".about_container").hide();
        $(".mobile_about_container").show();

        $(".s-service-space").hide();
        $(".s-service-mobile").show();
        $(".s-header").hide();

        $(".m-member-title").show();

        // $(".members").hide();
        $(".card-area").show();
        $(".main").css({ "overflow-y": "scroll" });

        let about_top = $("#about").offset().top;
        let service_top = $("#service").offset().top;
        let member_top = $("#member").offset().top;
        let contact_top = $("#contact").offset().top;

        $(".nav li").click(function () {
            let index = $(".nav>ul>li").index(this);

            switch (index) {
                case 0:
                    $(".nav").fadeOut();
                    $(".main").animate({ scrollTop: about_top - 98 });
                    break;
                case 1:
                    $(".nav").fadeOut();
                    $(".main").animate({ scrollTop: service_top - 98 });
                    break;
                case 2:
                    $(".nav").fadeOut();
                    $(".main").animate({ scrollTop: member_top - 98 });
                    break;
                case 3:
                    $(".nav").fadeOut();
                    $(".main").animate({ scrollTop: contact_top - 98 });
                    break;
                default:
                    break;
            }
            $(".icon div:first-child").removeClass("barTurn_1");
            $(".icon div:last-child").removeClass("barTurn_2");
            $(".icon").removeClass("cc");
        });
    }
});

$(window).resize(function () {

    if ($(window).width() >= 768) {

        $(".main").onepage_scroll({
            sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
            easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
            // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
            animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
            pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
            updateURL: true,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
            beforeMove: function (index) { },  // This option accepts a callback function. The function will be called before the page moves.
            afterMove: function (index) { },   // This option accepts a callback function. The function will be called after the page moves.
            loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
            keyboard: true,                  // You can activate the keyboard controls
            responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
            // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
            // the browser's width is less than 600, the fallback will kick in.
            direction: "horizontal"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
        });

        $(".arrow").show();

        $(".s-service-space").show();
        $(".s-service-mobile").hide();
        $(".s-header").show();
        $(".m-member-title").hide();
        
        // $(".members").show();
        $(".card-area").hide();
        window.location.replace("index.html");

    } else {

        $("body").removeAttr("class style");
        $(".onepage-pagination").remove();
        $(".arrow").hide();
        $(".main").removeClass(".onepage-wrapper");
        $("section").removeAttr("class data-index style");

        $(".s-service-space").hide();
        $(".s-service-mobile").show();
        $(".s-header").hide();

        $(".m-member-title").show();
        $(".members").hide();
        $(".card-area").show();
        $(".main").css({ "overflow-y": "scroll" });
        // window.location.replace("index.html");
        location.reload();

        let about_top = $("#about").offset().top;
        let service_top = $("#service").offset().top;
        let member_top = $("#member").offset().top;
        let contact_top = $("#contact").offset().top;

        $(".nav li").click(function () {
            let index = $(".nav>ul>li").index(this);

            switch (index) {
                case 0:
                    $(".nav").fadeOut();
                    $(".main").animate({ scrollTop: about_top - 98 });
                    break;
                case 1:
                    $(".nav").fadeOut();
                    $(".main").animate({ scrollTop: service_top - 98 });
                    break;
                case 2:
                    $(".nav").fadeOut();
                    $(".main").animate({ scrollTop: member_top - 98 });
                    break;
                case 3:
                    $(".nav").fadeOut();
                    $(".main").animate({ scrollTop: contact_top - 98 });
                    break;
                default:
                    break;
            }
            $(".icon div:first-child").removeClass("barTurn_1");
            $(".icon div:last-child").removeClass("barTurn_2");
            $(".icon").removeClass("cc");
        });

    }
    location.reload("index.html");
});



$(".menu_icon").click(function () {
    $(".icon div:first-child").toggleClass("barTurn_1");
    $(".icon div:last-child").toggleClass("barTurn_2");
    $(".icon").toggleClass("cc");
    $(".nav").fadeToggle();
}); //menu control end

