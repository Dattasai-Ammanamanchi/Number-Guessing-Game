let guess=document.getElementById("guess");

let output=document.getElementById("outputtext");
let num=[Math.floor(Math.random()*100)];
guess.addEventListener("click",function(){
    let input=document.getElementById("input");
    
    if(num==input.value){
        output.innerHTML=`CONGRATS YOU HAVE GUESSED THE CORRECT NUMBER IS ${num}`
    }
    else if(num<input.value){
        output.innerHTML=`you have aimmed to high`
    }
    else if(num>input.value){
        output.innerHTML=`you have aimmed to low`
    }
})