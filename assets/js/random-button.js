const BUTTON_OK_SELECTOR = "#btnOk";
const BUTTON_CANCEL_SELECTOR = "#btnCancel";
const CARD_BODY_SELECTOR = ".card-body";

$(document).ready(() => {
  function moveButtonRandomly(button) {
    const { top, left } = $(BUTTON_CANCEL_SELECTOR).offset();

    const newX = Math.random() * (window.innerWidth - button.clientWidth);
    const newY = Math.random() * (window.innerHeight - button.clientHeight);
    const distance = Math.sqrt(
      Math.pow(newX - top, 2) + Math.pow(newY - left, 2)
    );
    if (distance < 100) {
      moveButtonRandomly(button);
      return;
    }

    button.style.position = "absolute";
    button.style.left = newX + "px";
    button.style.top = newY + "px";
  }

  $(BUTTON_OK_SELECTOR).on("mouseenter", function () {
    moveButtonRandomly(this);
  });

  $(BUTTON_OK_SELECTOR).on("click", function () {
    moveButtonRandomly(this);
  });

  $(BUTTON_CANCEL_SELECTOR).click(function () {
    $(CARD_BODY_SELECTOR).html(
      'Hy vọng bạn sẽ không phải cảm thấy bất tiện vì quyết định của mình. Chúc bạn một năm mới tràn đầy niềm vui và hạnh phúc! <h2 class="pt-2">Chúc mừng năm mới.</h2>'
    );
  });
});
