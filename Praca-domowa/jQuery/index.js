'use strict';

    $("button").click(function () {

    $("div").animate({
        color: "red",
        left: "100px",
        width: "100px",
        height: "100px",
        fontSize: '10px',
        transition: "3s",
    }
    

    );
    $("div").animate({
        backgroundColor: "blue",
        color: "white",
        transition: "5s"

    }, 5000).queue(function (next) {
            $("div").css({

             
            })
    

    });


    });


