$(document).ready(() => {
  function moveButtonRandomly(button) {
    const { top, left } = $(BUTTON_CANCEL_SELECTOR).offset() || {
      top: 0,
      left: 0,
    };

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

  function raiseRandomPositionEvent() {
    moveButtonRandomly(this);
  }

  $(BUTTON_OK_SELECTOR).on("mouseenter", raiseRandomPositionEvent);
  $(BUTTON_OK_SELECTOR).on("click", raiseRandomPositionEvent);
});
