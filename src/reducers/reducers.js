import React from 'react';

import * as actions from '../actions/actions'

const initialState = {}

export const mainReducer = (state=initialState, action) => {
	if (action.type === actions.GET_DATA_SUCCESS) {
		console.log(action.data)
	}
	return state; 
}