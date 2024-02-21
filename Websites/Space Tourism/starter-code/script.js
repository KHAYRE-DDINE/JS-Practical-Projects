// HEADER
let li = document.querySelectorAll(".head .nav .list");
let liTechnology = li[3];
let liCrew = li[2];
let liDestination = li[1];
let liHome = li[0];
let link = document.querySelectorAll(".head .nav a");

window.onload = () => {
  addBorder()
}

// Add The Border To The Li List 
function addBorder() {
  if (window.location.pathname.includes("crew")) {
    console.log("crew");
    liCrew.classList.add("border")
  } else {
    liCrew.classList.remove("border")
  }
  if (window.location.pathname.includes("technology")) {
    console.log("technology");
    liTechnology.classList.add("border")
  } else {
    liTechnology.classList.remove("border")
  }
  if (window.location.pathname.includes("destination")) {
    liDestination.classList.add("border")
  } else {
    liDestination.classList.remove("border")
  }
  if (window.location.pathname.includes("index")) {
    liHome.classList.add("border")
  } else {
    liHome.classList.remove("border")
  }
}


// SIDE BAR 
let sideBar = document.querySelector(".head .side-bar")
let click = document.querySelector(".head .click")
let butt = document.querySelector(".head .click span i")

click.addEventListener("click", () => {
  if (butt.className == "fa-solid fa-bars fa-2xl") {
    butt.className = "fa-sharp fa-solid fa-xmark fa-2xl"
    sideBar.style.right = "0"
  } else {
    butt.className = "fa-solid fa-bars fa-2xl"
    sideBar.style.right = "-60%"
  }
})



let planetImage = document.querySelector(".left .image img");
let planets = document.querySelectorAll(".right .planets span");
let planetName = document.querySelector(".right .title .h1");
let description = document.querySelector(".right .para small");
let distance = document.querySelector(".right .info .distance .dis");
let travel = document.querySelector(".right .info .date .trav");
let call = new XMLHttpRequest();

// DESTINATION INFORMATION
planets.forEach((e) => {
  e.onclick = function () {
    let data;
    call.onreadystatechange = function () {
      if (call.status == 200 && call.readyState == 4) {
        data = JSON.parse(call.responseText).destinations;
        for (i = 0; i < data.length; i++) {
          planetName.textContent = data[e.dataset.index].name
          description.textContent = data[e.dataset.index].description
          distance.textContent = data[e.dataset.index].distance
          travel.textContent = data[e.dataset.index].travel
          planetImage.src = data[e.dataset.index]["images"]["png"];
        }
      }
    };
    planets.forEach((e) => {
      e.classList.remove("show");
    });
    e.classList.add("show");
    call.open("GET", "data.json", true);
    call.send();
  };
});

// CREW INFORMATION
let role = document.querySelector(".left .role");
let name = document.querySelector(".left .title .h1");
let bio = document.querySelector(".left .para small");
let dotes = document.querySelectorAll(".left .dotes span");
let img = document.querySelector(".right .image img");


// CREW && TECHNOLOGY INFORMATION
dotes.forEach((e) => {
  e.onclick = function () {
    console.log(e);
    let data;
    let dataTech, dataCrew;
    call.onreadystatechange = () => {
      dataTech = JSON.parse(call.responseText).technology;
      dataCrew = JSON.parse(call.responseText).crew;
      if (call.status == 200 && call.readyState == 4) {
        for (i = 0; i <= dataTech.length; i++) {
          getTech = dataTech[e.dataset.in];
        }
        for (i = 0; i <= dataCrew.length; i++) {
          getCrew = dataCrew[e.dataset.in];
        }


        // Getting Info Of Technology
        if (window.document.body.className == "Technology") {
          name.textContent = getTech["name"];
          bio.textContent = getTech["description"];
          img.src = getTech["images"]["portrait"];
        }

        // Getting Info Of Crew
        if (window.document.body.className == "crew") {
          name.textContent = getCrew["name"];
          role.textContent = getCrew["role"];
          bio.textContent = getCrew["bio"];
          img.src = getCrew["images"]["png"];
        }


      }
    };
    call.open("GET", "data.json", true);
    call.send();

    dotes.forEach((el) => {
      el.classList.remove("background");
      el.classList.remove("white");
    });
    e.classList.add("background");
    e.classList.add("white");
    // console.log(e.dataset.in);
  };
});
