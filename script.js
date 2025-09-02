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

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".nav-links").classList.remove("nav-active");
  });
});

const cards = document.querySelectorAll(".card-vibe");

cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    if (window.innerWidth <= 992) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -15;
    const rotateY = ((x - centerX) / centerX) * 15;

    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    card.style.setProperty("--x", `${x - rect.width / 2}px`);
    card.style.setProperty("--y", `${y - rect.height / 2}px`);
  });

  card.addEventListener("mouseleave", () => {
    if (window.innerWidth <= 992) return;
    card.style.transform = "perspective(800px) rotateX(0) rotateY(0)";
    card.style.setProperty("--x", "0px");
    card.style.setProperty("--y", "0px");
  });
});
