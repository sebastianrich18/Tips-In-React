import { Form } from './Form';

/*

TODO: add + - to add/remove employees
TODO: add employee dropdown to select employee
TODO: make it not look like shit
TODO: add scott easter egg

*/

function App() {
  return (
    <div className="App">
      <div className="header">
        Tip Splitter
      </div>
      <div className='form'>
       <Form num={6} />
      </div>

    </div>
  );
}

export default App;
