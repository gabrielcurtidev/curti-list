let btnCreatlist = document.querySelector('.btn-creatlist')
let createNamelist = document.querySelector('.create-namelist')
let navbarLeft = document.querySelector('.navbar-left')

btnCreatlist.addEventListener('click', ()=> {
let inputValue = document.querySelector('.input-namelist').value.trim()
    
    if(inputValue !== ''){
        let newElement = document.createElement('div')
        newElement.classList.add('create-namelist')
        navbarLeft.appendChild('newElement')

        let todoName = document.createElement('div')


  
    }

    

})