for(var i=0; i<document.querySelectorAll(".drum").length; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
    
    

}
function handleClick(){
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
    }