document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const menu = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  const updateHeader = () => {
    if (header) header.classList.toggle("scrolled", window.scrollY > 20);
  };
  window.addEventListener("scroll", updateHeader, {passive:true});
  updateHeader();

  if (menu && nav) {
    menu.addEventListener("click", () => nav.classList.toggle("show"));
    nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("show")));
  }

  const form = document.getElementById("inquiryForm");
  const status = document.getElementById("formStatus");
  if (form && status) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      status.className = "form-status success";
      status.textContent = "Thank you. Your inquiry has been prepared successfully. Connect this form to the client's preferred email service before launch.";
      form.reset();
    });
  }
});
