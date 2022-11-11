


let toDoForm = document.querySelector(".toDoForm");

let textInput = document.querySelector(".textBox")
let addTask = document.querySelector(".addButton");
let ccTasks = document.querySelector(".ccButton");
let removeAllTasks = document.querySelector(".removeAllButton");

let parentDisplay = document.querySelector(".displayTasks");

// ==== Add & Edit ====

addTask.addEventListener("click", function(element){

    element.preventDefault();

    let newInput = document.createElement("input");
    let newLabel = document.createElement("label");
    let newTask = document.createTextNode(textInput.value);
    let editButton = document.createElement("button");
    let textOfButton = document.createTextNode("Edit");
    
    let newDiv = document.createElement("div");
    
    newDiv.setAttribute("class", "toDoClass");
    newInput.setAttribute("type", "checkbox");
    newInput.setAttribute("class", "toDo");
    newLabel.setAttribute("class", "labelText");
    editButton.setAttribute("class", "edit");
    

    parentDisplay.appendChild(newDiv);
    newDiv.appendChild(newInput);
    newDiv.appendChild(newLabel);
    newDiv.appendChild(editButton);

    newLabel.appendChild(newTask);
    editButton.appendChild(textOfButton);

    // Everything on top does the following: creates elements (new div, inputs, label, button), gives them a class, and appends them to a new Div.

    // The eventListener bellow changes the background color of the div to yellow, and goes back with a click to the checkbox.

    newInput.addEventListener("click", function(){

        if (newInput.checked === true){
            newDiv.style.backgroundColor = "rgb(234, 183, 52)";
        } else if (newInput.checked === false){
            newDiv.style.backgroundColor = "rgb(118, 233, 135)";
        }

    })
    
    // This event listener gives the editButton the functionality of editing the text!

    editButton.addEventListener("click", function(element){

        element.preventDefault();

        let newInput1 = document.createElement("input");

        newInput1.setAttribute("type", "text");
        newInput1.setAttribute("class", "editTextBox");


        // this line copies our previous text to the new box input.

        newInput1.value = newLabel.innerText;

        newDiv.appendChild(newInput1);
        
        // our previous label gets removed
        newLabel.remove();


        // from here on... it's a mess... the confirmEdit button!

        let confirmEditButton = document.createElement("button");

        let confirmButtonLabel = document.createTextNode("Confirm edit");

        confirmEditButton.setAttribute("class", "edit");
        newDiv.appendChild(confirmEditButton);
        confirmEditButton.appendChild(confirmButtonLabel);

        // confirmEditButton.classList.add("hide");

        // the if statement should be in this second addEventListener, because this is when I enter "edit mode", so, if I want to toggle between buttons, I should make an If statement somewhere...

        //If I click "edit", change the name of the button to "Confirm edit", and also give it a different function...

        // If I click "Confirm edit", eliminate the input box, give me my text, and also change back the button to "Edit".

        // OR, change the confirmEditButton... change the label of the editButton there, and the functionality, and, in the end, revert back! uhm... still not sure

        editButton.remove();

        // tl;dr this button removes our previous edit button, creates a new one, a gives them the "edit" functionality
        
        confirmEditButton.addEventListener("click", function(element){

            element.preventDefault();

            let newLabel1 = document.createElement("label");
            newLabel1.setAttribute("class", "labelText");
            newDiv.appendChild(newLabel1);

            let editedText = document.createTextNode(newInput1.value);

            newLabel1.appendChild(editedText);

            confirmEditButton.remove();
            newInput1.remove();

            let editButton = document.createElement("button");
            let textOfButton = document.createTextNode("Edit");

            editButton.setAttribute("class", "edit");

            editButton.appendChild(textOfButton);

            newDiv.appendChild(editButton);

        })

    })

    textInput.value = "";

})


// ==== Remove completed tasks ====

ccTasks.addEventListener("click", function(element){

    element.preventDefault();
    
    let taskDivs = document.querySelectorAll(".displayTasks .toDoClass");
    
    // console.log(taskDivs[1].childNodes[0].checked);

    for (let i = 0; i < taskDivs.length; i++) {
        
        if (taskDivs[i].childNodes[0].checked === true){

            taskDivs[i].remove();

        }
        
    }

})

// Remove all

removeAllTasks.addEventListener("click", function(event){
    event.preventDefault();

    let taskDivs = document.querySelectorAll(".displayTasks .toDoClass");
    
    for (let i = 0; i < taskDivs.length; i++) {
        
            taskDivs[i].remove();

        }
        
})

// .checked
// eventListener("",(){})