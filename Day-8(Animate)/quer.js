$(document).ready(function(){

    $(document).ready(function () {
        $("#1").click(function (e) { 
            e.preventDefault();
            $("#cube").animate({
                left:'150px',
                opacity:'1',
                width:'200px',
                height:'200px'

            }, 3000)
        });
    });
    
})
