import { Row, Col, Form } from "react-bootstrap";


const Employee = (props) => {


    const updateHours = (e) => {
        let newHours = [...props.hours];
        newHours[props.index] = parseFloat(e.target.value);
        props.setHours(newHours);
        console.log(props.hours)
    }

    return (
            <Row>
                <Col>
                    <Form.Select type="text" placeholder="Hours Worked" onChange={(e) => props.addEmployee(e.target.value)}>
                        <option>Select Employee</option>
                        {props.employees.map((employee, i) => {
                            return <option key={i}>{employee}</option>
                        })}
                    </Form.Select>
                </Col>

                <Col>
                    <Form.Control type="number" placeholder="Hours" onChange={(e) => updateHours(e)}/>
                </Col>
                
                <Col>
                    <div className="tips-earned">{props.pay ? "$" + props.pay : null}</div>
                </Col>
            </Row>
    )
}

export default Employee;