const quizdb=[
{
        question:"Q1: What is the sum of 4 and 8?",
        a:"12",
        b:"17",
        c:"23",
        d:"03",
        ans:"ans1"
    }  ,
{
        question:"Q2: What is the sum of 5 and 2?",
        a:"12",
        b:"07",
        c:"23",
        d:"03",
        ans:"ans2"
    }   ,
{
        question:"Q3: What is the sum of 1 and 8?",
        a:"12",
        b:"17",
        c:"23",
        d:"09",
        ans:"ans4"
    }   ,
{
        question:"Q4: What is the sum of 5 and 8?",
        a:"12",
        b:"13",
        c:"23",
        d:"03",
        ans:"ans2"
    }
];


const question =document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit=document.querySelector('#submit');
const answers=document.querySelectorAll('.answer');
const showscores=document.querySelector('#showscores');

let questionCount = 0;
let score=0;

const loadquestion=() =>{
    const questionlist= quizdb[questionCount];
    question.innerHTML = questionlist.question;
    option1.innerHTML=  questionlist.a; 
    option2.innerHTML=  questionlist.b;
    option3.innerHTML=  questionlist.c;
    option4.innerHTML=  questionlist.d;

}
loadquestion();

const getCheckAnswer=() =>{
    let answer;
    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer=curAnsElem.id;
        }
    }); 
    return answer;
};

const deselectAll = () =>  {
    answers.forEach((curanselem) => curanselem.checkd = false);
}

submit.addEventListener('click',() =>{
    const checkedanswer=getCheckAnswer();
    console.log(checkedanswer); 
if(checkedanswer === quizdb[questionCount].ans){
    score++;
};
questionCount++;
deselectAll();
    if(questionCount< quizdb.length){
        loadquestion();    
    }
    else{
        showscores.innerHTML = `<h3>Your Score ${score}/${quizdb.length} :)</h3>
        <button class="btn" onclick="location.reload()">Play Again</button>
        `;
        showscores.classList.remove ('.scoreareas');
    }


});
