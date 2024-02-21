let runBtn = document.querySelector(".bar button")
let theSeletedLang = document.querySelectorAll(".box .head span")
let select = document.querySelectorAll(".box .head select")
let options = document.querySelectorAll(".box .head select option")
select.forEach((el) => {
    el.addEventListener("change", () => {
        options.forEach((e) => {
            e.removeAttribute("selected")
        })
            el.parentElement.firstElementChild.textContent = el.value
    })
})

// Declare Variables
let textArea = document.querySelectorAll("textarea")
let one = document.querySelector("[data-index = 'one']")
let two = document.querySelector("[data-index = 'two']")
let three = document.querySelector("[data-index = 'three']")
let showResult = document.getElementById("show-result")

// Show Result When I Click on The Button
runBtn.addEventListener("click", () => {
    showResult.contentDocument.body.innerHTML = one.value + `<style>${two.value}</style >`
    showResult.contentWindow.eval(three.value)
})

// textArea.forEach((item, i) => {
//   item.addEventListener("input", () =>{
//         let colored = item.value.match(/(<\w+>)/mg)
//         colored.map((e)=>{
//           console.log(e);
//         })})
//
// });


// Resize Boxes
document.querySelectorAll(".box").forEach(e => {
    let initialHeight = getComputedStyle(e).getPropertyValue("height");
    let height = Number(initialHeight.slice(0, -2))
    e.addEventListener("click", ()=>{
      if(e.offsetHeight != initialHeight){
        console.log(e.nextElementSibling.nextElementSibling.offsetHeight);
        // console.log(height);
        // console.log(height - e.offsetHeight);
        // console.log(height + (height - e.offsetHeight));
        // console.log(e.nextElementSibling.classList.height = height + (height - e.offsetHeight) + 'px');
            e.nextElementSibling.style.height = height + (height - e.offsetHeight) + 'px'
            e.nextElementSibling.nextElementSibling.style.height = e.nextElementSibling.nextElementSibling.offsetHeight - (height - e.offsetHeight) + 'px'
      }
    })

});
