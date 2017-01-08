const paystubs_url = "http://localhost:3000/userdata"

export const GET_PAY_STUBS_SUCCESS = 'GET_PAY_STUBS_SUCCESS';
export const getPayStubSuccess = data => ({
	type: 'GET_PAY_STUBS_SUCCESS',
	data
});

export const getPayStub = data => dispatch => {
	return fetch(paystubs_url)
		.then(res => {
			if (!res.ok) {
				throw new Error(res.statusText);
			}
			return res.json()
		}).then(res => {
			console.log('res!',res); 
			dispatch(getPayStubSuccess(res.data));
		}).catch(err => {
			console.log('error', err);
		});
};