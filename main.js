const div = document.querySelector("div");
const h1 = document.querySelector("h1");
let bool = true;
const moon = new Image();
moon.src = './moon.jpg'

const rocks = new Image();
rocks.src = './rocks.jpg'

const toggleView = () => {
    div.style.backgroundImage = bool ? `url(${moon.src})` : `url(${rocks.src})`;
    h1.textContent = bool ? "Its dark.." : "Sun is shining :)";
    bool = !bool;
}

div.addEventListener("click", toggleView);