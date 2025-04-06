const button= document.querySelector("button");
const div= document.querySelector(".sp");
let prev=-1, random_index;
button.addEventListener('click',()=>{
    do{
         random_index=Math.floor(Math.random()*quotes.length);
    }
    while(prev===random_index);
    prev=random_index;
    div.style.display='block'; 
    div.innerHTML=quotes[random_index];
})

const quotes=['Quote#1', 'Quote#2', 'Quote#3', 'Quote#4', 'Quote#5', 'Quote#6', 'Quote#7', 'Quote#8']