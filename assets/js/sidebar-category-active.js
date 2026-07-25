(function () {
  // 카테고리 아카이브 페이지(/categories/#slug)에서 선택된 카테고리를 열린 폴더로 표시.
  // 글 페이지에서는 Liquid가 이미 is-active-category를 렌더링해두므로, hash가 없으면 건드리지 않음.
  function updateActiveCategory() {
    var hash = decodeURIComponent(location.hash || "").replace("#", "");
    if (!hash) return;
    document.querySelectorAll(".sidebar-nav__subitem[data-category-slug]").forEach(function (li) {
      var slug = li.getAttribute("data-category-slug");
      li.classList.toggle("is-active-category", slug === hash);
    });
  }

  document.addEventListener("DOMContentLoaded", updateActiveCategory);
  window.addEventListener("hashchange", updateActiveCategory);
})();
