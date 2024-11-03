import { getAuth, createUserWithEmailAndPassword } from "./firebase.js";
let signupEmail = document.getElementById("signup-email")
let signupPass = document.getElementById("signup-pass")
let signupBtn = document.getElementById("signup-btn")
signupBtn.addEventListener("click" ,()=>{
if(signupEmail.value.trim() && signupPass.value.trim()){
    const auth = getAuth();
createUserWithEmailAndPassword(auth, signupEmail.value, signupPass.value)
  .then((userCredential) => {
    
    const user = userCredential.user;
    console.log(user);
    location.href="login.html"
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
  });

}
})

