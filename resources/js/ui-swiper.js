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
// gsap.to('.sec-facecare', {
//     scrollTrigger: {
//         trigger: '.sec-facecare', // 요소가 뷰포트에 드러나는 순간부터 애니메이션이 작동
//         start: '.seg-g_card', // 애니메이션 시작시점
//         end: '.sec-bestseller', // 애니메이션 종료시점
//         scrub: 2,
//         markers: true, // 트리거 마커의 표시(boolean)
//     },
//     y: 300,
// });

// let panels = gsap.utils.toArray('.seg-g_card1');

// panels.forEach((panel, i) => {
//     ScrollTrigger.create({
//         trigger: panel,
//         start: 'top top',
//         pin: true,
//         scrub: 0.5,
//         pinSpacing: false,
//     });
// });
// // 첫 번째 카드는 고정
// gsap.to('.seg-g_card1', {
//     position: 'fixed', // 고정
//     top: '10%', // 고정된 위치
//     scrollTrigger: {
//         trigger: '.sec-facecare',
//         start: 'top top', // .sec-facecare가 화면에 나타날 때
//         end: 'bottom top', // .sec-facecare가 화면을 벗어날 때
//         scrub: true, // 스크롤과 동기화
//         markers: true, // 마커 표시 (디버깅 용도)
//     },
// });

// // 두 번째 카드가 스크롤 시 나타나게 하기
// gsap.fromTo(
//     '.seg-g_card2',
//     {
//         opacity: 0, // 처음에는 보이지 않음
//         y: '50px', // 약간 아래에서 시작
//     },
//     {
//         opacity: 1, // 스크롤 시 완전히 보이게
//         y: '0px', // 원래 위치로 이동
//         duration: 1, // 애니메이션의 지속 시간
//         scrollTrigger: {
//             trigger: '.seg-g_card2', // .card-2가 화면에 나타날 때
//             start: 'top bottom', // .card-2가 화면에 들어왔을 때
//             end: 'bottom top', // .card-2가 화면을 벗어날 때
//             scrub: 1, // 스크롤에 맞춰 애니메이션 동기화
//             markers: true, // 마커 표시 (디버깅 용도)
//         },
//     }
// );

// // 세 번째 카드가 스크롤 시 나타나게 하기
// gsap.fromTo(
//     '.seg-g_card3',
//     {
//         opacity: 0, // 처음에는 보이지 않음
//         y: '50px', // 약간 아래에서 시작
//     },
//     {
//         opacity: 1, // 스크롤 시 완전히 보이게
//         y: '0px', // 원래 위치로 이동
//         duration: 1, // 애니메이션의 지속 시간
//         scrollTrigger: {
//             trigger: '.seg-g_card3', // .card-3가 화면에 나타날 때
//             start: 'top bottom', // .card-3가 화면에 들어왔을 때
//             end: 'bottom top', // .card-3가 화면을 벗어날 때
//             scrub: 1, // 스크롤에 맞춰 애니메이션 동기화
//             markers: true, // 마커 표시 (디버깅 용도)
//         },
//     }
// );
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
