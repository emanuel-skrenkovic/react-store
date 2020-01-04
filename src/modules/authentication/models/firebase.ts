import * as firebase from 'firebase/app';
import 'firebase/auth';

// TODO: pull from app config?
const config = {
    apiKey: 'AIzaSyDpyqsFjlekVMNqkX8Hq9FzpHooV4vgP_o',
    authDomain: 'react-store-8b075.firebaseapp.com',
    projectId: 'react-store-8b075',
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ]
};

const appName: string = 'react-store';

const app: firebase.app.App = firebase.initializeApp(config, appName);

export const googleAuth: firebase.auth.AuthProvider = new firebase.auth.GoogleAuthProvider();
export const auth: firebase.auth.Auth = firebase.auth(app);