let btnCreatlist = document.querySelector('.btn-creatlist')
let createNamelist = document.querySelector('.create-namelist')
let containerTodo = document.querySelector('.todo-Name') 
let todoRef = document.querySelector('.todo-ref') 

btnCreatlist.addEventListener('click', ()=> {
    let navbarLeft = document.querySelector('.navbar-left')
    let inputValue = document.querySelector('.input-namelist').value.trim()
    
    if(inputValue === ''){
        alert('ERRO!!!.....Escreva algo no nome da lista!')
        return
    }
    
    if(inputValue !== ''){
        let newElement = document.createElement('div')
        newElement.classList.add('create-namelist')
        
        let todoName = document.createElement('div')
        todoName.classList.add('todo-Name')
        createNamelist.appendChild(todoName)
        
        let todoTitle = document.createElement('h2')
        todoTitle.classList.add('todoRef')
        todoTitle.innerText = inputValue
        todoName.appendChild(todoTitle)
        
        let todoDelName = document.createElement('div')
        let icon = document.createElement('i')
        icon.classList.add('bx', 'bxs-x-square', 'del-namelist')
        todoDelName.appendChild(icon)
        todoName.appendChild(todoDelName)
        
        navbarLeft.appendChild(newElement)

        
        document.querySelector('.input-namelist').value = ''
        document.querySelector('.input-namelist').focus()

    }


})

createNamelist.addEventListener('click', (e) => {
    let elTarget = e.target;
    let elParent = elTarget.closest('.todo-Name');

    if (elTarget.classList.contains('del-namelist')) {
        elParent.remove();
    }
});

// ==========================================================


