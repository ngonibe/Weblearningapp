const correctAnswers = {
    1: 'a',
    2: 'color',
    3: 'let',
    4: 'cout'
};

let score = 0;
let answered = {};

function checkAnswer(questionNum, answer) {
    if (answered[questionNum]) {
        return;
    }

    answered[questionNum] = true;

    if (answer === correctAnswers[questionNum]) {
        score++;
        document.getElementById('result' + questionNum).textContent = "✅ Correct!";
    } else {
        document.getElementById('result' + questionNum).textContent = "❌ Wrong. Correct answer: " + correctAnswers[questionNum];
    }

    document.getElementById('result').textContent = "Score: " + score + " out of 4";
}