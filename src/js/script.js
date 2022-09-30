//Pegar elementos HTML

var toDoForm = document.querySelector('#todo-form')
var toDoInput = document.querySelector('#todo-input')
var toDoList = document.querySelector('#todo-list')
var editForm = document.querySelector('#edit-form')
var editInput = document.querySelector('#edit-input')
var cancelEditBtn = document.querySelector('#cancel-edit-btn')
var eraseButton = document.querySelector('#erase-button')

let oldInputValue

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
    editToDo.classList.add("edit-todo")
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

const updateTodo = (text) => {

    const todos = document.querySelectorAll(".todo")

    todos.forEach((todo) => {

        let todoTitle = todo.querySelector("h3")

        if (todoTitle.innerText === oldInputValue) {
            todoTitle.innerText = text
        }
    })
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
    let todoTitle

    if (parentEl && parentEl.querySelector("h3")) {
        todoTitle = parentEl.querySelector("h3").innerText
    }

    if (targetEl.classList.contains("finish-todo")) {
        parentEl.classList.toggle("done")
    }

    if (targetEl.classList.contains("remove-todo")) {
        parentEl.remove()
    }

    if (targetEl.classList.contains("edit-todo")) {
        toggleforms()
        editInput.value = todoTitle
        oldInputValue = todoTitle
    }
})

cancelEditBtn.addEventListener("click", (e) => {
    e.preventDefault()
    toggleforms()

})


editForm.addEventListener("submit", (e) => {

    e.preventDefault()
    const editInputValue = editInput.value

    if (editInputValue) {
        updateTodo(editInputValue)

    }
    toggleforms()
})



// Criando filtro de busca (finalizado ou em aberto)

const filterselect = document.querySelector('#filter-select  ')
filterselect.addEventListener("change", acao => {

    if (filterselect.value == 'todo') {
        arrays = Array.from(toDoList.children).filter(todo =>
            todo.classList.contains('done')).forEach(todo => {

                todo.classList.add('hidden')

            })

        arrays = Array.from(toDoList.children).filter(todo =>
            !todo.classList.contains('done')).forEach(todo => {

                todo.classList.remove('hidden')
            })

            
    }


    if (filterselect.value == 'all') {
        arrays = Array.from(toDoList.children).filter(todo =>
            todo.classList.contains('hidden')).forEach(todo => {

                todo.classList.remove('hidden')
            })

    }

    if (filterselect.value == 'done') {
        arrays = Array.from(toDoList.children).filter(todo =>
            !todo.classList.contains('done')).forEach(todo => {

                todo.classList.add('hidden')
            })

        arrays = Array.from(toDoList.children).filter(todo =>
            todo.classList.contains('done')).forEach(todo => {

                todo.classList.remove('hidden')
            })

    }

})


// Filtro de busca
const searchInput = document.querySelector('#search input')
searchInput.addEventListener('input', event => {
    const inputsearchvalue = event.target.value.trim().toLowerCase()
    filteredsearch = Array.from(toDoList.children).filter(todo =>
        !todo.textContent.toLowerCase().includes(inputsearchvalue)).forEach(todo => {
            todo.classList.add('hidden')
        })
    Array.from(toDoList.children).filter(todo =>
        todo.textContent.toLowerCase().includes(inputsearchvalue)).forEach(todo => {
            todo.classList.remove('hidden')
        })

    eraseButton.addEventListener('click', (e) => {

        e.preventDefault()
        const inputsearcheraser = document.querySelector('#search-input')
        inputsearcheraser.value = ''
        Array.from(toDoList.children).filter(todo =>
            todo.textContent.toLowerCase().includes(inputsearchvalue)).forEach(todo => {
                todo.classList.remove('hidden')
            })
    })

})

