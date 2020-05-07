import React from 'react';
import { connect } from 'react-redux';
import { 
    BrowserRouter as Router, Switch, Route, Link 
  } from 'react-router-dom';
import './App.css';
import Tabledata from './components/tabledata';
import Form from './components/form';
import Tablehead from './components/table-head';
import Pagination from './components/pagination';

function App() {
  return (
	<Router>
		<div className="text-center">
      <nav className="navbar navbar-expand-sm bg-light justify-content-center">
			  <ul className="list-unstyled navbar-nav font-weight-bolder">
          <li className="nav-item">
					  <Link className="nav-link" to="/">Home</Link>
          </li>
				  <li className="nav-item">
					  <Link className="nav-link" to="/form">Form</Link>
				  </li>
				  <li className="nav-item">
					  <Link className="nav-link" to="/studentlist">Student List</Link>
				  </li>
			  </ul>
      </nav>
			<Switch>
				<Route path="/form">
					<Form />
				</Route>
				<Route path="/studentlist">
					<StudentTable />
				</Route>
        <Route path="/">
					<Home />
        </Route>
			</Switch>
		</div>
	</Router>
  );
}

function Home() {
  return <h3 className="mt-5 text-info">WELCOME TO STUDENT TABLE LIST</h3>;
}

class StudentTable extends React.Component {
  dropdown = (event) => {
    const { 
            post: { 
                  duplicate
                }, pageSize
    } = this.props;
    pageSize(parseInt(event.target.value, 10), duplicate);
  }
  
  render() {
   return (
      <div className="text-center w-75 mx-auto mt-5">
        <div className="row">
         <div className="col-12 mt-5">
            <table className="table table-bordered table-hover">
              <Tablehead />
             <tbody>
                <Tabledata />
             </tbody>
            </table>
            <ul className="pagination justify-content-center">
              <Pagination />
            </ul>
            <form className="text-center">
							<select onChange={this.dropdown}>
								<option value="5">5</option>
								<option value="10">10</option>
								<option value="15">15</option>
							</select>
            </form>
         </div>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = (state) => ({
    post: state
});
const mapDispatchtoProps = (dispatch) => ({
      pageSize: (data, newData) => { dispatch({ type: 'PAGE_SIZE', data, newData }); }
});
export default connect(mapStatetoProps, mapDispatchtoProps)(App);
