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
            slidesPerView: 4,
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
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: '.slide-best .swiper-pagination',
        type: 'fraction',
    },
    breakpoints: {
        600: {
            slidesPerView: 2, // 1200px 이상에서는 1줄에 4개씩 보이기
            grid: {
                rows: 1,
            },
        },
        1024: {
            slidesPerView: 4, // 1200px 이상에서는 1줄에 4개씩 보이기
            grid: {
                rows: 1,
            },
        },
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

// ----------비디오 확대
gsap.registerPlugin(ScrollTrigger);

gsap.to('#sample .sec-g__cont video', {
    scrollTrigger: {
        markers: true, // 마커 표시
        trigger: '#sample .sec-g__cont', // 트리거할 요소
        start: 'top center', // 애니메이션 시작 위치
        end: 'bottom top', // 애니메이션 종료 위치
        scrub: true, // 스크롤과 애니메이션 동기화
    },
    scale: 1, // 비디오 크기를 1.5배로 설정 (기본 크기에서 커짐)
    borderRadius: '10px', // 둥근 사각형 형태로 변경
    transformOrigin: 'center center', // 비디오가 가운데에서 커지도록 설정
});

// ------------facecare
gsap.registerPlugin(ScrollTrigger);

const cards = gsap.utils.toArray('.seg-g_card');

cards.forEach((card) => {
    gsap.fromTo(
        card,
        {
            opacity: 0,
            y: 100,
        },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                end: 'top 30%',
                scrub: true,
                markers: false,
            },
        }
    );
});

// ----------서브 브랜드 페이지 스크롤트리거
// GSAP ScrollTrigger 활성화
// gsap.registerPlugin(ScrollTrigger);

// gsap.utils.toArray('.box-warp1, .box-warp2, .box-warp3').forEach((box) => {
//     gsap.fromTo(
//         box,
//         {
//             opacity: 0, // 초기 투명도
//             y: 50, // 초기 위치 (아래로 이동된 상태)
//         },
//         {
//             opacity: 1, // 최종 투명도
//             y: 0, // 최종 위치
//             duration: 1.5, // 애니메이션 지속 시간
//             ease: 'power2.out', // 부드러운 애니메이션
//             scrollTrigger: {
//                 trigger: box, // 애니메이션 트리거 요소
//                 start: 'top 90%', // 애니메이션 시작 위치
//                 end: 'top 50%', // 애니메이션 끝나는 위치
//                 toggleActions: 'play none none reverse', // 재생 동작 설정
//             },
//         }
//     );
// });

gsap.registerPlugin(Observer);

let sections = document.querySelectorAll('.sub-b.brand_ad'), // 섹션 선택
    videos = document.querySelectorAll('.sub-b.ad_img video'), // 비디오 선택
    headings = gsap.utils.toArray('.heading h2'), // 제목 선택
    outerWrappers = gsap.utils.toArray('.sub-b.inner'), // 내부 래퍼 선택
    currentIndex = -1, // 현재 활성화된 섹션 인덱스
    wrap = gsap.utils.wrap(0, sections.length),
    animating = false;

// 초기 상태 설정
gsap.set(outerWrappers, { yPercent: 100 });
gsap.set(videos, { yPercent: -50 });

// 섹션 전환 함수
function gotoSection(index, direction) {
    index = wrap(index); // 유효한 인덱스로 설정
    animating = true;

    const dFactor = direction === -1 ? -1 : 1; // 방향 설정
    const tl = gsap.timeline({
        defaults: { duration: 1.25, ease: 'power1.inOut' },
        onComplete: () => (animating = false),
    });

    if (currentIndex >= 0) {
        // 이전 섹션의 애니메이션
        tl.to(videos[currentIndex], { yPercent: -15 * dFactor }).set(sections[currentIndex], { autoAlpha: 0 });
    }

    // 현재 섹션 활성화 애니메이션
    gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
    tl.fromTo(outerWrappers[index], { yPercent: 100 * dFactor }, { yPercent: 0 }, 0)
        .fromTo(videos[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0)
        .fromTo(headings[index], { autoAlpha: 0, yPercent: 150 * dFactor }, { autoAlpha: 1, yPercent: 0, duration: 1, ease: 'power2' }, 0.2);

    currentIndex = index;
}

// Observer 생성
Observer.create({
    type: 'wheel,touch,pointer',
    wheelSpeed: -1,
    onDown: () => !animating && gotoSection(currentIndex - 1, -1),
    onUp: () => !animating && gotoSection(currentIndex + 1, 1),
    tolerance: 10,
    preventDefault: true,
});

// 초기화
gotoSection(0, 1);
