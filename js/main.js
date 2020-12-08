import ToDoList from "./todolist.js";
import ToDoItem from "./todoitem.js";

const toDoList = new ToDoList();

// Launch app

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        initApp();
    }
})

const initApp = () => {
    // Listeners

    //Procedural

    //Load List Object

    //refresh page
    refreshPage();
}

const refreshPage = () => {
    clearListDisplay();
    //renderList();
    //clearItemEntryField();
    //SetFocusOnItemEntry();
}

const clearListDisplay = () => {
    const parentElement = document.getElementById("listItems");
    deleteContects(parentElement);
}

const deleteContects = (parentElement) => {
    let child = parentElement.lastElementChild;
    while(child) {
        parentElement.removeChild(child);
        child = parentElement.lastElementChild;
    }
}

const renderList = () => {
    const list = toDoList.getList();
    list.forEach(
        (item) => {
            buildListItem(item);
        }
    );
}

const buildListItem = (item) => {
    
}