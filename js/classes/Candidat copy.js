import User from './User.js'

export default class Candidat extends User{
    password;
    state = false;
    allQuises
    questionsTestAdministrartion
    questionTestMotivation
    questionTechnique
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

    }

          static getQuise = async () => {

            const container = document.querySelector('.container');


            let uri = 'http://localhost:5001/quiz1';

            const res = await fetch(uri);
            const quises = await res.json();

            this.allQuises=quises;
            let template = '';
            let choix = '';
            let c = 0;
            quises.forEach(quise => {

                template += `
          <div class="content-quise">

      
          <div class="question-quise ">
          <p> ${quise.question}</p>
          </div>

          <form class="select-quise question${c}">
          </form>
              
      <div>
          `

            c++;
            });
            container.innerHTML = template;
            c = 0;
            quises.forEach(quise => {

          console.log()
              for(let i=0;i<quise.choix.length;i++){


      choix += ` 
                      <label class="container-select">
                      ${quise.choix[i]}
                      <input class="checked${c} "type="checkbox" value=${quise.correct[i]}  />
                      <span class="checkmark"></span>
                    </label> 
                  `; 
              }
              
                document.querySelector(".question" + c).innerHTML = choix;
                choix = ``;
                c++;
            })
        }
      static sendQuise= async()=>{
        var checkedValue
        var reponses=[];

        for(let q=0;q<this.allQuises.length;q++){

          checkedValue=document.querySelector(".checked"+q+":checked").value ;
          reponses.push(checkedValue);
        }
        console.log(reponses);

        var points=0;

        for(let q=0;q<reponses.length;q++){
          console.log(reponses[q])
          if(reponses[q] == 1){

            points+=1/this.allQuises.length;
          }
          console.log(points);
        }
        var status;

        if(points!=1){
            status ="invalide"
        }else{
          status ="valide"
        }

        const data = {
          email: "rafik.coding@gmail.com",
          score:points,
          status:status
        }

      const res =   fetch('http://localhost:5001/ReponseQuiz1', {
          method: 'POST', 
          body: JSON.stringify(data),
          headers: { 'Content-Type': 'application/json' }
        })

        if(points==1){
          // stoke resultat du test en ligne du

          Swal.fire({
            title: 'Oops  vous Être admis pour passer à la deuxiéme test',
            text: 'Vous Être répondre  sur  '+points*this.allQuises.length+"/"+this.allQuises.length +"  de questions",
            position: 'center',
            icon: 'success',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Ok'
          }).then((result) => {
            if (result.isConfirmed) {
          window.location.replace('/TestSeriourGame.html');
        }
          })

        }
        else{
          Swal.fire({
            title: 'Oops  vous Être pas admis pour passer à la deuxiéme test',
            text: 'Vous Être répondre seulement sur  '+points*this.allQuises.length+"/"+this.allQuises.length +"  de questions",
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Ok'
          }).then((result) => {
            if (result.isConfirmed) {
                    window.location.replace('/PageLogin.html');
                    // clear session and change his to true (passed)
            }
          })
        } 
      }

      static getQuestionTestAdministration=async () => {

        const container = document.querySelector('.container');


        let uri = 'http://localhost:5001/QuestionTestAdministration';

        const res = await fetch(uri);
        const questions = await res.json();
        console.log(questions);
        let template = '';

        this.questionsTestAdministrartion=questions;

        template=`
        <p>Repondre Aux Questions Suivante</p>

        `;
        
        questions.forEach((question,index) => {

            template += `

            <div class="content-question-motivation">
            <p> ${index+1}) ${question.question}</p>

            <textarea id="reponse${index}" name="" rows="5" cols="30" maxlength="300"> </textarea>
          </div>

      `
        });
        container.innerHTML = template;
        

      }
      static getQuestionSeriousGame=async () => {

        const container = document.querySelector('.container');


        let uri = 'http://localhost:5001/QuestionSeriousGame';

        const res = await fetch(uri);
        const question = await res.json();
        console.log(question);
        let template = '';
            template += `

            <p id="question-serious-game">
        ${question[0].question}
          </p>

          <div class="presentation">
            <label style="margin-top: 10px" for="prentation"
              >Ecrit la présentation Ici maximum 500 alphabtes :
            </label>

            <textarea
              id="reponse-seroius-game"
              name="prentation"
              rows="8"
              cols="55"
              maxlength="500"
            >
            </textarea>
            <p style="color:red ; font-size:16px" id="regex-expression"></p>
          </div>
            
            `

          

        container.innerHTML = template;
        

      }
      static getQuestionTestDeMotivation=async () => {

        const container = document.querySelector('.container');


        let uri = 'http://localhost:5001/QuestionTestMotivation';

        const res = await fetch(uri);
        const question = await res.json();
        console.log(question);
        this.questionTestMotivation=question[0].question;
        let template = '';

        template=`
        <p>Repondre A La  Question Suivante</p>

        `;
        
            template += `

            <div class="content-question-motivation">
            <p>  ${question[0].question}</p>

            <textarea id="reponse1" name="" rows="5" cols="30" maxlength="300"> </textarea>
            <p id="regex-expression" style="color:red"></p>
          </div>

      `

        container.innerHTML = template;


      }

      static getQuestionTestTechnique=async () => {
        

        const container = document.querySelector('.container');


        let uri = 'http://localhost:5001/QuestionTestTechnique';

        const res = await fetch(uri);
        const question = await res.json();
        this.questionTechnique=question[0].question;
        console.log(question);

        document.getElementById("code-javascript").innerHTML=  question[0].code;
        let template = '';

      
        
            template += `
            <p>Repondre A La  Question Suivante</p>


            <div class="content-question-motivation">
            <p>  ${question[0].question}</p>


            </div>
          </div>

      `

        container.innerHTML = template;


      }

      static sendTestSeriousGame=async (question,reponse)=>{

        const data = {
          email: "rafik.coding@gmail.com",
          question:question,
          reponse:reponse
        }

      const res =   fetch('http://localhost:5001/ReponsesSeriousGame', {
          method: 'POST', 
          body: JSON.stringify(data),
          headers: { 'Content-Type': 'application/json' }
        })

      }

      static sendTestAdministration=async ()=>{
        
        const data={
          email: 'test@rafikcoding.com',
          reponses:[]
        }

        this.questionsTestAdministrartion.forEach((question,index)=>{

            data.reponses.push({
              question: question.question,
              reponse:document.getElementById("reponse"+index).value
            });
        })


      const res =   fetch('http://localhost:5001/ReponsesTestAdministration', {
          method: 'POST', 
          body: JSON.stringify(data),
          headers: { 'Content-Type': 'application/json' }
        })

      }
      static sendTestMotivation=async ()=>{
        
        const data={
          email: 'test@rafikcoding.com',
          reponses:[
            {      
                question:this.questionTestMotivation,
                reponse:document.getElementById("reponse1").value
            }
          ]
        }
      const res =   fetch('http://localhost:5001/ReponsesTestMotivation', {
          method: 'POST', 
          body: JSON.stringify(data),
          headers: { 'Content-Type': 'application/json' }
        })
      }
      static sendTestTechnique=async ()=>{
        
        const data={
          email: 'test@rafikcoding.com',   
        question:this.questionTechnique,
        code:document.getElementById("code-javascript").innerHTML,
        reponse:document.getElementById("result-test-technique").value
        
        }

      const res =   fetch('http://localhost:5001/ReponseTestTechnique', {
          method: 'POST', 
          body: JSON.stringify(data),
          headers: { 'Content-Type': 'application/json' }
        })

        Swal.fire({
          title: '  vous Être  Passer les quatres tests',
          text: "attendre le résultat des tests que vous devez le reçu à votre boite email",
          position: 'center',
          icon: 'success',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Ok'
        }).then((result) => {
          if (result.isConfirmed) {

        // candidat finish the test => clear session and set his state to true(passed) redirect him to login 
        window.location.replace('/PageLogin.html');
      }
        })

      }

      static CheckAuthentificationCandidat=async ()=>{

        var email = sessionStorage.getItem('username');

        let uri = 'http://localhost:5001/users?email='+email;

        const res = await fetch(uri);
        const candidat = await res.json();
        console.log(candidat);
        if( !candidat.length==1 ||!candidat[0].email===email || candidat[0].state==true){

                window.location.replace('/PageLogin.html');
        }


      }


    }

