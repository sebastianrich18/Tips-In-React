import { Row, Col, Form } from "react-bootstrap";
import { useState } from "react";

const Employee = (props) => {
    const [employee, setEmployee] = useState("");
    const [oldEmployee, setOldEmployee] = useState(null);

    const updateHours = (e) => {
        let newHours = [...props.hours];
        newHours[props.index] = parseFloat(e.target.value);
        props.setHours(newHours);
        console.log(props.hours)
    }

    const employeeChanged = (e) => {
        const newEmployee = e.target.value;

        if (newEmployee === "Employee") {
            if (oldEmployee !== null) {
                props.removeSelectedEmployee(oldEmployee);
                setOldEmployee(null);
            }
        } else {
            if (oldEmployee !== null && oldEmployee !== newEmployee) {
                console.log("removing", oldEmployee)
                props.removeSelectedEmployee(oldEmployee);
            }

            if (!props.selectedEmployees.includes(newEmployee)) {
                props.addSelectedEmployee(newEmployee);
            }

            setOldEmployee(newEmployee);
        }

        setEmployee(newEmployee);
    };


    return (
        <Row style={{marginBottom: "8px"}}>
            {console.log("render employee " + props.index)}
            {console.log(props.selectedEmployees)}
            <Col>
                <Form.Select type="text" placeholder="Hours Worked" onChange={(e) => employeeChanged(e)}>
                    <option>Employee</option>
                    {props.employees.map((employee, i) => {

                        // CANT UNSELECT EMPLOYEE BECUASE IT IS STILL IN SELECTED ARRAY
                        // disabled={props.selectedEmployees.includes(employee) ? true : false}
                        return <option key={i} >{employee}</option>
                    })}
                </Form.Select>
            </Col>

            <Col>
                <Form.Control type="number" placeholder="Hours" onChange={(e) => updateHours(e)} />
            </Col>

            <Col>
                <div className="tips-earned">{props.pay ? "$" + props.pay : null}</div>
            </Col>
        </Row>
    )
}

export default Employee;