// START_WORD_WRITER_FUNCTION_CODEING
/**
 * => ACCEPT ELEMENT TO MANPULATE THAT FUNCTION
 * =>  SECOND PARAMTER WORD TO WRITE
 */
let wordWriter = (ele, word) => {
  let titleInReverse = false;
  let index = 0;
  const wordLen = word.length;
  setInterval(() => {
    if (index == wordLen) {
      titleInReverse = true;
    } else if (index == 0) {
      titleInReverse = false;
    }
    if (titleInReverse) {
      ele.textContent = word.slice(0, index) + " |";
      index--;
    } else {
      ele.textContent = word.slice(0, index) + " |";
      index++;
    }
  }, 400);
};

// START_WORD_WRITER_FUNCTIION_CODEING

const headerTitle = document.getElementById("headerTitle");

wordWriter(headerTitle, "Web Developer");
/*=> START_TOGGLEg_ACTIVE_CLASS_INTO_NAVBAR_LINKS */
const links = document.querySelector("ul.navbar-nav").children;
console.log(links);
for (let i = 0; i < links.length; i++) {
  links[i].onclick = function () {
    const dataScroll = this.getAttribute("data-scroll");
    const ele = document.querySelector("." + dataScroll);
    window.scrollTo({
      top: ele.offsetTop - 50,
      left: 0,
      behavior: "smooth",
    });
    for (let i = 0; i < links.length; i++) {
      links[i].classList.remove("active");
    }
    links[i].classList.toggle("active");
  };
}
/*=> START_TOGGLE_ACTIVE_CLASS_INTO_NAVBAR_LINKS */

/*=> STAET_NAVBAR_TOGGLER_BUTTON*/
const navbarTogglerBtn = document.querySelector("button.navbar-toggler");
navbarTogglerBtn.onclick = function () {
  const icon = this.children[0];
  const showNavLinks = icon.classList.contains("fa-bars");
  const navLinks = document.querySelector("div.collapse");
  if (showNavLinks) {
    navLinks.style.display = "block";
    icon.classList.add("fa-times");
    icon.classList.remove("fa-bars");
  } else {
    navLinks.style.display = "none";
    icon.classList.add("fa-bars");
    icon.classList.remove("fa-times");
  }
};

/*=> END_NAVBAR_TOGGLER_BUTTON*/
/*=> DAYNMICALLY_SET_WIDTH_TO_SKILL */
const skillPercents = document.querySelectorAll("div.skill-percent");
for (let i = 0; i < skillPercents.length; i++) {
  const percent = skillPercents[i].getAttribute("data-percent");
  skillPercents[i].style.width = percent;
  skillPercents[i].children[0].textContent = percent;
}
/*=> DAYNMICALLY_SET_WIDTH_TO_SKILL */
