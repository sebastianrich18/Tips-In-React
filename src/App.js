import { useCookies } from 'react-cookie';
import { Card, Tabs, Tab, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Splitter from "./Splitter"
import Manager from "./Manager"
import { useEmployees } from './useEmployees';


function App() {
  const [cookies, setCookie] = useCookies(['user']);
  const [key, setKey] = useState('first');
  const [employees, addEmployee, removeEmployee] = useEmployees();


  return (
    <div className="App" style={{backgroundColor: "#181a1b"}}>
      <Container className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <Card bg="dark" style={{ width: '70%', maxHeight: '70%' }}>
          <Card.Header>
            <Tabs
              variant='pills'
              activeKey={key}
              onSelect={(k) => setKey(k)}
            >
              <Tab eventKey="first" title="Split">
                <Card.Body>
                  <Card.Title>Split</Card.Title>
                    <Splitter employees={employees} />
                </Card.Body>
              </Tab>
              <Tab eventKey="second" title="Manage">
                <Card.Body>
                  <Card.Title>Manage</Card.Title>
                    <Manager employees={employees} />
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
