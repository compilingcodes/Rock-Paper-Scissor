let userScore=0;
let compScore=0;

var turns=document.querySelectorAll(".turn");

const draw=()=>{
    console.log('Game was Draw');
    
}

const showWinner=(userWin)=>{
    if(userWin==true){
    console.log('You Won');
}
    else if(userWin==false){
        console.log('Computer Won');
    }
}


const generateComp = ()=>{

    const choices=["stone","paper","scissor"];
    const randomNo=(Math.floor(Math.random()*3));
   return choices[randomNo];

};

const playGame=(userChoice)=>{

      console.log(userChoice, "was clicked ");
  
//Computer choice

const compChoice=generateComp();
 console.log( compChoice, "was clicked by Computer");

 if(userChoice===compChoice)
    draw();

else{
    let userWin=true;

    if(userChoice==="rock " )
      userWin= compChoice==="paper"? false:true;

    else if(userChoice==="paper" )
        userWin= compChoice==="scissor"? false:true;

else(userChoice==="scissor " )
userWin= compChoice==="rock"? false:true;

showWinner(userWin);

}
};


turns.forEach((turn)=>{
    turn.addEventListener("click",()=>{
        const userChoice=turn.getAttribute("id");

        playGame(userChoice);
       
    }
  
    )
   
}
)