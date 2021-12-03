import User from './User.js'
import Candidat from './classes/Candidat.js'

const registerBtn = document.getElementById('registerBtn');
const registerForm = document.getElementById('registerForm');


registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if(registerForm.age.value < 18 ||  registerForm.age.value > 35) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Check your infos again !',
                footer: '<a href="">Why do I have this issue?</a>'
            })  
    } else {

        let Cand = new Candidat(registerForm.firstName.value, registerForm.lastName.value, registerForm.email.value, registerForm.cne.value, registerForm.age.value, registerForm.campus.value)

        Cand.addCandidat();

       // Cand.addAuthUser();
    }

    
})


// const insertCandidat = (e) => {
//     e.preventDefault();
//     console.log("hellooooooooo")
// }

// registerForm.addEventListener('submit', insertCandidat);

