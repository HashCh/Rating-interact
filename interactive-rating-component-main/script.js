const box1 = document.querySelector(".front")
const box2 = document.querySelector(".back")
const button = document.getElementById("submit")
const rate = document.getElementById("rat")
const vs = document.querySelectorAll(".number")



button.addEventListener("click", () => {
    box2.classList.remove("hidden")
    box1.style.display = "none"

})
vs.forEach((rate) => {
    rate.addEventListener("click", () => {
        rat.innerHTML = rate.innerHTML

    })
})
