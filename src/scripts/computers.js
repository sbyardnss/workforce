import { getComputers } from "./dataAccess.js";

const convertComputersToList = (obj) => {
    let html = ""
    html += `<li>${obj.model}</li>`
    return html
}

export const ComputerList = () => {
    const computers = getComputers()
    let html = `
        <ul>
            ${
                computers.map(convertComputersToList).join("")
            }
        </ul>
        `
    return html
    }