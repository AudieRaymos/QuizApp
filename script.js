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
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionContainerElement.innerText = question.question 
    question.answer.forEach(answer => {
        const button = document.createElement ('button')
    })
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