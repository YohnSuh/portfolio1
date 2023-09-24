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


    // if($(window).width() < 393) {
    //     $('.menu').click(function() {
    //         $('.hrow2, .hrow3').toggleClass('active');
    //     });

    //     $('header h3').click(function() {
    //         // 모바일 아코디언 메뉴
    //         $(this).toggleClass('active');
    //         $(this).next().stop().slideToggle();
    //         $(this).parent().siblings().find('h3').removeClass('active');
    //         $(this).parent().siblings().find('.menu').stop().slideUp();
    //     });
    // } else {
    //     $('header h3').click(function() {
    //         // $(this).parents('header').toggleClass('active');
    //     });
    // }

    // 모바일 햄버거메뉴 클릭
    $('.hamMenu').click(function() {
        $('.back_bg').toggleClass('mobile-bg-on');
        $('header').toggleClass('mobile-menu-on');
    });
    // 모바일 햄버거메뉴 클릭 후 뒷배경 클릭
    $('.back_bg').click(function() {
        $('.back_bg').removeClass('mobile-bg-on');
        $('header').removeClass('mobile-menu-on');
    });

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
