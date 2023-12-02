function addItem(){
    const bookInput = document.getElementById("bookInput");
    const authorInput = document.getElementById("authorInput");
    const yearInput = document.getElementById("yearInput");

    const bookText = bookInput.value.trim();
    const authorText = authorInput.value.trim();
    const yearValue = yearInput.value;

    if (bookText === "" || authorText === "" || yearValue === ""){
        alert("Please enter all the fields");
        return;
    }

    const itemElement = document.createElement("li");
    itemElement.innerHTML =`<strong></strong> ${bookText} <strong style="margin-left:250px;">by</strong> ${authorText}, <strong style="margin-left:250px;">year:</strong> ${yearValue}`;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-button");
    removeButton.onclick = function(){
        itemElement.remove();
    };
    itemElement.appendChild(removeButton);
    document.getElementById("Booklist").appendChild(itemElement);


    bookInput.value = "";
    authorInput.value = "";
    yearInput.value = "";
}