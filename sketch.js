let solution = [
    [0,0,0,1,1,0,0,0,0,0,1,1,0,0,0],
    [0,0,1,1,1,1,0,0,0,1,1,1,1,0,0],
    [0,1,1,1,1,1,1,0,1,1,1,1,1,1,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,0,1,1,1,1,1,1,1,1,1,0,0,0],
    [0,0,0,0,1,1,1,1,1,1,1,0,0,0,0],
    [0,0,0,0,0,1,1,1,1,1,0,0,0,0,0],
    [0,0,0,0,0,0,1,1,1,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0]
  ]
  let cellSize

function setup(){
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
    cell.activate()
}