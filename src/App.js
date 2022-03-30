import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import DisplayEmployees from './Employees/DisplayEmployees';


function App() {
  return (
    <div className='App'>
      <div className='app_body'>
        <DisplayEmployees />
      </div>
    </div>
  );
}

export default App;
