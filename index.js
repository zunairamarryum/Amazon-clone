let slideBtnleft = document.getElementById("slide-btn-left");
let slideBtnright = document.getElementById("slide-btn-right");
let imgitem = document.querySelectorAll(".image-item");

console.log(imgitem.length - 1);

let startslider = 0;
let endslider = (imgitem.length - 1) * 100; // 700

slideBtnleft.addEventListener("click", () => {
    if (startslider < 0) {
        startslider += 100;
    }

    imgitem.forEach(element => {
        element.style.transform = `translateX(${startslider}%)`;
    });
});

slideBtnright.addEventListener("click", () => {
    if (startslider > -endslider + 100) {
        startslider -= 100;
    }

    imgitem.forEach(element => {
        element.style.transform = `translateX(${startslider}%)`;
    });
});