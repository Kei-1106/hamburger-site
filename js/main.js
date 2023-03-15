$(function(){
    //フォーカス時にアイコンを消す
    $(".c-text").focus(function(){
        $(".c-search--icon").addClass("c-search--icon--focus");
    });
    //フォーカスが外れた時、空ならばアイコンを表示
    $(".c-text").blur(function(){
        if($(this).val() == ""){
            $(".c-search--icon").removeClass("c-search--icon--focus");
        }
    });
});


$(function(){
const ham = $(".js-hamburger");
const btn = $(".l-header__hamburger");
const side = $(".l-sidebar__hamburger");
const hide = $(".l-main-hide-contents");
const head = $(".l-header")

var durationSideMenu = 300;

ham.on('click', function(){
    side.toggleClass("l-sidebar__hamburger-active");
    btn.toggleClass("l-header__hamburger-active");
    hide.toggleClass("l-main-hide-contents-active");
    head.toggleClass("l-header-active");
    });
});