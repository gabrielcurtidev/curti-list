const btnCreat = document.querySelector('.btn-creatlist')
const createName = document.querySelector('.create-namelist')
const navbarLeft = document.querySelector('.navbar-left')
const todoInput = document.querySelector('.input-namelist')

const saveName = (text) => {
    const todoName = document.createElement('div')
    todoName.classList.add('todoName')

    const todoTitle = document.createElement('h2')
    todoTitle.innerText = text
    todoName.appendChild(todoTitle)

    const todoDel = document.createElement('div')
    todoDel.classList.add('del-namelist')
    todoName.appendChild(todoDel)

    createName.appendChild(todoName)
}

navbarLeft.addEventListener('submit', (e) =>{
    e.preventDefault()
    

    const valueInput = todoInput.value

    if(valueInput){
        saveName(valueInput)
    }

    valueInput.value = ''
    valueInput.focus()

})