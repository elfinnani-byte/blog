document.addEventListener("DOMContentLoaded", function () {
  var menu = document.querySelector(".blog-menu");
  var toggleBtn = menu ? menu.querySelector(".blog-menu__toggle") : null;
  if (!menu || !toggleBtn) return;

  toggleBtn.addEventListener("click", function () {
    var willOpen = !menu.classList.contains("is-open");
    menu.classList.toggle("is-open", willOpen);
    toggleBtn.setAttribute("aria-expanded", String(willOpen));
  });
});
