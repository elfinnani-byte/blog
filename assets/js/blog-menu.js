document.addEventListener("DOMContentLoaded", function () {
  var trigger = document.querySelector('a[href="#blog-menu"]');
  var menu = document.getElementById("blog-menu");
  if (!trigger || !menu) return;

  var toggleBtn = menu.querySelector(".blog-menu__toggle");

  function setOpen(open) {
    menu.classList.toggle("is-open", open);
    if (toggleBtn) toggleBtn.setAttribute("aria-expanded", String(open));
  }

  trigger.addEventListener("click", function (e) {
    e.preventDefault();
    var willOpen = !menu.classList.contains("is-open");
    setOpen(willOpen);
    if (willOpen) {
      menu.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  });

  if (toggleBtn) {
    toggleBtn.addEventListener("click", function (e) {
      e.preventDefault();
      setOpen(!menu.classList.contains("is-open"));
    });
  }
});
