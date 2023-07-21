const date = document.getElementById("date");
const navLinks = document.getElementById("nav-links");
const navToggle = document.getElementById("nav-toggle");

const full_date = new Date();
date.textContent = full_date.getFullYear();

navToggle.addEventListener("click", function(){
navLinks.classList.toggle("show-links") ;
});


// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach(link => {
  link.addEventListener("click", e => {
    // prevent default
    e.preventDefault();
    links.classList.remove("show-links");

    const id = e.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    //
    let position = element.offsetTop - 62;

    window.scrollTo({
      left: 0,
      // top: element.offsetTop,
      top: position,
      behavior: "smooth"
    });
  });
});
