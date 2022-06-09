burger=document.querySelector(".burger")
navbar=document.querySelector(".navbar")
navlist=document.querySelector(".navlist")
rightnav=document.querySelector(".rightnav")
burger.addEventListener("click",()=>{
    rightnav.classList.toggle("vnav")
    navlist.classList.toggle("vnav")
    navbar.classList.toggle("hnav")

})