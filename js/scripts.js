console.log("JS is working");
const images = ["assets/img/imageSlider1.png", "assets/img/imageSlider1.png"];
let index = 0;

const slider = document.getElementById("sliderimgone");

setInterval(() => {
    index++;
    if (index >= images.length) {
        index = 0;
    }
    slider.src = images[index];
}, 2000);