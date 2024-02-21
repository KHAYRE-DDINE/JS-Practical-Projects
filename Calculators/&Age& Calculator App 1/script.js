//Declare Variables
let inputs = document.querySelectorAll(".calculator .info input")
let labels = document.querySelectorAll(".calculator .info label")
let day = document.querySelector(".calculator .info .day input[data-name='day']")
let month = document.querySelector(".calculator .info .month input[data-name='month']")
let year = document.querySelector(".calculator .info .year input[data-name='year']")
let years = document.querySelector(".calculator .result .years b")
let months = document.querySelector(".calculator .result .months b")
let days = document.querySelector(".calculator .result .days b")
let info = document.querySelector(".calculator .info ")
let svg = document.getElementById("svg")
let yearDate = new Date().getFullYear()

// False Information //
svg.onclick = function () {
    inputs.forEach((e) => {

        if (e.value === "") {
            e.parentElement.classList.add("wrong")
            year.parentElement.setAttribute("data-false", "The input is required")
        } else {
            e.parentElement.classList.remove("wrong")
        }

        if (day.value > 31 || day.value < 1) {

            if (day.value > 31) {
                day.parentElement.classList.add("wrong")
                day.parentElement.setAttribute("data-false", "The Date Must Be in The Past")
            }

            // Add Class false To The Label Of Day
            day.parentElement.classList.add("false")

            // Add Class false To The Input Of Day
            day.classList.add("false")

        } else {

            // Remove Class wrong From The Label Of Day
            if (day.value <= 31) {
                day.parentElement.classList.remove("wrong")
            }

            // Remove Class false From The Label Of Day
            day.parentElement.classList.remove("false")

            // Remove Class false From The Input Of Day
            day.classList.remove("false")

            info.classList.remove("false")
            calculator()
        }

        if (month.value > 12 || month.value < 1) {

            if (month.value > 12) {
                month.parentElement.classList.add("wrong")
                month.parentElement.setAttribute("data-false", "The Date Must Be in The Past")
            }

            // Add Class false To The Label Of Month
            month.parentElement.classList.add("false")

            // Add Class false To The Input Of Month
            month.classList.add("false")


        } else {

            // Remove Class wrong From The Label Of Month
            if (month.value <= 12) {
                month.parentElement.classList.remove("wrong")
            }

            // Remove Class false From The Label Of Month
            month.parentElement.classList.remove("false")

            // Remove Class false From The Input Of Month
            month.classList.remove("false")

            calculator()
        }

        if (year.value > yearDate || year.value < (yearDate - 100)) {

            if (year.value > yearDate) {
                year.parentElement.classList.add("wrong")
                year.parentElement.setAttribute("data-false", "The Date Must Be in The Past")
            }

            // Add Class false To The Label Of Year
            year.parentElement.classList.add("false")

            // Add Class false To The Input Of Year
            year.classList.add("false")

        } else {

            // Remove Class wrong From The Label Of Year
            if (year.value <= yearDate) {
                year.parentElement.classList.remove("wrong")
            }

            // Remove Class false From The Label Of Month
            year.parentElement.classList.remove("false")

            // Remove Class false From The Input Of Month
            year.classList.remove("false")

            calculator()
        }


    })
}

// Calculate The Age //
function calculator() {
    let d1 = new Date().getDay()
    let m1 = new Date().getMonth() + 1
    let y1 = new Date().getFullYear()
    let mths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    if (year.value > y1) {
        labels.forEach((item) => {
            item.classList.add("wrong")
            item.setAttribute("data-false", "The Date Must Be in The Past")
        })
    } else {

        if (m1 >= month.value) {
            months.textContent = m1 - month.value
        } else {
            (years.textContent)--
            months.textContent = 12 + m1 - month.value
        }

        if (d1 >= day.value) {
            days.textContent = d1 - day.value
        } else {
            (months.textContent)--
            let daysA = mths[m1 - 2]
            days.textContent = daysA + d1 - day.value
            if (months.textContent < 0) {
                months.textContent = 11
                    (years.textContent)--
            }
        }
        years.textContent = y1 - year.value
    }


}
