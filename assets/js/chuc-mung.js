const toothlessDragonAudio = new Audio("../assets/music/toothless-dance.mp3");

const pathPrefix = "../assets/images/dragons/";

let isWinAPrize = false;

const MAGIC_NUMBER = 1;

const TOTAL_CARDS = 4;

const EXPECT_WIN_PERCENT = 0.9;

const TOTAL_RANDOM_NUMBER = Math.floor(TOTAL_CARDS / EXPECT_WIN_PERCENT);

const PRIZE_MODAL = "#prize-modal";

const bingo = {
  text: "Chúc mừng bạn!",
  images: [
    "water-dragon-transformed.jpg",
    "fire-dragon-transformed.jpg",
    "plant-dragon-transformed.jpg",
  ],
};

$(window).on("load", () => {
  $(BUTTON_PAUSE_AUDIO_SELECTOR).click(function () {
    if (toothlessDragonAudio.paused) {
      playAudio();
    } else {
      pauseAudio();
    }
  });
});

function playAudio() {
  if (toothlessDragonAudio.paused === true) {
    toothlessDragonAudio.play();
    $(BUTTON_PAUSE_AUDIO_SELECTOR).removeClass("hidden");
    $(BUTTON_PAUSE_AUDIO_SELECTOR).addClass("active");
  }
}

function pauseAudio() {
  toothlessDragonAudio.pause();

  $(BUTTON_PAUSE_AUDIO_SELECTOR).removeClass("active");
}

$("[id^=envelope]").each(function () {
  $(this).on("click", function () {
    if ($(this).hasClass("open")) return;

    playAudio();

    const letterElm = $(this).children().children(".letter");
    const randNum = Math.floor(Math.random() * TOTAL_RANDOM_NUMBER + 1);

    $(this).addClass("open");

    if (randNum !== MAGIC_NUMBER || isWinAPrize) return;

    pauseAudio();

    isWinAPrize = true;

    confetti({
      particleCount: 500,
      spread: 50,
      origin: { x: 0.5, y: 1 },
    });

    const text = bingo.text;
    const imageSrc =
      pathPrefix +
      bingo.images[Math.floor(Math.random() * bingo.images.length)];

    $(this).addClass("prize");

    $(this).children(".click").removeClass("hidden");
    $(this).children(".click").addClass("flex");

    $(letterElm).children(".text").text(text);

    $(letterElm).find("img").attr("src", imageSrc);

    const modal = new Modal($(PRIZE_MODAL));

    $(this).on("click", function () {
      modal.show();
    });
  });
});
