// Paste your Firebase web app config here.
// Firebase console > Project settings > General > Your apps > Web app > SDK setup and configuration.
// These values are safe to publish. Access is controlled by firestore.rules, not by hiding the keys.
//
// Until you replace the placeholders, Kharcha runs in demo mode: no sign-in, data stays in this browser.

export const firebaseConfig = {
  apiKey: "AIzaSyCraAy_RxnhEKZQukLXZDc3rvB95A7QDzg",
  authDomain: "jewels-7f57a.firebaseapp.com",
  projectId: "jewels-7f57a",
  storageBucket: "jewels-7f57a.firebasestorage.app",
  messagingSenderId: "642594928044",
  appId: "1:642594928044:web:7a591d053c4ff3070ef609",
  measurementId: "G-5GLL8TYQTS"
};

// After you deploy the cloud function (see README), paste its URL here.
// It looks like https://ingest-xxxxxxxx-el.a.run.app
export const ingestUrl = "PASTE_INGEST_FUNCTION_URL";

export const isConfigured = !String(firebaseConfig.apiKey).startsWith("PASTE");
export const hasIngestUrl = !String(ingestUrl).startsWith("PASTE");
