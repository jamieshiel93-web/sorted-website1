import { auth } from "../firebase.js";
import {
signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

window.login = function(){

const email = document.getElementById("email").value.trim();

const password = document.getElementById("password").value;

signInWithEmailAndPassword(auth,email,password)

.then(() =>{

window.location.href="dashboard.html";

})

.catch(()=>{

document.getElementById("error").style.display="block";

});

}