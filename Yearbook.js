
/** header home chuchu */
const header = document.querySelector("header");
window.addEventListener ("scroll", function(){
    header.classList.toggle("sticky",window.scrollY > 100);
});
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}

/* darkmode */
const BUTTON = document.querySelector("button");
const SYNC = document.querySelector("#sync");

const TOGGLE = () => {
  const IS_PRESSED = BUTTON.matches("[aria-pressed=true]");
  document.body.setAttribute("data-dark-mode", IS_PRESSED ? false : true);
  BUTTON.setAttribute("aria-pressed", IS_PRESSED ? false : true);
};

BUTTON.addEventListener("click", TOGGLE);
