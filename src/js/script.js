//Pegar elementos HTML

var toDoForm = document.querySelector('#todo-form')
var toDoInput = document.querySelector('#todo-input')
var toDoList = document.querySelector('#todo-list')
var editForm = document.querySelector('#edit-form')
var editInput = document.querySelector('#edit-input')
var cancelEditBtn = document.querySelector('#cancel-edit-btn')




//Funções

const saveToDo = (text) => {

    const todo = document.createElement("div")
    todo.classList.add("todo")

    const todoTitle = document.createElement("h3")
    todoTitle.innerText = text
    todo.appendChild(todoTitle)

    const doneBtn = document.createElement("button")
    doneBtn.classList.add("finish-todo")
    doneBtn.innerHTML = '<i class="fa-sharp fa-solid fa-check"></i>'
    todo.appendChild(doneBtn)

    const editToDo = document.createElement("button")
    editToDo.classList.add("finish-todo")
    editToDo.innerHTML = '<i class="fa-sharp fa-solid fa-pen"></i>'
    todo.appendChild(editToDo)

    const deleteBtn = document.createElement("button")
    deleteBtn.classList.add("remove-todo")
    deleteBtn.innerHTML = '<i class="fa-sharp fa-solid fa-xmark"></i>'
    todo.appendChild(deleteBtn)

    toDoList.appendChild(todo)

    toDoInput.value = ''
    toDoInput.focus()
}

const toggleforms = () => {

    editForm.classList.toggle("hide")
    toDoForm.classList.toggle("hide")
    toDoList.classList.toggle("hide")
} 




//Eventos

toDoForm.addEventListener("submit", (e) => {

    e.preventDefault()

    var texto = toDoInput.value
    if (texto) {
        saveToDo(texto)



    }
})

document.addEventListener("click", (e) => {

    const targetEl = e.target
    const parentEl = targetEl.closest("div")

    if (targetEl.classList.contains("finish-todo")) {
        parentEl.classList.toggle("done")
    }

    if(targetEl.classList.contains("remove-todo")) {
        parentEl.remove()
    }

    if(targetEl.classList.contains("edit-todo")){
        toggleforms()
    }

})

cancelEditBtn.addEventListener("click", (e) => {
    e.preventDefault()
    toggleforms()

})