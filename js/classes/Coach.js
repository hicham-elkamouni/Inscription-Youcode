const BASE_URL = 'http://localhost:5001/';
const dashboardSectionContainer = document.getElementById('dashboardSectionContainer');

export default class Coach {
    email = "coach@gmail.com"
    password = "coach123"

    static getAllCandidates = async () => {

        const uri = `${BASE_URL}users`;
        const res = await fetch(uri)
        const users = await res.json()

        console.log(users);

        let template = ``;

        users.forEach((user) => {
            template += `
            <div class="dashboard-section">
                    <h3 class="dashboard-section-title">HEY <span class="styled-title">${user.firstName + ' ' + user.lastName}</span> !</h3>
                    <a href="/detailsCandidat.html?id=${user.id}">read more...</a>
                    <button class="download-btn"><img src="./downloading.png" alt="donwload_button"></button>
                </div>
            `
          })

        console.log(template);

        dashboardSectionContainer.innerHTML = template;
        } // end of getAllCandidats 


}// end of coach class
