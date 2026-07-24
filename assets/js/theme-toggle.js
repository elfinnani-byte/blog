(function () {
  var lightLink = document.getElementById("theme-light");
  var darkLink = document.getElementById("theme-dark");
  var stored = localStorage.getItem("theme");
  var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  var isDark = stored ? stored === "dark" : prefersDark;

  function applyTheme(dark) {
    if (lightLink) lightLink.disabled = dark;
    if (darkLink) darkLink.disabled = !dark;
    document.documentElement.classList.toggle("dark-mode", dark);
  }

  // 렌더 전에 즉시 적용 (테마 깜빡임 방지)
  applyTheme(isDark);

  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("theme-toggle");
    if (!btn) return;
    var sunIcon = btn.querySelector(".theme-toggle__icon--sun");
    var moonIcon = btn.querySelector(".theme-toggle__icon--moon");

    function updateIcon(dark) {
      if (sunIcon) sunIcon.style.display = dark ? "none" : "";
      if (moonIcon) moonIcon.style.display = dark ? "" : "none";
    }

    updateIcon(isDark);

    btn.addEventListener("click", function () {
      isDark = !isDark;
      applyTheme(isDark);
      updateIcon(isDark);
      localStorage.setItem("theme", isDark ? "dark" : "light");
    });
  });
})();
