document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("themeToggle");

  const saved = localStorage.getItem("theme") || "light";
  document.body.classList.toggle("dark", saved === "dark");
  toggle.checked = saved === "dark";

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

  document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));
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

const form = document.getElementById("contact-form");
const button = form.querySelector("button");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const originalText = button.textContent;

  // Show loading state
  button.textContent = "Sending...";
  button.disabled = true;

  emailjs.sendForm("service_gup35vc", "template_1jtr35h", this)
    .then(() => {
      // Success state
      button.textContent = "Message Sent ✓";
      button.style.background = "#4CAF50"; // green

      form.reset();

      // Reset after 3 seconds
      setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
        button.style.background = ""; // revert to CSS
      }, 3000);
    })
    .catch(() => {
      // Error state
      button.textContent = "Failed – Try Again";
      button.style.background = "#e74c3c"; // red

      setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
        button.style.background = "";
      }, 3000);
    });
});

const newsScroll = document.querySelector(".news-scroll");
const leftBtn = document.querySelector(".news-btn.left");
const rightBtn = document.querySelector(".news-btn.right");

const scrollAmount = 300; // adjust for card width

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