//social icons function

var socialIcons = document.querySelectorAll("#social-icons li ");

//forEach
socialIcons.forEach((icons) => {
  icons.addEventListener("click", () => {
    icons.classList.toggle("icons-funtion");
  });
});

//Main Btns
var Buttons = document.querySelectorAll("#btns-container button");

//forEach
Buttons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    alert(`you clicked  ${btn.textContent} button.`);
  });
});

//hamburger..

var hamburgerIcon = document.getElementById("hamburger");
var navLinks = document.getElementById("navlinks");

hamburgerIcon.addEventListener("click", () => {
  navLinks.classList.toggle("ul-active");
  if (navLinks.classList.contains("ul-active")) {
    hamburgerIcon.innerHTML = "<i class='fa-solid fa-xmark'></i>";
    //change positin and size..
    hamburgerIcon.classList.add('x-mark')
    
  } else {
    hamburgerIcon.innerHTML = "<i class='fas fa-bars'></i>";
    hamburgerIcon.classList.remove('x-mark')
  }
});



