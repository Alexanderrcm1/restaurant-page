import homePage from "./home"

const content = document.getElementById("content")
const homeBtn = document.getElementById("home-btn")
const menuBtn = document.getElementById("menu-btn")
const aboutBtn = document.getElementById("about-btn")
const createHome = () => {
    const element = document.createElement("div")
    element.setAttribute("class", "homepage")
    element.innerHTML = homePage()
    return element
}
content.appendChild(createHome())