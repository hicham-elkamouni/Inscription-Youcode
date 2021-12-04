import User from './User.js'

export default class Candidat extends User{
    password;
    state = false;
    constructor(firstName, lastName,email, cne, age, campus){
      super(firstName, lastName,email, cne, age, campus )
    }

    // generatePassword = async () => {
    //   return this.password = Math.random().toString(36).substr(2) + this.email.split("@", 1);
    // };
    
    addCandidat = async () => {
    
    const obj = {
      firstName : this.firstName,
      lastName : this.lastName,
      email : this.email,
      cne : this.cne,
      age : this.age,
      campus : this.campus,
      password : this.password,
      state : this.state
    }


    await fetch('http://localhost:5001/users',{
      method : 'POST',
      body : JSON.stringify(obj),
      headers : {'Content-Type': 'application/json'}
    });

      // sweet alert
      const Toast = await Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    sessionStorage.setItem('email', this.email);
    sessionStorage.setItem('password', this.password);

    // const authObj = {
    //   email : this.email,
    //   password : this.password
    // }

    // await fetch('https://localhost:5001/users', {
    //   method : 'POST',
    //   body: JSON.stringify(authObj),
    //   headers: {'Content-Type': 'application/json'}
    // })
    
    // Toast.fire({
    //   icon: 'success',
    //   title: 'Signed in successfully'
    // })

    // window.location.replace('/login.html'); 


    }


    // addCredentials(a,b){
    //   this.password = Math.random().toString(36).substr(2) + this.email.split("@", 1);

    //   const obj = {
    //     email : a,
    //     password : b
    //   }
    //   await fetch('http://localhost:5001/auth',{
    //   method : 'POST',
    //   body : JSON.stringify(obj),
    //   headers : {'Content-Type': 'application/json'}
    // });
    // }

    
    // addCandidatToAuth = async () => {
    //   let email = this.email;
    //   let randomPassword = Math.random().toString(36).substr(2) + email.split("@", 1);

    //   console.log(randomPassword)
    //   const authObj = {
    //     email : this.email,
    //     password : randomPassword
    //   }
      
    //   await fetch('https://localhost:5001/auth',{
    //     method: 'POST',
    //     body: JSON.stringify(authObj),
    //     headers: {'Content-Type': 'application/json'}
    //   })
  
    // }


    }

