import { getEmployees, getComputers, getDepartments, getCustomers, getEmployeeCustomers } from "./dataAccess.js";


const convertEmployeesToList = (obj) => {
    const employees = getEmployees()
    let html = ""
    
    html += `<li>${obj.firstName} ${obj.lastName}</li>`
    
    return html
}

export const EmployeeList = () => {
    const employees = getEmployees()
    let html = `
        <ul>
            ${
                employees.map(convertEmployeesToList).join("")
            }
        </ul>
        `
    return html
}



// export const EmployeeComputers = () => {
//     const employees = getEmployees()
//     const computers = getComputers()
//     const departments = getDepartments()
//     let html = `<ul id="employeeComputers">`
//     for (const employee of employees) {
//         const employeeComputer = computers.find(computer => {
//             return computer.id === parseInt(employee.computerId)
//         })
//         const employeeDepartment = departments.find(dept => {
//             return dept.id === parseInt(employee.departmentId)
//         })
//         html += `<li class="computerAssignment">${employee.firstName} ${employee.lastName}, age ${employee.age}, from ${employeeDepartment.name}, is currently using the ${employeeComputer.year} ${employeeComputer.model}</li>`
//     }
//     html += `</ul>`
//     return html
// }


// const employeeCustomerBridge = (obj) => {
//     return parseInt(obj.employeeId) === parseInt(employee.id)
// }


export const EmployeeComputers = () => {
    const employees = getEmployees()
    const computers = getComputers()
    const departments = getDepartments()
    const customers = getCustomers()
    const employeeCustomers = getEmployeeCustomers()
    let html = `<div class="employee">`
        for (const employee of employees) {
            const employeeComputer = computers.find(computer => {
                return computer.id === parseInt(employee.computerId)
            })
            const employeeDepartment = departments.find(dept => {
                return dept.id === parseInt(employee.departmentId)
            })
            // const relationships = employeeCustomers.filter(employeeCustomerBridge)
            // const assignedCustomers = relationships.map(rel => {
            //     return customers.find(customer => {
            //         customer.id === rel.customerId
            //     })
            // })
            html += `<div class="individualEmployee">
            <header class="employee__name">
                <h3>${employee.firstName} ${employee.lastName}</h3>
            </header>
            <section class="employee__computer">
                Currently using a ${employeeComputer.year} ${employeeComputer.model}
            </section>
            <section class="employee__department">
                Works in the ${employeeDepartment.name} department
            </section>
            </div>`
        }
    html += `</div>`
    return html
}