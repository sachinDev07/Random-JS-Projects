const slides = document.querySelectorAll('.slide');
let counter = 0;
slides.forEach((slide, index) => {
    slide.style.left = `$[index * 100]% ;`
})

let goPrev = () => {
    counter--;
    slideImage();
}

let goNext = () => {
    counter++;
    slideImage();
}

const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`;
        }
    )
}

