import { getAuth, signInWithEmailAndPassword } from "./firebase.js";
import Swal from 'sweetalert2'; // Ensure SweetAlert is imported

let loginEmail = document.getElementById("login-email");
let loginPass = document.getElementById("login-pass");
let loginBtn = document.getElementById("login-btn");

loginBtn.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent the default button action

    // Check if email and password fields are filled
    if (loginEmail.value.trim() && loginPass.value.trim()) {
        const auth = getAuth();

        // Attempt to sign in
        signInWithEmailAndPassword(auth, loginEmail.value, loginPass.value)
            .then((userCredential) => {
                // Successfully signed in
                const user = userCredential.user;
                console.log(user);

                // Show success alert
                Swal.fire({
                    title: "Welcome",
                    text: "You are successfully signed in",
                    icon: "success"
                }).then(() => {
                    // Redirect to website.html after closing the alert
                    location.href = "website.html";
                });
            })
            .catch((error) => {
                // Handle Errors here
                const errorCode = error.code;
                const errorMessage = error.message;

                // Show error alert
                Swal.fire({
                    title: "Login Error",
                    text: errorMessage, // Display the error message from Firebase
                    icon: "error"
                });

                console.log("Error code:", errorCode);
                console.log("Error message:", errorMessage);
            });
    } else {
        // Show alert if email or password is missing
        Swal.fire({
            title: "Missing Information",
            text: "Please fill in both email and password fields.",
            icon: "warning"
        });
    }
});

export {
    getAuth,
    signInWithEmailAndPassword
};
