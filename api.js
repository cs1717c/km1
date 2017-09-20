
import { AsyncStorage } from "react-native";

export const USER_KEY = 'token';
const SERVER_URL = 'http://localhost:5000/';


export default class Api {

    static async signIn(email, password) {
        try {
            let response = await fetch(SERVER_URL + 'api/users/login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                })
            });
            let res = await response.json();

            console.log("logged in");
            console.log(res);
            let accessToken = res.token;
            console.log(accessToken);

            await AsyncStorage.setItem(USER_KEY, accessToken);
        } catch (e) {
            console.log(e)
        } finally {

        }
        console.log(this);

    }

    static async signOut() {
        await AsyncStorage.removeItem(USER_KEY);
    }

    static isSignedIn() {
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem(USER_KEY)
                .then(res => {
                    if (res !== null) {
                        resolve(true);
                    } else {
                        resolve(false);
                    }
                })
                .catch(err => reject(err));
        });
    };
}

