import Candidat from "./classes/Candidat.js";


window.addEventListener('DOMContentLoaded', (e) => {

  Candidat.CheckAuthentificationCandidat();

    
    Candidat.getQuestionTestTechnique();

      document.getElementById("button2").addEventListener('click',  (e) => {

        e.preventDefault();

        Candidat.sendTestTechnique();


        
        })
  
});