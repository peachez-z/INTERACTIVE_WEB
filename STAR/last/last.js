window.onload = function () {
  var image = document.querySelector("img");
  var topBtn = document.querySelector(".topBtn");
  // var title = document.querySelector(".title");
  // cardSetting();
  // 스크롤 이벤트
  window.addEventListener("scroll", function (event) {
    resize();
    var scroll = this.scrollY;
    // 시간차 스크롤
    if (image) {
      image.style.transform = "translateY(" + scroll / 1.6 + "px)";
    }

    // bottom2의 위치 계산
    var bottom2 = document.querySelector(".bottom2");
    var bottom2Rect = bottom2.getBoundingClientRect();

    if (scroll + window.innerHeight >= bottom2Rect.top) {
      cardSetting();
    }
  });

  var textElements = document.querySelectorAll(".title div");

  setTimeout(() => {
    textElements.forEach(function (_text) {
      gsap.to(_text, {
        autoAlpha: 1, // 텍스트를 나타나게 만들기
        delay: Math.random() * 0.8,
        ease: Power3.easeInOut,
      });
    });
  }, 3000);
  // 자동 스크롤
  TweenMax.to(window, 2, {
    scrollTo: ".bottom",
    delay: 1.5,
    ease: Power4.easeInOut,
  });

  // 자동 스크롤
  TweenMax.to(window, 2, {
    scrollTo: ".bottom2",
    delay: 5.5,
    ease: Power4.easeInOut,
  });

  // 하단 커지게 하기
  TweenMax.from(".bottom", 2.5, {
    scale: 0.7,
    y: 100,
    delay: 2.2,
    ease: Power4.easeInOut,
  });

  // top 버틑
  topBtn.addEventListener("click", function () {
    TweenMax.to(window, 1, {
      scrollTo: {
        y: 0,
        autoKill: true,
      },
      ease: Power4.easeInOut,
    });
  });

  // #############################################################################
  var _cards = document.querySelectorAll(".cardItem");
  var _button1 = document.querySelectorAll("button")[1];
  var _button2 = document.querySelectorAll("button")[2];

  _button1.addEventListener("click", function (event) {
    cardRandom();
  });

  _button2.addEventListener("click", function (event) {
    cardSetting();
  });

  window.addEventListener("resize", function () {
    resize();
  });

  function resize() {
    // 창크기 변경시 업데이트
    windowHeight = window.innerHeight;
    windowWidth = window.innerWidth;
    cardSetting();
  }

  // 페이지 로딩 시나 새로고침 시 카드 초기 위치 설정
  window.addEventListener("load", function () {
    cardSetting();
  });

  function cardSetting() {
    _cards.forEach(function (item, i) {
      TweenMax.to(item, 1, {
        top: windowHeight / 2 - i * 40,
        left: windowWidth / 2 + i * 40 - 200,
        rotation: 0,
        ease: Power3.easeInOut,
        delay: i * 0.2,
      });
    });
  }

  function cardRandom() {
    _cards.forEach(function (item, i) {
      TweenMax.to(item, 1, {
        top: Math.random() * windowHeight,
        left: Math.random() * windowWidth,
        rotation: Math.random() * 180,
        ease: Power4.easeInOut,
        delay: i * 0.1,
      });
    });
  }
};
