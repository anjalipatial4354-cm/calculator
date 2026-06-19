let doc=document;
let btn = document.querySelector("#btn");
btn.addEventListener("click", function () {
let a =doc.querySelectorAll("#box h1");

   for(const element of a){

    element.textContent += "Thakur";
}
});