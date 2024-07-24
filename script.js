const startForm = document.querySelector('.start-form')
const inputNameList = document.querySelector('.input-namelist')
const createNameList = document.querySelector('.create-namelist')
const todoName = document.querySelector('.todo-Name')
const delNameList = document.querySelector('.del-namelist')


const saveTodo = (text) =>{
    const createName = document.createElement('div')
    createName.classList.add('todo-Name')

    const todoName = document.createElement('h2')
    todoName.innerText = text
    createName.appendChild(todoName)

    const delName = document.createElement('div')
    delName.classList.add('del-namelist')
    todoName.innerText = text
    createName.appendChild(delName)

    createNameList.appendChild(createName)



}

startForm.addEventListener('submit', (e) =>{
    e.preventDefault()

    const inputValue = inputNameList.value;
    if(inputValue){
        saveTodo(inputValue)
    }
    
})