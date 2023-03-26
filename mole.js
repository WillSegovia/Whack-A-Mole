
const holes = [...document.querySelectorAll('.hole')]
const scoreSpan = document.querySelector('.score span')
const timerSpan = document.querySelector('.timer span')
const sound = new Audio("Homer.mp3")

let score = 0
let timeLeft = 60
let timerId = null

function run() {
    const i = Math.floor(Math.random() * holes.length)
    const hole = holes[i]

    const img = document.createElement('img')
    img.classList.add('mole')
    img.src = "mole.png"

    img.addEventListener('click', () => {
        score++
        scoreSpan.textContent = score
        sound.play()
        clearTimeout(timerId)
        setTimeout(() => {
            hole.removeChild(img)
            run()
        }, 600)
    })

    hole.appendChild(img)

    timerId = setTimeout(() => {
        hole.removeChild(img)
        run()
    }, 1600)
}

const startBtn = document.querySelector('.start-btn')
startBtn.addEventListener('click', () => {
    score = 0
    scoreSpan.textContent = score
    run()

    startBtn.disabled = true;
})
