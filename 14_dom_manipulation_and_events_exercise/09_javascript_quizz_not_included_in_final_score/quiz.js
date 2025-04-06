document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const sections = document.querySelectorAll('.question');
    const resultsDiv = document.getElementById('results');
    const correctAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
    let currentQuestion = 0;
    let rightAnswers = 0;

    sections.forEach((section, index) => {
        const answers = section.querySelectorAll('.quiz-answer');
        answers.forEach(answer => {
            answer.addEventListener('click', () => {
                if (answer.textContent === correctAnswers[index]) {
                    rightAnswers++;
                }
                section.classList.add('hidden');
                currentQuestion++;
                if (currentQuestion < sections.length) {
                    sections[currentQuestion].classList.remove('hidden');
                } else {
                    displayResults();
                }
            });
        });
    });

    function displayResults() {
        let message = '';
        if (rightAnswers === correctAnswers.length) {
            message = 'You are recognized as top JavaScript fan!';
        } else {
            message = `You have ${rightAnswers} right ${rightAnswers === 1 ? 'answer' : 'answers'}`;
        }
        resultsDiv.textContent = message;
    }

    sections.forEach((section, index) => {
        if (index === 0) {
            section.classList.remove('hidden');
        } else {
            section.classList.add('hidden');
        }
    });
}