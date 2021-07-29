const solution = (arr, max) => {

    let res=arr;
    for(let i=0;i<max && !isEmpty(res);i++){
        print(res);
        res = conwayIteration(res);
    }
    print(res);
}

const isEmpty = (arr) => {
    let rows = arr.length;
    if(rows === 0)
     return true;
    let cols = arr[0].length;
    for(let x=0;x<rows;x++){
        for(let y=0;y<cols;y++){
            if(arr[x][y] === 1) return false;
        }
    }
    return true;
}

const print = (arr) => {
    let rows = arr.length;
    if(rows === 0)
     return;
    let cols = arr[0].length;
    for(let x=0;x<rows;x++){
        let str = "";
        for(let y=0;y<cols;y++){
            str += arr[x][y];
        }
        console.log(str);
    }
    console.log();
}

class Pair {
 constructor(curr, count) {
    this.curr = curr;
    this.count = count;
 }
}

const conwayIteration = (arr) => {
    let rows = arr.length;
    let result = [];
    if(rows === 0)
     return result;

    const isSafe = (x, y) =>  x>=0&&x<rows&&y>=0&&y<cols;

    let cols = arr[0].length;

    let directions = [
     [-1, -1],
     [-1, 0],
     [-1, 1],
     [0, 1],
     [1, 1],
     [1, 0],
     [1, -1],
     [0, -1]
    ];
    for(let x=0;x<rows;x++){

        let row = [];

        for(let y=0;y<cols;y++){
           let numOfOnes = 0;
           for(let z=0;z<8;z++){
              let newX = x+directions[z][0];
              let newY = y+directions[z][1];
              if(isSafe(newX, newY) && arr[newX][newY] === 1){
                numOfOnes++;
              }
           }

           //store curr value and numOfOnes in result
           row.push(new Pair(arr[x][y], numOfOnes));
        }
        result.push(row);
    }
    //process result and return updated matrix
    let modifiedArr = [];
    for(let x=0;x<rows;x++){

            let row = [];
            for(let y=0;y<cols;y++){
                let element = result[x][y];
                let curr = element.curr;
                let count = element.count;

                if(curr === 1 && (count < 2 || count > 3)){
                    row.push(0);
                }
                else if(curr === 1 && (count === 2 || count === 3)){
                    row.push(curr);
                }
                else if(curr == 0 && count === 3){
                    row.push(1);
                }
                else {
                    row.push(0);
                }
            }
            modifiedArr.push(row);
    }
    return modifiedArr;
}

const input = [
    [0, 0, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0]
]

//1101 0110 0110 1010
//0000 1110 0110 0000

solution(input, 5);