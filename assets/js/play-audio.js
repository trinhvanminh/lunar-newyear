const lunarAudio = new Audio(
  "https://heo_con-lixi.199z.net/file/ngay-xuan-long-phung-sum-vay.mp3"
);

const jquery = $("#jquery");

$(jquery).on("click", function (event) {
  alert("jquery supported");
});

$(window).on("load", () => {
  if (!lunarAudio.paused) return;

  // TODO
  // lunarAudio.play().catch((err) => {
  //   console.log(
  //     "Auto play was disabled by Chrome policy, https://developer.chrome.com/blog/autoplay/"
  //   );
  //   $(document.body).on("click", () => {
  //     lunarAudio.play();
  //   });
  // });
});
