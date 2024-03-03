import ("./style.css")
import trashIconSVG from "../src/assets/trash.svg"
import threeDotsSVG from "../src/assets/threeDots.svg"
console.log("workinga");

const addBTN = document.querySelector("#addBTN");
const dialog = document.querySelector("#dialog");
const closeDialogBTN = document.querySelector("#closeDialog");
const createBTN = document.querySelector("#createBTN");

const titleValue = document.querySelector("#title");
const dateValue = document.querySelector("#date");

const lowBTN = document.querySelector("#low");
const mediumBTN = document.querySelector("#medium");
const highBTN = document.querySelector("#high");

const allTasks = document.querySelector("#AllTasks");

let taskList = [];
let globalBottomID = 0;

let projectManager = new ProjectsManager;

//DESCRIIPTION PART
const descriptionDialog = document.querySelector("#description_Dialog");
const descriptionValue = document.querySelector("#description");
const closeBTN = document.querySelector("#closeBTN");
const d_Title_Input = document.querySelector("#d_titleInput");

const d_description = document.querySelector("#description_D");
const d_date = document.querySelector("#date_D");
const D_lowBTN = document.querySelector("#low_D");
const D_mediumBTN = document.querySelector("#medium_D");
const D_highBTN = document.querySelector("#high_D");
//Projects
const allProjects = document.querySelector("#allProjects");
const addProjectBTN = document.querySelector("#addProject");
const projectDialog = document.querySelector("#projectDialog");
const projectNameInput = document.querySelector("#P_name");
const dialogCreateProject = document.querySelector("#createProject");
const actualProjectText = document.querySelector("#actualProjectText");


let actualProjectIndex = -1;
let actualTaskIndex = -1;

//MainDefaultProject
createProject("Main");
const mainbuttonjustforselect = document.querySelector("#projectButton").disabled = true;
actualProjectText.textContent = "Main";



//Ceate full DOM from array

/*
let objetoEjemplo1 = {
    title: "Study",
    description: "Study Math, obviously",
    date: "2024-03-05",
    priority: "high",
    id: "0"
};
let objetoEjemplo2 = {
    title: "Example 2",
    description: "descripcion ejemplo",
    date: "2024-03-01",
    priority: "low",
    id: "1"
};
let objetoEjemplo3 = {
    title: "LOL",
    description: "descripcion ejemplo descripcion ejemplo",
    date: "2025-03-01",
    priority: "medium",
    id: "2"
};
let exampleArray = [objetoEjemplo1, objetoEjemplo2, objetoEjemplo3];



createTaskFromArray(exampleArray);
*/

function createTaskFromArray(exampleArray){
    exampleArray.forEach(taskObj => {
        createTaskElements(taskObj.title, taskObj.description, taskObj.date, taskObj.priority);
    });
    
}
function deleteAllTasksFromDom(){
    while(allTasks.firstChild) {
            allTasks.removeChild(allTasks.firstChild);
        }
}
//Projects stuff
function getIndexOfProject(){
    const projects = document.querySelectorAll("#projectButton")
    for (let i = 0; i < projects.length; i++){
        if(projects[i].disabled == true){
            return i;
        }
    }
}
function createProject(projectName){
    //DOM
    const projectDiv = document.createElement("div");
    const projectButton = document.createElement("button");
    const pText = document.createElement("p");
    const threeDots = document.createElement("img");
    projectButton.setAttribute("id", "projectButton");

    projectButton.addEventListener("click",()=>{
        const projects = document.querySelectorAll("#projectButton")
        projects.forEach(element => {
            element.disabled = false;
        });
        projectButton.disabled = true;
        actualProjectIndex = 0;
        actualProjectText.textContent = projectName;
        deleteAllTasksFromDom();
        createTaskFromArray(projectManager.projectsTasks[getIndexOfProject()]);
    });
    
    projectDiv.appendChild(projectButton);
    pText.textContent = projectName;

    projectButton.appendChild(pText);

    threeDots.setAttribute("src", threeDotsSVG);
    threeDots.setAttribute("alt", "config");

    threeDots.addEventListener("click",(e)=>{
        console.log("dots");
        e.stopPropagation();
    });

    projectButton.appendChild(threeDots);

    projectDiv.classList.add("project");
    projectDiv.setAttribute("id", "project");
    allProjects.insertBefore(projectDiv, addProjectBTN);
    projectManager.projectsTasks.push([]);

}
addProjectBTN.addEventListener("click",()=>{
    console.log("add Project Clicked");
    projectNameInput.value = "";
    projectDialog.showModal();
});

