const admin = require("firebase-admin");
const serviceAccount = require("./jobguru.json");
const data = require("./test.json");
const collectionKey = "users"; //name of the collection

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://jobguru-dd1f3.firebaseio.com"
});

const firestore = admin.firestore();
const settings = { timestampsInSnapshots: true };

var id = Math.random()
  .toString(36)
  .substring(3, 15);

firestore.settings(settings);
var docRef = firestore.collection(collectionKey).doc();

if (data && typeof data === "object") {
  Object.keys(data).forEach(docKey => {
    docRef
      .collection("details")
      .doc(docKey)
      .set(data[docKey])
      .then(res => {
        console.log("Document " + docKey + " successfully written!");
      })
      .catch(error => {
        console.error("Error writing document: ", error);
      });
  });
}

// const config = {
//     apiKey: "AIzaSyBoLcgbWMf1hnTpvVYcVBcCCzZt5qiVERQ",
//     authDomain: "jobguru-dd1f3.firebaseapp.com",
//     databaseURL: "https://jobguru-dd1f3.firebaseio.com",
//     projectId: "jobguru-dd1f3",
//     storageBucket: "jobguru-dd1f3.appspot.com",
//     messagingSenderId: "150645643079",
//     appId: "1:150645643079:web:6dd4c2b7b4105f0f"
// };
