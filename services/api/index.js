import config from './config';
import { store } from 'Kameo/app';
import _ from 'lodash';

export const currentUserToken = () => (store.getState().authentication.user.token);

export const register = async ({	 email, password, name }) => {
	return fetch(`${config.url}/users`, {
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
		throw error;
	});
};

export const myTags = async (request) => {
	const token = currentUserToken();
	let q = '';

	if (!_.isUndefined(request.query)) {
			q = 'query='+request.query;
	}

	return fetch(`${config.url}/users/me/tags/?`+q, {
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

	return fetch(`${config.url}/tags`, {
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
