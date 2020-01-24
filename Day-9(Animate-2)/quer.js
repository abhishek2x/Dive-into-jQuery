$(document).ready(function(){

    $(document).ready(function () {
        
        $("#1").click(function (e) { 
            e.preventDefault();
            $("#firstdiv").fadeToggle(5000, function(){
                alert("division is faded");
            });
        });
        $("#2").click(function (e) { 
            e.preventDefault();
            $("#seconddiv").slideToggle(5000, function(){
                alert("division is Toggled");
            });
        });
        $("#3").click(function (e) { 
            e.preventDefault();
            $("#seconddiv").slideUp(5000).slideDown(2000).fadeOut(1000).fadeIn(1000);
    });
});
})
