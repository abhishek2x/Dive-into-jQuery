$(document).ready(function(){

    $("#1").click(function (e) { 
        e.preventDefault();
        $("#firstdiv").fadeIn();
    });

    $("#2").click(function (e) { 
        e.preventDefault();
        $("#firstdiv").fadeOut();
    });

    $("#3").click(function (e) { 
        e.preventDefault();
        $("#firstdiv").fadeToggle();
    });

    $("#4").click(function (e) { 
        e.preventDefault();
        $("#firstdiv").slideUp();
    });

    $("#5").click(function (e) { 
        e.preventDefault();
        $("#firstdiv").slideDown();
    });

    $("#6").click(function (e) { 
        e.preventDefault();
        $("#firstdiv").slideToggle();
    });
})
