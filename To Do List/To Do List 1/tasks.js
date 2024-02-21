// VARIABLES
/* information */

let toDoList = document.querySelector(".to-do-list");
let tasks = document.querySelector(".tasks");
let form = document.querySelector("form");
let input = document.querySelector("form input");
let textArea = document.querySelector("textarea");
let btn = document.querySelector("button");
let spanNumber = document.querySelector(".count span");

btn.onclick = function () {
  if (input.value === "" || textArea.value === "") {
    console.log("error");
  } else {
    /* tasks variables */
    let task = document.createElement("task");
    let span = document.createElement("span");
    let spanText = document.createTextNode("good");
    let iconeClose = document.createElement("i");
    let div = document.createElement("div");
    let imgDiv = document.createElement("img");
    let h2 = document.createElement("h2");
    let h2Text = document.createTextNode(input.value);
    let p = document.createElement("p");
    let pText = document.createTextNode(textArea.value);
    let button = document.createElement("button");
    let buttonText = document.createTextNode("finiched");

    // add text span to element span
    span.appendChild(spanText);
    span.className = "logo";
    /* add span to task */
    task.appendChild(span);

    // add className to icone
    iconeClose.className = "close far fa-times-circle";
    // add icone to task
    task.append(iconeClose);

    // add class name to img
    imgDiv.src =
      "https://images.unsplash.com/photo-1586282391129-76a6df230234?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80";
    // add img to div image
    div.appendChild(imgDiv);
    div.className = "image";
    /* add div image to task*/
    task.appendChild(div);
    // console.log(task);

    // add text span to element span
    h2.appendChild(h2Text);
    h2.className = "h2";
    /* add h2 to task*/
    task.appendChild(h2);

    // add text span to element span
    p.appendChild(pText);
    p.className = "description";
    /* add paragraph to task*/
    task.appendChild(p);

    // add text to button
    button.appendChild(buttonText);
    button.className = "finiched";
    /* add paragraph to task*/
    task.appendChild(button);

    // add taks to parent tasks
    // console.log(toDoList)
    task.className = "task";
    // console.log(tasks);
    tasks.className = "tasks";
    // console.log( document.body.querySelector(".to-do-list").querySelector(".tasks"));
    tasks.prepend(task);

    input.value = "";
    textArea.value = "";

    // count tasks when add
    TaskCount();

    // show and hide tasks
    showNoTask();

    // set locale storage
    localStorage.setItem("tasks", tasks.children);

    // Remove the task
    iconeClose.onclick = function () {
      // task count for remove the when remove task
      TaskCountWhenRemove();

      task.remove();

      // show and hide tasks
      showNoTask();
    };
    button.onclick = function () {
      span.style.display = "block";
    };
  }
};

// console.log(parseInt(countTasks.textContent = counter++));

function TaskCount() {
  spanNumber.innerHTML = tasks.childElementCount;
}

function TaskCountWhenRemove() {
  spanNumber.innerHTML = tasks.childElementCount - 1;
}

function showNoTask() {
  let showHide = document.querySelector(".no-task");
  if (tasks.childElementCount > 0) {
    showHide.style.display = "none";
  } else {
    showHide.style.display = "block";
  }
}
