import ("./style.css")
import trashIconSVG from "../src/assets/trash.svg"
console.log("working");

const addBTN = document.querySelector("#addBTN");
const dialog = document.querySelector("#dialog");
const closeDialogBTN = document.querySelector("#closeDialog");
const createBTN = document.querySelector("#createBTN");

const titleValue = document.querySelector("#title");
const descriptionValue = document.querySelector("#description");
const dateValue = document.querySelector("#date");

const lowBTN = document.querySelector("#low");
const mediumBTN = document.querySelector("#medium");
const highBTN = document.querySelector("#high");

const allTasks = document.querySelector("#AllTasks");
let taskList = [];
let globalBottomID = 0;

addBTN.addEventListener("click",()=>{
    console.log("Add Clicked");
    enablePriorityButtons();
    lowBTN.disabled = true;
    titleValue.value = "";
    descriptionValue.value = "";
    let today = new Date();
    const todayInFormat = today.getFullYear() + '-' + (today.getMonth() + 1).toString().padStart(2, '0') + '-' + today.getDate().toString().padStart(2, '0');
    dateValue.value = todayInFormat;
    dialog.showModal();
});

createBTN.addEventListener("click",()=>{
    console.log("Created!");

    let priority = "low";
    if(lowBTN.disabled == true){
        console.log("low Selected");
        //green
        priority = "low";
    }
    else if (mediumBTN.disabled == true){
        console.log("medium Selected");
        priority = "medium";
    }
    else if (highBTN.disabled == true){
        console.log("high Selected");
        priority = "high";
    }
    let Task = new task(titleValue.value, descriptionValue.value, dateValue.value, priority)
    createTaskElements(Task.title, Task.description, Task.date, priority , Task.id);
    taskList.push(Task);
    console.log(taskList);
    dialog.close();
});

function enablePriorityButtons(){
    lowBTN.disabled = false;
    mediumBTN.disabled = false;
    highBTN.disabled = false;
};

lowBTN.addEventListener("click",()=>{
    enablePriorityButtons();
    lowBTN.disabled = true;
});

mediumBTN.addEventListener("click",()=>{
    enablePriorityButtons();
    mediumBTN.disabled = true;
});

highBTN.addEventListener("click",()=>{
    enablePriorityButtons();
    highBTN.disabled = true;
});

closeDialogBTN.addEventListener("click",()=>{
    dialog.close();
});


function createTaskElements(titleValue, descriptionValue, dateValue, priorityValue, idValue){
    console.log("created!");
    const taskBlock = document.createElement("div");
    const label = document.createElement("label");
    const input = document.createElement("input");
    const priority = document.createElement("div");
    const text = document.createElement("div");
    const H1text = document.createElement("h1");
    const end = document.createElement("div");
    const date = document.createElement("div");
    const H1date = document.createElement("h1");
    const trashIMG = document.createElement("img");

    taskBlock.classList.add("taskBlock");
    input.setAttribute("value","did");
    input.setAttribute("type","checkbox");
    input.setAttribute("id","checkbox");
    input.addEventListener("click",(eventC)=>{
        eventC.stopPropagation();
    });
    label.appendChild(input);
    taskBlock.appendChild(label);

    priority.classList.add("priority");
    if(priorityValue == "low"){
        //green
        priority.style.backgroundColor = "#7ED957";
    }else if(priorityValue == "medium"){
        //yellow
        priority.style.backgroundColor = "#FEC95F";
    }else if(priorityValue == "high"){
        //red
        priority.style.backgroundColor = "#FF5757";
    }


    taskBlock.appendChild(priority);
    text.classList.add("text");
    H1text.textContent = titleValue;
    text.appendChild(H1text)
    taskBlock.appendChild(text);
    H1date.textContent = dateValue;
    date.appendChild(H1date);
    date.classList.add("date");

    trashIMG.setAttribute("src",trashIconSVG);
    trashIMG.setAttribute("alt","trashIcon");
    trashIMG.setAttribute("id","trashIcon");

    trashIMG.addEventListener("click",(eventC)=>{
        eventC.stopPropagation();
        const DOMtasks = document.querySelectorAll(".taskBlock");
        taskList.forEach(task => {
            if(task.id == idValue){
                let index = taskList.indexOf(task);
                console.log("index", index);
                taskList.splice(index, 1);
                while (DOMtasks[index].firstChild) {
                    DOMtasks[index].removeChild(DOMtasks[index].firstChild);
                }
                DOMtasks[index].remove();
            }
        });
    });
    
    trashIMG.classList.add("Trash");
    end.appendChild(date);
    end.appendChild(trashIMG);
    end.classList.add("end");
    taskBlock.appendChild(end);
    taskBlock.addEventListener("click",()=>{
        console.log("taskBlockClicked");
    });
    allTasks.appendChild(taskBlock);
}

class task {
    // class methods
    constructor(title, description, date, priority)
    {
        this.title = title;
        this.description = description;
        this.date = date;
        this.priority = priority;
        globalBottomID += 1;
        this.id = globalBottomID;
    }
}