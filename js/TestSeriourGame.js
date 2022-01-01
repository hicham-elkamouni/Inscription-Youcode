import Candidat from "./classes/Candidat.js";

window.addEventListener("DOMContentLoaded", () => {
  Candidat.CheckAuthentificationCandidat();

  Candidat.getQuestionSeriousGame();

  document.getElementById("button2").addEventListener("click", (e) => {
    e.preventDefault();

    let questionSeriousGame = document.getElementById(
      "question-serious-game"
    ).innerHTML;
    let reponseSeroiusGame = document.getElementById(
      "reponse-seroius-game"
    ).value;
    let RegexExpression = document.getElementById("regex-expression");

    Candidat.sendTestSeriousGame(questionSeriousGame, reponseSeroiusGame);

    window.location.replace("/TestAdministration.html");
  });
});
