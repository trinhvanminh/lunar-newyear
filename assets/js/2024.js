const rejectMessages = [
  `<p class="pt-2">Từ chối lì xì một cách duyên dáng như vậy thì không phải ai cũng làm được đâu.</p>
  <p class="pt-2">Bạn chắc chắn là người có khả năng kiểm soát tuyệt vời đấy! =))</p>`,
  //
  `<p class="pt-2">Tuyệt vời quá!</p>
  <p class="pt-2">Bạn thật là một bậc thầy trong việc từ chối lì xì một cách đầy quyết đoán và không do dự!</p>
  <p class="pt-2">Chắc chắn bạn phải là người thật giàu có! =))</p>`,
  //
  `<p class="pt-2">Đỉnh quá bạn ơi =))</p>
  <p class="pt-2">Đúng là một "chuyên gia từ chối lì xì".</p>
  <p class="pt-2">Bạn thật xinh đẹp, thà nghèo khổ, chứ không nhận lì xì!</p>`,
  //
  `<div class="flex flex-col sm:flex-row items-center">
    <div class="w-[60%] lg:w-[10vw] md:w-[20vw] m-4">
      <img src="../assets/images/qr-code-momo.png" />
    </div>
    <div class="flex flex-col">
      <p class="pt-2">Nếu bạn đã nhất quyết từ chối như vậy!</p>
      <p class="pt-2">Vậy lì xì lại cho chúng tôi nhé =))</p>
    </div>
  </div>`,
];

function fireworksConfetti() {
  const duration = 15 * 1000,
    animationEnd = Date.now() + duration,
    defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);

    // since particles fall down, start a bit higher than random
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
    );
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    );
  }, 250);
}

$(document).ready(() => {
  let count = 0;
  $(BUTTON_CANCEL_SELECTOR).click(function () {
    $(CARD_BODY_SELECTOR).html(rejectMessages[count]);

    if (count >= 3) {
      $(BUTTON_CANCEL_SELECTOR).remove();
      fireworksConfetti();
      return;
    }

    count++;
  });
});
