import React from 'react';
import { connect } from 'react-redux';
import Tabledata from './tabledata';
import Tablehead from './table-head';
import Pagination from './pagination';

class StudentTable extends React.Component {
    componentDidMount() {
      const {
          redirect, redirectadd
          } = this.props;
        redirect('');
        redirectadd('');
      }

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
  redirect: (data) => { dispatch({ type: 'REDIRECT', data }); },
  redirectadd: (data) => { dispatch({ type: 'REDIRECT_ADD', data }); },
  pageSize: (data, newData) => { dispatch({ type: 'PAGE_SIZE', data, newData }); }
});

export default connect(mapStatetoProps, mapDispatchtoProps)(StudentTable);
