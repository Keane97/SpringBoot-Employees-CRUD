import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import DisplayEmployees from './Employees/DisplayEmployees';
import DisplaySingleEmployee from './Employees/DisplaySingleEmployee'

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import CreateNewEmployee from './Employees/CreateNewEmployee';



function App() {


  return (
    <Router>
      <div className='App'>
        <div className='app_body'>
          <Switch>
            <Route exact path="/">
              <Redirect to="/Home" />
            </Route>
            <Route path="/Home">
              <DisplayEmployees />
            </Route>
            <Route path="/NewEmployee">
              <CreateNewEmployee />
            </Route>
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
