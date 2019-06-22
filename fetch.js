var admin = require("firebase-admin");
const serviceAccount = require("./jobguru.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://jobguru-dd1f3.firebaseio.com"
});

var firestore = admin.firestore();

firestore
  .collection("users")
  .doc("i68e2ZmcDjK2kSlWkfyf")
  .collection("details")
  .get()
  .then(snapshot => {
    snapshot.forEach(doc => {
      console.log(doc.id, "=>", doc.data());
    });
  })
  .catch(err => {
    console.log("Error getting documents", err);
  });
