const lunarAudio = new Audio(
  "../assets/music/ngay-xuan-long-phung-sum-vay.mp3"
);
$(window).on("load", () => {
  function play() {
    lunarAudio.play().catch(() => {
      console.error(
        "Audio was disabled by Chrome policy, https://developer.chrome.com/blog/autoplay/"
      );
    });

    $(BUTTON_PAUSE_AUDIO_SELECTOR).removeClass("hidden");
    $(BUTTON_PAUSE_AUDIO_SELECTOR).addClass("active");
  }

  function pause() {
    lunarAudio.pause();

    $(BUTTON_PAUSE_AUDIO_SELECTOR).removeClass("active");
  }

  $(BUTTON_OK_SELECTOR).click(function () {
    if ($(BUTTON_PAUSE_AUDIO_SELECTOR).hasClass("hidden")) {
      play();
    }
  });

  $(BUTTON_CANCEL_SELECTOR).click(function () {
    if ($(BUTTON_PAUSE_AUDIO_SELECTOR).hasClass("hidden")) {
      play();
    }
  });

  $(BUTTON_PAUSE_AUDIO_SELECTOR).click(function () {
    if (lunarAudio.paused) {
      play();
    } else {
      pause();
    }
  });

  // lunarAudio.play().catch(() => {
  //   console.log(
  //     "Auto play was disabled by Chrome policy, https://developer.chrome.com/blog/autoplay/"
  //   );
  //   $(document.body).on("click", () => {
  //     lunarAudio.play();
  //   });
  // });
});
