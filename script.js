
let boxes=document.body.querySelectorAll(".box")
let turnO=true;
let resetButton=document.body.querySelector(".resetBtn");

let newGame=document.body.querySelector(".newGame");
let winnerMessage=document.body.querySelector(".winner");
let winnerMessageContainer=document.querySelector(".showWinner");

let drawMessageContainer=document.querySelector(".showDrawMessage");

let drawMessage=document.querySelector(".drawMessage");
let newDrawBtn=document.querySelector(".newGameDraw");


let patterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

newDrawBtn.addEventListener("click",()=>{

    for(let box of boxes){
        box.innerText="";
        enableButton();

    }
    drawMessageContainer.classList.add("hide2");
    count=0;



})






boxes.forEach((box)=>{
    box.addEventListener("click",()=>{

        console.log("box was clicked");
        if(turnO==true){
            box.innerText="O";
            turnO=false;
            

        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
     

        if(checkWinner()){
             return;    
        }
        showDraw();
    })
   
})


newGame.addEventListener("click",()=>{
    for(let box of boxes){
        box.innerText="";
        enableButton();

    }
    winnerMessageContainer.classList.add("hide")
    count=0;



})

resetButton.addEventListener("click",()=>{
    for(let box of boxes){
        box.innerText="";
        enableButton();
    }
    turnO=true;
    winnerMessageContainer.classList.add("hide")
    count=0;
    drawMessageContainer.classList.add("hide2")
    

})


const showWinner=(winner)=>{
    winnerMessageContainer.classList.remove("hide")
    winnerMessage.innerText=`Congralutation the winner is ${winner}`;

    drawMessageContainer.classList.add("hide2");

}









const enableButton=()=>{
    for(let box of boxes){
        box.disabled=false;
    }

}


const disableBox=()=>{
    // box ma button auxha sabai one by one
    for(let box of boxes){

        box.disabled=true;
    }
}







let count=0;


const showDraw=()=>{
   
    if(count===9 && checkWinner()===false){
        drawMessageContainer.classList.remove("hide2")
        drawMessage.innerText=`It's a Draw`;
        
        
    }
    console.log("draw",count);
}





const checkWinner=()=>{


    for(let pattern of patterns){
  

    

        // let pos1=boxes[pattern[0]].innerText;
        // let pos2=boxes[pattern[1]].innerText;
        // let pos3=boxes[pattern[2]].innerText;

        //boxes wala array ko bhitra yo index ma jau 
        // and check the winning patterns value (innerText) 
        //if it match or not
        let pos1=(boxes[pattern[0]].innerText); 
        let pos2=(boxes[pattern[1]].innerText);
        let pos3=(boxes[pattern[2]].innerText);
        
        
        if(pos1 !=""&&pos2 !=""&&pos3 !=""){
            if(pos1==pos2 && pos2==pos3){
                console.log("winner is",pos1)
                disableBox();
                showWinner(pos1);
                
                return true;
            
                
            }

   
            

        }
       

    }
    count++;
    console.log("clickCount",count);
    return false;
    
 
   

}











