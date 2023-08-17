import "./style.css";


const ul = document.querySelector("ul");
const form = document.querySelector("form");
const input = document.querySelector("form > input");

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


form.addEventListener("submit", event => {
    event.preventDefault();
    const value = input.value;
    input.value = "";
    addTodo(value);
})


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


const addTodo = text => {
    todos.push({
        text,
        done: false
    });
    displayTodo();
}


displayTodo();