let plusBut1=document.getElementById("plusBut1");
let minBut1=document.getElementById("minBut1");
let countDisp1=document.getElementById("countDisp1");

let plusBut2=document.getElementById("plusBut2");
let minBut2=document.getElementById("minBut2");
let countDisp2=document.getElementById("countDisp2");


let count1=0;
function incCount1(){
    for(let i=0;i<1;i++){
        count1++;}
    countDisp1.textContent=count1;}

function decCount1(){
    for(let i=0;i<1;i++){
        if(count1>0){
            count1--; } }
    countDisp1.textContent=count1;}

let count2=0;
function incCount2(){
    for(let i=0;i<1;i++){
        count2++;}
    countDisp2.textContent=count2;}

function decCount2(){
    for(let i=0;i<1;i++){
        if(count2>0){
            count2--;}}
    countDisp2.textContent=count2;}











plusBut1.addEventListener("click", incCount1);
minBut1.addEventListener("click", decCount1);

plusBut2.addEventListener("click", incCount2);
minBut2.addEventListener("click", decCount2);
