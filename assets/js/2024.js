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
});
