const screen1 = document.querySelector("#screen1");
const screen2 = document.querySelector("#screen2");
const screen3 = document.querySelector("#screen3");

const start = document.querySelector("#screen1 a");

start.onclick = (event) => {
  event.preventDefault();
  screen1.style.display = "none";
  screen2.style.display = "flex";
};

const images = document.querySelectorAll("#screen2 img");
let selectedImage = "";

for (let i = 0; i < images.length; i++) {
  images[i].onclick = () => {
    selectedImage = images[i].src;
    screen2.style.display = "none";
    screen3.style.display = "flex";

    letsPlay();
  };
}

const timerSpan = document.querySelector(".timer span");
const scoreSpan = document.querySelector(".score span");

function letsPlay() {
  let timer = 0;
  let x = setInterval(() => {
    if (timer === 10) {
      clearInterval(x);
      console.log("Time up");
    } else {
      timerSpan.innerHTML = ++timer;
      popPhoto();
    }
  }, 1000);
}

function popPhoto() {
  const img = document.createElement("img");
  img.setAttribute("src", selectedImage);
  // img.src = selectedImage

  img.style.left = getRandomLeft();
  img.style.top = getRandomTop();

  img.setAttribute("onclick", "removeImage(this)");

  document.querySelector("#screen3 .images").append(img);
}

function getRandomLeft() {
  return Math.random() * window.innerWidth + "px";
}

function getRandomTop() {
  return Math.random() * window.innerHeight + "px";
}

let score = 0;

function removeImage(element) {
  element.remove();
  scoreSpan.innerHTML = ++score;
}

function result() {
  if (timerSpan.innerHTML === 10) {
    selectedImage.remove();
  } else {
    alert("Time out and your score is" + scoreSpan.innerHTML);
  }
}
result();
