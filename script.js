let btnCreatlist = document.querySelector('.btn-creatlist')
let createNamelist = document.querySelector('.create-namelist')
let navbarLeft = document.querySelector('.navbar-left')
let containerTodo = document.querySelector('.todo-Name')

btnCreatlist.addEventListener('click', ()=> {
let inputValue = document.querySelector('.input-namelist').value.trim()
    
    if(inputValue !== ''){
        let newElement = document.createElement('div')
        newElement.classList.add('create-namelist')
        
        let todoName = document.createElement('div')
        todoName.classList.add('todo-Name')
        createNamelist.appendChild(todoName)
        
        let todoTitle = document.createElement('h2')
        todoTitle.innerText = inputValue
        containerTodo.appendChild(todoTitle)
        
        let todoDelName = document.createElement('div')
        todoDelName.classList('del-namelist')
        containerTodo.appendChild(todoDelName)
        
        navbarLeft.appendChild(newElement)

  
    }

    

})