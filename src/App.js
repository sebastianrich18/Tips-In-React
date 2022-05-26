import { Form } from './Form';
import { useCookies } from 'react-cookie';
import { EmployeesHandler } from './EmployeesHandler';

/*

TODO: add + - to add/remove employees
TODO: add employee dropdown to select employee
TODO: make it not look like shit
TODO: add scott easter egg

*/




function App() {
  const [cookies, setCookie] = useCookies(['user']);

  return (
    <div className="App">
      <div className="header">
        Tip Splitter
      </div>
      <div className='form'>
        <EmployeesHandler />
        <Form num={12} />
      </div>
      <span style={{position: "absolute", bottom: 20, left: 20}}>(This site has been updated so that more employee slots will be added as needed)</span>

    </div>
  );
}

export default App;
