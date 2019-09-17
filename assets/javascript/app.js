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

let score = 0
let time = 10

let seconds = setInterval(function () {
  document.getElementById(`countdown`).innerHTML = timeleft + ` seconds remaining`
  timeleft -= 1;
  if (timeleft <= 0) {
    clearInterval(downloadTimer);
    document.getElementById(`countdown`).innerHTML = `Time's Up!`
  }
}, 1000);

document.getElementById(`myTimer`).innerHTML = seconds

const ask = () => {
  for (let i = 0; i < questions.length; i++) {
    let question = document.getElementById(`myQuestion`).innerHTML = questions[i].question
    let choice1 = document.getElementById(`choice1`).innerHTML = questions[i].choices[0]
    let choice2 = document.getElementById(`choice2`).innerHTML = questions[i].choices[1]
    let choice3 = document.getElementById(`choice3`).innerHTML = questions[i].choices[2]
    let choice4 = document.getElementById(`choice4`).innerHTML = questions[i].choices[3]

  }
}
ask()




