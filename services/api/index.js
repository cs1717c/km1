import config from './config';
import { store } from 'Kameo/app';
import _ from 'lodash';

export const currentUserToken = () => (store.store.getState().authentication.user.token);

export const register = async ({	 email, password, name }) => {
	return fetch(`${config.url}/api/users`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },		
		body: JSON.stringify({
			email,
			password,
			name
		})
	})
	.then((response) => {
		console.log('register');
		console.log(response);

		if (response.status !== 200) {
			throw response;
		}

		return response.json();
	}).catch(error => {
		throw error;
	});
};

export const login = async ({	 email, password }) => {
	return fetch(`${config.url}/api/users/login`, {
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
		throw error;
	});
};

export const myTags = async (request) => {
	const token = currentUserToken();
	let q = '';

	console.log('token');
	console.log(token);

	if (!_.isUndefined(request.query)) {
			q = 'query='+request.query;
	}

	return fetch(`${config.url}/api/users/me/tags/?` + q, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json',
			'x-access-token': token,
		},
	})
	.then((response) => {
		console.log('got my tags');
		console.log(response);

		if (response.status !== 200) {
			throw response;
		}

		return response.json();
	}).catch(error => {
		throw error;
	});
};

export const addTag = async (request) => {
	const token = currentUserToken();

	console.log('api add tag');

	return fetch(`${config.url}/api/tags`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json',
			'x-access-token': token,
		},
		body : JSON.stringify({
			tag: request.tag,
		}),
	})
	.then((response) => {
		console.log('add tag');
		console.log(response);

		if (response.status !== 200) {
			throw response;
		}

		return response.json();
	}).catch(error => {
		throw error;
	});
};

export const selectTag = async (request) => {
	const token = currentUserToken();

	console.log('api select tag');

	return fetch(`${config.url}/api/users/me/tags`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json',
			'x-access-token': token,
		},
		body : JSON.stringify({
			tag: request.tag,
		}),
	})
	.then((response) => {
		console.log('selected tag');
		console.log(response);

		if (response.status !== 200) {
			throw response;
		}

		return response.json();
	}).catch(error => {
		throw error;
	});
};

export const deselectTag = async (request) => {
	const token = currentUserToken();

	console.log('api deselect tag');

	return fetch(`${config.url}/api/users/me/tags`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json',
			'x-access-token': token,
		},
		body : JSON.stringify({
			tag: request.tag,
		}),
	})
	.then((response) => {
		console.log('selected tag');
		console.log(response);

		if (response.status !== 200) {
			throw response;
		}

		return response.json();
	}).catch(error => {
		throw error;
	});
};

export const removeTag = async (_id) => {
	const token = currentUserToken();

	console.log('api remove tag');

	return fetch(`${config.url}/api/tags`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json',
			'x-access-token': token,
		},
		body : JSON.stringify({
			_id,
		}),
	})
	.then((response) => {
		console.log('remove tag');
		console.log(response);

		if (response.status !== 200) {
			throw response;
		}

		return response.json();
	}).catch(error => {
		throw error;
	});
};


export const places = async (request) => {
	console.log('in fetch places');
	
	return fetch(`${config.url}/api/places`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json',
		},
	})
	.then((response) => {
		console.log('got places');
		console.log(response);

		if (response.status !== 200) {
			throw response;
		}

		return response.json();
	}).catch(error => {
		throw error;
	});
};

export const addPlace = async (placeid) => {
	const token = currentUserToken();

	console.log('api add place');

	return fetch(`${config.url}/api/places`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json',
			'x-access-token': token,
		},
		body : JSON.stringify({
			placeid,
		}),
	})
	.then((response) => {
		console.log('add place');
		console.log(response);

		if (response.status !== 200) {
			throw response;
		}

		return response.json();
	}).catch(error => {
		throw error;
	});
};

export const removePlace = async (_id) => {
	const token = currentUserToken();

	console.log('api remove place');

	return fetch(`${config.url}/api/places`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json',
			'x-access-token': token,
		},
		body : JSON.stringify({
			_id,
		}),
	})
	.then((response) => {
		console.log('remove place');
		console.log(response);

		if (response.status !== 200) {
			throw response;
		}

		return response.json();
	}).catch(error => {
		throw error;
	});
};
