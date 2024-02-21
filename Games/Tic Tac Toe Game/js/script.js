// Declare Variables 
let winner = document.querySelectorAll(".the-winner b")
let removed = document.querySelectorAll(".removed a")
let counterOfO = document.querySelector(".count .o strong")
let counterOfX = document.querySelector(".count .x strong")
let buttons = document.querySelectorAll(".game .box")
let popUp = document.querySelector(".pop-up")
let closeIt = document.querySelector(".pop-up .close")
let square = []
let status = false

buttons.forEach((e) => {
    winner.forEach((el) => {
        square.push(e.firstElementChild)

        function theWinner(num) {
            el.textContent = buttons[num].firstElementChild.textContent
            el.textContent === "o" ? counterOfO.textContent++ : counterOfX.textContent++
            popUp.style.display = "block"
        }
        e.addEventListener("click", () => {
            e.style.pointerEvents = "none"
            if (status === false) {
                e.firstElementChild.textContent = "o"
                status = true
            } else {
                e.firstElementChild.textContent = "x"
                status = false
            }


            if (square[0].innerHTML == square[1].innerHTML && square[1].innerHTML == square[2].innerHTML && square[1].innerHTML !== "") {
                theWinner(0)
            } else if (square[3].innerHTML == square[4].innerHTML && square[4].innerHTML == square[5].innerHTML && square[5].innerHTML != "") {
                theWinner(3)
            } else if (square[6].innerHTML == square[7].innerHTML && square[7].innerHTML == square[8].innerHTML && square[8].innerHTML != "") {
                theWinner(7)
            } else if (square[0].innerHTML == square[3].innerHTML && square[3].innerHTML == square[6].innerHTML && square[6].innerHTML != "") {
                theWinner(6)
            } else if (square[1].innerHTML == square[4].innerHTML && square[4].innerHTML == square[7].innerHTML && square[7].innerHTML != "") {
                theWinner(1)
            } else if (square[2].innerHTML == square[5].innerHTML && square[5].innerHTML == square[8].innerHTML && square[5].innerHTML != "") {
                theWinner(5)
            } else if (square[2].innerHTML == square[4].innerHTML && square[4].innerHTML == square[6].innerHTML && square[4].innerHTML != "") {
                theWinner(4)
            } else if (square[0].innerHTML == square[4].innerHTML && square[4].innerHTML == square[8].innerHTML && square[4].innerHTML != "") {
                theWinner(0)
            }


            closeIt.onclick = () => {
                localStorage.setItem("o", counterOfO.textContent)
                localStorage.setItem("x", counterOfX.textContent)
                popUp.style.display = "none"
                buttons.forEach((e) => {
                    e.firstElementChild.textContent = ""
                    e.style.pointerEvents = "auto"
                })
            }

        })
    })
})

document.addEventListener("DOMContentLoaded", () => {
    console.log(localStorage.getItem("o") === null);
    if (localStorage.getItem("o") !== null && localStorage.getItem("x") !== null) {
        counterOfO.textContent = localStorage.getItem("o")
        counterOfX.textContent = localStorage.getItem("x")
    } else {
        counterOfO.textContent = "0"
        counterOfX.textContent = "0"
    }

})

// Remove LocalStorage 
removed.forEach((e) => {
    e.onclick = () => {
        if (e.textContent == "a") {
            location.reload()
        } else {
            localStorage.clear()
            counterOfO.textContent = "0"
            counterOfX.textContent = "0"
            location.reload()
        }

    }
})
