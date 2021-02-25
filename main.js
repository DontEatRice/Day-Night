const div = document.querySelector("div");
const h1 = document.querySelector("h1");
let rocks = true;

const toggleView = () => {
    div.style.backgroundImage = rocks ? "url(moon.jpg)" : "url(rocks.jpg)";
    h1.textContent = rocks ? "Its dark.." : "Sun is shining :)";
    rocks = !rocks;
}

div.addEventListener("click", toggleView);