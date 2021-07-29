const DIRECTIONS = {
    EAST: 0,
    NORTH: 3,
    WEST: 2,
    SOUTH: 1
}

class Move {
   constructor(){
      this.x = 0;
      this.y=0;
      this.direction = DIRECTIONS.EAST;

      console.log("constructor called")
        //show pointer first time
   }

   removeIcon () {
        let grid = document.getElementById('Grid');
        let cellComponent = grid.children[this.y].children[this.x];
        cellComponent.innerHTML = '';
   }

   displayIcon () {

     let grid = document.getElementById('Grid');
     let cellComponent = grid.children[this.y].children[this.x];
     var text = document.createElement("span")
     text.innerHTML = this.direction;
     cellComponent.appendChild(text);

     /*if(this.direction === DIRECTIONS.EAST ){
         this.direction = DIRECTIONS.SOUTH
     }
     else if(this.direction === DIRECTIONS.SOUTH ){
         this.direction = DIRECTIONS.WEST
     }
     else if(this.direction === DIRECTIONS.WEST ){
         this.direction = DIRECTIONS.NORTH
     }
     else {
         this.direction = DIRECTIONS.EAST
     }*/
   }

   moveRight () {
        this.removeIcon();
        if(this.direction === DIRECTIONS.EAST ){
            this.direction = DIRECTIONS.SOUTH
        }
        else if(this.direction === DIRECTIONS.SOUTH ){
            this.direction = DIRECTIONS.WEST
        }
        else if(this.direction === DIRECTIONS.WEST ){
            this.direction = DIRECTIONS.NORTH
        }
        else {
            this.direction = DIRECTIONS.EAST
        }
        //update css here
        this.displayIcon();
   }

   moveForward () {
   this.removeIcon();
        if(this.x === 0 && this.direction === DIRECTIONS.NORTH){
                this.moveRight();
        }
        else if(this.y === 0 && this.direction === DIRECTIONS.WEST){
                this.moveRight();
        }
        else if(this.y === 9 && this.direction === DIRECTIONS.EAST){
                this.moveRight();
        }
        else if(this.x === 9 && this.direction === DIRECTIONS.SOUTH){
                this.moveRight();
        }
        else {
                //Not hitting the wall
                if(this.direction === DIRECTIONS.EAST ){
                    this.y = this.y+1;
                }
                else if(this.direction === DIRECTIONS.SOUTH ){
                    this.x = this.x+1;
                }
                else if(this.direction === DIRECTIONS.WEST ){
                    this.y = this.y-1;
                }
                else {
                    this.x = this.x-1;
                }
                //update css here
                //update css here
                this.displayIcon();
        }

   }
}

const onMoveForwardClick = (move, e) => {
        move.moveForward();
        console.log("After move Forward",move);
}

const onMoveRightClick = (move, e) => {
        move.moveRight();
        console.log("After right move",move);
}

const appendCell = (component, cellId) => {
    var cell = document.createElement("div");
    cell.id = cellId;
    cell.className = "Cell";
    component.appendChild(cell);
}

const appendColumn = (component, colId) => {
    var column = document.createElement("div");
    column.id = colId;
    column.className = "Column";
    for(let i=0;i<10;i++){
      appendCell(column, colId+i);
    }
    component.appendChild(column);
}

const gridOnLoad = (e) => {

    let grid = document.getElementById('Grid');
    for(let i=0;i<10;i++){
      appendColumn(grid, i);
    }

    let move = new Move();
    move.displayIcon();

    console.log("Initial ",move);
     //register events
     document.getElementById('moveRight').addEventListener('click', onMoveRightClick.bind(this, move));
     document.getElementById('moveForward').addEventListener('click', onMoveForwardClick.bind(this, move));
}
