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


const employeeCustomerBridge = (obj, employeeObj) => {

        return parseInt(obj.employeeId) === parseInt(employeeObj.id)
    
}

const convertAssignedCustomersToList = (obj) => {
    const customers = getCustomers()
    let html = ""
    for (const customer of customers) {
        if (parseInt(obj.customerId) === parseInt(customer.id)) {
            html += `<li>${customer.name}</li>`
        }

    }
    return html
}


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
            const relationships = employeeCustomers.filter((employeeCustomer) => {
                return employeeCustomerBridge(employeeCustomer, employee)
            })


            //this is irrelevant. 
            const assignedCustomers = customers.filter(customer => {
                return relationships.some(rel => {
                   return customer.id === rel.customerId
                })
                
            })



            // html += `<div class="individualEmployee">
            // <header class="employee__name">
            //     <h3>${employee.firstName} ${employee.lastName}</h3>
            // </header>
            // <section class="employee__computer">
            //     Currently using a ${employeeComputer.year} ${employeeComputer.model}
            // </section>
            // <section class="employee__department">
            //     Works in the ${employeeDepartment.name} department
            // </section>
            // </div>`
            html += `
            <div class="individualEmployee">
            <header class="employee__name">
                <h3>${employee.firstName} ${employee.lastName}</h3>
            </header>
            <section class="employee__department">
                Works in the ${employeeDepartment.name} department
            </section>
            <section class="employee__computer">
                Currently using a ${employeeComputer.year} ${employeeComputer.model}
            </section>
            <section class="employee__location">
                Works at the ${employee.location} office
            </section>
            <section class="employee__customers">
                Has worked for the following customers:
                <ul>
                    ${
                        relationships.map(convertAssignedCustomersToList).join("")
                    }
                </ul>
            </section>`
        }
    html += `</div>`
    return html
}

