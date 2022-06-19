/**@module PathFinding */ 
import Index from "./Index";
import Pellet from "./Pellet";

/**
 * Algorithm for finding the shortest path in two dimensions.
 * @param board reference board used to determine where u can and cant move
 * @param startIndex index of a place, where you start
 * @param endIndex index of a place, where you finish
 * @returns an array of path indexes or false is path doesn't exist
 */
export default function a(board:Array<Array<Pellet|boolean>>, startIndex:Index, endIndex:Index):Array<Index>|false{
    let field:Array<Array<number>> = [];

    let maxLength = board.length*board[0].length+2
    for(let y=0; y<board.length+2; y++){
        field.push([])
        for(let x=0; x<board[0].length+2; x++){
            if(y==0 || y==board.length+1){
                field[y].push(-1)
            }
            else if(x==0 || x==board[0].length+2){
                field[y].push(-1)
            }
            else if(board[y-1][x-1]!=false){
                field[y].push(-1)
            }
            else{
                field[y].push(maxLength)
            }
        }
    }

    let currentIndex:Index = new Index(startIndex.x+1, startIndex.y+1)
    let indexStack:Array<Index> = [currentIndex]
    endIndex = new Index(endIndex.x+1, endIndex.y+1)
    
    if(field[endIndex.y][endIndex.x] == -1){return false}
    let steps:number = 0
    let found:boolean = false
    
    while(true){
        steps++
        let newIndexes:Array<Index> = []
        indexStack.forEach(index=>{
            if(field[index.y][index.x+1]>steps){
                let newIndex = new Index(index.x+1, index.y)
                field[newIndex.y][newIndex.x] = steps
                if(newIndex.x == endIndex.x && newIndex.y == endIndex.y){found = true}
                newIndexes.push(newIndex)
            }
            if(field[index.y+1][index.x]>steps){
                let newIndex = new Index(index.x, index.y+1)
                field[newIndex.y][newIndex.x] = steps
                if(newIndex.x == endIndex.x && newIndex.y == endIndex.y){found = true}
                newIndexes.push(newIndex)
            }
            if(field[index.y][index.x-1]>steps){
                let newIndex = new Index(index.x-1, index.y)
                field[newIndex.y][newIndex.x] = steps
                if(newIndex.x == endIndex.x && newIndex.y == endIndex.y){found = true}
                newIndexes.push(newIndex)
            }
            if(field[index.y-1][index.x]>steps){
                let newIndex = new Index(index.x, index.y-1)
                field[newIndex.y][newIndex.x] = steps
                if(newIndex.x == endIndex.x && newIndex.y == endIndex.y){found = true}
                newIndexes.push(newIndex)
            }
        })
        if(newIndexes.length==0){break}
        else if(found){break}
        indexStack = newIndexes
    }

    if(found){
        let path:Array<Index>=[new Index(endIndex.x-1, endIndex.y-1)]
        let pathIndex = endIndex
        while(steps>0){
            if(field[pathIndex.y][pathIndex.x+1]<steps && field[pathIndex.y][pathIndex.x+1]>0){
                pathIndex = new Index(pathIndex.x+1, pathIndex.y)
                path.unshift(new Index(pathIndex.x-1, pathIndex.y-1)) 
            }
            else if(field[pathIndex.y+1][pathIndex.x]<steps && field[pathIndex.y+1][pathIndex.x]>0){
                pathIndex = new Index(pathIndex.x, pathIndex.y+1)
                path.unshift(new Index(pathIndex.x-1, pathIndex.y-1))
            }
            else if(field[pathIndex.y][pathIndex.x-1]<steps && field[pathIndex.y][pathIndex.x-1]>0){
                pathIndex = new Index(pathIndex.x-1, pathIndex.y)
                path.unshift(new Index(pathIndex.x-1, pathIndex.y-1))
            }
            else if(field[pathIndex.y-1][pathIndex.x]<steps && field[pathIndex.y-1][pathIndex.x]>0){
                pathIndex = new Index(pathIndex.x, pathIndex.y-1)
                path.unshift(new Index(pathIndex.x-1, pathIndex.y-1))
            }
            steps--
        }
        return path
    }
    return false  
}