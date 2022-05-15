import React from "react";
import ReactDOM from "react-dom";
import Heading from "./Heading";

const date = new Date();
const currentTime = date.getHours();
let greeting;

const customStyle = {
    color : green
}

if(currentTime < 12){
    greeting = "good morning";
}
else if (currentTime < 18){
    greeting = "good afternoon";
}
else 
{
    greeting = "good night";
}

ReactDOM.render(
    // <h1 className="heading">{greeting}</h1>
    <div>
        <Heading />
    </div>

document.getElementByI("root"),
)
