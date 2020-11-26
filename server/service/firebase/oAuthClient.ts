import firebase from 'firebase';

const oAuthClient = async () => {
    if (!firebase.app.length) {
        firebase.initializeApp(credentials);
    }
    const c = await firebase.auth().createUserWithEmailAndPassword('email', '****');
    const token = await c.user.getIdToken(true);
};

export default oAuthClient;
