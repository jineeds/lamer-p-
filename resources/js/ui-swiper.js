var swiper = new Swiper('.slide-intro', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    // autoplay: true,
    pagination: {
        el: '.slide-intro .swiper-pagination',
        clickable: true,
    },
});

var swiper = new Swiper('.slide-studio', {
    slidesPerView: 1.2,
    spaceBetween: 20,
    pagination: {
        el: '.slide-studio .swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        600: {
            slidesPerView: 2.2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
    loop: true, // 슬라이더가 무한 반복되도록 설정
    autoplay: {
        delay: 2500, // 슬라이드 전환 간격(밀리초 단위, 3000ms = 3초)
        disableOnInteraction: false, // 사용자가 슬라이드를 클릭해도 자동 전환 유지
    },
    speed: 2500, // 슬라이드가 넘어가는 속도 (1초)
});

var swiper = new Swiper('.slide-best', {
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
});
