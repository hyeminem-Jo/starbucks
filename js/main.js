

// ---------------------------------------------------------
// 스크롤시 화면 옆 배찌(badge)가 사라지는 효과 
// _.throttle(함수, 시간);
// gsap.to(요소, 시간, 옵션)
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () {
  // console.log(window.scrollY);
  if (window.scrollY > 500) {
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    // 버튼 보이기
    gsap.to(toTopEl, .2, {
      x: 0
    });
  } else {
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    // 버튼 숨기기
    gsap.to(toTopEl, .2, {
      x: 100
    });
  }
}, 300));


toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, { // 0.7초동안 스크롤 맨위까지 올림
    scrollTo: 0 // scrollToPlugin 을 가져와야 사용가능
  })
})


// ---------------------------------------------------------
// visual 요소 등장 모션 
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  });
});


// ---------------------------------------------------------
// 공지사항 슬라이드 swiper
// new Swiper (선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: {
    disableOnInteraction: false
  },
  loop: true
});


// ---------------------------------------------------------
// 이벤트 슬라이드 swiper
new Swiper('.promotion .swiper-container', {
  // direction: 'horizontal' --- 기본값
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 25, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  // effect : 'fade', // fadein 슬라이드 효과
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
})


// ---------------------------------------------------------
// 프로모션 Promotion 슬라이드

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion')
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion
  // > 오른쪽의 값(false)이 반대(true)가 되어 왼쪽값에 반환된다
  if (isHidePromotion) {
    promotionEl.classList.add('hide'); //숨김 처리
  } else {
    promotionEl.classList.remove('hide'); //보임 처리
  }
});


// ---------------------------------------------------------
// Player 부분 요소 애니메이션

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  gsap.to( // gsap.to(요소, 시간, 옵션)
    selector, // 1.선택자
    random(1.5, 2.5), // 2.애니메이션 동작 시간

    { // 3.옵션
      y: size,
      repeat: -1, // 무한반복
      yoyo: true,
      ease: Power1.easeInOut,
      delay: random(0, delay)
    }
  );
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


// ---------------------------------------------------------
// 스크롤 위치 계산 애니메이션

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
      triggerHook: .8,
      // viewport height 를 기준으로 맨 위가 0, 맨 밑이 1로 인식, 0.8이면 맨밑에서 조금 올라온 지점을 뜻함
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller())
})


// ---------------------------------------------------------
// Awards 슬라이드 swiper
new Swiper('.awards .swiper-container', {
  autoplay: {
    disableOnInteraction: false
  },
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
})
