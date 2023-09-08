window.onload = function () {
  var starBg = document.querySelector(".starBg");
  var title = document.querySelector(".title");

  // 스크롤 이벤트
  window.addEventListener("scroll", function (event) {
    var scroll = this.scrollY;
    // starBg.style.transform = "translateY(" + -scroll / 3 + "px)";
    // 시간차 스크롤
    title.style.transform = "translateY(" + scroll / 1.7 + "px)";
  });

  // 스크롤 이동
  setTimeout(() => {
    document.querySelector(".bottom").scrollIntoView({ behavior: "smooth" });
  }, 2000);
};
