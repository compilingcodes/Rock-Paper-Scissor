let userScore=0;
let compScore=0;

var turns=document.querySelectorAll(".turn");
var msgcont =document.querySelector("#msg-container");
var msg =document.querySelector("#msg");

var userScr=document.querySelector("#user-score");
var compScr=document.querySelector("#comp-score");

const draw=()=>{
    console.log('Game was Draw');

    msg.style.backgroundColor= "black"; 
    msg.style.color= "white"; 

     msg.innerHTML="Game was Draw";

}

const showWinner=(userWin)=>{
    if(userWin){
        userScore++;
userScr.innerHTML=userScore;
    console.log('You Won');

   
   

    msg.style.backgroundColor= "green"; 
    msg.style.color= "gold"; 

     msg.innerHTML="Player Has Won";


}

    else {

        compScore++;
        compScr.innerHTML=compScore;
        
             console.log('Computer Won');

        msg.style.backgroundColor= "red"; 
        msg.style.color= "black"; 
    
         msg.innerHTML="Computer Has Won";
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

    if(userChoice== "stone" ){
      userWin= compChoice=="paper"? false : true;
    }

    else if(userChoice=="paper" ){
        userWin= compChoice=="scissor"? false : true;
    }


else{
userWin= compChoice=="stone"? false:true;
}

showWinner(userWin);

}
};


turns.forEach((turn) =>{
    turn.addEventListener("click",()=>{
        const userChoice=turn.getAttribute("id");

        playGame(userChoice);
       
    }
  
    )
   
}
)