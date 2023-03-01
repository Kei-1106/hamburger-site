$(function(){
    //フォーカス時にアイコンを消す
    $(".p-search-box").focus(function(){
        $(this).addClass("p-search-box__icon-focus");
    });
    //フォーカスが外れた時、空ならばアイコンを表示
    $(".p-search-box").blur(function(){
        if($(this).val() == ""){
            $(this).removeClass("p-search-box__icon-focus");
        }
    });
});


$(function(){
const ham = $(".js-hamburger");
const btn = $(".l-header__hamburger");
const side = $(".l-sidebar__hamburger");
const hide = $(".l-main-hide-contents");

var durationSideMenu = 300;

ham.on('click', function(){
    side.toggleClass("l-sidebar__hamburger-active");
    btn.toggleClass("l-header__hamburger-active");
    hide.toggleClass("l-main-hide-contents-active");
    });
});