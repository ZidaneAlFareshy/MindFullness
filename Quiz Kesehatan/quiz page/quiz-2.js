document.addEventListener("DOMContentLoaded", function () {
  var btnYes = document.querySelector(".btn-yes");
  var btnNo = document.querySelector(".btn-no");
  var popup = null;

  btnYes.addEventListener("click", function () {
    showPopup(
      "Opps Anda Salah!! Gangguan tidur merupakan akibat dari timbulnya stress, dan bukan hanya gangguan tidur saja sebenarnya masih banyak factor lainnya. Sebagian diantaranya adalah masalah keuangan, hubungan sosial, atau tuntutan di dalam pekerjaan. Untuk mengatasi stres, kunci utamanya adalah mengidentifikasi akar permasalahan dan mencari solusinya."
    );
    btnYes.classList.add("active");
    btnNo.classList.remove("active");
  });

  btnNo.addEventListener("click", function () {
    showPopup(
      "Yup Anda Benar!! Gangguan tidur merupakan akibat dari timbulnya stress, dan bukan hanya gangguan tidur saja sebenarnya masih banyak factor lainnya. Sebagian diantaranya adalah masalah keuangan, hubungan sosial, atau tuntutan di dalam pekerjaan. Untuk mengatasi stres, kunci utamanya adalah mengidentifikasi akar permasalahan dan mencari solusinya."
    );
    btnYes.classList.remove("active");
    btnNo.classList.add("active");
  });

  function showPopup(description) {
    // Hapus popup sebelumnya jika ada
    if (popup) {
      document.body.removeChild(popup);
      popup = null;
    }

    popup = document.createElement("div");
    popup.classList.add("popup");
    popup.innerHTML = `
          <div class="popup-content">
            <span class="close-btn">&times;</span>
            <p>${description}</p>
          </div>
        `;

    document.body.appendChild(popup);

    var closeBtn = popup.querySelector(".close-btn");
    closeBtn.addEventListener("click", function () {
      closePopup();
    });

    // Menutup popup saat mengklik di luar area popup
    document.addEventListener("click", function (event) {
      if (!popup.contains(event.target) && event.target !== btnYes && event.target !== btnNo) {
        closePopup();
      }
    });
  }

  function closePopup() {
    if (popup) {
      document.body.removeChild(popup);
      popup = null;
    }
  }
});
