///////////////////side bar open///////////////////////////////////////////////////////////////////////////

let icone = document.querySelector(".icone-side");
let right = document.querySelector(".right");

icone.onclick = function () {
  right.classList.toggle("open");
};

///////////////////START MEMBERS///////////////////////////////////////////////////////////////////////////

// do taps
let tapsMem = document.querySelectorAll(".members .taps span");
// let arrSpans = Array.of(taps)
let allDivs = document.querySelectorAll(".divs .mem");
// let arrAllDivs = Array.of(allDivs)
//  console.log(tapsMem);
// console.log(allDivs);

tapsMem.forEach(function (e) {
  e.onclick = function () {
    tapsMem.forEach((e) => {
      e.classList.remove("active");
    });
    e.classList.add("active");

    allDivs.forEach((el) => {
      el.style.display = " none";
    });
    console.log(e.dataset.show);
    document.querySelector(e.dataset.show).style.display = "block";
  };
});
///////////////////END MEMBERS///////////////////////////////////////////////////////////////////////////

///////////////////SRAT GROUPS///////////////////////////////////////////////////////////////////////////

// do taps
let tapsGou = document.querySelectorAll(".groups .taps span");
let wholeDivs = document.querySelectorAll(".groups .gro");
//  console.log(tapsGou);
// console.log(wholeDivs);

tapsGou.forEach(function (e) {
  e.onclick = function () {
    tapsGou.forEach((e) => {
      e.classList.remove("active");
    });
    e.classList.add("active");

    wholeDivs.forEach((e) => {
      e.style.display = " none";
    });
    console.log(e.dataset.grou);
    document.querySelector(e.dataset.grou).style.display = "block";
  };
});

///////////////////END GROUPS///////////////////////////////////////////////////////////////////////////

///////////////////start slider///////////////////////////////////////////////////////////////////////////
let imageSlide = document.querySelectorAll(".slider");
let divSlider = document.querySelectorAll(".images-slid");
let slider = document.querySelector(".slider");
let bullet = document.querySelectorAll(".bullets span");

// let currentSlide = 2;

bullet.forEach((e) => {
  e.onclick = () => {
    console.log(e);
    slider.style.left = `${e.dataset.in * -100}%`;
  };
});

//////////////////////////form inputs/////////////////////////////////////////////////////////////////7//

const form = document.querySelectorAll("form")[1];
const inputEmail = document.querySelector("input[type ='email']");
const sentence = document.querySelector("fieldset #sentence");
const inputPasword = document.querySelector("input[type ='password']");
const passTextError = document.querySelector("fieldset .pass");

const btn = document.querySelector("[type='submit']");
// console.log(form)
// console.log(inputEmail)
// console.log(inputPasword)

form.addEventListener("submit", (e) => {
  e.preventDefault();
  email();
  password();
  console.log("success");
});

function email() {
  if (inputEmail.value === "") {
    sentence.classList.add("error");
    sentence.textContent = "please enter a valid email";
    inputEmail.classList.add("error");
  } else {
    sentence.classList.add("valid");
    sentence.textContent = "valid";
    inputEmail.classList.add("valid");
  }
}

function password() {
  if (inputPasword.value == "") {
    passTextError.classList.add("error");
    passTextError.textContent = "please enter a password bigger than 6";
    inputPasword.classList.add("error");
  } else if (inputPasword.value.length < 6) {
    passTextError.classList.add("error");
    passTextError.textContent = "please the password must be bigger than 6 ";
    inputPasword.classList.add("error");
  } else {
    passTextError.classList.add("valid");
    passTextError.textContent = "valid";
    inputPasword.classList.add("valid");
  }
  console.log(inputPasword.value.length);
}
//////////////////////////form inputs/////////////////////////////////////////////////////////////////7//
