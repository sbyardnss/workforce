import { getCustomers, getEmployees, getEmployeeCustomers } from "./dataAccess.js";

const convertAssignedEmployeesToList = (obj) => {
    let html = ""
    const employees = getEmployees()
    for (const employee of employees) {
        if (parseInt(employee.id) === parseInt(obj.employeeId)) {
            html += `<li>${employee.firstName} ${employee.lastName}</li>`
        }
    }
    return html
} 


const customerEmployeeBridge = (obj, customerObj) => {
    return parseInt(obj.customerId) === parseInt(customerObj.id)
}

export const CustomerInfo = () => {
    const customers = getCustomers()
    const employees = getEmployees()
    const employeeCustomers = getEmployeeCustomers()
    let html = `<div class="customer">`
        for (const customer of customers) {
            const relationship = employeeCustomers.filter((ec) => {
                return customerEmployeeBridge(ec, customer)
            })
            html += `
            <div class="individualCustomerInfo">
                <header class="customer__name">
                    <h3>${customer.name}</h3>
                </header>
                <section class="customer__employees">
                    These individuals have been assigned to this customer:
                    <ul>
                        ${
                            relationship.map(convertAssignedEmployeesToList).join("")
                        }
                    </ul>
                </section>
            </div>`
        }
    html += `</div>`
    return html

}