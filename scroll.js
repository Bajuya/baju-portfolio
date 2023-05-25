var panel = document.querySelectorAll("#main-section");
const foryou = document.getElementById("foryou");
const products = document.getElementById("products");
const coolsites = document.getElementById("coolsites")
const aboutme = document.getElementById("aboutme");
const contact = document.getElementById("contact");
var item = document.querySelectorAll("#links a");


//switch panel function, onclick
function switchPanel(i) {
  var position = panel[i].offsetTop
  window.scroll(0, position);
};

//add highlight function
function addHighlight(i) {
  item[i].classList.add("active");
}

//remove highlight function
function removeHighlight(i) {
  item[i].classList.remove("active");
}
//lead space when scroll
var leadspace = 300;
addHighlight(0);

//scroll highlight the nav item while scrolling to that position
window.addEventListener("scroll", function () {
  if (window.scrollY >= panel[0].offsetTop) {
    addHighlight(0);
    removeHighlight(1);
    removeHighlight(2);
    removeHighlight(3);
    removeHighlight(4);
    removeHighlight(5);
  }
  if (window.scrollY > foryou.offsetTop - leadspace) {
    addHighlight(1);
    removeHighlight(0);
    removeHighlight(2);
    removeHighlight(3);
    removeHighlight(4);
    removeHighlight(5);
  }
  if (window.scrollY > products.offsetTop - leadspace) {
    addHighlight(2);
    removeHighlight(0);
    removeHighlight(1);
    removeHighlight(3);
    removeHighlight(4);
    removeHighlight(5);
  }
  if (window.scrollY > coolsites.offsetTop - leadspace) {
    addHighlight(3);
    removeHighlight(0);
    removeHighlight(1);
    removeHighlight(2);
    removeHighlight(4);
    removeHighlight(5);
  }
  if (window.scrollY > aboutme.offsetTop - leadspace) {
    addHighlight(4);
    removeHighlight(0);
    removeHighlight(1);
    removeHighlight(2);
    removeHighlight(3);
    removeHighlight(5);
  }
  if (window.scrollY > contact.offsetTop - leadspace) {
    addHighlight(5);
    removeHighlight(0);
    removeHighlight(1);
    removeHighlight(2);
    removeHighlight(3);
    removeHighlight(4);
  }
});





