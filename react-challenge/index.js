import React from "react"
import ReactDOM from "react-dom"

const date = new Date();
const currentTime = date.getHours();
let greeting;

const customStyle = {
    color : 
}

if(currentTime < 12){
    greeting = "good morning"
}
else if (currentTime < 18){
    greeting = "good afternoon"
}
else 
{
    greeting = "good night"
}

ReactDOM.render(
    <h1 className="heading">{greeting}</h1>

document.getElementByI("root"),
)
