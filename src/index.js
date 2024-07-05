import homePage from "./home"
import menuPage from "./menu"
import contactPage from "./contact"
import "./style.css";

const content = document.getElementById("content")

const homeBtn = document.getElementById("home-btn")
const menuBtn = document.getElementById("menu-btn")
const contactBtn = document.getElementById("contact-btn")

const createHome = () => {
    const element = document.createElement("div")
    element.setAttribute("class", "home-page")
    element.innerHTML = homePage()
    return element
}

const createMenu = () => {
    const element = document.createElement("div")
    element.setAttribute("class", "menu-page")
    element.innerHTML = menuPage()
    return element
}

const createContact = () => {
    const element = document.createElement("div")
    element.setAttribute("class", "contact-page")
    element.innerHTML = contactPage()
    return element
}


homeBtn.addEventListener("click", () => {
    content.innerHTML = ""
    content.appendChild(createHome())

})
menuBtn.addEventListener("click", () => {
    content.innerHTML = ""
    content.appendChild(createMenu())
})

contactBtn.addEventListener("click", () => {
    content.innerHTML = ""
    content.appendChild(createContact())
})

content.appendChild(createHome())