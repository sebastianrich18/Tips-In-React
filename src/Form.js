import React, { ReactDOM } from "react";
import { Employee } from "./Employee";

export class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.initState(); 
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.initState = this.initState.bind(this);
    }

    initState() {
        let out = {}
        for (let i = 0; i < this.props.num; i++) {
            out[i+"pay"] = 0;
        }
        return out
    }

    handleSubmit(event) {
        event.preventDefault();
        let totalHours = 0;
        for(let i=0; i< this.props.num; i++) {
            if (this.state[i + "hours"]) {
                totalHours += parseInt(this.state[i + "hours"]);
            }
        }
        for(let i=0; i< this.props.num; i++) {
            if (this.state[i + "hours"]) {
                let newPay = ((parseFloat(this.state[i + "hours"]) / totalHours) * parseFloat(this.state.total)).toFixed(2);
                if (newPay) {
                    this.setState({ [i + "pay"]: newPay });
                }
            }
        }
        console.log(this.state);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
        console.log(this.state)
    }

    render() {
        return (
            <div className="form">
                <form onSubmit={this.handleSubmit}>
                    {Array.from({ length: this.props.num }, (v, i) => <Employee index={i} key={i} onChange={this.handleChange} pay={this.state[i+"pay"]} />)}
                    <input type="number" min={0} name="total" placeholder="Total Tips" onChange={this.handleChange} />
                    <input type="submit" value="Split" />
                </form>
            </div>
        )
    }
}