const nav =document.querySelector("nav");

window.addEventListener("scroll",function(){
    nav.classList.toggle("sticky",window.scrollY > 180);
})
const menu = document.getElementById("menu")
const option = document.querySelector(".navlist")

menu.addEventListener("click",()=>{
    option.style.right = "0px"
})
document.addEventListener("click",(e)=>{
    if(!menu.contains(e.target)){
        option.style.right = "-100%"
    }
})

