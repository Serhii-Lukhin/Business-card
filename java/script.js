(() => {
  const refs = {
    openQrBtn: document.querySelector("[data-qr-open]"),
    closeQrBtn: document.querySelector("[data-qr-close]"),
    qrCode: document.querySelector("[data-qr-code]"),
    qrHidden: document.querySelector("[data-qr-hidden]"),
  };

  refs.openQrBtn.addEventListener("click", toggleQr);
  refs.closeQrBtn.addEventListener("click", toggleQr);

  function toggleQr() {
    refs.qrCode.classList.toggle("is-hidden");
    refs.qrHidden.classList.toggle("is-hidden");
    refs.openQrBtn.classList.toggle("is-hidden-simple");
    refs.closeQrBtn.classList.toggle("is-hidden-simple");
  }
})();
