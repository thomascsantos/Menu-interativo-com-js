let icon = document.querySelector(".icon")
icon.addEventListener("click", () => {
    let menu = document.querySelector("#menu")
    if (menu.classList.contains("hide")) {
        menu.classList.add("show")
        menu.classList.remove("hide")
    } else {
        menu.classList.add("hide")
        menu.classList.remove("show")
    }

})