export function authCheck () {

    let email = sessionStorage.getItem('username');

    let uri = 'http://localhost:5001/users?email='+email;

    const res = await fetch(uri);
    const candidat = await res.json();

    if( !candidat.length==1 ||!candidat[0].email===email || candidat[0].state==true){

            window.location.replace('/login.html');
    }

}