import React from 'react';
import DocumentTitle from 'react-document-title';
import { connect } from 'react-redux';
import { UserProfileForm } from 'react-stormpath';
import * as actions from '../actions/actions';
import Form from './Form.js';

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    this.props.dispatch(actions.getPayStub());
    console.log('data', this.props);
  }


  render() {
    const eachColumn = this.props.employees.map((data, index) => {
      console.log(data.employee)
      const benefits = data.benefits;
      const employee = data.employee;
      const hourly   = data.hourly;
      const overtime = data.overtime;
      const total    = data.total;
      const hourperweek = data.hourperweek;
      return (
        <tr key={index}>
          <td>{employee}</td>
          <td>{benefits}</td>
          <td>{overtime}</td>
          <td>{overtime}</td>
          <td>{overtime}</td>
          <td>{overtime}</td>
        </tr>
        );
    });
    return (
      <div className="container">          
        <table className="table">
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
              <th>Email</th>
              <th>Email</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {eachColumn}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  employees: state.employees
});

export default connect(mapStateToProps)(ProfilePage);