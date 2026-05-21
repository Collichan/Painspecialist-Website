document.addEventListener("DOMContentLoaded", () => {

  const toggle =
document.getElementById("themeToggle");

// Detect browser / OS preference
const prefersDark =
window.matchMedia(
"(prefers-color-scheme: dark)"
).matches;

// Use saved preference if present,
// otherwise use browser setting

const saved =
localStorage.getItem("theme");

const isDark =
saved
? saved === "dark"
: prefersDark;

// Apply

document.body.classList.toggle(
"dark",
isDark
);

toggle.checked =
isDark;

// Manual toggle

toggle.addEventListener(
"change",
() => {

const dark =
toggle.checked;

document.body.classList.toggle(
"dark",
dark
);

localStorage.setItem(
"theme",
dark ? "dark" : "light"
);

});

// Update automatically if OS changes
// (only if user hasn't manually chosen)

window.matchMedia(
"(prefers-color-scheme: dark)"
)

.addEventListener(
"change",
e => {

if (
localStorage.getItem("theme")
=== null
){

document.body.classList.toggle(
"dark",
e.matches
);

toggle.checked =
e.matches;

}

});

  toggle.addEventListener("change", () => {
    const isDark = toggle.checked;
    document.body.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });

  // Scroll animations
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  });

  document
    .querySelectorAll(".fade-in")
    .forEach(el => observer.observe(el));

  // MOBILE BURGER
  const burger =
    document.getElementById("burgerBtn");

  const nav =
    document.getElementById("navMenu");

  if (burger && nav) {

    burger.addEventListener("click", () => {
      nav.classList.toggle("open");
    });

    nav
      .querySelectorAll("a")
      .forEach(link => {

        link.addEventListener("click", () => {
          nav.classList.remove("open");
        });

      });

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
