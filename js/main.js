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

  var copyButton = document.querySelector(".mail-copy");

  if (copyButton) {
    var originalLabel = copyButton.textContent;
    var resetTimer;

    function showCopyResult(ok) {
      copyButton.textContent = ok ? "Copied!" : "Copy failed";
      copyButton.classList.toggle("is-copied", ok);
      clearTimeout(resetTimer);
      resetTimer = setTimeout(function () {
        copyButton.textContent = originalLabel;
        copyButton.classList.remove("is-copied");
      }, 1800);
    }

    function legacyCopy(text) {
      var field = document.createElement("textarea");
      field.value = text;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.opacity = "0";
      document.body.appendChild(field);
      field.select();
      var ok = false;
      try {
        ok = document.execCommand("copy");
      } catch (error) {
        ok = false;
      }
      document.body.removeChild(field);
      return ok;
    }

    copyButton.addEventListener("click", function () {
      var email = copyButton.getAttribute("data-copy-email");
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(function () {
          showCopyResult(true);
        }).catch(function () {
          showCopyResult(legacyCopy(email));
        });
      } else {
        showCopyResult(legacyCopy(email));
      }
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
