/**
 * Created by sanjay on 2017-01-14.
 */
//fine event on click on li in the ul
//"li" that are created after the page is loaded
//$("li").on("click", function()... will not work on the "li" created after the page is loaded
$("ul").on("click", "li", function () {
    // //you have to compare it with rgb color
    // if($(this).css("color") === "rgb(128, 128, 128)") {
    //     $(this).css({
    //         color: "black",
    //         textDecoration: "none"
    //     });
    // } else {
    //     $(this).css({
    //         color : "gray",
    //         textDecoration : "line-through"
    //         // $(this).css("text-decoration", "line-through")
    //         // notice the difference between "text-decoration" in the Object, it's cameCase
    //     });
    // }

    // Just one line will accomplish the above logic
    $(this).toggleClass("completed")
});

$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation(); //this will stop firing events on the parent element "li"
});

$("input[type='text']").on("keypress", function (e) {
    if (e.which === 13) {
        var todoText = $(this).val();
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
        $(this).val("");
    }
});

$(".fa-plus").on("click", function () {
    $("input").toggle();
});