dialogCreateProject.addEventListener("click",()=>{
    createProject(projectNameInput.value);
    projectManager.addProject(projectNameInput.value);
    projectDialog.close()
});
//Tasks stuff----------------------------------
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
    let priority = "low";
    if(lowBTN.disabled == true){
        //green
        priority = "low";
    }
    else if (mediumBTN.disabled == true){
        priority = "medium";
    }
    else if (highBTN.disabled == true){
        priority = "high";
    }

    let Task = new task(titleValue.value, descriptionValue.value, dateValue.value, priority)
    createTaskElements(Task.title, Task.description, Task.date, priority);
    taskList.push(Task);
    projectManager.projectsTasks[getIndexOfProject()].push(Task);
    console.log("PropjectManager:", projectManager.projectsTasks);
    dialog.close();
});
//date format
function formatDate(inputDate) {
    // Separar el input en año, mes y día
    const parts = inputDate.split('-');
    // Formatear la fecha en el nuevo formato
    var formattedDate = parts[2] + '/' + parts[1] + '/' + parts[0];

    return formattedDate;
}
//update task!!!!!!!!!!
function updateTask(){
    //DOM VARS
    const DOMtasks = document.querySelectorAll(".taskBlock");
    const title = DOMtasks[actualTaskIndex].querySelector(".text h1");
    const date = DOMtasks[actualTaskIndex].querySelector(".end h1");
    const priorityColor = DOMtasks[actualTaskIndex].querySelector(".priority");
    //Obj update

    projectManager.projectsTasks[getIndexOfProject()][actualTaskIndex].title = d_Title_Input.value;
    projectManager.projectsTasks[getIndexOfProject()][actualTaskIndex].description = d_description.value;
    projectManager.projectsTasks[getIndexOfProject()][actualTaskIndex].date = d_date.value;

    if(D_lowBTN.disabled == true){
        projectManager.projectsTasks[getIndexOfProject()][actualTaskIndex].priority = "low";
        priorityColor.style.backgroundColor = "#7ED957";

    } else if (D_mediumBTN.disabled == true){
        projectManager.projectsTasks[getIndexOfProject()][actualTaskIndex].priority = "medium";
        priorityColor.style.backgroundColor = "#FEC95F";

    } else if (D_highBTN.disabled == true){
        projectManager.projectsTasks[getIndexOfProject()][actualTaskIndex].priority = "high";
        priorityColor.style.backgroundColor = "#FF5757";
    }
    
    //DOM update
    title.textContent = d_Title_Input.value;
    date.textContent = formatDate(d_date.value);
    console.log("updateTask");
    console.log(projectManager.projectsTasks[getIndexOfProject()]);
    
}


closeBTN.addEventListener("click",()=>{
    updateTask();
    descriptionDialog.close();
});

function enablePriorityButtons(){
    lowBTN.disabled = false;
    mediumBTN.disabled = false;
    highBTN.disabled = false;
    //Others
    D_lowBTN.disabled = false;
    D_mediumBTN.disabled = false;
    D_highBTN.disabled = false;
};
//btns--------------------------------------------------------
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
//btns
D_lowBTN.addEventListener("click",()=>{
    enablePriorityButtons();
    D_lowBTN.disabled = true;
});

D_mediumBTN.addEventListener("click",()=>{
    enablePriorityButtons();
    D_mediumBTN.disabled = true;
});

D_highBTN.addEventListener("click",()=>{
    enablePriorityButtons();
    D_highBTN.disabled = true;
});
//---------------------------------------------------------------
closeDialogBTN.addEventListener("click",()=>{
    dialog.close();
});

//GET INDEX
function getIndexofElement(){
    console.log("GET INDEX OF ELEMENT");
    const tasksBlocks = allTasks.querySelectorAll(".taskBlock");
    for (let i = 0; i < tasksBlocks.length; i++) {
        if(tasksBlocks[i].id == "isSelected"){
            return i;
        }
    }
}
//DOOM
function createTaskElements(titleValue, descriptionValue, dateValue, priorityValue){
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
        D_lowBTN.disabled = true;
        priority.style.backgroundColor = "#7ED957";
    }else if(priorityValue == "medium"){
        //yellow
        D_mediumBTN.disabled = true;
        priority.style.backgroundColor = "#FEC95F";
    }else{
        //red
        D_highBTN.disabled = true;
        priority.style.backgroundColor = "#FF5757";
    }


    taskBlock.appendChild(priority);
    text.classList.add("text");
    H1text.textContent = titleValue;
    text.appendChild(H1text)
    taskBlock.appendChild(text);
    H1date.textContent = formatDate(dateValue);
    date.appendChild(H1date);
    date.classList.add("date");

    trashIMG.setAttribute("src",trashIconSVG);
    trashIMG.setAttribute("alt","trashIcon");
    trashIMG.setAttribute("id","trashIcon");

    trashIMG.addEventListener("click",(eventC)=>{
        eventC.stopPropagation();
        const DOMtasks = document.querySelectorAll(".taskBlock");
        //getIndex
        taskBlock.setAttribute("id","isSelected");

        const myIndex = getIndexofElement();

        taskBlock.removeAttribute("id");

        projectManager.projectsTasks[getIndexOfProject()].splice(myIndex, 1);
        while (DOMtasks[myIndex].firstChild) {
            DOMtasks[myIndex].removeChild(DOMtasks[myIndex].firstChild);
        }

        DOMtasks[myIndex].remove();
    });
    
    trashIMG.classList.add("Trash");
    end.appendChild(date);
    end.appendChild(trashIMG);
    end.classList.add("end");
    taskBlock.appendChild(end);
    //BLOCK click
    taskBlock.addEventListener("click",()=>{

        taskBlock.setAttribute("id","isSelected");

        const myIndex = getIndexofElement();

        taskBlock.removeAttribute("id");

        descriptionDialog.showModal();
        d_Title_Input.value = projectManager.projectsTasks[getIndexOfProject()][myIndex].title;
        d_description.value = projectManager.projectsTasks[getIndexOfProject()][myIndex].description;
        d_date.value = projectManager.projectsTasks[getIndexOfProject()][myIndex].date;
        actualTaskIndex = myIndex;
        //
        enablePriorityButtons();
        if(projectManager.projectsTasks[getIndexOfProject()][myIndex].priority == "low"){
        //green
        D_lowBTN.disabled = true;
        }else if(projectManager.projectsTasks[getIndexOfProject()][myIndex].priority == "medium"){
            //yellow
        D_mediumBTN.disabled = true;
        }else if (projectManager.projectsTasks[getIndexOfProject()][myIndex].priority == "high"){
            //red
        D_highBTN.disabled = true;
        }
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

    }
}
//project
class ProjectsManager{
    // class methods
    
    constructor()
    {
        this.projects = [];
        this.projectsTasks = [];
    }

    addProject(projectName){
        this.projects.push(projectName);
    }
}