import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import DisplayEmployees from './Employees/DisplayEmployees';
import DisplaySingleEmployee from './Employees/DisplaySingleEmployee'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className='App'>
        <div className='app_body'>
          <Switch>
            <Route path="/Home">
              <DisplayEmployees  />
            </Route>
            {/* <Route path={`/Employee/${id}`}>
              <DisplaySingleEmployee />
            </Route> */}
            <Route path={"/Employee/${id}"}>
              <DisplaySingleEmployee />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
