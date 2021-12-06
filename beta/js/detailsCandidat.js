const TestContainer = document.getElementById("testContainer");

const BASE_URL = 'http://localhost:5001/';

const id = new URLSearchParams(window.location.search).get('id');
const dashboardSectionContainer = document.getElementById('dashboardSectionContainer');

let email;

const renderCandidatDetails = async () => {
    const uri = `${BASE_URL}users/${id}`;
    const res = await fetch(uri);
    const candidat = await res.json();

    // get the email of candidat
    email = candidat.email;

    const template =
        `
            <h1>${candidat.firstName}</h1>
            <p>${candidat.lastName}</p>
            <p>${candidat.email}</p>
        `

    dashboardSectionContainer.innerHTML = template;
    console.log(candidat.email);
    fetchTest1();

}

const fetchTest1 = async () => {
    console.log('inside fetch test 1')

    const uri = `${BASE_URL}ReponseQuiz1?email_like=${email}`
    const res = await fetch(uri);
    const results = await res.json();

    fillingTest1Container(results)

}


function fillingTest1Container (arr) {
    let template2 = ``;
    console.warn(arr);
    
    arr.forEach((ar) => {
        
        template2 +=
                `   
                <div>
                    <h1>${ar.score}</h1>
                </div>
                `

    });

    console.log(template2);

    TestContainer.innerHTML = template2;



}

window.addEventListener('load', () => renderCandidatDetails());
