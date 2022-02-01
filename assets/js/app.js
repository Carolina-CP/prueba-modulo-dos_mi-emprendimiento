const toggleButton = document.getElementById("toggle-buttom");
const naviList = document.getElementById("navi-list");

toggleButton.addEventListener("click",() =>{
    naviList.classList.toggle("active");
})