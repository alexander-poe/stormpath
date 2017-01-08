import React from 'react';
import { combineReducers } from 'redux';
import * as actions from '../actions/actions';
//start with admin view



const initialState = {
	employees: []
}

export const mainReducer = (state=initialState, action) => {
	if (action.type === actions.GET_PAY_STUBS_SUCCESS) {
		const {data} = action;
		console.log('Data:', data)
	return {
		...state,
		employees: data
		} 
	}
	return state;
}

		// const a = action.data;
		// const employee    = a.employee;
		// const benefits    = a.benefits;
		// const hourly      = a.hourly;
		// const overtime    = a.overtime;
		// const total       = a.total;
		// const hourperweek = a.hourperweek;
		// console.log('reducer:', action.data, employee)