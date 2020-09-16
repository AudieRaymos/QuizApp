const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById ('question-container')

const shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(()=> Math.random()- .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionContainerElement.innerText = question.question 
    question.answer.forEach(answer => {
        const button = document.createElement ('button')
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
    nextButton.classList.add('hide')
}

function selectAnswer() {
    
}

const question = [
    {
        question: 'what is 2 + 2',
        answers: [
            { text: '4', correct: true }
            { text: '22', correct: false }
        ]
    }
]