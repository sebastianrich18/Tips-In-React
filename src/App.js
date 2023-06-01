import { useCookies } from 'react-cookie';
import { Card, Tabs, Tab, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Splitter from "./Splitter"
import Manager from "./Manager"
import { useEmployees } from './useEmployees';


/*
 DESIGN:
 centered card, with rows for employees and total and split buttons
 "Manage employees" button will flip the card to a list where you can add and remove employees
*/

function App() {
  const [cookies, setCookie] = useCookies(['user']);
  const [key, setKey] = useState('first');
  const [employees, addEmployee, removeEmployee] = useEmployees();


  return (
    <div className="App">
      <Container className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <Card style={{ width: '30rem' }}>
          <Card.Header>
            <Tabs
              activeKey={key}
              onSelect={(k) => setKey(k)}
            >
              <Tab eventKey="first" title="Split">
                <Card.Body>
                  <Card.Title>Split</Card.Title>
                  <Card.Text>
                    <Splitter employees={employees} />
                  </Card.Text>
                </Card.Body>
              </Tab>
              <Tab eventKey="second" title="Manage">
                <Card.Body>
                  <Card.Title>Manage</Card.Title>
                  <Card.Text>
                    <Manager employees={employees} />
                  </Card.Text>
                </Card.Body>
              </Tab>
            </Tabs>
          </Card.Header>
        </Card>
      </Container>
    </div>
  );
}

export default App;
