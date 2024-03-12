
const btnSwich = document.querySelector("#switch")

btnSwich.addEventListener("click", ()=>{
    document.body.classList.toggle("dark")
    btnSwich.classList.toggle("active")
    console.log("hola");
})