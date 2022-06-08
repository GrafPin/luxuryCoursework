$(document).ready(function () {
    $("#login_login").attr("required", true);
});

$(document).ready(function () {
    $("#password_login").attr("required", true);
});

$(".txtb input").on("focus", function () {
    $(this).addClass("focus");
});

$(".txtb input").on("blur", function () {
    if ($(this).val() == "")
        $(this).removeClass("focus");
});

$(".input_aсс").click(function () {
    $(".wrapper_and_form_login").css("display", "block");
    $("body").css("overflow", "hidden");
});

$(document).on("click touchend", ".wrapper_form, .close_login_form", function () {
    $(".wrapper_and_form_login").css("display", "none");
    $("body").css("overflow", "visible");
});
