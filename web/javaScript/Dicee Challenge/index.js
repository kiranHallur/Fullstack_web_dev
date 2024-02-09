// Generating a random number between 1 to 6 first dice
var randomNumber1=Math.random()*6;
randomNumber1=Math.floor(randomNumber1)+1;
console.log(randomNumber1)


// Use the random number created above to pick out a random dice image between dice1.png to dice6.png
var s="dice"+randomNumber1+".png"
document.getElementsByClassName("img1")[0].setAttribute("src","images/"+s)



// Generating a random number between 1 to 6 for second dice
var randomNumber2=Math.random()*6;
randomNumber2=Math.floor(randomNumber2)+1;
console.log(randomNumber2)


// Use the random number created above to pick out a random dice image between dice1.png to dice6.png
var n="dice"+randomNumber2+".png";
document.getElementsByClassName("img2")[0].setAttribute("src","images/"+n)





if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent="🚩Player 1 wins!";                       
}
else if (randomNumber1<randomNumber2){
    document.querySelector("h1").textContent="Player 2 Wins!🚩" ;    
  }
  else{
    document.querySelector("h1").textContent="It's a draw";
  }