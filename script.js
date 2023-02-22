const box1 = document.getElementById("Box")

const button = document.getElementById("submit")

const rate = document.getElementById("rat")
const vs = document.querySelectorAll(".number")



button.addEventListener("click", function() {
    box1.classList.toggle("transformed");
  });
vs.forEach((rate) => {
    rate.addEventListener("click", () => {
        rat.innerHTML = rate.innerHTML

    })
})
