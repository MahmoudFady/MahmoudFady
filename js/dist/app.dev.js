"use strict";

// START_WORD_WRITER_FUNCTION_CODEING

/**
 * => ACCEPT ELEMENT TO MANPULATE THAT FUNCTION
 * =>  SECOND PARAMTER WORD TO WRITE
 */
var wordWriter = function wordWriter(ele, word) {
  var titleInReverse = false;
  var index = 0;
  var wordLen = word.length;
  setInterval(function () {
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
}; // START_WORD_WRITER_FUNCTIION_CODEING


var headerTitle = document.getElementById("headerTitle");
wordWriter(headerTitle, "Web Developer");
/*=> START_TOGGLEg_ACTIVE_CLASS_INTO_NAVBAR_LINKS */

var links = document.querySelector("ul.navbar-nav").children;
console.log(links);

var _loop = function _loop(i) {
  links[i].onclick = function () {
    var dataScroll = this.getAttribute("data-scroll");
    var ele = document.querySelector("." + dataScroll);
    window.scrollTo({
      top: ele.offsetTop - 50,
      left: 0,
      behavior: "smooth"
    });

    for (var _i2 = 0; _i2 < links.length; _i2++) {
      links[_i2].classList.remove("active");
    }

    links[i].classList.toggle("active");
  };
};

for (var i = 0; i < links.length; i++) {
  _loop(i);
}
/*=> START_TOGGLE_ACTIVE_CLASS_INTO_NAVBAR_LINKS */

/*=> STAET_NAVBAR_TOGGLER_BUTTON*/


var navbarTogglerBtn = document.querySelector("button.navbar-toggler");

navbarTogglerBtn.onclick = function () {
  var icon = this.children[0];
  var showNavLinks = icon.classList.contains("fa-bars");
  var navLinks = document.querySelector("div.collapse");

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


var skillPercents = document.querySelectorAll("div.skill-percent");

for (var _i = 0; _i < skillPercents.length; _i++) {
  var percent = skillPercents[_i].getAttribute("data-percent");

  skillPercents[_i].style.width = percent;
  skillPercents[_i].children[0].textContent = percent;
}
/*=> DAYNMICALLY_SET_WIDTH_TO_SKILL */