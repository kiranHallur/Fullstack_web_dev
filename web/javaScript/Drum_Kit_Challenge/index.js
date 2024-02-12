//acess the audio when we click on the image
var n=document.querySelectorAll(".drum")
for( i=0; i<n.length; i++){
    n[i].addEventListener("click", function (){    
        var inHTML=this.innerHTML;    
        sound(inHTML);
        addAnimation(inHTML);
    });
}


//acessing from the keyboard
document.addEventListener("keydown", function(event){
        var htm=event.key;
        sound(htm);
        addAnimation(htm);
})


//animation for after  clicking or pressing a key
function addAnimation(currKey){
    var active=document.querySelector("."+currKey)
    active.classList.add("pressed");

    setTimeout(() => {
        active.classList.remove("pressed"); 
    }, 100);
}

//created a function with new Audio() object and played it and this is accessed both  by clicking an image and pressing a key
function sound(tree){
    switch(tree) {
        case 'w':
            var crash=new  Audio("sounds/crash.mp3")
            crash.play()
            break;
        case 'a':
            var kick=new  Audio("sounds/kick-bass.mp3")
            kick.play()
            break;
        case 's':
            var snare=new  Audio("sounds/snare.mp3")
            snare.play()
            break;
        case 'd':
            var tom1=new  Audio("sounds/tom-1.mp3")
            tom1.play()
            break;
        case 'j':
            var tom2=new  Audio("sounds/tom-2.mp3")
            tom2.play()
            break;
        case 'k':
            var tom3=new  Audio("sounds/tom-3.mp3")
            tom3.play()
            break;
        case 'l':
            var tom4=new  Audio("sounds/tom-4.mp3")
            tom4.play()
            break;
    
        default:console.log(htm)
            break;
    }

}



