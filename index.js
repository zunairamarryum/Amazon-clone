let slideBtnleft = document.getElementById("slide-btn-left");
let slideBtnright = document.getElementById("slide-btn-right");
let imgitem = document.querySelectorAll(".image-item");

console.log(imgitem.length - 1)

let startslider = 0
let endslider = (imgitem.length - 1) * 100; // 700

slideBtnleft.addEventListener("click",() =>{
    if (startslider < 0){
        startslider = startslider + 100;
    }
    imgitem.forEach(element =>{
        element.style.transform = `translateX(${startslider}%)`;
    })
})
slideBtnright.addEventListener("click",()=>{
    if (startslider >= -endslider + 100){
        startslider =startslider - 100;
    }

    imgitem.forEach(element =>{
        element.style.transform = `translateX(${startslider}%)`;
    })
})

const leftBtn = document.querySelector('.slide-btn.left');
const rightBtn = document.querySelector('.slide-btn.right');
const slider = document.querySelector('.products');

leftBtn.addEventListener('click', () => {
  slider.scrollBy({ left: -300, behavior: 'smooth' });
});

rightBtn.addEventListener('click', () => {
  slider.scrollBy({ left: 300, behavior: 'smooth' });
});
