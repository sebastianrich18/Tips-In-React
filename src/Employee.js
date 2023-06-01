import { Row, Col, Form } from "react-bootstrap";


const Employee = (props) => {
    return (
        <div className="row">
            <Row>
                <Col>
                    <Form.Select type="text" placeholder="Hours Worked">
                        <option>Select Employee</option>
                        {props.employees.map((employee) => {
                            return <option>{employee}</option>
                        })}
                    </Form.Select>
                </Col>

                <Col>
                    <Form.Control type="number" placeholder="Hours" />
                </Col>
                
                <Col>
                    <div className="tips-earned">$145.35</div>
                </Col>
            </Row>

        </div >
    )
}

export default Employee;