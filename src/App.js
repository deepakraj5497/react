import React from 'react';
import { connect } from 'react-redux';
import { 
    BrowserRouter as Router, Switch, Route, Link, Redirect 
  } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import StudentTable from './components/studenttable';
import Form from './components/form';


function App(props) {
  return (
	<Router>
		<div className="text-center">
      <nav className="navbar navbar-expand-sm bg-light justify-content-center">
			  <ul className="list-unstyled navbar-nav font-weight-bolder">
          <li className="nav-item">
					  <Link className="nav-link" to="/react">Home</Link>
          </li>
				  <li className="nav-item">
					  <Link className="nav-link" to="/react/form">Form</Link>
				  </li>
				  <li className="nav-item">
					  <Link className="nav-link" to="/react/studentlist">Student List</Link>
				  </li>
			  </ul>
      </nav>
			<Switch>
        <Route 
            path="/react/form" 
            render={() => {
            if (props.post.edit === false) {
              return <Redirect to="/react/studentlist" />;
            }
            if (props.post.addRedirect === true) {
              return <Redirect to="/react/studentlist" />;
            }
            return <Form />;
          }}
        />
        <Route 
          path="/react/studentlist"
          render={() => {
            if (props.post.edit === true) {
              return <Redirect to="/react/form" />;
            }
            return (<StudentTable />);
          }}
        />
        <Route path="/react">
					<Home />
        </Route>
			</Switch>
		</div>
	</Router>
  );
}

const mapStatetoProps = (state) => ({
    post: state
});

export default connect(mapStatetoProps)(App);
