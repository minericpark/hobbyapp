import firebase from "firebase/app";
import "firebase/firestore";

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

/**
 * Class Assumptions
 * - These functions automatically generate whatever object is provided
 * - These functions will automatically overwrite any object provided
 */

/**
 * Considerations
 * - Add an email table for verification purposes?
 * - If provided location input, add location field into the email document of the main collection
 *      + Add location input to the emails on the email table
 */
//Add location: add location field into email document (then parse over them)
//Maybe add location into email document for emails collection?
if (!firebase.apps.length) {
    firebase.initializeApp(config);
} else {
    firebase.app();
}

const db = firebase.firestore();
const mainCollectionAccess = db.collection(cloudConfig.mainCollection);

//Create hobby document with empty fields to collection of hobbies
export const createHobbyEntry = (hobby) => {
    return mainCollectionAccess
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
export const addEmailToHobbyEntry = (nonregUser, hobby) => {
    return mainCollectionAccess
        .doc(hobby.toLowerCase())
        .collection('emails')
        .doc(nonregUser.email.toLowerCase())
        .set({

        })
        .then(function() {
            console.log("Email successfully written to emails collection of hobby!");
        })
        .catch(function(error) {
            console.error("Error writing entry: ", error);
        });
}

/**
 * Assumption:
 * - This email and hobby already exists
 *      + If this is not the case, then this function will create a new doc with the provided email and location
 *
 * @param email
 * @param location
 * @returns {Promise<void>}
 */
export const addLocationToHobbyEmail = (nonregUser, hobby) => {
    return mainCollectionAccess
        .doc(hobby.toLowerCase())
        .collection('emails')
        .doc(nonregUser.email.toLowerCase())
        .set({
            location: nonregUser.location,
        })
        .then(function() {
            console.log("Location successfully written to email");
        })
        .catch(function(error) {
            console.error("Error writing data: ", error);
        });
}

//Create email document with empty fields to collection of emails ()
export const createEmailEntry = (nonregUser) => {
    return mainCollectionAccess
        .doc(nonregUser.email.toLowerCase())
        .set({

        })
        .then(function() {
            console.log("Email document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
}

//Get all emails related to provided hobby (returns all of the emails)
export const getHobbyEmails = (hobby) => {
    return mainCollectionAccess
        .doc(hobby.toLowerCase())
        .collection('emails')
        .get()
        .catch(function(error) {
            console.error("Error getting collection: ", error);
        });
}
