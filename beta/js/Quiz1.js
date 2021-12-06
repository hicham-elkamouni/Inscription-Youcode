import Candidat from "./classes/Candidat.js";

window.addEventListener('DOMContentLoaded', () => {

        Candidat.CheckAuthentificationCandidat();

        Candidat.getQuise();

        document.getElementById("button2").addEventListener('click',  (e) => {
        
                e.preventDefault();
                Candidat.sendQuise();
        
        })
        
});




