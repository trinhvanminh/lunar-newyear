$(document).ready(() => {
  let count = 0;
  $(BUTTON_CANCEL_SELECTOR).click(function () {
    $(CARD_BODY_SELECTOR).html(rejectMessages[count]);

    if (count >= 3) {
      $(BUTTON_CANCEL_SELECTOR).remove();
      return;
    }

    count++;
  });

  $(CARD_BODY_SELECTOR).html(rejectMessages[3]);
});
