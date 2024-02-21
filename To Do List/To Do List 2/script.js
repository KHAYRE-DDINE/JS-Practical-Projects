

let listOfTasks = document.querySelector(".todo-list .list ")
let closeTask = document.querySelector(".todo-list .list .todo .close")
let check = document.querySelector(".todo-list .list .todo span svg")
let todo = document.querySelector(".todo-list .list .todo ")
let inpClick = document.querySelector(".todo-list .middle-section span")
let input = document.querySelector(".todo-list .middle-section input")

inpClick.addEventListener("click", () => {
    if (input.value != "") {

        listOfTasks.querySelector("strong").style.display = "none"

        let task = document.createElement("li")
        task.classList.add("todo")

        let span = document.createElement("span")

        let svg = '<svg class="check" xmlns="http://www.w3.org/2000/svg" width = "11" height = "9" > <path fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6" /></svg>'

        let para = document.createElement("p")
        let paraText = document.createTextNode(input.value)
        para.classList.add("text")

        let closeDiv = document.createElement("div")
        let svgClose = '<svg class="close" xmlns = "http://www.w3.org/2000/svg" width = "18" height = "18" > <path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z" /></svg >'
        closeDiv.innerHTML = svgClose


        // Add Text To Paragraph
        para.appendChild(paraText);

        // Add Icon SVG To Span Element
        span.innerHTML = svg

        // Add Span Element To Task Element
        task.appendChild(span);
        task.appendChild(para)
        task.append(closeDiv)

        listOfTasks.appendChild(task)
        let num = document.querySelector(".foot .todo-num b")


        function countTasks() {
            num.textContent = listOfTasks.childElementCount - 1
        }
        countTasks()

        function showNoneOfTasks() {
            if (listOfTasks.childElementCount == 1) {
                listOfTasks.querySelector("strong").style.display = "block"
            }
        }
        closeDiv.onclick = () => {
            task.remove()
            countTasks()
            showNoneOfTasks()

        }

        span.onclick = () => {
            task.classList.toggle("checked")
        }

        let AllTasks = document.querySelector(".todo-list .foot .all")
        let complete = document.querySelector(".todo-list .foot .completed")
        let active = document.querySelector(".todo-list .foot .active")
        let clear = document.querySelector(".todo-list .foot .clear")
        let spanClick = document.querySelectorAll(".todo-list .foot .middle-foot span")

        // Add Color Blue To Active Element
        spanClick.forEach((e) => {
            e.onclick = () => {
                spanClick.forEach((e) => {
                    e.classList.remove("click")
                })
                e.classList.add("click")
            }
        })

        //Show All Tasks
        AllTasks.addEventListener("click", () => {
            task.style.display = "flex"
        })

        //Remove The Tasks That Doesn't Have checked Class
        complete.addEventListener("click", () => {
            if (!task.classList.contains("checked")) {
                task.style.display = "none"
            } else {
                task.style.display = "flex"
            }
        })

        //Remove The Tasks That Does Have checked Class
        active.addEventListener("click", () => {
            if (task.classList.contains("checked")) {
                task.style.display = "none"
            } else {
                task.style.display = "flex"
            }
        })

        //Clear All Tasks
        clear.addEventListener("click", () => {
            task.remove()
            showNoneOfTasks()
            countTasks()
        })

        input.value = ""


    }
})

let dark = document.querySelector(".todo-list .head .dark")
let body = document.querySelector("body")
let background = document.querySelector(".bg")
let parentOfAllSection = document.querySelector(".todo-list")
let middleSection = document.querySelector(".todo-list .middle-section")

dark.addEventListener("click", () => {
    if (dark.classList.contains("dark")) {
        dark.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="#FFF" fill-rule="evenodd" d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"/></svg>'
        dark.className = "light"
        background.style.backgroundImage = "url(images/bg-desktop-light.jpg)"
        parentOfAllSection.classList.add("light")
        middleSection.classList.add("light")
        body.classList.add("light")
    } else {
        dark.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="#FFF" fill-rule="evenodd" d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"/></svg>'
        dark.className = "dark"
        background.style.backgroundImage = "url(images/bg-desktop-dark.jpg)"
        parentOfAllSection.classList.remove("light")
        middleSection.classList.remove("light")
        body.classList.remove("light")
    }
})