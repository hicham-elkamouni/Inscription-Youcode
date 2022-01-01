import Candidat from "./classes/Candidat.js";


window.addEventListener('DOMContentLoaded', (e) => {
    
    Candidat.CheckAuthentificationCandidat();
    Candidat.getQuestionTestDeMotivation();

      document.getElementById("button2").addEventListener('click',  (e) => {

        e.preventDefault();
        

        Candidat.sendTestMotivation();

        window.location.replace('/TestTechnique.html');

        
        })
  
});