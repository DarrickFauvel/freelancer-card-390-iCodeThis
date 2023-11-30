const hireButton = document.querySelector("#hire-button")

// Prevent default behavior on all # links
document.querySelectorAll('a[href="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault()
    console.log("Link clicked:", link.id)
  })
})

function changeBodyBackground() {
  document.body.style.backgroundColor = "rebeccapurple"
}

function restorBodyBackground() {
  document.body.style.backgroundColor = "white"
}

hireButton.addEventListener("mouseenter", changeBodyBackground)
hireButton.addEventListener("mouseleave", restorBodyBackground)
