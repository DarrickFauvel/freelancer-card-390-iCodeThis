const avatar = document.querySelector("#avatar")
const hireButton = document.querySelector("#hire-button")

// Prevent default behavior on all # links
document.querySelectorAll('a[href="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault()
    console.log("Link clicked:", link.id)
  })
})

function changeBodyBackground() {
  avatar.classList.toggle("drop-scale")
  document.body.style.backgroundColor = "rebeccapurple"
}

function restoreBodyBackground() {
  avatar.classList.toggle("drop-scale")
  document.body.style.backgroundColor = "white"
}

hireButton.addEventListener("mouseenter", changeBodyBackground)
hireButton.addEventListener("mouseleave", restoreBodyBackground)
