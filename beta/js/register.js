import User from './classes/User.js'
import Candidat from './classes/Candidat.js'

const registerBtn = document.getElementById('registerBtn');
const registerForm = document.getElementById('registerForm');

window.addEventListener('DOMContentLoaded', () => {
    sessionStorage.clear();
})

registerForm.addEventListener('submit',async (e) => {
    

    e.preventDefault();

    const uri = 'http://localhost:5001/users?email='+registerForm.email.value
    const res = await fetch(uri)
    const user = await res.json()


    if(user.length > 0) {
        if(user[0].email == registerForm.email.value) {
            // show in UI that email condition
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'this email already exists !',
                footer: '<a href="">Why do I have this issue?</a>'
            })
        }
    }else if (registerForm.age.value > 17 &&  registerForm.age.value < 36){
        //register user
        let Cand = new Candidat(registerForm.firstName.value, registerForm.lastName.value, registerForm.email.value, registerForm.cne.value, registerForm.age.value, registerForm.campus.value)
        
        Cand.password = Math.random().toString(36).substr(2) + registerForm.email.value.split("@", 1);
        
        // show in UI the generated password
        alert(`save this password , u'll need it later to login \n ${Cand.password}`);

        Cand.addCandidat();

        sessionStorage.setItem("tempEmail",registerForm.email.value);

        location.replace("http://localhost:3000/login.html");
    }else{
        // show in UI the age condition
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'your age must be between 18 and 35 !',
            footer: '<a href="">Why do I have this issue?</a>'
        })
    }
    

    
})

