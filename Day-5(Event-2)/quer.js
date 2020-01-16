$(document).ready(function(){

    $("button").click(function fn1(){
            $("#firstdiv").fadeToggle();
        });

    $("button").dblclick(function fn2(){
        $("p").fadeToggle();
    });

    $("#3").mouseenter(function fn3(){
        $("#firstdiv").fadeOut();
    });

    $("#4").mouseleave(function fn4(){
        $("#firstdiv").fadeIn();
    });
    
})

// Alternative

// $(document).ready(function(){
//     $("button").click(function fn1(){
//         $("#firstdiv").fadeToggle();
//     });
// })