import { EmployeeComputers, EmployeeList } from "./employees.js"
import { ComputerList } from "./computers.js"
import { Departments } from "./departments.js"
import { CustomerInfo } from "./customers.js"

export const Workforce = () => {
    let html = `
    <h1>Workforce Tracker</h1>

    <article class="employeeAndComputerList">
        <section id="employeeList">
            <h2>Employees</h2>
            ${EmployeeList()}
        </section>
        <section id="computerList">
            <h2>Computers</h2>
            ${ComputerList()}
        </section>
        <section id="departmentList">
            <h2>Departments</h2>
            ${Departments()}
    </article>
    <article class="assignedComputersAndAssignedEmployees">
        <section id="employeeInfo">
            ${EmployeeComputers()}
        </section>
        <section id="customerInfo">
            ${CustomerInfo()}
        </section>
    </article>`
    return html
}