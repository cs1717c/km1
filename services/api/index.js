import config from './config';

export const register = async ({ email, password, name }) => {
	console.log('reging');
	
  fetch(`${config.url}/users`, {
    method: 'POST',
    data: {
			email,
			password,
			name
		}
  })
  .then((response) => {
		console.log('done signup');
		console.log(response);
	})
  .done();
};
