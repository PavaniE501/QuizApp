import React from "react";
import { Link } from "react-router-dom";

function HomePage(){
    return(
        <div className="home">
            <h1>Welcome to the Quiz App</h1>
            <Link to="/quiz">Start Quiz</Link>
        </div>
    )
}

export default HomePage