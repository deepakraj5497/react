import React from 'react';
import { connect } from 'react-redux';
import { 
    BrowserRouter as Router, Switch, Route, Redirect, Link
  } from 'react-router-dom';
  import {
    Navbar,
    Nav,
    NavItem,
    NavLink
  } from 'reactstrap';
import './App.css';
import Home from './components/home';
import StudentTable from './components/studenttable';
import FormInput from './components/form';


function App(props) {
  return (
	<Router>
		<div className="text-center">
      <Navbar color="text-light" className="justify-content-center" light expand="md">
			  <Nav className="font-weight-bold">
          <NavItem>
					  <NavLink><Link to="/react">Home</Link></NavLink>
          </NavItem>
				  <NavItem>
          <NavLink><Link to="/react/form">Form</Link></NavLink>
				  </NavItem>
				  <NavItem>
          <NavLink><Link to="/react/studentlist">Student List</Link></NavLink>
				  </NavItem>
			  </Nav>
      </Navbar>
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
            return <FormInput />;
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
