// .all-menu 를 클릭했을 때
// #nav-all 에게 .active 클래스를 추가한다.
$('.all-menu').click(function () {
    $('#nav-all').addClass('active');
});

// #nav-all .close 를 클릭했을 때
// #nav-all 에게 .active 클래스를 제거한다.
$('#nav-all .close').click(function () {
    $('#nav-all').removeClass('active');
});

$('#gnb').mouseenter(function () {
    $('#header').addClass('active');
});

$('#gnb').mouseleave(function () {
    $('#header').removeClass('active');
});

$('.lang__btn').click(function () {
    $('.lang__lst').show();
});

$('.lang__lst li').click(function () {
    $('.lang__lst').hide();
});

// 제품 이미지 마우스 오버 -> 다른 이미지 전환 적용
// 서브-제품 페이지 : 모든 .item 안의 img 요소에 이벤트 추가
document.querySelectorAll('.item img').forEach((img) => {
    const originalSrc = img.src; // 기본 이미지 경로
    const hoverSrc = img.getAttribute('data-hover'); // 호버 이미지 경로

    img.addEventListener('mouseover', () => {
        img.src = hoverSrc; // 마우스 오버 시 호버 이미지로 변경
    });

    img.addEventListener('mouseout', () => {
        img.src = originalSrc; // 마우스 아웃 시 기본 이미지로 복원
    });
});

// 테스트!!
