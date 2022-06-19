import Index from "./Index";
import Pellet from "./Pellet";
import { Colors, Jaja } from "./data";
import a from "./PathFinding";
const sound = require("./sound.mp3")

interface Game{
    readonly body:HTMLElement;
}

interface BoardGame extends Game{
    board:Array<Array<boolean|Pellet>>;
}


/** Klasa generująca tablicę po podaniu dwóch odpowiednich divów */
export default class Board implements BoardGame{

    /** Tablica referencyjna dla tablicy */
    public board:Array<Array<boolean|Pellet>> = [[false , false, false, false, false, false, false, false, false],[false, false, false, false, false, false, false, false, false],[false , false, false, false, false, false, false, false, false],[false, false, false, false, false, false, false, false, false],[false , false, false, false, false, false, false, false, false],[false, false, false, false, false, false, false, false, false],[false , false, false, false, false, false, false, false, false],[false, false, false, false, false, false, false, false, false],[false , false, false, false, false, false, false, false, false]]
    /** Kod HTML tablicy */
    readonly body:HTMLElement
    /** Tło tablicy */
    private canvas:HTMLCanvasElement = document.createElement("canvas")
    /** Poczekalnia dla kulek */
    public queue:Array<Pellet> = []
    /** Kod HTML poczekalni */
    readonly queueBody:HTMLElement
    /** Aktualnie kliknięta kulka */
    public clickedPellet:Pellet
    /** Zmienna blokująca ruch zaraz po wykonaniu poprzedniego */
    private timeout:boolean = true;
    private audio:HTMLAudioElement = new Audio("./sound.mp3")

    constructor(body:HTMLElement, queue:HTMLElement){
        this.audio.load()
        this.body = body
        this.canvas.setAttribute("id", "canvas")
        this.canvas.width=360
        this.canvas.height=360
        this.body.appendChild(this.canvas)
        this.canvas.addEventListener('click', this.clickOnBoard.bind(this))
        this.canvas.addEventListener('mousemove', this.moveOnBoard.bind(this))
        this.queueBody = queue
        console.log(this.board)
    }

    /** Funkcja tworząca Kulkę i dodająca ją do poczekalni */
    public createPellet(){
        if(this.queue.length >= 3){return}
        let randomColorIndex = Math.floor(Math.random()*(Colors.length))
        let pellet:Pellet = new Pellet(this, Colors[randomColorIndex])
        this.queue.push(pellet)
        this.queueBody.appendChild(pellet.body)
    }

    /** Funkcja generująca pierwszą kulkę z poczekalni na polu */
    public generatePellet(){
        let pellet:Pellet = this.queue.shift()
        let freeBoardIndexes:Array<Index> = []
        for(let y=0;y<9;y++){
            for(let x=0;x<9;x++){
                if(this.board[y][x]===false){
                    freeBoardIndexes.push(new Index(x, y))
                }
            }
        }
        if(freeBoardIndexes.length <= 0){
            return
        }
        let randomIndex = freeBoardIndexes[Math.round(Math.random()*(freeBoardIndexes.length-1))]
        pellet.movePellet(randomIndex)
        this.board[randomIndex.y][randomIndex.x] = pellet
        pellet.body.remove()
        this.audio.loop = true
        this.body.appendChild(pellet.body)
        pellet.body.addEventListener('click', this.clickOnPillet.bind(this, pellet))
        pellet.body.style.top = `${pellet.index.y*40}px`
        pellet.body.style.left = `${pellet.index.x*40}px`
    }


    @f
    /** Funkcją wykonująca się podczas kliknięcia w kulkę */
    private clickOnPillet(pellet:Pellet){
        if(this.timeout){
            let ctx = this.canvas.getContext("2d")
            ctx.clearRect(0,0,this.canvas.width,this.canvas.height)
            if(this.clickedPellet){
                if(this.audio.play()){this.audio.pause()}
                this.clickedPellet.body.style.borderWidth="5px"
                if(this.clickedPellet == pellet){
                    this.clickedPellet = null
                return
                }            
            }
            this.clickedPellet = pellet
            pellet.body.style.borderWidth = "20px"
        }
    }

    @jaja
    /** Funkcja wykonująca się po kliknięciu w tablice */
    private clickOnBoard(e:MouseEvent){
        if(e.target === e.currentTarget){
            if(this.clickedPellet){
                
                let clickedIndex:Index = new Index(Math.floor(e.offsetX/40), Math.floor(e.offsetY/40))
                if(a(this.board, this.clickedPellet.index, clickedIndex)){
                    this.clickedPellet.movePellet(clickedIndex)
                    this.clickedPellet.body.style.borderWidth="5px"
                    this.clickedPellet = null
                    if(this.audio.play()){this.audio.pause()}
                    // this.clickedPellet.body.click()
                    this.timeout=false
                    setTimeout(()=>{
                        let ctx = this.canvas.getContext('2d');
                        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                        this.generatePellet()
                        this.createPellet()
                        this.generatePellet()
                        this.createPellet()
                        this.generatePellet()
                        this.createPellet()

                        this.timeout = true
                    }, 1000)
                    
                }
            }
        }
        
    }

    /** Funkcja wykonująca się podczas ruchu myszki w obrębie tablicy */
    private moveOnBoard(e:MouseEvent){
        if(this.clickedPellet){
            let mouseIndex:Index = new Index(Math.floor(e.offsetX/40), Math.floor(e.offsetY/40))
            let path:Array<Index>|boolean = a(this.board, this.clickedPellet.index, mouseIndex)
            // console.log(path)
            let ctx = this.canvas.getContext('2d');
            ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            if(path){
                // let ctx = this.canvas.getContext('2d');
                // ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                path.forEach(index => {
                    // ctx.fillRect(index.x*40,index.y*40,40,40)
                    
                    ctx.fillStyle = this.clickedPellet.color.fill
                    ctx.beginPath()
                    if(index.x == mouseIndex.x && index.y == mouseIndex.y){ctx.fillStyle = this.clickedPellet.color.border;ctx.arc(index.x*40+20, index.y*40+20, 20, 0, 2 * Math.PI);}
                    else{ctx.arc(index.x*40+20, index.y*40+20, 10, 0, 2 * Math.PI);}
                    ctx.fill()
                });
            }
            else{
                ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            }
        }
    }

    

}

/** Dekorator funkcji klikania w kulkę */
function f(ob: Object, name: string, desc: PropertyDescriptor) {
    //console.log(ob, name, desc);
 
    /*
    desc.value = function (param: string) {
        console.log(param);
    }*/
    let oryg = desc.value;
 
    desc.value = function (...args: any[]) {
        if(this.timeout){this.audio.play()}
        return oryg.apply(this, args);
    }
 
}

function jaja(ob: Object, name: string, desc: PropertyDescriptor) {
    //console.log(ob, name, desc);
 
    /*
    desc.value = function (param: string) {
        console.log(param);
    }*/
    let oryg = desc.value;
 
    desc.value = function (...args: any[]) {
        let jajo = document.getElementById("jaja")
        jajo.innerText += Jaja
        return oryg.apply(this, args);
    }
 
}