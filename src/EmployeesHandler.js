import Popup from "react-popup"
import { useEmployees } from "./useEmployees"

export function EmployeesHandler(props) {

    const [employees, addEmployee, removeEmployee] = useEmployees();

    const handleAddEmployee = (event) => {
        let name = prompt("Enter name of employee you want to add")
        addEmployee(name);
    }

    const handleRemoveEmployee = (event) => {
        let name = prompt("Enter name of employee you want to add")
        removeEmployee(name);
    }

    return (
        <div className="employees-handler">
            <span>Add or Remove Employees </span>
            <input type="button" value="+" onClick={handleAddEmployee} />
            <input type="button" value="-" onClick={handleRemoveEmployee} />
        </div>
    )
}