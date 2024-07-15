$(document).ready(function() {
    //menu
    $(".itemOder").hide();
    $(".cateOder").click(function () {
        $(this).next().slideDown();
    });
    $(".itemOder").mouseleave(function () {
        $(this).slideUp();    
    });

    $("p").mouseenter(function () {
        $(this).css("color","#00FF00");
    });
    $("p").mouseleave(function () {
        $(this).css("color","#000066");
    });
    $(".cls01").mouseenter(function () {
        $(this).css("color","#00FF00");
    });
    $(".cls01").mouseleave(function () {
        $(this).css("color","#000066");
    });
    $("#id01").mouseenter(function () {
        $(this).css("color","#AA00BB");
        $(this).css("font-weight","bold");
    });
    $("#id01").mouseleave(function () {
        $(this).css("color","#000066");
        $(this).css("font-weight","normal");
    });
});

