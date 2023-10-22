import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateUser from "./components/create-user.component";
import EditUser from "./components/edit-user.component";
import UsersList from "./components/users-list.component";
import ReportList from "./components/report-list.component";
import logo from "./12.png"

class App extends Component {
  render() {
   return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-sm bg-info justify-content-center ">
            <a className="navbar-brand" href="/" target="_blank">
              <img src={logo} width="40" height="40" alt="/" />
            </a>
            <Link to="/" className="navbar-brand custom-link ">Vitaminds</Link>
            <div className="collapse navbar-collapse">
            </div>
          </nav>
          
          <Route path ="/" exact component={UsersList}/>
          <Route path ="/edit/:id" component={EditUser}/>
          <Route path ="/create"  component={CreateUser}/>
          <Route path = "/report" component={ReportList}/>
        </div>
      </Router>
    
    );
  }
}

export default App;
