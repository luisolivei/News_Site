import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyCbENdZ_tqw704r7hmWkNUeR-RTHB8xLoI',
	authDomain: 'login-register-app-a690b.firebaseapp.com',
	projectId: 'login-register-app-a690b',
	storageBucket: 'login-register-app-a690b.appspot.com',
	messagingSenderId: '231532120962',
	appId: '1:231532120962:web:d6810ad22a5652d2a39d9b',
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage();

export const provider = new GoogleAuthProvider();
export default app;

