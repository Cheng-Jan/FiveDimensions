let clk = "off"; 

$(".logo_click").click(function () {

    if(clk=="on") {
        console.log(this);
        $(this).css('background-image', 'url(' + 'images/logo_click.png' + ')');
        $(this).css({"left": "38.75%"});

        $('.about1').animate({"top": "38%", "left": "18%"})
                    .css({"opacity": "1"});
        $('.about2').animate({"top": "68%", "left": "32%"})
                    .css({"opacity": "1"});
        $('.about3').animate({"top": "10%", "left": "33%"})
                    .css({"opacity": "1"});
        $('.about4').animate({"top": "66%", "left": "65%"})
                    .css({"opacity": "1"});
        $('.about5').animate({"top": "22%", "left": "70%"})
                    .css({"opacity": "1"});
        
        clk = "off";

    } else {
        console.log(this);
        $(this).css('background-image', 'url(' + 'images/r-logo.png' + ')');
        $(this).css({"left":"37.5%"});

        $('.about1').animate({"top": "38%", "left": "44.2%"})
                    .css({"opacity": "0"});                    
        $('.about2').animate({"top": "38%", "left": "44.2%"})
                    .css({"opacity": "0"});                    
        $('.about3').animate({"top": "38%", "left": "43%"})
                    .css({"opacity": "0"});                    
        $('.about4').animate({"top": "37.9%", "left": "45.2%"})
                    .css({"opacity": "0"});                    
        $('.about5').animate({"top": "37.9%", "left": "45.2%"})
                    .css({"opacity": "0"});

        clk = "on";

    }
});