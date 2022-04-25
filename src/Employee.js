import React from "react";
import { useCookies } from 'react-cookie';
import { useEmployees } from "./useEmployees";

export function Employee(props) {

    const [employees, setEmployees] = useEmployees();
    const [cookies, setCookies] = useCookies(['employees']);


    return (
        <div className="employee">
            <select>
                {employees.map((name, index) => <option key={index} value={index}>{name}</option>)}
            </select>
            <input name={props.index} type="number" step={0.5} placeholder="Hours" min={0} onChange={props.onHoursChange} />
            <span id={props.index + "pay"} className="employee-tip">${props.pay}</span>
        </div>
    )
}