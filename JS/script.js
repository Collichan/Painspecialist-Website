document.addEventListener("DOMContentLoaded", () => {

  /* ===== THEME ===== */

  const toggle =
  document.getElementById("themeToggle");

  const saved =
  localStorage.getItem("theme");

  const prefersDark =
  window.matchMedia(
  "(prefers-color-scheme: dark)"
  ).matches;

  const dark =
  saved
  ? saved === "dark"
  : prefersDark;

  document.body.classList.toggle(
    "dark",
    dark
  );

  toggle.checked =
  dark;

  toggle.addEventListener(
    "change",
    () => {

      document.body.classList.toggle(
        "dark",
        toggle.checked
      );

      localStorage.setItem(
        "theme",
        toggle.checked
        ? "dark"
        : "light"
      );

    }
  );

  window.matchMedia(
  "(prefers-color-scheme: dark)"
  )

  .addEventListener(
    "change",
    e => {

      if (
      !localStorage.getItem(
      "theme"
      )) {

        document.body.classList.toggle(
          "dark",
          e.matches
        );

        toggle.checked =
        e.matches;

      }

    }
  );

  /* ===== SCROLL ===== */

  const observer =
  new IntersectionObserver(
    entries => {

      entries.forEach(
      entry => {

        if (
        entry.isIntersecting
        ) {
          entry.target.classList.add(
            "visible"
          );
        }

      });

    }
  );

  document
  .querySelectorAll(
    ".fade-in"
  )

  .forEach(
    el =>
    observer.observe(
      el
    )
  );

  /* ===== BURGER ===== */

  const burger =
  document.getElementById(
    "burgerBtn"
  );

  const nav =
  document.getElementById(
    "navMenu"
  );

  if (
    burger &&
    nav
  ){

    burger.addEventListener(
      "click",
      () => {

        nav.classList.toggle(
          "open"
        );

      }
    );

  }

});

// Clinic card click → open Google Maps
document.querySelectorAll(".clinic-card").forEach(card => {
  card.addEventListener("click", () => {
    const url = card.getAttribute("data-map");

    if (url) {
      window.open(url, "_blank");
    }
  });
});

emailjs.init("IRyz0xRAs1LLbXTQz");

const form =
document.getElementById("contact-form");

const button =
form.querySelector("button");

form.addEventListener("submit", function(e) {

  e.preventDefault();

  const originalText =
  button.textContent;

  button.textContent =
  "Sending...";

  button.disabled =
  true;

  emailjs.sendForm(
    "service_gup35vc",
    "template_1jtr35h",
    this
  )

  .then(() => {

    button.textContent =
    "Message Sent ✓";

    button.style.background =
    "#4CAF50";

    form.reset();

    setTimeout(() => {

      button.textContent =
      originalText;

      button.disabled =
      false;

      button.style.background =
      "";

    }, 3000);

  })

  .catch(() => {

    button.textContent =
    "Failed – Try Again";

    button.style.background =
    "#e74c3c";

    setTimeout(() => {

      button.textContent =
      originalText;

      button.disabled =
      false;

      button.style.background =
      "";

    }, 3000);

  });

});

const newsScroll =
document.querySelector(".news-scroll");

const leftBtn =
document.querySelector(".news-btn.left");

const rightBtn =
document.querySelector(".news-btn.right");

const scrollAmount = 300;

leftBtn.addEventListener("click", () => {
  newsScroll.scrollBy({
    left: -scrollAmount,
    behavior: "smooth"
  });
});

rightBtn.addEventListener("click", () => {
  newsScroll.scrollBy({
    left: scrollAmount,
    behavior: "smooth"
  });
});
