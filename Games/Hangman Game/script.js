let conjecture = document.querySelector(".the-conjecture ")
let game = document.querySelector(".game")
let word = document.querySelector(".the-conjecture .word")
let lettersOfWords = document.querySelectorAll(".the-conjecture .word span")
let hint = document.querySelector(".the-conjecture hint")
let incorrect = document.querySelector(".the-conjecture .incorrect b strong")
let letters = document.querySelectorAll(".the-conjecture .letters button")
let again = document.querySelectorAll(".again")
let failed = document.querySelector(".failed")
let success = document.querySelector(".success")
let found = document.querySelectorAll(".found b")
let image = document.querySelector(".result .image img")
let images = ["hangman-0.svg", "hangman-1.svg", "hangman-2.svg", "hangman-3.svg", "hangman-4.svg", "hangman-5.svg", "hangman-6.svg"]

let info = new XMLHttpRequest()

info.onreadystatechange = () => {
    if (info.status == 200 && info.readyState == 4) {
        let objInfo = JSON.parse(info.responseText)
        let wor = []
        let hin = []

        for (let i = 0; i < objInfo.wordsHints.length; i++) {
            let hintedWord = objInfo.wordsHints[i].word
            let hinted = objInfo.wordsHints[i].hint

            wor.push(hintedWord)
            hin.push(hinted)

        }
        let randomNumber = Math.floor(Math.random() * wor.length)
        let getWord = wor[randomNumber]
        let getHint = hin[randomNumber]
        hint.textContent = getHint

        var arrayOfSpan = []
        
        // Add The Space Of Letters
        let add = getWord.split("").map(el => el)


        let divOfSpan = document.createElement("div")


        let spanNode;

        let spl = getWord.split("").map((e) => {

            let span = document.createElement("span")
            arrayOfSpan.push(span)

            spanNode = document.createTextNode(e)
            span.appendChild(spanNode)

            divOfSpan.appendChild(span)

            word.prepend(divOfSpan)

            // Write The Word 


            letters.forEach((e) => {
                e.addEventListener('click', function () {
                    if (e.textContent.toUpperCase() == span.textContent.toUpperCase()) {

                        span.style.fontSize = "17px"
                      
                        span.classList.add("below")
                        e.classList.add("clicked") 
                        
                    }
                })
            })
        })
        var num = 0;
        let inc = 0
        letters.forEach((e) => {
            e.addEventListener("click", () => {
                if (getWord.indexOf(e.textContent) == -1) {
                    incorrect.textContent++
                    inc++
                    image.src = `images/${images[inc]}`
                    if (incorrect.textContent >= 6) {
                        game.style.zIndex = "-2"
                        failed.style.display = "block"
                    }

                    
                } else { 
                    num++
                    if (getWord.length == num) {
                        success.style.display = "block"
                        game.style.zIndex = "-2"
                    }
                    console.log(num);
                }
            })
        })


        console.log(getWord);


        found.forEach((e) => {
            e.textContent = getWord
        })

        /* Try The Game Again */
        again.forEach((e) => {
            e.addEventListener('click', () => {
                e.parentElement.style.display = "none"
                window.location.reload(true)
                game.style.zIndex = "0"
            })
        })
    }
}

info.open('get', 'think.json')
info.send()

