import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import Employee from './Employee';
import React, { useState } from 'react';

const Splitter = (props) => {

    const [selectedEmployees, setSelectedEmployees] = useState([])
    const [numEmployees, setNumEmployees] = useState(4);
    const [totalTips, setTotalTips] = useState(0);
    const [hours, setHours] = useState([])
    const [pay, setPay] = useState([])

    const addEmployee = (employee) => {
        console.log(numEmployees, selectedEmployees.length)
        if (selectedEmployees.includes(employee)) {
            return;
        }
        if (selectedEmployees.length + 1 >= numEmployees) {
            setNumEmployees(numEmployees + 1);
        }
        setSelectedEmployees([...selectedEmployees, employee])
    }

    const removeSelectedEmployee = (employee) => {
        // console.log(selectedEmployees)
        // console.log("unselecting", employee)
        // let newSelectedEmployees = []
        // selectedEmployees.forEach((selectedEmployee) => {
        //     if (selectedEmployee !== employee) {
        //         newSelectedEmployees.push(selectedEmployee)
        //     }
        // })
        // console.log(newSelectedEmployees)
        // setSelectedEmployees(...newSelectedEmployees)
        console.log("delete", employee)
        console.log(selectedEmployees, employee)
        console.log(selectedEmployees.filter((selectedEmployee) => selectedEmployee !== employee))
        setSelectedEmployees(selectedEmployees.filter((selectedEmployee) => selectedEmployee !== employee))
    }

    const split = () => {
        const totalHours = hours.reduce((a, b) => a + b, 0);
        const perHour = totalTips / totalHours;
        console.log(perHour, totalHours, totalTips)
        let newPay = [];
        console.log(hours)
        hours.forEach((hour) => {
            newPay.push((perHour * hour).toFixed(2))
        })
        setPay(newPay);
        console.log(newPay)
    }

    return (
        <div>
            <Container style={{ maxWidth: '2000px' }}>
                {console.log("render splitter")}
                {console.log(selectedEmployees)}
                {Array.from({ length: numEmployees }).map((x, i) => {
                    return <Employee 
                    setHours={setHours} 
                    hours={hours} 
                    key={i} 
                    index={i} 
                    pay={pay[i]} 
                    employees={props.employees}
                    removeSelectedEmployee={removeSelectedEmployee} 
                    addSelectedEmployee={addEmployee} 
                    selectedEmployees={selectedEmployees} 
                    />
                })}
                <Row style={{marginTop: "24px"}}>
                    <Col>
                        <Form.Control style={{  backgroundColor: '#181a1b', color:"#fff", borderColor: '#3c4144'}} type="number" placeholder='Total Tips' onChange={(e) => setTotalTips(parseFloat(e.target.value))} />
                    </Col>
                    <Col>
                        <Button onClick={() => split()}>Split</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Splitter;