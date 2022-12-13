const buttonElement = document.querySelector(".addItem").value; 
buttonElement.addEventListener("click", addItem);

function addItem() {
    const inputValue = document.querySelector("input").value; 
    if (inputValue === ""){
        return;
    }
    const ul = document.querySelector(".listOfItems");
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(inputValue));
    ul.appendChild(li);
}
