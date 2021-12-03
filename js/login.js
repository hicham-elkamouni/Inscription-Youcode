const loginBtn = document.getElementById('loginBtn');
const loginForm = document.getElementById('loginForm');

const username = document.getElementById('username');
const password = document.getElementById('password');


window.addEventListener('DOMContentLoaded', () => {
    
    username.value = sessionStorage.getItem('email');
    password.value = sessionStorage.getItem('password');


})


function checkLogin() {


    console.log('hello world');
}