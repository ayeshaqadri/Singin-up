import { getAuth, signInWithEmailAndPassword } from "./firebase.js";
let loginEmail = document.getElementById("login-email");
let loginPass = document.getElementById("login-pass");
let loginBtn = document.getElementById("login-btn")
loginBtn.addEventListener("click", () => {
    location.href = "website.html"

    if (loginEmail.Value.trim() && loginPass.Value.trim()) {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, loginEmail.value, loginPass.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
            });
    }
})
export {
    getAuth, signInWithEmailAndPassword
}