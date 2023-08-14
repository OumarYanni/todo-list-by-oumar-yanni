import "./style.css";


const ul = document.querySelector("ul");

const todos = [
    {
        text: "devenir un excellent développeur",
        done: true
    },
    {
        text: "Exceller en JavaScript",
        done: false
    }
];


const displayTodo = () => {
const todosNode = todos.map((todo, index) => {
    return createTodoElement(todo, index);
});
ul.innerHTML = "";
ul.append(...todosNode);
};


const createTodoElement = (todo, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
    <span class="todo ${todo.done ? "done" : ""}"></span>
    
    <p>${todo.text}</p>`;
    
    return li;
}