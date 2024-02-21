let input = document.querySelector("input");


document.querySelector(".clear").onclick = () => {
  console.log("success");
  input.value = ''
  input.placeholder = '0'
}

// function clear() {
//   console.log("success");
//   input.value = ''
//   input.placeholder = '0'
// }

function display(sym) {
  input.value += sym;
}

function del() {
  input.value = input.value.slice(0, -1)
}

function equal() {
  try {
    input.value = eval(input.value)
  }
  catch {
    input.value = Error('Error');
  }
}