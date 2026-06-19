let btn=document.getElementById("btn");
btn.addEventListener("click",showBox);
function showBox(){
    let box=document.createElement("div");
    box.style.width="8cm";
    box.style.height="3cm";
    box.style.backgroundColor="blue";
    document.body.appendChild(box);
}