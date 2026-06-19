const Btn=document.getElementById("Btn");
Btn.addEventListener("click",function(){
    const box=document.createElement("div");
    box.style.width="8cm";
    box.style.height="1cm";
    box.style.border="1px solid black";
    box.style.margintop="10px";
    box.style.padding="4px";
    box.style.marginleft="10px";
    box.style.marginbottom="10px";


    const text=document.createTextNode("You clicked the button!");
    const resetBtn=document.createElement("button");
    resetBtn.textContent="Reset";
    resetBtn.addEventListener("click",function(){
        box.remove();
    });
    box.appendChild(text);
    box.appendChild(resetBtn);
    document.body.appendChild(box);
});

