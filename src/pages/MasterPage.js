import React from 'react';
import { Link } from 'react-router';
import { LoginLink } from 'react-stormpath';
import DocumentTitle from 'react-document-title';
import {connect} from 'react-redux';
import Header from './Header';
import * as actions from '../actions/actions';

export class MasterPage extends React.Component {

  componentDidMount() {
    this.props.dispatch(actions.getData())
  }

  render() {
    return (
      <DocumentTitle title='My React App'>
        <div className='MasterPage'>
          <Header />
          { this.props.children }
        </div>
      </DocumentTitle>
    );
  }
}

export default connect()(MasterPage)