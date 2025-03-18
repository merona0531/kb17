let currentIndex = 0;

document.getElementById("next").addEventListener("click", function () {
    if (currentIndex < 2) {
        currentIndex++;
        updateSlide();
    }
});

document.getElementById("prev").addEventListener("click", function () {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlide();
    }
});

function updateSlide() {
    document.querySelector(".slider").style.transform = `translateX(-${currentIndex * 100}vw)`;
}

