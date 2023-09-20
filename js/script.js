const winWidth = $(window).width();

$("선택자").on("event", function() {
})


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

// 공연소개 슬라이드
$('.s3 .content > div').slick({
    'prevArrow' :  false
,   'nextArrow' : false
});

// if($(window).width() > 393) {
//     $('.s3 .content > div').slick({
//         'slideToShow' : 5
//     ,   'prevArrow' :  false
//     ,   'nextArrow' : false
//     });
// }

// 공연소개 탭메뉴
$('.s3 .list > li').click(function() {
    let idx = $(this).index();
    $('.s3 .content > div').eq(idx).stop().show();
    $('.s3 .content > div').eq(idx).siblings().stop().hide();
});