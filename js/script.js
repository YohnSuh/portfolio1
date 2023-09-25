// 모바일 햄버거 아이콘 클릭
function hamMenuClick() {
    $('.back_bg').toggleClass('mobile-bg-on');
    $('header').toggleClass('mobile-menu-on');
};
// 모바일 메뉴 배경 클릭
function mBackgroundOn() {
    $('.back_bg').removeClass('mobile-bg-on');
    $('header').removeClass('mobile-menu-on');
};

$(document).ready(function() {

    const winWidth = $(window).width();

    // 스크롤 시 헤더 색상 변하게
    $(window).on('scroll', function() {
        if($(window).scrollTop()) {
            $('header').addClass('header-color');
        } else {
            $('header').removeClass('header-color');
        }
    });
    //==============================================================
    // 모바일에서 햄버거 메뉴 클릭 시
    $('.hamMenu').click(hamMenuClick);
    $('.back_bg').click(mBackgroundOn);
    //==============================================================
    // 메인 배너 슬라이드
    $('.wrap').slick({
        'prevArrow': false
    ,   'nextArrow': false
    ,   'dots': true
    ,   'autoplay' : true
    ,   'autoplaySpeed' : 5000
    });
    
    //==============================================================
    // 공연 소개 슬라이드
    $('.s3 .content > div').slick({
        'prevArrow' :  false
    ,   'nextArrow' : false
    ,   'slidesToShow' : 5
    ,   'slidesToScroll' : 5
    ,   'autoplay' : false
    ,   'responsive' : [
            {
                'breakpoint' : 1440,
                'settings' : {
                    'slidesToShow' : 3
                ,   'slidesToScroll' : 3
                }
            },
            {
            'breakpoint' : 768,
            'settings' : {
                    'slidesToShow' : 1
                ,   'slidesToScroll' : 1
                }
            }
        ]
    });
    // 공연소개 탭메뉴
    $('.s3 .list > li').click(function() {
        let idx = $(this).index();
        $('.s3 .list > li').removeClass('list-color');
        $(this).addClass('list-color');
        $('.s3 .content > div').eq(idx).stop().show();
        $('.s3 .content > div').eq(idx).siblings().stop().hide();
        // 공연 소개 슬라이드 초기화
        $('.s3 .content > div').eq(idx).slick('refresh');
    });

    //==============================================================
    // 공지사항
    $('.ntcImgBox').slick({
        'nextArrow' : false
    ,   'prevArrow' : false
    });
});
