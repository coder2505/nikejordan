var h1First = document.querySelector(".GreatnessText").textContent;
var h1Second = document.querySelector(".GreatnessText2").textContent;

var splitText = h1First.split("");
var splitText2 = h1Second.split("");


var innerHtml ="";
var innerHtml2 = "";


splitText.forEach((v)=>{

    if(v!=' ')innerHtml += `<span style="display:inline-block;">${v}</span>`;
    else innerHtml += `<span style="">${v}</span>`

})


splitText2.forEach((v)=>{

    if(v!=' ')innerHtml2 += `<span style="display:inline-block;">${v}</span>`;
    else innerHtml2 += `<span style="">${v}</span>`

})


document.querySelector(".GreatnessText").innerHTML = innerHtml;
document.querySelector(".GreatnessText2").innerHTML = innerHtml2;
