// Show The NavBar
let btn = document.querySelector(".head .nav .others");
let cnt = document.querySelector(".head .nav .sub-other-links");

// console.log(btn);
// console.log(cnt);

btn.addEventListener("click", function(e){
  e.preventDefault()
  cnt.classList.toggle("show")
})


let TM = document.querySelectorAll(".box-time b");
let countTime = new Date("January 5, 2022 23:59:59").getTime();
// console.log(countTime)
// console.log(TM[0].textContent)

let countDown = setInterval(() => {
  let dateNow = Date.now();
  let timeRest =  dateNow - countTime ;
    console.log(Math.floor(timeRest / (1000 * 60 * 60 * 24))); // days
    
    // console.log(Math.floor((timeRest % (1000 * 60 * 60 * 24)) / 1000 / 3600)); // hours
    // console.log(Math.floor((timeRest % (1000 * 60 * 60)) / 1000 / 60)); // minutes
    // console.log(Math.floor((timeRest % (1000 * 60)) / 1000)); // secondes

  TM[0].textContent = Math.floor(timeRest / (1000 * 60 * 60 * 24)); // days
  TM[1].textContent = Math.floor((timeRest % (1000 * 60 * 60 * 24)) / 1000 / 3600); // hours
  TM[2].textContent = Math.floor((timeRest % (1000 * 60 * 60)) / 1000 / 60); // minutes
  TM[3].textContent = Math.floor((timeRest % (1000 * 60)) / 1000); // secondes

  TM[0].textContent < 10 && TM[0].textContent > 10 ? (TM[0].textContent = "0" + TM[0].textContent) : TM[0].textContent;
  TM[1].textContent < 10 && TM[1].textContent > 10 ? (TM[1].textContent = "0" + TM[1].textContent) : TM[1].textContent;
  TM[2].textContent < 10 && TM[2].textContent > 10 ? (TM[2].textContent = "0" + TM[2].textContent) : TM[2].textContent;
  TM[3].textContent < 10 && TM[3].textContent > 10 ? (TM[3].textContent = "0" + TM[3].textContent) : TM[3].textContent;


}, 1000);

/* Many Dottes*/

function repeatLeft() {
  for (i = 0; i < 120; i++) {
    let dottes = document.querySelectorAll(".dottes");

    let dotte = document.createElement("span");

    dottes[1].appendChild(dotte);
  }
}
repeatLeft();
function repeatRight() {
  for (i = 0; i < 120; i++) {
    let dottes = document.querySelectorAll(".dottes");

    let dotte = document.createElement("span");

    dottes[0].appendChild(dotte);
  }
}
repeatRight();
