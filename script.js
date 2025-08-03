function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("nav-active");
}

window.addEventListener("resize", () => {
  const navLinks = document.querySelector(".nav-links");
  if (window.innerWidth > 992 && navLinks.classList.contains("nav-active")) {
    navLinks.classList.remove("nav-active");
  }
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  },
  {
    threshold: 0.1,
  }
);

sections.forEach((section) => observer.observe(section));

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 80;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
