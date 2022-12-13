# tutorial-shopping-list


1. Find out all the information you can about the new idea
2. [Build it.](https://simple-sifu.github.io/tutorial-shopping-list/) 
3. Teach it.


# 1. Different ways to search DOM

- document.querySelector("#idName");   // css/sass syntax
- document.getElementById("idName");
- document.getElementByTagName("button");

# 2. Creating DOM elements and adding to page

- document.createElement('li');
- ul.appendChild(li);
- document.createTextNode(inputValue)
- div.classList.add("anotherclass");

# 3. Creating event listeners

- const buttonElement = document.getElementById("addItem"); 
- buttonElement.addEventListener("click", addItem);
