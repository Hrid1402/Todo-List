import ("./style.css")
import trashIconSVG from "../src/assets/trash.svg"
import threeDotsSVG from "../src/assets/threeDots.svg"
console.log("working");

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

const dialogEditProject = document.querySelector("#editProjectDialog");
const E_dialogText = document.querySelector("#EP_name");
const EP_close = document.querySelector("#EP_close");
const EP_delete =document.querySelector("#EP_delete");

let actualProjectIndex = -1;
let actualTaskIndex = -1;

//MainDefaultProject
createProject("Main");
const mainbuttonjustforselect = document.querySelector("#projectButton").disabled = true;
const threeDotsDelete = document.querySelector("#projectButton img");
threeDotsDelete.remove();
actualProjectText.textContent = "Main";

//Ceate full DOM from array
function createTaskFromArray(exampleArray){
    exampleArray.forEach(taskObj => {
        createTaskElements(taskObj.title, taskObj.description, taskObj.date, taskObj.priority , taskObj.isChecked);
    });
    
};
function deleteAllTasksFromDom(){
    while(allTasks.firstChild) {
            allTasks.removeChild(allTasks.firstChild);
        };
};
//Projects stuff
function getIndexOfProject(){
    const projects = document.querySelectorAll("#projectButton")
    for (let i = 0; i < projects.length; i++){
        if(projects[i].disabled == true){
            return i;
        };
    };
};
function getIndexOfclickedProject(){
    const projects = document.querySelectorAll("#projectButton")
    for (let i = 0; i < projects.length; i++){
        if(projects[i].className == "clicked"){
            return i;
        };
    };
};
function selectMainProject(){
    const projects = document.querySelectorAll("#projectButton");
    const MainProject = document.querySelector("#project button");
    projects.forEach(element => {
        element.disabled = false;
    });
    MainProject.disabled = true;
    actualProjectText.textContent = "Main";
    actualProjectIndex = 0;
    createTaskFromArray(projectManager.projectsTasks[getIndexOfProject()]);
}
EP_close.addEventListener("click",()=> {
    updateProject();
    
});
EP_delete.addEventListener("click",()=> {
    console.log("delete");
    console.log(projectManager.projects);
    deleteProject();
    console.log(allProjects);
    dialogEditProject.close();
});
function deleteProject(){
    //DOM
    const myProjectIndex = getIndexOfclickedProject()
    const allProjects = document.querySelectorAll("#project");
    if(myProjectIndex == getIndexOfProject()){
        console.log("Same");
        deleteAllTasksFromDom();
        selectMainProject();
    } 
    while(allProjects[myProjectIndex].firstChild) {
        allProjects[myProjectIndex].removeChild(allProjects[myProjectIndex].firstChild);
    };
    allProjects[myProjectIndex].remove();
    console.log("IndexOfproject");
    console.log(getIndexOfProject());
    console.log("myProjectIndex");
    console.log(myProjectIndex);
    
    projectManager.deleteProject(myProjectIndex);
    console.log(projectManager.projects);
    
}

function updateProject(){
    console.log("Project Updated");
    
    if(E_dialogText.value.length < 1){
        alert("Please fill out the field to continue.")
    }else{
        const projects = document.querySelectorAll("#projectButton");
        const MyindexOfClickedProject = getIndexOfclickedProject();
        //index of actually selected Project
        const text = projects[MyindexOfClickedProject].querySelector("p");
        projects[MyindexOfClickedProject].removeAttribute('class');
        projectManager.projects[MyindexOfClickedProject] = E_dialogText.value;
        text.textContent = E_dialogText.value;
        if(getIndexOfProject() == MyindexOfClickedProject) {
            actualProjectText.textContent = E_dialogText.value;
        }
        dialogEditProject.close();
    }
    
    
};

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
        actualProjectText.textContent = projectManager.projects[getIndexOfProject()];
        deleteAllTasksFromDom();
        createTaskFromArray(projectManager.projectsTasks[getIndexOfProject()]);
    });
    
    projectDiv.appendChild(projectButton);
    pText.textContent = projectName;
    projectManager.addProject(projectName);

    projectButton.appendChild(pText);

    threeDots.setAttribute("src", threeDotsSVG);
    threeDots.setAttribute("alt", "config");

    threeDots.addEventListener("click",(e)=>{
        projectButton.classList.add("clicked");
        projectDiv.list
        console.log(pText.textContent);
        dialogEditProject.showModal();
        E_dialogText.value = pText.textContent;
        e.stopPropagation();
    });

    projectButton.appendChild(threeDots);

    projectDiv.classList.add("project");
    projectDiv.setAttribute("id", "project");
    allProjects.insertBefore(projectDiv, addProjectBTN);
    projectManager.projectsTasks.push([]);

};
addProjectBTN.addEventListener("click",()=>{
    console.log("add Project Clicked");
    projectNameInput.value = "";
    projectDialog.showModal();
});

dialogCreateProject.addEventListener("click",()=>{
    if(projectNameInput.value.length < 1){
        alert("Please fill out the field to continue.")
    }else{
        createProject(projectNameInput.value);
        projectDialog.close();
    }
    
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
    if(titleValue.value.length < 1 || descriptionValue.value.length < 1){
        alert("Please fill out all fields to proceed.");
    }
    else{
        let Task = new task(titleValue.value, descriptionValue.value, dateValue.value, priority, false)
        createTaskElements(Task.title, Task.description, Task.date, priority, false);
        taskList.push(Task);
        projectManager.projectsTasks[getIndexOfProject()].push(Task);
        console.log("ProjectManager:", projectManager.projectsTasks);
        dialog.close();
    }
    
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
    if(d_Title_Input.value.length < 1 || d_description.value.length < 1){
        alert("Please fill out all fields to proceed.");
    }
    else{
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
        descriptionDialog.close();
    }
}


closeBTN.addEventListener("click",()=>{
    updateTask();
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
function createTaskElements(titleValue, descriptionValue, dateValue, priorityValue, isChecked){
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
    
    if(isChecked){
        input.checked = true;
    }
    input.setAttribute("id","checkbox");
    
    input.addEventListener("click",(eventC)=>{
        eventC.stopPropagation();
        taskBlock.setAttribute("id","isSelected");

        const myIndex = getIndexofElement();

        taskBlock.removeAttribute("id");
        if(isChecked){
            projectManager.projectsTasks[getIndexOfProject()][myIndex].isChecked = false;
            isChecked = false;
        }else{
            projectManager.projectsTasks[getIndexOfProject()][myIndex].isChecked = true;
            isChecked = true;
        }
        
        
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
    constructor(title, description, date, priority, isChecked)
    {
        this.title = title;
        this.description = description;
        this.date = date;
        this.priority = priority;
        this.isChecked = isChecked;

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
    deleteProject(index){
        this.projects.splice(index, 1); 
        this.projectsTasks.splice(index, 1); 
    }
}