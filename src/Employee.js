import React from "react";

export function Employee(props) {

    return (
        <div className="employee">
            <input name={props.index + "name"} type="text" placeholder="Name" onChange={props.onChange} />
            <input name={props.index + "hours"} type="number" placeholder="Hours" min={0} onChange={props.onChange} />
            <span id={props.index + "pay"} className="employee-tip">${props.pay}</span>
        </div>
    )
}