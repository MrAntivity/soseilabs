const form = document.querySelector(".cta__form");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const emailInput = form.querySelector("input[type='email']");
    if (!emailInput) return;
    const email = emailInput.value.trim();
    if (email) {
      form.reset();
      const toast = document.createElement("div");
      toast.className = "toast";
      toast.textContent = `Thanks for joining, ${email}!`;
      document.body.appendChild(toast);
      requestAnimationFrame(() => toast.classList.add("visible"));
      setTimeout(() => {
        toast.classList.remove("visible");
        setTimeout(() => toast.remove(), 200);
      }, 2400);
    }
  });
}

document.addEventListener("scroll", () => {
  const header = document.querySelector(".site-header");
  if (!header) return;
  const scrolled = window.scrollY > 12;
  header.classList.toggle("scrolled", scrolled);
});
