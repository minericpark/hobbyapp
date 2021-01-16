import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const { REACT_APP_FIREBASE_API_KEY,
    REACT_APP_FIREBASE_PROJECT_ID, REACT_APP_FIREBASE_SENDER_ID,
    REACT_APP_FIREBASE_APP_ID } = process.env;

const config = {
    apiKey: REACT_APP_FIREBASE_API_KEY,
    authDomain: REACT_APP_FIREBASE_PROJECT_ID + '.firebaseapp.com',
    projectId: REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: REACT_APP_FIREBASE_PROJECT_ID + '.appspot.com',
    messagingSenderId: REACT_APP_FIREBASE_SENDER_ID,
    appId: REACT_APP_FIREBASE_APP_ID,
}

const cloudConfig = {
    mainCollection: 'emailHobby',
    userCollection: 'emails',
}

firebase.initializeApp(config);
const db = firebase.firestore();

//Create hobby document with empty fields to collection of hobbies
export const createHobbyEntry = (hobby) => {
    return db.collection(cloudConfig.mainCollection)
        .doc(hobby.toLowerCase())
        .set({

        })
        .then(function() {
            console.log("Hobby document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
};

//Add entry to collection of email within hobby doc
export const addEmailToHobbyEntry = (email, hobby) => {
    return db.collection(cloudConfig.mainCollection)
        .doc(hobby.toLowerCase())
        .collection('emails')
        .doc(email.toLowerCase())
        .set({

        })
        .then(function() {
            console.log("Email successfully written to emails collection of hobby!");
        })
        .catch(function(error) {
            console.error("Error writing entry: ", error);
        });
}

//Create email document with empty fields to collection of emails
export const createEmailEntry = (email) => {
    return db.collection(cloudConfig.userCollection)
        .doc(email.toLowerCase())
        .set({

        })
        .then(function() {
            console.log("Email document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
}

//Get all emails related to provided hobby
export const getHobbyEmails = (hobby) => {
    return db.collection(cloudConfig.mainCollection)
        .doc(hobby.toLowerCase())
        .collection('emails')
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                console.log("Got collection item: " + doc.id);
            });
        })
        .catch(function(error) {
            console.error("Error getting collection: ", error);
        });
}
