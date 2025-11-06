
const menuToggle = document.createElement("div");
menuToggle.classList.add("menu-toggle");
menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';

const nav = document.querySelector("nav");
nav.appendChild(menuToggle);

const navLinks = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  
  if (menuToggle.innerHTML.includes("fa-bars")) {
    menuToggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  } else {
    menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }
});

const links = document.querySelectorAll("nav ul li a");

links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    document.querySelector(targetId).scrollIntoView({
      behavior: "smooth"
    });
    
    navLinks.classList.remove("active");
    menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
  });
});


const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight / 5 * 4;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add("show");
    } else {
      section.classList.remove("show");
    }
  });
});
