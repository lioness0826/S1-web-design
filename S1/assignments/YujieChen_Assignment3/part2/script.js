const $ = selector => document.querySelector(selector);

function precessEntry(){
    let input=parseInt($("#input").value);
    if(isNaN(input) || input<0 || input>99){
        alert("Amount must be >=0 and <=99.");
        return;
    };
    makeChange(input);
}

function makeChange(input){
    $("#quarter").value=Math.floor(input/25);
    $("#dime").value=Math.floor(input%25/10);
    $("#nickel").value=Math.floor(input%25%10/5);
    $("#penny").value=Math.floor(input%25%10%5);
}
document.addEventListener('DOMContentLoaded',
   ()=>{$("#calculate").addEventListener('click',precessEntry)});