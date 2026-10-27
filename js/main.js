(function () {
  var root = document.documentElement;
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches === false) {
    root.classList.add("js");
  }

  function setOpen(open) {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setOpen(false);
      });
    });
  }

  if (!root.classList.contains("js") || !("IntersectionObserver" in window)) {
    return;
  }

  var sections = document.querySelectorAll(".reveal");
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  sections.forEach(function (section) {
    observer.observe(section);
  });
})();
