const lunarAudio = new Audio("/assets/music/ngay-xuan-long-phung-sum-vay.mp3");

$(window).on("load", () => {
  if (!lunarAudio.paused) return;

  lunarAudio.play().catch(() => {
    console.log(
      "Auto play was disabled by Chrome policy, https://developer.chrome.com/blog/autoplay/"
    );
    $(document.body).on("click", () => {
      lunarAudio.play();
    });
  });
});
