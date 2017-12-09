import config from './config';

export const register = async ({	 email, password, name }) => {
	console.log('reging');
	console.log({email, password, name});
	
  fetch(`${config.url}/users`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },		
    body: JSON.stringify({
			email,
			password,
			name
		})
  })
  .then((response) => {
		console.log('done signup');
		console.log(response);
	})
  .done();
};

export const login = async ({	 email, password }) => {
	console.log('logging in');
	console.log({email, password});
	
	return fetch(`${config.url}/users/login`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },		
		body: JSON.stringify({
			email,
			password,
		})
	})
	.then((response) => {
		if (response.status !== 200) {
			throw response;
		}

		return response.json();
	}).catch(error => {
		return { success: false, error };
	});
};
