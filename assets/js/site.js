(function () {
  var root = document.documentElement;
  var media = window.matchMedia("(prefers-color-scheme: dark)");

  // ---- Theme toggle ----
  // With no saved choice the OS setting applies; clicking saves an explicit choice.
  var themeBtn = document.querySelector(".theme-toggle");

  function currentTheme() {
    var explicit = root.getAttribute("data-theme");
    if (explicit === "light" || explicit === "dark") return explicit;
    return media.matches ? "dark" : "light";
  }

  function renderToggle() {
    var dark = currentTheme() === "dark";
    // keep the mobile browser bar in step with an explicit choice
    document.querySelectorAll('meta[name="theme-color"]').forEach(function (m) {
      m.setAttribute("content", dark ? "#12141a" : "#fafaf8");
    });
    if (!themeBtn) return;
    themeBtn.innerHTML = '<i class="fas fa-' + (dark ? "sun" : "moon") + '" aria-hidden="true"></i>';
    themeBtn.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
  }

  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
      renderToggle();
    });
  }
  if (media.addEventListener) media.addEventListener("change", renderToggle);
  renderToggle();

  // ---- Mobile menu ----
  var navBtn = document.querySelector(".nav-toggle");
  var navLinks = document.getElementById("nav-links");

  function setMenu(open) {
    navLinks.classList.toggle("is-open", open);
    navBtn.setAttribute("aria-expanded", String(open));
    navBtn.innerHTML = '<i class="fas fa-' + (open ? "times" : "bars") + '" aria-hidden="true"></i><span class="sr-only">Menu</span>';
  }

  if (navBtn && navLinks) {
    navBtn.addEventListener("click", function () {
      setMenu(!navLinks.classList.contains("is-open"));
    });
    navLinks.addEventListener("click", function (e) {
      if (e.target.closest("a")) setMenu(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && navLinks.classList.contains("is-open")) {
        setMenu(false);
        navBtn.focus();
      }
    });
  }
})();
