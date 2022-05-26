import React from "react";
import { Employee } from "./Employee";

export function Form(props) {

    const [total, setTotal] = React.useState("0");
    const [pays, setPays] = React.useState([]);
    const [hours, setHours] = React.useState([]);
    const [numEmployeeSlots, setNumEmployeeSlots] = React.useState(4); // number of employee rows to render
    const [numEmployeesUsed, setNumEmployeesUsed] = React.useState(0); // number of employee rows currently being used

    const handleEmployeeChange = (event, hasChanged) => {
        if (!hasChanged) {
            setNumEmployeesUsed(numEmployeesUsed + 1);
            if (numEmployeesUsed == numEmployeeSlots - 1) {
                console.log("adding row")
                setNumEmployeeSlots(numEmployeeSlots + 1);
            }
        }
        console.log("numEmployeesUsed: " + numEmployeesUsed);
        console.log("numEmployeeSlots: " + numEmployeeSlots);
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        let totalHours = 0;
        for(let key in hours) {
            totalHours += parseFloat(hours[key]);
        }

        let newPays = [...pays];
        for (let i in hours) {
            let newPay = ((parseFloat(hours[i]) / totalHours) * parseFloat(total)).toFixed(2);
            if (newPay) {
                newPays[i] = newPay;
            }
        }
        setPays(newPays);
    }
    
    const handleHoursChange = (event) => {
        let newHours = [...hours];
        newHours[event.target.name] = event.target.value;
        setHours(newHours);
    }

    const handleTotalTipsChange = (event) => {
        setTotal(event.target.value);
    }


    return (
        <div className="form">
            {console.log(pays)}
            <form onSubmit={handleSubmit}>
                {Array.from({ length: numEmployeeSlots}, (v, i) => <Employee index={i} key={i} onHoursChange={handleHoursChange} pay={pays[i]} onEmployeeChange={handleEmployeeChange} />)}
                <input type="number" min={0} name="total" placeholder="Total Tips" onChange={handleTotalTipsChange} />
                <input type="submit" value="Split" />
            </form>
        </div>
    )

}