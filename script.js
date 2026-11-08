const menuButton = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

if (menuButton && menu) {
  menuButton.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  });
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation");
    });
  });
}

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;
    formStatus.textContent = "Thanks for reaching out! This demo form is ready for a backend or email service connection.";
    contactForm.reset();
  });
}