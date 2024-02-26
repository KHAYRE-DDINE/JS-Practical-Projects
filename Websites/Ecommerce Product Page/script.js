let order = document.querySelector(".products .product-info .pay strong")
let svg = document.querySelectorAll(".products .product-info .order svg")

svg.forEach((e) => {
    e.onclick = function () {
        if (e.dataset.o == "+") {
            order.textContent = 1 + parseInt(order.textContent)
        } else {
            order.textContent -= 1
            if (order.textContent < 0) {
                order.textContent = 0
            }
        }
    }
})

// Show Cart Checkbox
let cartIcon = document.querySelector(".right .card")
let cart = document.querySelector(".checkbox")



cartIcon.onclick = function () {
    cart.classList.toggle("show")
}

// Pop Up
let showImg = document.querySelector(".products .images .show img")
let bigImg = document.querySelector(".products .active-status .images .show img")
let pre = document.querySelector(".active-status .images .pre")
let nex = document.querySelector(".active-status .images .nex")
let choose = document.querySelectorAll(".active-status .choose img")
let chooseActive = document.querySelectorAll(".active-status .choose .op")
let click = document.querySelectorAll(".choose .op")
let status = document.querySelector(".active-status")
let allImages = [
    "images/image-product-1.jpg",
    "images/image-product-2.jpg",
    "images/image-product-3.jpg",
    "images/image-product-4.jpg"
]
let num = 0;

click.forEach((e) => {
    e.onmouseover = function youCan() {
        num = parseInt(e.firstElementChild.dataset.i)
        click.forEach((e) => {
            e.classList.remove("active")
        })
        e.classList.add("active")
        showImg.src = e.firstChild.src
        bigImg.src = e.firstChild.src
        e.onclick = () => {
            status.classList.add("clicked")
            chooseActive[0].classList.add("active")
        }
    }
})

pre.addEventListener("click", () => {
    choose.forEach((e) => {
        if (e.parentElement.className.includes("active") && e.dataset.i >= 1) {
            bigImg.src = allImages[e.dataset.i - 1]
            num = e.dataset.i - 1
            click.forEach(e => {
                e.classList.remove("active")
            });
            e.parentElement.previousElementSibling.classList.add("active")

        }
    })
})
nex.addEventListener("click", () => {
    console.log(num)
    choose.forEach((e) => {
        if (e.parentElement.className.includes("active") && e.dataset.i < allImages.length - 1) {
            chooseActive.forEach(e => {
                e.classList.remove("active")
            });
        }
    })

    if (num < 3) {
        choose[num++].parentElement.nextElementSibling.className += " active "
        bigImg.src = allImages[num]
    } else {
        choose[num].parentElement.classList.remove("active")
        choose[0].parentElement.classList.add("active")
        bigImg.src = allImages[0]
        num = 0
    }

})


let closePo = document.querySelector(".active-status .close")

closePo.onclick = function () {
    status.classList.remove("clicked")
}

//Add To CartBox
let checkbox = document.querySelector(".checkbox")
let allOrders = document.querySelector(".ords")
let addToCard = document.querySelector(".pay .btn")

addToCard.addEventListener("click", function () {
    let orderTime = document.querySelector(".pay .order").textContent
    let empty = document.querySelector(".ords > p")
    console.log(empty);

    if (orderTime != "0") {

        empty.style.display = "none"

        let orderEle = document.createElement("div")

        let image = document.createElement("img")
        let info = document.createElement("div")
        let h3 = document.createElement("h3")

        let times = document.createElement("span")
        let theSum = document.createElement("b")

        let price = document.createElement("p")

        let checkout = document.createElement("button")

        let deleteIcon = document.createElement("div")


        allOrders.prepend(orderEle)
        orderEle.classList.add("ord")

        orderEle.appendChild(image)
        image.src = "images/image-product-1.jpg"

        orderEle.appendChild(info)
        info.classList.add("info")

        info.appendChild(h3)
        h3.textContent = "fall limited edition sneakers"

        info.appendChild(times)
        times.classList.add("time")
        times.textContent = orderTime

        times.prepend(price)
        price.textContent = "125.00"
        price.classList.add("price")

        times.appendChild(theSum)
        theSum.classList.add("all-price")

        orderEle.appendChild(checkout)
        checkout.classList.add("btn")
        checkout.textContent = "Checkout"

        orderEle.appendChild(deleteIcon)
        let svg = `<svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/></svg>`
        deleteIcon.innerHTML = svg
        checkout.classList.add("btn")

        theSum.textContent = ` $${parseInt(orderTime) * parseInt(price.textContent)}`

        let dollar = document.createTextNode("$")
        let x = document.createTextNode(" x")
        price.prepend(dollar)
        price.appendChild(x)

        deleteIcon.onclick = () => {
            deleteIcon.parentElement.remove()
            if (allOrders.childElementCount == 1) {
                empty.style.display = "block"
            }
        }
    }
})

// Toggle Nav Bar 

let svgDiv = document.querySelector(".nav .left")
let menu = document.querySelector(".nav .left .menu")
let closeToggle = document.querySelector(".nav .left .close")
let list = document.querySelector(".nav .left .list")

function showingList() {
    list.classList.toggle("showing")
    svgDiv.classList.toggle("showing")
}