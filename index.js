'use strict';
// 画像を拡大してみるための
function openModal(imgElement) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    modal.style.display = "block";
    modalImg.src = imgElement.src;
  }

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

  

