let msg=document.querySelector(".msg");
let userInput=document.querySelector(".hidden");
let button=document.querySelector(".button")
let gamePlay=false;
let newWord="";
let scrambleWord="";
let gameAudio=new Audio("./sajan.mp3");

let clickAudio=new Audio("./click.mp3");

// 

button.addEventListener("click",function(){
    clickAudio.play();
    
    if(!gamePlay){
        gamePlay=true;
        // gamePlay=!gamePlay;
        button.innerText="Guess";
        newWord=randomword();
        scrambleWord=modify(newWord.split("")).join("");
        // console.log(scrambleWord.join(""));
        msg.innerHTML=scrambleWord;
    }else{
        let user=userInput.value;
    
        if(newWord==user){
            gamePlay=false;
            msg.innerHTML="Congrats YOU Guessed It Right";
            button.innerText="Start Again";

        }else{
            msg.innerHTML=`Wrong Answer for"${scrambleWord}"`;
        }
        userInput.value="";
    }

})


function randomword(){
   let  index=Math.floor(Math.random()*wordList.length);
   console.log(wordList[index]);
   return wordList[index];
}

function modify(arr){
    for(let i=arr.length-1;i>0;i--){
        let temp=arr[i];
        let j=Math.floor(Math.random()*(i+1));

        arr[i]=arr[j];
        arr[j]=temp;
    }
   return arr;
}