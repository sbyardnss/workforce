const applicationState = {
    employees: [],
    computers: []
}

const API = "http://localhost:8088"

export const fetchEmployees = () => {
    return fetch(`${API}/employees`)
    .then(response => response.json())
    .then(
        (data) => {
            applicationState.employees = data
        }
    )
}

export const fetchComputers = () => {
    return fetch(`${API}/computers`)
    .then(response => response.json())
    .then(
        (data) => {
            applicationState.computers = data
        }
    )
}

export const fetchDepartments = () => {
    return fetch(`${API}/departments`)
    .then(response => response.json())
    .then(
        (data) => {
            applicationState.departments = data
        }
    )
}

export const getEmployees = () => {
    return applicationState.employees.map(employee => ({...employee}))
}

export const getComputers = () => {
    return applicationState.computers.map(computer => ({...computer}))
}

export const getDepartments = () => {
    return applicationState.departments.map(dept => ({...dept}))
}