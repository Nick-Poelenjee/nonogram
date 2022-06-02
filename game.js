function mousePressed(){
    let x = floor(mouseX / cellSize)
    let y = floor(mouseY / cellSize)
    let cell = (grid.offsetCell(x,y))
    if(mouseButton === LEFT){
    if(!cell.activate()){
        nmb_of_mistakes++;
        document.getElementById("mistakes").innerHTML = nmb_of_mistakes;
    }
    } else if(mouseButton === RIGHT){
        cell.deActivate()
    }
    if(nmb_of_mistakes == max_mistakes){
        alert('You Lost, you can now restart')
       document.location.reload()
    }
    if(grid.checkWinning()){
        alert('You won')
    }
}


