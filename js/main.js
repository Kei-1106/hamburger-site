$(function(){
    //フォーカス時にアイコンを消す
    $(".c-icon").focus(function(){
        $(".c-search--icon").addClass("c-search--icon--focus");
    });
    //フォーカスが外れた時、空ならばアイコンを表示
    $(".c-icon").blur(function(){
        if($(this).val() == ""){
            $(".c-search--icon").removeClass("c-search--icon--focus");
        }
    });
});


$(function(){
const ham = $(".js-hamburger");
var durationSideMenu = 300;

ham.on('click', function(){
    $(".l-sidebar__hamburger").toggleClass("l-sidebar__hamburger-active");
    $(".l-header__hamburger").toggleClass("l-header__hamburger-active");
    $(".l-main-hide-contents").toggleClass("l-main-hide-contents-active");
    $(".l-header").toggleClass("l-header-active");
    $(".p-content").toggleClass("p-content-active");
    });
});

$(function(){
    const ham = $(".js-hamburger");
    var durationSideMenu = 200;
    
    ham.on('click', function(){
        });
    });