import { getDepartments } from "./dataAccess.js";

const convertDepartmentsToList = (obj) => {
    let html = ""
    html += `<li>${obj.name}</li>`
    return html
}

export const Departments = () => {
    const departments = getDepartments()
    let html = `
        <ul id="departmenUL">
            ${
                departments.map(convertDepartmentsToList).join("")
            }
        </ul>
        `
    return html
}