import ToDoList from "./todolist.js";
import ToDoItem from "./todoitem.js";

// Launch app
document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        window.TODO_APP = new App();
    }
})

export default class App {

    toDoList;

    constructor() {
        this.toDoList = new ToDoList();
    }

    initApp() {
        // Listeners

        //Procedural

        //Load List Object

        //refresh page
        this.refreshPage();
    }

    refreshPage() {
        this.clearListDisplay();
        //renderList();
        //clearItemEntryField();
        //SetFocusOnItemEntry();
    }

    clearListDisplay() {
        const parentElement = document.getElementById("listItems");
        this.deleteContects(parentElement);
    }

    deleteContects(parentElement) {
        let child = parentElement.lastElementChild;
        while(child) {
            parentElement.removeChild(child);
            child = parentElement.lastElementChild;
        }
    }

    renderList() {
        const list = toDoList.getList();
        list.forEach(
            (item) => {
                buildListItem(item);
            }
        );
    }

    buildListItem(item) {

    }
}
