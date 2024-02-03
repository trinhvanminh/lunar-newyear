const CARD_BODY_SELECTOR = ".card-body";

$(document).ready(() => {
  let count = 0;
  $(BUTTON_CANCEL_SELECTOR).click(function () {
    switch (count) {
      case 0:
        $(CARD_BODY_SELECTOR).html(
          "Từ chối lì xì một cách duyên dáng như vậy thì không phải ai cũng làm được đâu. <br />Bạn chắc chắn là người có khả năng kiểm soát tuyệt vời đấy! =))"
        );
        break;

      case 1:
        $(CARD_BODY_SELECTOR).html(
          "Tuyệt vời quá! <br />Bạn thật là một bậc thầy trong việc từ chối lì xì một cách đầy quyết đoán và không do dự! <br />Chắc chắn bạn phải là người thật giàu có! =))"
        );
        break;

      case 2:
        $(CARD_BODY_SELECTOR).html(
          "Đỉnh quá bạn ơi =)) <br /> Đúng là một 'chuyên gia từ chối lì xì' . <br /> Bạn thật xinh đẹp, thà nghèo khổ, chứ không nhận lì xì! "
        );
        break;

      case 3:
        $(CARD_BODY_SELECTOR).html(
          '<div class="flex items-center"><div><img src="/assets/images/qr-code-sample.png" /></div> Nếu bạn đã nhất quyết từ chối như vậy! <br /> Vậy lì xì lại cho chúng tôi nhé =))</div>'
        );

        $(BUTTON_CANCEL_SELECTOR).remove();
        break;

      default:
        break;
    }

    count++;
  });
});
