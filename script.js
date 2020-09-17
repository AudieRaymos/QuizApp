const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Who was the last King of France?',
    answers: [
      { text: 'Louis XVI', correct: true },
      { text: 'Charles X', correct: false },
      { text: 'Henry IV', correct: true },
      { text: 'Louis XV', correct: true },
    ]
  },
  {
    question: 'Who killed Alexander Hamilton?',
    answers: [
      { text: 'Aaron Burr', correct: true },
      { text: 'Thomas Jefferson', correct: false },
      { text: 'James Madison', correct: false },
      { text: 'King George', correct: false }
    ]
  },
  {
    question: 'Who was King of England from 1509 - 1547?',
    answers: [
      { text: 'King Edward II', correct: false },
      { text: 'King Henry VIII', correct: true },
      { text: 'King Alfred', correct: false },
      { text: 'King James VI', correct: false }
    ]
  },
  {
    question: 'What event ended the 100 years war?',
    answers: [
      { text: 'Death of Philip VI', correct: false },
      { text: 'Treaty of Paris', correct: true },
      { text: 'Battle of Agincourt', correct: false },
    ]
  }
]