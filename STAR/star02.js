window.onload = function () {
  var starBg = document.querySelector(".starBg");
  var image = document.querySelector("img");

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

  // 스크롤 이동
  setTimeout(() => {
    document.querySelector(".bottom").scrollIntoView({ behavior: "smooth" });
  }, 2000);
};
