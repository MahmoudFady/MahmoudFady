"use strict";

// CHECK SOME CODE AFTER WINDOW LOADED
window.onload = function () {
  var favColor = localStorage.getItem("favColor");

  if (favColor) {
    document.documentElement.style.setProperty("--mainColor", favColor);
  }
}; // CHECK SOME CODE AFTER WINDOW LOADED
// START_SIDENAVBAR_TOGGLER


var settingIcon = document.getElementById("settingIcon");
console.log(settingIcon);
var sideNavBar = document.querySelector("div.sideNavBar");

settingIcon.onclick = function () {
  sideNavBar.classList.toggle("activeSideNavBar");
}; // END_SIDENAVBAR_TOGGLER
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

var _loop = function _loop(i) {
  links[i].onclick = function () {
    var dataScroll = this.getAttribute("data-scroll");
    var ele = document.querySelector("." + dataScroll);
    window.scrollTo({
      top: ele.offsetTop - 50,
      left: 0,
      behavior: "smooth"
    });

    for (var _i4 = 0; _i4 < links.length; _i4++) {
      links[_i4].classList.remove("active");
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

/*=> ON_SCROLL_CODES */


var toTop = document.querySelector("div.toTop");

window.onscroll = function () {
  var scroll = window.scrollY;

  if (scroll > 400) {
    toTop.style.bottom = "50px";
  } else {
    toTop.style.bottom = "-50px";
  }

  toTop.onclick = function () {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  };
};
/*=> ON_SCROLL_CODES */
//document.documentElement.style.setProperty("--mainColor", "#f00");

/**
 * => CHENCK_COLOR_CODEING
 */


var colorList = document.querySelectorAll(".sideNavBar div.colors ul li"); // LOOP TO ALL COLOR LIST

for (var _i2 = 0; _i2 < colorList.length; _i2++) {
  // WHEN SOME OF THEM CLICKED
  colorList[_i2].onclick = function () {
    // FIRST EXTRACT IT'S BACKGROUND COLOR
    var activeColor = this.style.backgroundColor; // SECOND UPDATE COLOR

    document.documentElement.style.setProperty("--mainColor", activeColor); // THIRD TRANPARENT ALL CHECK ICON IN ALL COLOR LIST

    for (var _i3 = 0; _i3 < colorList.length; _i3++) {
      colorList[_i3].children[0].style.color = "transparent";
    } // 4TH SET COLOR WHITE TO ACTIVE COLOR LIST


    this.children[0].style.color = "#fff"; // SAVE UPDATE COLOR INTO LOCALSTORAGE

    localStorage.setItem("favColor", activeColor);
  };
}