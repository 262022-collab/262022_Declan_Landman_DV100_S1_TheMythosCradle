let plusBut1=document.getElementById("plusBut1");
let minBut1=document.getElementById("minBut1");
let countDisp1=document.getElementById("countDisp1");


let count=0;

plusBut1.addEventListener("click", incCount);

function incCount(){
    for(let i=0;i<1;i++){
        count++;
    }
    countDisp1.textContent=count;
}

minBut1.addEventListener("click", decCount);

function decCount(){
    for(let i=0;i<1;i++){
        if(count>0){
            count--;
        }
    }
    countDisp1.textContent=count;
}

