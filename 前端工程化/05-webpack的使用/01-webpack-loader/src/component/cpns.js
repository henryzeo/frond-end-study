import "../css/style.css"
import img from "../img/zero.jpg"

const imgEL = document.createElement("img");
imgEL.src = img;
document.body.append(imgEL);

const divEl = document.createElement("div");
divEl.textContent = "Hello World";
divEl.classList.add("content");
document.body.append(divEl);

