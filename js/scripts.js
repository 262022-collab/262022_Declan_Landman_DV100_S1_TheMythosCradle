let plusBut1=document.getElementById("plusBut1");
let minBut1=document.getElementById("minBut1");
let countDisp1=document.getElementById("countDisp1");

let plusBut2=document.getElementById("plusBut2");
let minBut2=document.getElementById("minBut2");
let countDisp2=document.getElementById("countDisp2");

let plusBut3=document.getElementById("plusBut3");
let minBut3=document.getElementById("minBut3");
let countDisp3=document.getElementById("countDisp3");

let plusBut4=document.getElementById("plusBut4");
let minBut4=document.getElementById("minBut4");
let countDisp4=document.getElementById("countDisp4");

let plusBut5=document.getElementById("plusBut5");
let minBut5=document.getElementById("minBut5");
let countDisp5=document.getElementById("countDisp5");

let plusBut6=document.getElementById("plusBut6");
let minBut6=document.getElementById("minBut6");
let countDisp6=document.getElementById("countDisp6");


let [count1,count2,count3,count4,count5,count6]=[0,0,0,0,0,0];

function incCount1(){
    for(let i=0;i<1;i++){
        count1++;}
    countDisp1.textContent=count1;}

function decCount1(){
    for(let i=0;i<1;i++){
        if(count1>0){
            count1--; } }
    countDisp1.textContent=count1;}


function incCount2(){
    for(let i=0;i<1;i++){
        count2++;}
    countDisp2.textContent=count2;}

function decCount2(){
    for(let i=0;i<1;i++){
        if(count2>0){
            count2--;}}
    countDisp2.textContent=count2;}

    
function incCount3(){
    for(let i=0;i<1;i++){
        count3++;}
    countDisp3.textContent=count3;}

function decCount3(){
    for(let i=0;i<1;i++){
        if(count3>0){
            count3--;}}
    countDisp3.textContent=count3;}

    function incCount4(){
    for(let i=0;i<1;i++){
        count4++;}
    countDisp4.textContent=count4;}

function decCount4(){
    for(let i=0;i<1;i++){
        if(count4>0){
            count4--;}}
    countDisp4.textContent=count4;}

     function incCount5(){
    for(let i=0;i<1;i++){
        count5++;}
    countDisp5.textContent=count5;}

function decCount5(){
    for(let i=0;i<1;i++){
        if(count5>0){
            count5--;}}
    countDisp5.textContent=count5;}

     function incCount6(){
    for(let i=0;i<1;i++){
        count6++;}
    countDisp6.textContent=count6;}

function decCount6(){
    for(let i=0;i<1;i++){
        if(count6>0){
            count6--;}}
    countDisp6.textContent=count6;}


plusBut1.addEventListener("click", incCount1);
minBut1.addEventListener("click", decCount1);

plusBut2.addEventListener("click", incCount2);
minBut2.addEventListener("click", decCount2);

plusBut3.addEventListener("click", incCount3);
minBut3.addEventListener("click", decCount3);

plusBut4.addEventListener("click", incCount4);
minBut4.addEventListener("click", decCount4);

plusBut5.addEventListener("click", incCount5);
minBut5.addEventListener("click", decCount5);

plusBut6.addEventListener("click", incCount6);
minBut6.addEventListener("click", decCount6);

let priceTot=document.getElementById("priceTot");

let cradData=[];

let savedCrad=sessionStorage.getItem("cradData");
if(savedCrad){
    cradData=JSON.parse(savedCrad);
}




let viewCrad=document.getElementById("viewCrad");
let cradPop=document.getElementById("cradPop");
let closePop=document.getElementById("closePop");
let cradItem=document.getElementById("cradItem");
let add1=document.getElementById("add1");
let add2=document.getElementById("add2");
let add3=document.getElementById("add3");
let add4=document.getElementById("add4");
let add5=document.getElementById("add5");
let add6=document.getElementById("add6");
let cradBadge=document.getElementById("cradBadge");
let butBadge=document.getElementById("butBadge");
let cart=document.getElementById("cart");
revealCrad();


viewCrad.addEventListener("click", function(){
    cradPop.style.display="block";
});

cart.addEventListener("click", function(){
    cradPop.style.display="block";
});

closePop.addEventListener("click", function(){
    cradPop.style.display="none";
});



function addPet(name,price,count){
    if(count===0){
        return;
    }

    for(let i=0;i<cradData.length;i++){
        if(cradData[i].name===name){
            cradData[i].quan=count;
            revealCrad();
            return;
        }
    }

    cradData.push({
        name:name,
        price:price,
        quan:count
    });

    revealCrad();
    }

    function revealCrad(){
        cradItem.innerHTML="";
        let tot=0;

        for(let i=0;i<cradData.length;i++){
            let pet=cradData[i];
            tot=tot+(pet.price*pet.quan);
            let item=document.createElement('div');
            item.className="cradPet";

            item.innerHTML=`
            <p>${pet.name}</p>
            <div class="popCount">
            <button onclick="decPop(${i})">-</button>
            <span>${pet.quan}</span>
            <button onclick="incPop(${i})">+</button>
            </div>
            <p>R${pet.price}</p>
            <button onclick="delPet(${i})">Del</button>
            `;
            cradItem.appendChild(item);
        
        }
        priceTot.textContent="R"+tot;
        upBadge();

        sessionStorage.setItem(
            "cradData",
            JSON.stringify(cradData)
        );
    }

    function upBadge(){
        let totPet=0;
        for(let i=0;i<cradData.length;i++){
            totPet+=cradData[i].quan;
        }
        cradBadge.textContent=totPet;
        butBadge.textContent=totPet;
    }

    function incPop(index){
        cradData[index].quan++;

        revealCrad();
    }

    function decPop(index){
        if(cradData[index].quan>1){
            cradData[index].quan--;
        }
        else{
            cradData.splice(index,1);
        }
        

        revealCrad();
    }


    function delPet(index){

        let ans=confirm(
            "Are you sure you want to remove this creature from your cradle? :("
        );
        if(ans){
            cradData.splice(index,1);
            revealCrad();
        }

    }







    
   



add1.addEventListener("click",function(){
    addPet(
        "Azuron",
        "2500",
        count1
    );
});

add2.addEventListener("click",function(){
    addPet(
        "Yuki",
        "4500",
        count2
    );
});

add3.addEventListener("click",function(){
    addPet(
        "Aurelia",
        "6500",
        count3
    );
});

add4.addEventListener("click",function(){
    addPet(
        "Lumina",
        "40000",
        count4
    );
});

add5.addEventListener("click",function(){
    addPet(
        "Starwind",
        "5000",
        count5
    );
});

add6.addEventListener("click",function(){
    addPet(
        "Briar",
        "3500",
        count6
    );
});