if($(window).width() < 393) {
    $('.menu').click(function() {
        $('.hrow2, .hrow3').toggleClass('active');
    });

    $('header h3').click(function() {
        // 모바일 아코디언 메뉴
        $(this).toggleClass('active');
        $(this).next().stop().slideToggle();
        $(this).parent().siblings().find('h3').removeClass('active');
        $(this).parent().siblings().find('.menu').stop().slideUp();
    });
} else {
    $('header h3').click(function() {
        // $(this).parents('header').toggleClass('active');
    });
}

// 모바일 햄버거메뉴 클릭
$('.hamMenu').click(function() {
    $('header, .hrow2, .hrow3, .hamMenu').toggleClass('on');
});

// 메인 배너 슬라이드
$('.s1 .wrap').slick({
    'prevArrow': false
,   'nextArrow': false
,   'dots': true
});
// 메인 배너 슬라이드 버튼
$('.slick-slider button').click(function() {
    $(this).toggleClass('active');
    $(this).parent().siblings().find('button').removeClass('active');
});
