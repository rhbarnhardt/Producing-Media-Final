$(document).ready(function () {


    $("#one").click(function () {
        $(".page").hide();
        $("#slideOne").fadeIn(1000);
        $("#slideOne").show();
    });

    $("#two").click(function () {
        $(".page").hide();
        $("#slideTwo").fadeIn(1000);
        $("#slideTwo").show();
    });

    $("#three").click(function () {
        $(".page").hide();
        $("#slideThree").fadeIn(1000);
        $("#slideThree").show();
    });

    $("#four").click(function () {
        $(".page").hide();
        $("#slideFour").fadeIn(1000);
        $("#slideFour").show();
    });

    $("#five").click(function () {
        $(".page").hide();
        $("#slideFive").fadeIn(1000);
        $("#slideFive").show();
    });

    $("#forward").click(function () {
        var nextDiv =
            $(".page:visible").next(".page");
        if (nextDiv.length == 0) {
            nextDiv = $(".page:first");
        }
        $(".page").hide();
        nextDiv.show("blind",1000)
    });

    $("#back").click(function () {
        var prevDiv =
            $(".page:visible").prev(".page");
        if (prevDiv.length == 0) {
            prevDiv = $(".page:last")
        }
        $(".page").hide();
        prevDiv.show("explode",1000)
    });


});
