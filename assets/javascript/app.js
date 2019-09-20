// Questions
const questions = [{
  question: `In which video does Michael Jackson play a Zombie?`,
  choices: ['Bad', `Beat It`, `Thriller`, `PYT`],
  answer: `2`
},
{
  question: `Which of these is NOT a Whitney Houston song?`,
  choices: [`I Wanna Dance With Somebody`, `Greatest Love of All`, `Time After Time`, `I Will Always Love You`],
  answer: `2`
},
{
  question: `What Comes Before "...Baby One More Time?"`,
  choices: [`Kiss Me`, `Hold Me`, `Hug Me`, `Hit Me`],
  answer: `3`
},
{
  question: `Complete the Mark Ronson Song title: Uptown...`,
  choices: [`Funk`, `Beat`, `Girl`, `Tunes`],
  answer: `0`
},
{
  question: `What is the song that launched Justin Bieber to stardom?`,
  choices: [`What Do You Mean?`, `Baby`, `Sorry`, `Love Yourself`],
  answer: `1`
}
]

// Score at the end of the game variables
let correctA = 0
let wrongA = 0

//Timer variables
let timeLimit = 10
let timePassed = 0
//Miliseconds between each iteration
let interval = 1000
let questionNum = 0
//This variable stores the interval set for each question
let countDown;

//Shows Game Question
function showQuestion() {
  //Variables
  let question = document.getElementById(`myQuestion`)
  let choice1 = document.getElementById(`choice1`)
  let choice2 = document.getElementById(`choice2`)
  let choice3 = document.getElementById(`choice3`)
  let choice4 = document.getElementById(`choice4`)

  //Display Question
  question.innerHTML = questions[questionNum].question
  //Display Choices
  choice1.innerHTML = questions[questionNum].choices[0]
  choice2.innerHTML = questions[questionNum].choices[1]
  choice3.innerHTML = questions[questionNum].choices[2]
  choice4.innerHTML = questions[questionNum].choices[3]

  //Answer to question
  let answer = questions[questionNum].answer

  //Choices Selects all my choice buttons
  let choices = document.querySelectorAll(`.choices`)
  //Loop through choice buttons
  for (let x = 0; x < choices.length; x++) {
    //Resets styling in case of click of a correct answer
    choices[x].style.backgroundColor = `white`
    choices[x].style.color = `black`
    //When clicking a choice the following executes
    choices[x].addEventListener(`click`, () => {
      if (choices[x].value === answer) {
        choices[x].style.backgroundColor = `green`
        choices[x].getElementsByTagName(`span`)[0].innerHTML = `Correct!!!`
        correctA++
        timePassed = 0
        clearInterval(countDown)
        questionNum++
        setTimeout(initializeQuestion, 2000);
      } else {
        choices[x].style.backgroundColor = `red`
        choices[x].getElementsByTagName(`span`)[0].innerHTML = `WRONG!`
        wrongA++
      }
    })
  }
}

//Counter Functions
const intervalFunction = () => {
  console.log(`new iteration`)
  timePassed = timePassed + interval / 1000;
  document.getElementById(`myTimer`).innerHTML = timeLimit - timePassed + ` seconds remaining`
  if (timePassed >= timeLimit) {
    timesUp()
  }
}

const timesUp = () => {
  document.getElementById(`myTimer`).innerHTML = `Time's Up!`
  timePassed = 0
  clearInterval(countDown)
  let choices = document.querySelectorAll(`.choices`)
  for (let x = 0; x < choices.length; x++) {
    if (choices[x].value === questions[questionNum].answer) {
      choices[x].style.backgroundColor = `green`
    }
  }
  questionNum++
  setTimeout(initializeQuestion, 3000);
}

const initializeQuestion = () => {
  console.log(questionNum)
  showQuestion()
  document.getElementById(`myTimer`).innerHTML = timeLimit - timePassed + ` seconds remaining`
  countDown = setInterval(intervalFunction, interval);
}

initializeQuestion()
