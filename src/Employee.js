import React from "react";
import { useCookies } from 'react-cookie';
import { useEmployees } from "./useEmployees";

export function Employee(props) {

    const [employees, setEmployees] = useEmployees();
    const [cookies, setCookies] = useCookies(['employees']);
    const [hasChanged, setHasChanged] = React.useState(false);

    const handleEmployeeChange = (event) => {
        props.onEmployeeChange(event, hasChanged);
        setHasChanged(true);
    }

    return (
        <div className="employee">
            <select onChange={handleEmployeeChange}>
                {["Employee", ...employees].map((name, index) => <option key={index} value={index}>{name}</option>)}
            </select>
            <input name={props.index} type="number" step={0.25} placeholder="Hours" min={0} onChange={props.onHoursChange} />
            <span id={props.index + "pay"} className="employee-tip">${props.pay}</span>
        </div>
    )
}