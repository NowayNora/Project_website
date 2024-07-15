$(document).ready(function() {
    //menu
    $(".itemOder").hide();
    $(".cateOder").click(function () {
        $(this).next().slideDown();
    });
    $(".itemOder").mouseleave(function () {
        $(this).slideUp();    
    });
    // page left
    $("q").mouseenter(function () {
        $(this).css("color","#00FF00");
    });
    $("q").mouseleave(function () {
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
    // slide images
    $(".imgCls").mouseover(function () {
        var img = $(this).attr("src");
        $("#imgView").attr("src",img);
    });
});

