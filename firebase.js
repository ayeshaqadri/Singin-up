
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyB4RWWruUA2VquqYVLR23ipUEoPIzlKFJc",
    authDomain: "project-dc717.firebaseapp.com",
    projectId: "project-dc717",
    storageBucket: "project-dc717.firebasestorage.app",
    messagingSenderId: "404723403613",
    appId: "1:404723403613:web:fc81e5a046cc163a2136b4",
    measurementId: "G-LGWX5ZQ714"
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
