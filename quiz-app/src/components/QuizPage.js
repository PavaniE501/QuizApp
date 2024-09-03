
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function QuizPage() {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);

    useEffect(() => {
        async function fetchQuestions() {
            try {
                const response = await axios.get('http://localhost:5000/api/questions');
                setQuestions(response.data.results);
            } catch (error) {
                console.error('Error fetching questions:', error);
            }
        }

        fetchQuestions();
    }, []);

    const handleAnswer = (isCorrect) => {
        if (isCorrect) setScore(score + 1);
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            alert(`Quiz finished! Your score: ${score}/${questions.length}`);
        }
    };

    if (questions.length === 0) return <div>Loading...</div>;

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div className="quiz">
            <h2>{currentQuestion.question}</h2>
            {currentQuestion.incorrect_answers.concat(currentQuestion.correct_answer).sort().map((answer, index) => (
                <button key={index} onClick={() => handleAnswer(answer === currentQuestion.correct_answer)}>
                    {answer}
                </button>
            ))}
        </div>
    );
}

export default QuizPage;
