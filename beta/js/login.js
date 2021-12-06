const loginBtn = document.getElementById('loginBtn');
const loginForm = document.getElementById('loginForm');

const username = document.getElementById('username');
const password = document.getElementById('password');


window.addEventListener('DOMContentLoaded', () => {

    username.value = sessionStorage.getItem('tempEmail');

    loginBtn.addEventListener('click', async (e) => {
        e.preventDefault();

    const uri = 'http://localhost:5001/users?email='+username.value
    const res = await fetch(uri)
    const user = await res.json()

    if(user.length > 0) {
        console.log("email nadi nchofo db password");
        if(user[0].password == password.value ){
            console.log("password nadi, rak mconecté")  
            sessionStorage.removeItem('tempEmail');

            sessionStorage.setItem('username', user[0].email);
            
            location.replace("http://localhost:3000/Quiz1.html");
        }else{
            //sweet alert
            console.log("password ghalet")
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'password incorrect, try again',
                footer: '<a href="">Why do I have this issue?</a>'
            })
        }
    }else{
        //sweet alert
        console.log("email ghalet")
    }

    console.log(user)
    
})


});