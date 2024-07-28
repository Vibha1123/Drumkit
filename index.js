

for(var i=0;i<=6;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",handleclick);

function handleclick(){
   
    var buttonhtml = this.innerHTML;
    makesound(buttonhtml);
    Animation(buttonhtml);
    }
}

document.addEventListener("keydown",function(event){
    makesound(event.key);
    Animation(event.key);
})

function makesound(key){
    switch(key)
    {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a" :
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();  
            break; 
        case "s" :
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break; 
        case "d" :
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();  
            break;     
        case "j" :
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k" :
            var audio = new Audio("sounds/crash.mp3");
            audio.play(); 
            break;
        case "l" :
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();  
            break;
    }
}

function Animation(key){
    var anibutton = document.querySelector("."+key);
    anibutton.classList.add("pressed");

    setTimeout(function(){
        anibutton.classList.remove("pressed");
    },100)
}
