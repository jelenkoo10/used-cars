const hamburger = document.getElementById("hamburger")
const nav = document.getElementById("nav")

hamburger.addEventListener("click", function() {
    if (nav.style.display == "none") {
        nav.style.display = "block"
    } else {
        nav.style.display = "none"
    }
})