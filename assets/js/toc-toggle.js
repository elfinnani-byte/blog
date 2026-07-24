document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".toc__toggle");
  if (!toggle) return;

  var toc = toggle.closest(".toc");
  var menu = toc ? toc.querySelector(".toc__menu") : null;
  if (!toc || !menu) return;

  toggle.addEventListener("click", function () {
    var collapsed = toc.classList.toggle("is-collapsed");
    toggle.setAttribute("aria-expanded", String(!collapsed));
  });
});
