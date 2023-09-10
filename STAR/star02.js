window.onload = function () {
  // var starBg = document.querySelector(".starBg");
  var image = document.querySelector("img");
  var topBtn = document.querySelector(".topBtn");
  var title = document.querySelector(".title");

  // 스크롤 이벤트
  window.addEventListener("scroll", function (event) {
    var scroll = this.scrollY;
    // starBg.style.transform = "translateY(" + -scroll / 3 + "px)";
    // 시간차 스크롤
    // image.style.transform = "translateY(" + scroll / 1.7 + "px)";
    if (image) {
      image.style.transform = "translateY(" + scroll / 1.6 + "px)";
    }
  });

  // // 텍스트 모션
  // for (var i = 0; i < title.querySelectorAll("div").length; i++) {
  //   var _text = title.querySelectorAll("div")[i];

  //   TweenMax.from(_text, 1, {
  //     autoAlpha: 0,
  //     // scale:0,
  //     delay: Math.random() * 1,
  //     ease: Power3.easeInOut,
  //   });
  // }
  // 텍스트 모션
  // var textElements = document.querySelectorAll(".title div");
  // setTimeout(() => {
  //   textElements.forEach(function (_text) {
  //     gsap.from(_text, {
  //       autoAlpha: 0,
  //       delay: Math.random() * 0.8,
  //       ease: Power3.easeInOut,
  //     });
  //   });
  // }, 3000);
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

  // 스크롤 이동
  // setTimeout(() => {
  //   document.querySelector(".bottom").scrollIntoView({ behavior: "smooth" });
  // }, 1000);

  TweenMax.to(window, 2, {
    scrollTo: ".bottom",
    delay: 1.5,
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
};
