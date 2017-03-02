import * as firebase from 'firebase'

var config = {
    apiKey: "AIzaSyCMlqXeNC9neoYJmVtnnHyns8e7KrXXEx4",
    authDomain: "login-9e34a.firebaseapp.com",
    databaseURL: "https://login-9e34a.firebaseio.com",
    storageBucket: "login-9e34a.appspot.com",
    messagingSenderId: "47637167713"
  };
  firebase.initializeApp(config);

 class FirebaseService {

    // static firebaseTimeStamp = firebase.database['ServerValue'].TIMESTAMP;
    static ref = firebase.database().ref();
    // static storage = firebase.storage().ref();
    static auth = firebase.auth();

    // constructor() { }

    static saveMultipath(multipath) {
        return this.ref.update(multipath);
    } // saveMultipath

    static customAuth(user) {
        return this.auth.createUserWithEmailAndPassword(user.email, user.pass);
    } //AuthNewUser

    static customLogin(user) {
        return this.auth.signInWithEmailAndPassword(user.email, user.pass);
    } //loginUser

    static addNewUser(user) {
        return this.ref.child(user).set();
    } //AuthNewUser

    static getPushRef(path) {
        return this.ref.child(path).push();
    }
 
}
export default FirebaseService