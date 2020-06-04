$(document).ready(function() {
    $("#Rect1").draggable();
    $("#Rect2").droppable();

    $("#Rect2").on("drop",function(event,ui){
        $("#Rect2").text("drop事件");
    })
});
