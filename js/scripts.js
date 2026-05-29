let plusButB=document.getElementById("plusButB");
let minButB=document.getElementById("minButB");
let countDisp=document.getElementById("countDisp");

let count=0;

plusButB.addEventListener("click", incCount);

function incCount(){
    for(let i=0;i<1;i++){
        count++;
    }
    countDisp.textContent=count;
}

minButB.addEventListener("click", decCount);

function decCount(){
    for(let i=0;i<1;i++){
        if(count>0){
            count--;
        }
    }
    countDisp.textContent=count;
}

