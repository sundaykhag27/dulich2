/**
 * Hiệu ứng hoa vàng rơi – dùng cho các trang không load main.js (about, news, hotels, services).
 * Trang index và tours dùng main.js nên không cần file này.
 */
(function () {
  function initFallingPetals() {
    var container = document.getElementById("fallingPetals");
    if (!container) return;
    var count = 60;
    for (var i = 0; i < count; i++) {
      var petal = document.createElement("div");
      petal.className = "petal petal--yellow";
      petal.style.left = Math.random() * 100 + "%";
      petal.style.animationDuration = 10 + Math.random() * 15 + "s";
      petal.style.animationDelay = -Math.random() * 25 + "s";
      container.appendChild(petal);
    }
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initFallingPetals);
  } else {
    initFallingPetals();
  }
})();
