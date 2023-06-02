import React from "react"
import { useCookies } from "react-cookie"

export function useEmployees() {
    const [cookies, setCookie] = useCookies(['employees']);

    const addEmployee = (employee) => {
        setCookie("employees", [...employees, employee], {expires: new Date(new Date().setFullYear(new Date().getFullYear() + 1)), path: '/'});
    }

    const removeEmployee = (employee) => {
        let newEmployees = [...employees];
        if (newEmployees.includes(employee)) {
            newEmployees.splice(newEmployees.indexOf(employee), 1);
        }
        setCookie("employees", newEmployees, {expires: new Date(new Date().setFullYear(new Date().getFullYear() + 1)), path: '/'});
    }

    const employees = cookies.employees ? cookies.employees : [];

    return [employees, addEmployee, removeEmployee]
}