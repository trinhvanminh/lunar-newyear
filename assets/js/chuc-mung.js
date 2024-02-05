const pathPrefix = "../assets/images/dragons/";

let isWinAPrize = false;

const MAGIC_NUMBER = 1;
const TOTAL_RANDOM_NUMBER = 10;

const bingo = {
  text: "Chúc mừng bạn!",
  images: ["water-dragon-transformed.jpg", "fire-dragon-transformed.jpg", "plant-dragon-transformed.jpg"],
};

$("[id^=envelope]").each(function () {
  $(this).on("click", function () {
    // confetti({
    //   particleCount: 100,
    //   spread: 70,
    //   origin: { x: 0, y: 0 },
    // });

    if ($(this).hasClass("open")) return;

    const letterElm = $(this).children().children(".letter");
    const randNum = Math.floor(Math.random() * TOTAL_RANDOM_NUMBER);

    $(this).addClass("open");

    if (randNum !== MAGIC_NUMBER || isWinAPrize) return;

    isWinAPrize = true;

    const text = bingo.text;
    const imageSrc = pathPrefix + bingo.images[Math.floor(Math.random() * bingo.images.length)];

    $(letterElm).children(".text").text(text);

    $(letterElm).find("img").attr("src", imageSrc);
  });
});
