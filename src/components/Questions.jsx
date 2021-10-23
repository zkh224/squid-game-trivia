import React from 'react';

const Questions = (props) => {
    return (
        <div className="bg-white max-w-xl rounded overflow-hidden shadow-lg">
            <figure class="relative">
            <img className="object-cover h-80 w-screen" src={props.questions[props.currentQuestion].imageURL}  />
                <figcaption class="absolute bottom-1 right-2 text-xs text-white text-opacity-70"><p className="italic">{props.questions[props.currentQuestion].imageSource}</p> </figcaption>
            </figure>
            
                    <div className="px-6 py-4">
                            <div className="font-semibold text-gray-700 text-xl mb-1">Question {props.currentQuestion +1}/{props.questions.length}</div>
                            <div className="font-bold text-3xl mb-6">{props.questions[props.currentQuestion].questionText}</div>
                            <div className="space-y-4 mb-2">
                                  {props.questions[props.currentQuestion].answerOptions.map((answerOptions) => (
                                      <button onClick={ () => props.handleAnswerButtonClick(answerOptions.isCorrect)} className="w-full py-2 text-white bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-500 text-left pl-4">{answerOptions.answerText}</button>
                                  ))}

                            </div>
                    </div>
        </div> 
    );
};

export default Questions

//max-w-sm md:max-w-xl