let solution = [
    [0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,],
    [0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,],
    [0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,],
    [0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,],
    [1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,],
    [1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,],
    [1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,],
    [1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,],
    [0,1,0,0,1,1,1,1,1,1,1,0,0,1,0],
    [0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,],
    [0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,],
    [0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,],
    [0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,],
    [0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,],
    [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,]
];


  
  let nmb_of_mistakes = 0


  let cellSize;
  let max_mistakes = 5

function setup(){
    document.getElementById("max_mistakes").innerHTML = max_mistakes;
    createCanvas(800,800)
    
    cellSize = 40
    grid = new Grid(solution, cellSize)

    grid.setup()
}

function draw(){
    background(200)
    grid.show();
}

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


