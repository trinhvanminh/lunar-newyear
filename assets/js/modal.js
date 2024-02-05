class Modal {
  constructor(element) {
    this.element = element;
  }

  get backDropElm() {
    const modalBlackDropValue = $(this.element).data("modal-backdrop");
    const backDropElm = $(`[modal-backdrop=${modalBlackDropValue}]`);
    return backDropElm;
  }

  get closeBtn() {
    const modalCloseButtonId = $(this.element).data("modal-close");
    const closeButtonElm = $(`#${modalCloseButtonId}`);
    return closeButtonElm;
  }

  show() {
    this.backDropElm.removeClass("hidden");
    this.element.addClass("flex");
    this.element.removeClass("hidden");

    $(this.closeBtn).on("click", () => {
      this.close();
    });
  }

  close() {
    this.backDropElm.addClass("hidden");
    this.element.removeClass("flex");
    this.element.addClass("hidden");

    $(this.closeBtn).off("click");
  }
}
