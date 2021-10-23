import React from 'react';

const Results = (props) => {

    return (
      <div className="bg-white max-w-xl rounded overflow-hidden shadow-lg flex flex-col items-center justify-center">
                      <div className="font-bold text-3xl text-center px-6 py-4">You scored {props.score} out of {props.questions.length}!</div>
                      <p className="mb-4 text-base">{props.textResult(props.score)}</p>
                      
                       <button class="bg-green-600 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded-full mb-4" onClick={props.reset}>Try Again!</button> 
                      
                      <img className="object-cover h-80 w-screen" src={props.imageResult(props.score)} alt="The decorative GIF reaction to score"  />
                      
        </div> 
    );
  };

export default Results;
