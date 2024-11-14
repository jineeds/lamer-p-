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
        delay: 2000, // 슬라이드 전환 간격(밀리초 단위, 3000ms = 3초)
        disableOnInteraction: false, // 사용자가 슬라이드를 클릭해도 자동 전환 유지
    },
    speed: 2000, // 슬라이드가 넘어가는 속도 (1초)
});

var swiper = new Swiper('.slide-best', {
    spaceBetween: 20,
    pagination: {
        el: '.slide-best .swiper-pagination',
        type: 'fraction',
    },

    loop: true, // 슬라이더가 무한 반복되도록 설정
    autoplay: {
        delay: 2000, // 슬라이드 전환 간격(밀리초 단위, 3000ms = 3초)
        disableOnInteraction: false, // 사용자가 슬라이드를 클릭해도 자동 전환 유지
    },
    speed: 2000, // 슬라이드가 넘어가는 속도 (1초)
});

var swiper = new Swiper('.product-info', {
    pagination: {
        el: '.product-info .swiper-pagination',
    },
});
var swiper = new Swiper('.addSwiper', {
    spaceBetween: 30,
    effect: 'fade',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
// gsap

// -----------------

const timeline = gsap.timeline({
    scrollTrigger: {
        trigger: '#sample',
        start: '30% center',
        end: '101% bottom', // 트리거 종료 지점 확장
        scrub: 1, // 스크롤과 더 부드럽게 동기화
    },
});

timeline
    .fromTo(
        '.word01',
        { height: 0, opacity: 0, transform: 'translateY(100%)' },
        { height: 'auto', opacity: 1, transform: 'translateY(0)', duration: 1.2, ease: 'power2.out' } // 애니메이션 지속시간 증가
    )
    .fromTo('.word02', { height: 0, opacity: 0, transform: 'translateY(100%)' }, { height: 'auto', opacity: 1, transform: 'translateY(0)', duration: 1.2, ease: 'power2.out' });
// ----------비디오
gsap.registerPlugin(ScrollTrigger);

gsap.to('#sample .sec-g__cont video', {
    scrollTrigger: {
        markers: true, // 마커 표시
        trigger: '#sample .sec-g__cont', // 트리거할 요소
        start: 'top center', // 애니메이션 시작 위치
        end: 'bottom top', // 애니메이션 종료 위치
        scrub: true, // 스크롤과 애니메이션 동기화
    },
    scale: 1.5, // 비디오 크기를 1.5배로 설정 (기본 크기에서 커짐)
    transformOrigin: 'center center', // 비디오가 가운데에서 커지도록 설정
});
// -------메인
// var swiper = new Swiper('#swiper-main', {
//     pagination: {
//         el: '.swiper-pagination',
//     },
// });

var swiper = new Swiper('#swiper-main', {
    loop: true, // 슬라이드 끝에서 다시 처음으로 돌아가도록 설정
    autoplay: {
        delay: 4000, // 슬라이드 전환 간격 (3초)
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // 페이지네이션 클릭 가능하도록 설정
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    spaceBetween: 10, // 슬라이드 간의 간격
    slidesPerView: 1, // 한 번에 보이는 슬라이드 개수
    speed: 800, // 슬라이드 전환 속도 (0.8초)
    easing: 'ease', // 기본적인 easing (선택 사항)
});

// swiper.on('slideChange', function () {
//     var index = swiper.realIndex; // 현재 슬라이드 인덱스
//     const slides = document.querySelectorAll('.swiper-slide');

//     // 현재 슬라이드에 배경을 설정
//     if (index === 0) {
//         slides[index].style.background = 'linear-gradient(to right, #F2994A, #93291E)';
//     } else if (index === 1) {
//         slides[index].style.background = 'linear-gradient(to right, #FFD194, #D1913C)';
//     } else if (index === 2) {
//         slides[index].style.background = 'linear-gradient(to right, #366479, #061d27)';
//     } else if (index === 3) {
//         slides[index].style.background = 'linear-gradient(to right, #ACBB78, #000000)';
//     }
// });
// // 슬라이드 배경을 한번만 설정하도록 처리
