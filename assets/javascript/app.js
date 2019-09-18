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

// Variables
//Question & Choices variables
let question = document.getElementById(`myQuestion`)
let choice1 = document.getElementById(`choice1`)
let choice2 = document.getElementById(`choice2`)
let choice3 = document.getElementById(`choice3`)
let choice4 = document.getElementById(`choice4`)

// Score at the end of the game variables
let correctA = 0
let wrongA = 0

//Timer variable
let time = 15

let timer = () => {
  // Countdown Timer
  const seconds = setInterval(function () {
    document.getElementById(`myTimer`).innerHTML = time + ` seconds remaining`
    time -= 1;
    if (time <= 0) {
      clearInterval(seconds);
      document.getElementById(`myTimer`).innerHTML = `Times Up!`
    }
  }, 1000);
}

timer()
//First Question
let myQuestion = question.innerHTML = questions[0].question
//Choices
choice1.innerHTML = questions[0].choices[0]
choice2.innerHTML = questions[0].choices[1]
choice3.innerHTML = questions[0].choices[2]
choice4.innerHTML = questions[0].choices[3]

//Answer to question
let answer = questions[0].answer

//If correct button is green, if wrong button is red
let choices = document.querySelectorAll(`.choices`)
for (let x = 0; x < choices.length; x++) {
  choices[x].addEventListener(`click`, () => {
    if (choices[x].value === answer) {
      choices[x].style.backgroundColor = `green`
      choices[x].innerHTML = `Correct!!!`

      correctA++

    } else {
      choices[x].style.backgroundColor = `red`
      choices[x].innerHTML = `WRONG!`

      wrongA++
    }

  })
}

//
// const ask = () => {
//   // Looping through the questions
//   //WOULD IT BE BEST TO USE THE FOREACH METHOD?//
//   for (let i = 0; i < questions.length; i++) {
//     let myQuestion = question.innerHTML = questions[i].question

//     choice1.innerHTML = questions[i].choices[0]
//     choice2.innerHTML = questions[i].choices[1]
//     choice3.innerHTML = questions[i].choices[2]
//     choice4.innerHTML = questions[i].choices[3]

//     let answer = questions[i].answer
//     console.log(myQuestion)
//     console.log(answer)

//     let choices = document.querySelectorAll(`.choices`)
//     //Looping through buttons
//     for (let x = 0; x < choices.length; x++) {
//       choices[x].addEventListener(`click`, () => {

//       })
//     }

//   }
// }

// questions.forEach(ask){

// }
