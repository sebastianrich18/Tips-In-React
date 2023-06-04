import { Container, ListGroup, Button, Form } from "react-bootstrap";
import { useEmployees } from "./useEmployees";
import { useState } from "react";

const Manager = () => {
    const [employees, addEmployee, removeEmployee] = useEmployees();
    const [addedEmployee, setAddedEmployee] = useState("");

    return (
        <Container>
            <div style={{ maxHeight: "500px", overflowY: "auto" }}>
                <ListGroup variant="dark">
                    {employees.map((employee, i) => {
                        return (
                            <ListGroup.Item variant="dark" style={{  backgroundColor: '#181a1b', color:"#fff", borderColor: '#3c4144'}} className="d-flex justify-content-between align-items-center" key={i}>
                                {employee}
                                <Button variant="danger" onClick={() => removeEmployee(employee)}>x</Button>
                            </ListGroup.Item>)
                    })}
                    <ListGroup.Item style={{  backgroundColor: '#181a1b', color:"#fff", borderColor: '#3c4144'}}>
                        <Form  onSubmit={(e) => { e.preventDefault(); addEmployee(addedEmployee); setAddedEmployee("") }} className="d-flex justify-content-between align-items-center">
                            <Form.Control style={{  backgroundColor: '#181a1b', color:"#fff", borderColor: '#3c4144'}} type="text" placeholder="Add Employee" value={addedEmployee} onChange={(e) => setAddedEmployee(e.target.value)} />
                            <Button variant="success" type="submit">+</Button>
                        </Form>
                    </ListGroup.Item>
                </ListGroup>
            </div>
        </Container >
    );
}

export default Manager;