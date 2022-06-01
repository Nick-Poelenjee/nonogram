class Grid {

    constructor(solution, cellSize) {
        this.rows = solution.length;
        this.cols = solution[0].length;
        this.horizontal = [];
        this.vertical = [];
        this.cellSize  = cellSize;
        this.maxCellsRows = 0;
        this.maxCellsCols = 0;

        this.storage = [];

        for (let j = 0; j < this.rows; j++) {
            for (let i = 0; i < this.cols; i++) {
                this.storage.push(new Cell(i, j, solution[j][i], cellSize));
            }
        }
    }

    offsetCell(x, y) {
        x = x - this.maxCellsRows;
        y = y - this.maxCellsCols;

        return this.cell(x, y);
    }

    showGrid(){
        for (let cell of this.storage) {
            cell.show(this.maxCellsRows, this.maxCellsCols);
        }
    }

    checkWinning() {
        let solutionCells = this.storage.filter((cell) => cell.solution);
        let nonActivatedCells = solutionCells.filter((cell) => !cell.activated);

        return nonActivatedCells.length === 0;
    }

    cell(x, y) {
        if (x < 0 || x >= this.cols) return;
        if (y < 0 || y >= this.rows) return;
        return this.storage[x + this.cols * y];
    }

    CalculateRow() {
        for (let j = 0; j < this.rows; j++) {

            let row = [];
            let count = this.cell(0, j).solution;
            for (let i = 1; i < this.cols; i++) {
                let currentCell = this.cell(i, j);
                if(currentCell.solution !== 1) {
                    if (count > 0) {
                        row.push(count);
                        count = 0;
                    }
                } else {
                    count++;
                }
            }
            if (count > 0) {
                row.push(count);
            }
            this.horizontal.push(row);
        }
    }

    calculateCol() {
        for (let i = 0; i < this.cols; i++) {

            let col = [];
            let count = this.cell(i, 0).solution;
            for (let j = 1; j < this.rows; j++) {
                let currentCell = this.cell(i, j);
                if(currentCell.solution !== 1) {
                    if (count > 0) {
                        col.push(count);
                        count = 0;
                    }
                } else {
                    count++;
                }
            }
            if (count > 0) {
                col.push(count);
            }
            this.vertical.push(col);
        }
    }

    setup() {
        this.CalculateRow();
        this.calculateCol();

        let columnSizes = this.vertical.map(function(col) { return col.length});
        this.maxCellsCols = max(columnSizes);

        let rowSizes = this.horizontal.map(function(row) { return row.length});
        this.maxCellsRows = max(rowSizes);
    }

    showRows() {
        for (let j=0; j < this.rows; j++) {
            for(let i=0; i < this.maxCellsRows; i++) {
                stroke(51);
                fill(255);
                strokeWeight(1);
                rect(
                    i * this.cellSize, 
                    (j + this.maxCellsCols) * this.cellSize, 
                    this.cellSize, 
                    this.cellSize
                );
                noStroke();
                fill(51);
                textAlign(CENTER, CENTER);
                textSize(20);
                if(this.horizontal[j][i]) {
                    text(this.horizontal[j][i],                     
                        i * this.cellSize + this.cellSize / 2, 
                        (j + this.maxCellsCols) * this.cellSize + this.cellSize / 2);
                }
            }
        }
    }

    showCols() {
        for (let i=0; i < this.cols; i++) {
            for(let j=0; j < this.maxCellsRows; j++) {
                stroke(51);
                fill(255);
                strokeWeight(1);
                rect(
                    (i + this.maxCellsRows) * this.cellSize, 
                    j * this.cellSize, 
                    this.cellSize, 
                    this.cellSize
                );
                noStroke();
                fill(51);
                textSize(20);
                textAlign(CENTER, CENTER);
                if(this.vertical[i][j]) {
                    text(this.vertical[i][j],                     
                        (i + this.maxCellsRows) * this.cellSize  + this.cellSize / 2, 
                        j * this.cellSize+ this.cellSize / 2);
                }
            }
        }
    }
    show() {
        this.showRows();
        this.showCols();
        this.showGrid();
    }
}