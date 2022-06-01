class Cell{
    constructor(x, y, solution, size){
        this.x = x;
        this.y = y;
        this.size = size;
        this.solution = solution;
        this.activated = false;
        this.lockes = false;

    }

    activate(){
        this.activated = true;
    }

    deActivate(){
        
    }

    show(xOffset, yOffset){
        if(this.activated){
            fill(51);
            stroke(51);
        } else {
            fill(255);
            stroke(51);
        }
        strokeWeight(2);
        rect((this.x + xOffset) * this.size, (this.y+yOffset) * this.size, this.size, this.size);
    }
}