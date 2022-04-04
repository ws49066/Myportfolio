window.addEventListener("scroll", _ =>{
    var header = document.querySelector(".header")
    header.classList.toggle("sticky", window.scrollY > 0)
    console.log(_)
})