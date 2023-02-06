import { Workforce } from "./workforce.js"


const mainContainer = document.querySelector("#container")

const render = () => {
    mainContainer.innerHTML = Workforce()
}

render()

document.addEventListener("stateChanged", event => {
    console.log("State of data has changged. Regenerating HTML...")
    render()
})