class Cell{
    constructor(x, y, solution, size){
        this.x = x;
        this.y = y;
        this.size = size;
        this.solution = solution;
        this.activated = false;
        this.empty = false
        this.locked = false;

    }

    activate(){
        if(this.solution){
            this.activated = true
            return true
        } else{
            this.locked = true
            return false
        }
    }

    deActivate(){
        this.empty = !this.empty;
        
    }

    show(xOffset, yOffset){
        strokeWeight(1);
        if (this.activated) {
            fill(51);
            stroke(51);
            rect(
                (this.x + xOffset) * this.size, 
                (this.y + yOffset) * this.size, 
                this.size, 
                this.size
                );
        } else if (this.locked || this.empty) {
            fill(255);
            stroke(51);

            rect(
                (this.x + xOffset) * this.size, 
                (this.y + yOffset) * this.size, 
                this.size, 
                this.size
                );
            line(
                (this.x + xOffset) * this.size, 
                (this.y + yOffset) * this.size, 
                (this.x + xOffset + 1) * this.size, 
                (this.y + yOffset + 1) * this.size, 
                );
        } else {
            fill(255);
            stroke(51);
            rect(
                (this.x + xOffset) * this.size, 
                (this.y + yOffset) * this.size, 
                this.size, 
                this.size
                );
            }
    }
}