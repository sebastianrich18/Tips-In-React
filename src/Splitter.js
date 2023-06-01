import { Container } from 'react-bootstrap';
import Employee from './Employee';
import React, { useState } from 'react';

const Splitter = (props) => {

    const [numEmployees, setNumEmployees] = useState(4);

    console.log(props.employees)
    return (
        <div>
            <Container style={{ maxWidth: '2000px' }}>
                {Array.from({length: numEmployees}).map(() => {
                    return <Employee employees={props.employees} />
                })}
            </Container>
        </div>
    );
}

export default Splitter;