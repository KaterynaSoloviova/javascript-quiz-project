class Quiz {
    constructor(questions, timeLimit, timeRemaining) {
        this.questions = questions;
        this.timeLimit = timeLimit;
        this.timeRemaining = timeRemaining;
        this.correctAnswers = 0;
        this.currentQuestionIndex = 0;
    }

    getQuestion() {
        return this.questions[this.currentQuestionIndex];
    }

    moveToNextQuestion() {
        this.currentQuestionIndex++;
    }

    shuffleQuestions() {
        let j = 0;
        let temp = 0;
        for (let i = this.questions.length - 1; i >= 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = this.questions[i];
            this.questions[i] = this.questions[j];
            this.questions[j] = temp;
        }
    }

    checkAnswer(answer) {
        if (this.questions[this.currentQuestionIndex].answer === answer) {
            this.correctAnswers++;
        }
    }

    hasEnded() {
        if (this.currentQuestionIndex < this.questions.length) {
            return false;
        }
        return true;
    }

    filterQuestionsByDifficulty(difficulty) {
        if (difficulty >= 1 && difficulty <= 3) {
            this.questions = this.questions.filter(function (question) {
                return question.difficulty === difficulty;
            })
        }
    }

    averageDifficulty() {
        const sum = this.questions.reduce(function (acc, question) {
            return acc + question.difficulty
        }, 0);

        return sum/this.questions.length;
    }
}

const q1 = new Question("1*2",[2, 3, 4, 6], 2, 2)
q1.shuffleChoices();

const q2 = new Question("4+2",[7, 8, 4, 6], 6, 2)
q2.shuffleChoices();

const game = new Qiuz([q1, q2], 2, 1)



console.log(q.choices)