import React from 'react';
import {Table, Column, Cell} from 'fixed-data-table';

export default class Form extends React.Component {
	constructor(props) {
		super(props);
		console.log('here', props)
		
	}



	render() {
		return(
			<div className="container">          
			  <table className="table">
			    <thead>
			      <tr>
			        <th>Firstname</th>
			        <th>Lastname</th>
			        <th>Email</th>
			      </tr>
			    </thead>
			    <tbody>
			      <tr>
			        <td>John</td>
			        <td>Doe</td>
			        <td>john@example.com</td>
			      </tr>
			      <tr>
			        <td>Mary</td>
			        <td>Moe</td>
			        <td>mary@example.com</td>
			      </tr>
			      <tr>
			        <td>July</td>
			        <td>Dooley</td>
			        <td>july@example.com</td>
			      </tr>
			    </tbody>
			  </table>
			</div>
			)
	}


}