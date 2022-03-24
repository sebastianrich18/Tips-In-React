import React from "react";
import { Employee } from "./Employee";

export function Form(props) {

    const [total, setTotal] = React.useState("0");
    const [pays, setPays] = React.useState([]);
    const [hours, setHours] = React.useState([]);
    
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
                {Array.from({ length: props.num }, (v, i) => <Employee index={i} key={i} onHoursChange={handleHoursChange} pay={pays[i]} />)}
                <input type="number" min={0} name="total" placeholder="Total Tips" onChange={handleTotalTipsChange} />
                <input type="submit" value="Split" />
            </form>
        </div>
    )

}