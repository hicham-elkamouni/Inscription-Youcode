import User from './classes/User.js'
import Candidat from './classes/Candidat.js'

const registerBtn = document.getElementById('registerBtn');
const registerForm = document.getElementById('registerForm');


registerForm.addEventListener('submit',async (e) => {
    e.preventDefault();

    const uri = 'http://localhost:5001/users?email='+registerForm.email.value
    const res = await fetch(uri)
    const user = await res.json()

    console.log(user)
    if(user.length > 0) {
        if(user[0].email == registerForm.email.value) {
            // show in UI that email already exists

        }
    }else if (registerForm.age.value > 17 &&  registerForm.age.value < 36){
        //register user
        

    }else{

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'your age must be between 18 and 35 !',
            footer: '<a href="">Why do I have this issue?</a>'
        })
    }
    if(user[0].email == registerForm.email.value ) {
        console.log("this email already exists");
        // if(user[0].password == password.value ){
        //     console.log("password nadi, rak mconecté")
        // }else{
        //     //sweet alert
        //     console.log("password ghalet")
        // }
    }else{
        //sweet alert
        console.log("email ghalet")

    }

    if(registerForm.age.value < 18 ||  registerForm.age.value > 35) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Check your infos again !',
                footer: '<a href="">Why do I have this issue?</a>'
            })
    
    } else {

        let Cand = new Candidat(registerForm.firstName.value, registerForm.lastName.value, registerForm.email.value, registerForm.cne.value, registerForm.age.value, registerForm.campus.value)
        console.log(registerForm.email.value);

        
        Cand.generatePassword();
        Cand.addCandidat();

       // Cand.addAuthUser();
        
    }

    
})


// const insertCandidat = (e) => {
//     e.preventDefault();
//     console.log("hellooooooooo")
// }

// registerForm.addEventListener('submit', insertCandidat);

