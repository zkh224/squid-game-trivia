import React, {useState} from 'react';
import questions from './data/data';
import Results from './components/Results';
import Questions from './components/Questions';
import Footer from './components/Footer';

function App() { 
    
const [currentQuestion, setCurrentQuestion] = useState(0); 
    
const [showScore, setShowScore] = useState(false);  
    
const [score, setScore] = useState(0);
    
const resetButton = () => {
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
};
    
const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
        setScore(score + 1);
    }
    
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
    } else {
        setShowScore(true);
    }
    
};
    
function textResult(score) {
    let text;
    
    if (score <= 5) {
        text = 'Too bad you are eliminated.';
    } else if (score < 15) {
        text = 'You are lucky that you are spared!';
    } else {
        text = 'You pass the game!';
    }
    
    return text;
};
    
function imageResult(score) {
    let url;
    
    if (score <= 5) {
        url = 'https://media.giphy.com/media/yHEu9sPsWveuW4vG7G/giphy.gif';
    } else if (score < 15) {
        url = 'https://media.giphy.com/media/PAqjdPkJLDsmBRSYUp/giphy.gif';
    } else {
        url = 'https://media.giphy.com/media/MaXYVi4y8xqcFeotvt/giphy.gif';
    }
    
    return url;
};
    
    
  return (
      

          <body className='min-h-screen bg-blue-100 relative'>
              
                <h1 className="text-2xl font-bold font-mono text-center pt-3">Squid Game Trivia Quiz</h1>
                  
              <div className="px-8 pt-6 pb-10 flex flex-col items-center justify-center">
                  {showScore ? (
                  
                  <Results
                      score={score}
                      reset={resetButton}
                      questions={questions}
                      textResult={textResult}
                      imageResult={imageResult}
                    />

                  
                      ) : (
                    
                  
                  <Questions 
                      questions={questions}
                      currentQuestion={currentQuestion}
                      handleAnswerButtonClick={handleAnswerButtonClick} 
                      />
                          
                        )} 
                  
                    <Footer />
                  
                </div>
                     
              
                 
              </body>
          
      
      
  );
}

export default App;
