import React from "react";
import { useCookies } from 'react-cookie';

export function Employee(props) {

    const [names, setNames] = React.useState([]);
    const [cookies, setCookies] = useCookies(['user']);

    React.useEffect(() => {
        let names = cookies.user ? cookies.user.split(',') : []; // will be either names as array or empty array

        if (names.length > 0) {
            setNames(names);
        } else {
            setNames(["Employee"]);
        }
        console.log("updated names")

    }, [cookies.user]);

    return (
        <div className="employee">
            <select>
                {names.map((name, index) => <option key={index} value={index}>{name}</option>)}
            </select>
            <input name={props.index} type="number" placeholder="Hours" min={0} onChange={props.onHoursChange} />
            <span id={props.index + "pay"} className="employee-tip">${props.pay}</span>
        </div>
    )
}