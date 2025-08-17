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

/* Theme Toggle */
const themeToggleBtn = document.getElementById("theme-toggle");
const rootElement = document.documentElement;

if (localStorage.getItem("theme") === "light") {
  rootElement.classList.add("light");
  themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
}

themeToggleBtn.addEventListener("click", () => {
  rootElement.classList.toggle("light");
  
  if (rootElement.classList.contains("light")) {
    themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
    localStorage.setItem("theme", "light");
  } else {
    themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    localStorage.setItem("theme", "dark");
  }
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelector(".nav-links").classList.remove("nav-active");
  });
});
