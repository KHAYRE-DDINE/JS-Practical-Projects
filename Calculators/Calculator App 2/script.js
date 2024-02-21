/*******************************THEME********************************/
let span = document.querySelectorAll(".which span")

function one() {
    let xml = new XMLHttpRequest;
    xml.onload = function () {
        let objData = JSON.parse(this.responseText)
        let mainBackground = objData.one[0]["main background"];
        let toggleBackground = objData.one[0]["toggle background"];
        let screenBackground = objData.one[0]["screen background"];
        let textColorDiff = objData.one[0]["text color diff"];
        let textColorNor = objData.one[0]["text color nor"];
        let tBtnKeyBackground = objData.one[0]["tBtn key background"];
        let tBtnKeyShadow = objData.one[0]["tBtn key shadow"];
        let eqKeyBackground = objData.one[0]["eq key background"];
        let eqKeyShadow = objData.one[0]["eq key shadow"];
        let btnKeyBackground = objData.one[0]["btn key background"];
        let btnKeyShadow = objData.one[0]["btn key shadow"];

        // setPro()

        document.documentElement.style.setProperty("--background-theme", mainBackground)
        document.documentElement.style.setProperty("--toggle-theme", toggleBackground)
        document.documentElement.style.setProperty("--screen-theme", screenBackground)
        document.documentElement.style.setProperty("--text-color-dark", textColorDiff)
        document.documentElement.style.setProperty("--text-color-white", textColorNor)
        document.documentElement.style.setProperty("--dark-blue", tBtnKeyBackground)
        document.documentElement.style.setProperty("--dark-blue-shadow", tBtnKeyShadow)
        document.documentElement.style.setProperty("--red", eqKeyBackground)
        document.documentElement.style.setProperty("--red-shadow", eqKeyShadow)
        document.documentElement.style.setProperty("--light-grayish", btnKeyBackground)
        document.documentElement.style.setProperty("--light-grayish-shadow", btnKeyShadow)

    }
    xml.open("get", "info.json")
    xml.send()

}
function two() {
    let xml = new XMLHttpRequest;
    xml.onreadystatechange = function () {
        let objData = JSON.parse(this.responseText)
        let mainBackground = objData.two[0]["main background"];
        let toggleBackground = objData.two[0]["toggle background"];
        let screenBackground = objData.two[0]["screen background"];
        let textColorDiff = objData.two[0]["text color diff"];
        let textColorNor = objData.two[0]["text color nor"];
        let tBtnKeyBackground = objData.two[0]["tBtn key background"];
        let tBtnKeyShadow = objData.two[0]["tBtn key shadow"];
        let eqKeyBackground = objData.two[0]["eq key background"];
        let eqKeyShadow = objData.two[0]["eq key shadow"];
        let btnKeyBackground = objData.two[0]["btn key background"];
        let btnKeyShadow = objData.two[0]["btn key shadow"];

        // setPro()

        document.documentElement.style.setProperty("--background-theme", mainBackground)
        document.documentElement.style.setProperty("--toggle-theme", toggleBackground)
        document.documentElement.style.setProperty("--screen-theme", screenBackground)
        document.documentElement.style.setProperty("--text-color-dark", textColorDiff)
        document.documentElement.style.setProperty("--text-color-white", textColorNor)
        document.documentElement.style.setProperty("--dark-blue", tBtnKeyBackground)
        document.documentElement.style.setProperty("--dark-blue-shadow", tBtnKeyShadow)
        document.documentElement.style.setProperty("--red", eqKeyBackground)
        document.documentElement.style.setProperty("--red-shadow", eqKeyShadow)
        document.documentElement.style.setProperty("--light-grayish", btnKeyBackground)
        document.documentElement.style.setProperty("--light-grayish-shadow", btnKeyShadow)
    }
    xml.open("get", "info.json")
    xml.send()



}
function three() {
    let xml = new XMLHttpRequest;
    xml.onreadystatechange = function () {
        let objData = JSON.parse(this.responseText)
        let mainBackground = objData.three[0]["main background"];
        let toggleBackground = objData.three[0]["toggle background"];
        let screenBackground = objData.three[0]["screen background"];
        let textColorDiff = objData.three[0]["text color diff"];
        let textColorNor = objData.three[0]["text color nor"];
        let tBtnKeyBackground = objData.three[0]["tBtn key background"];
        let tBtnKeyShadow = objData.three[0]["tBtn key shadow"];
        let eqKeyBackground = objData.three[0]["eq key background"];
        let eqKeyShadow = objData.three[0]["eq key shadow"];
        let btnKeyBackground = objData.three[0]["btn key background"];
        let btnKeyShadow = objData.three[0]["btn key shadow"];

        // setPro()

        document.documentElement.style.setProperty("--background-theme", mainBackground)
        document.documentElement.style.setProperty("--toggle-theme", toggleBackground)
        document.documentElement.style.setProperty("--screen-theme", screenBackground)
        document.documentElement.style.setProperty("--text-color-dark", textColorDiff)
        document.documentElement.style.setProperty("--text-color-white", textColorNor)
        document.documentElement.style.setProperty("--dark-blue", tBtnKeyBackground)
        document.documentElement.style.setProperty("--dark-blue-shadow", tBtnKeyShadow)
        document.documentElement.style.setProperty("--red", eqKeyBackground)
        document.documentElement.style.setProperty("--red-shadow", eqKeyShadow)
        document.documentElement.style.setProperty("--light-grayish", btnKeyBackground)
        document.documentElement.style.setProperty("--light-grayish-shadow", btnKeyShadow)
    }
    xml.open("get", "info.json")
    xml.send()

}


span.forEach((e) => {
    e.onclick = () => {
        span.forEach((e) => {
            e.style.opacity = "0"
        })
        e.style.opacity = "1"

        let xml = new XMLHttpRequest;

        xml.onload = function () {
            // let objData = JSON.parse(this.responseText)

            if (this.status == 200) {
                if (e.dataset.index == "1") {
                    one()
                    console.log("one")
                } else if (e.dataset.index == "2") {
                    two()
                    console.log("two")
                } else {
                    three()
                    console.log("three")
                }

            }
        }

        xml.open("get", "info.json")
        xml.send()

    }

})

/*******************************CALCULATE********************************/
let btn = document.querySelectorAll(".bottom button")
let textarea = document.querySelector("textarea")

btn.forEach((e) => {
    e.addEventListener("click", () => {
        if (e.dataset.key != "=" && e.dataset.key != "reset" && e.dataset.key != "del") {
            textarea.textContent += e.dataset.key
        } else if (e.dataset.key == "del") {
            textarea.textContent = textarea.textContent.slice(0, -1)
        } else if (e.dataset.key == "reset") {
            textarea.textContent = ""
        } else if (e.dataset.key == "=") {
            try {
                textarea.textContent = eval(textarea.textContent)
            } catch { textarea.textContent = "Error" }

        }
    })
})

