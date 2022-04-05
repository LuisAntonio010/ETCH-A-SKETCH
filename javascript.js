const container = document.getElementById('container')
const content = document.querySelectorAll('.content')
const btnSize = document.getElementById('btnSize')
const btnReset = document.getElementById('btnReset')
const btnRainbow = document.getElementById('btnRainbow')

function createBoard(col,rows){
    for (let i = 0; i < (col * rows); i++ ){
        const content = document.createElement('div')
        content.classList.add('content')
        container.appendChild(content)    
        
        container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        }   
}

createBoard(16,16)

function userInput(){
    btnSize.addEventListener('click', () =>{
        let sizeChoice = prompt('Select board size (1 to 75)')

        if(sizeChoice ===  null || sizeChoice > 75 || sizeChoice == 0 ){
            clearDiv()
            createBoard(16,16) 
        }else{
            clearDiv()
            createBoard(sizeChoice,sizeChoice)
        }        
    })
}
userInput()

container.addEventListener('mouseover', function onClick(event){
    event.target.style.backgroundColor = 'black' 
   })

function blackColorButton (){
    container.addEventListener('mouseover', function onClick(event){
        event.target.style.backgroundColor = 'black' 
       })
}

function clearDiv(){
    const element = document.querySelectorAll('.content')
    element.forEach(content => {content.remove()})
}

function getRandomColor(){
    let letters = '0123456789ABCDEF'
    let color = '#'
    for (let i= 0; i <6; i++) {
        color += letters[Math.floor(Math.random()*16)]
    }
    return color;
}

function randomColorButton(){    
    container.addEventListener('mouseover', function onClick(event){
        event.target.style.backgroundColor = getRandomColor() })
}

btnReset.addEventListener('click', () =>{
    const items = document.querySelectorAll('.content');
    items.forEach(content => {
        content.style.backgroundColor='white'
    })

    
})

