import { Workforce } from "./workforce.js"
import { fetchEmployees, fetchComputers, fetchDepartments } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchEmployees()
    .then(() => fetchComputers())
    .then(() => fetchDepartments())
    .then(
        () => {
            mainContainer.innerHTML = Workforce()
        }
    )    
}

render()

document.addEventListener("stateChanged", event => {
    console.log("State of data has changged. Regenerating HTML...")
    render()
})