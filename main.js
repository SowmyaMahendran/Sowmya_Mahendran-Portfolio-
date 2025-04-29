var typed = new Typed(".input", {
  strings: [
    "Aspiring HR Professional",
    "Passionate HR Learner",
    "HR Career Starter",
    "Emerging HR Specialist",
  ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

(function () {
  document.querySelectorAll(".nav li a").forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelector(".nav li a.active")?.classList.remove("active");
      this.classList.add("active");
    });
  });

  const themeBtn = document.querySelector(".theme-btn");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
    });
  }
})();

const toggleBtn = document.querySelector(".New");
const nav = document.querySelector(".nav");

toggleBtn.addEventListener("click", function () {
  nav.classList.toggle("open");
});


const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  fetch(form.action, {
    method: form.method,
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        alert("Message sent successfully!");
        window.location.href = "thank-you.html"; // Optional: Replace with your page
      } else {
        alert("Something went wrong. Please try again later.");
      }
    })
    .catch((error) => {
      console.error(error);
      alert("Failed to send message. Please check your internet connection.");
    });
});
