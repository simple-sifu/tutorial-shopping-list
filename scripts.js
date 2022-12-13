const buttonElement = document.getElementById("addItem"); 
buttonElement.addEventListener("click", addItem);
console.log("loading script.js");

function addItem() {
    console.log("addItem");
    const inputValue = document.querySelector("input").value; 
    if (inputValue === ""){
        return;
    }
    const ul = document.querySelector(".listOfItems");
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(inputValue));
    ul.appendChild(li);
}
