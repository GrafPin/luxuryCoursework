$(document).ready(function () {
    $("#name").attr("required", true);
});

$(document).ready(function () {
    $("#login").attr("required", true);
});

$(document).ready(function () {
    $("#email").attr("required", true);
});

$(document).ready(function () {
    $("#password").attr("required", true);
});

$(".bottom_text a, .registration").click(function () {
    $(".wrapper_and_form_login").css("display", "none");
    $(".wrapper_and_form_registration").css("display", "block");
});

$("#name").on("blur", function () {
    let name = $(this).val();

    if (name.match(/^[a-zA-Z0-9А-Яа-я0-9_-]{3,16}$/g)) {
        $("#valid_name").css("background-image", "url(./images/validyes.png)");
        nVar=1;
    } else {
        $("#valid_name").css("background-image", "url(./images/validno.png)");
        nVar=0;
    }
});

$("#login").on("blur", function () {
    let login = $(this).val();

    if (login.match(/^[a-zA-Z0-9А-Яа-я0-9_-]{3,16}$/g)) {
        $("#valid_login").css("background-image", "url(./images/validyes.png)");
        lVar=1;
    } else {
        $("#valid_login").css("background-image", "url(./images/validno.png)");
        lVar=0;
    }
});

$("#email").on("blur", function () {
    let email = $(this).val();

    if (email.match(/^([a-zA-Z0-9А-Яа-я_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/g)) {
        $("#valid_email").css("background-image", "url(./image/validyes.png)");
        eVar=1;
    } else {
        $("#valid_email").css("background-image", "url(./images/validno.png)");
        eVar=0;
    }
});

$("#password").on("blur", function () {
    let password = $(this).val();

    if (password.match(/^[a-zA-Z0-9А-Яа-я0-9_-]{6,18}$/g)) {
        $("#valid_password").css("background-image", "url(./images/validyes.png)");
        pVar=1;
    } else {
        $("#valid_password").css("background-image", "url(./images/validno.png)");
        pVar=0;
    }
});

$("form").on("submit", function () {
    if (nVar==1 && lVar==1 && eVar==1 && pVar==1) {
        // валидация успешна
        return true;
    }
    else {
        // валидация не успешна
        return false;
    }
});

$(".reset-button").click(function () {
    $("#valid_name, #valid_login, #valid_email, #valid_password").css("background-image", "url()");
    $("body").css("overflow", "hidden");
});

$(document).on("click touchend", ".wrapper_form, .close_registration_form", function () {
    $(".wrapper_and_form_registration").css("display", "none");
    $("body").css("overflow", "visible");
});