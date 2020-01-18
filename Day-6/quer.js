$(document).ready(function(){

    $("#1").click(function (e) { 
        e.preventDefault();
        $("#firstdiv").hide();
    });

    $("#2").click(function (e) { 
        e.preventDefault();
        $("#firstdiv").show();
    });

    $("#3").click(function (e) { 
        e.preventDefault();
        $("#firstdiv").toggle();
    });

})
