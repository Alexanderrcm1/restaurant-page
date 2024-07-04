import homePage from "./home"
import menuPage from "./menu"

const content = document.getElementById("content")

const homeBtn = document.getElementById("home-btn")
const menuBtn = document.getElementById("menu-btn")
const contactBtn = document.getElementById("contact-btn")

const createHome = () => {
    const element = document.createElement("div")
    element.setAttribute("class", "homepage")
    element.innerHTML = homePage()
    return element
}

const createMenu = () => {
    const element2 = document.createElement("div")
    element2.setAttribute("class", "menupage")
    element2.innerHTML = menuPage()
    return element2
}
content.appendChild(createMenu())

homeBtn.addEventListener("click", () => {
    content.innerHTML = ""
    content.appendChild(createHome())

})
menuBtn.addEventListener("click", () => {
    content.innerHTML = ""
    content.appendChild(createMenu())
})