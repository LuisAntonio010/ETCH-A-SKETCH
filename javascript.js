const container = document.getElementById("container")
const boxes = document.querySelectorAll('.content')

const btnSize = document.getElementById('btnSize')


createBoard(25,25)

function createBoard(col,rows){

    for (let i = 0; i < (col * rows); i++ ){
        const content = document.createElement('div')
        content.classList.add('content')
        container.appendChild(content)    
        
        container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

    }
}

function userInput(){
    

}




container.addEventListener('mouseover', function(e){
    e.target.style.background = 'blue'
})





/*
boxes.addEventListener('click', function onClick(event){
event.target.style.backgroundColor ='blue'
})

*/


