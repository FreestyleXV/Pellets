import Board from "./Board"
import { Color } from "./data"
import Index from "./Index"

interface pelletInterface{
    readonly container:Board;
    index:Index;
    readonly color:Color;
    body:HTMLDivElement;
    movePellet(i:Index):void
}

interface Move{
    (object: any, index: Index): void;
}



/**@Pellets Pellets Klasa, która jest odpowiedzialna za generowanie kulki i operacje na niej */
export default class Pellet implements pelletInterface{

    /** Kontener dla kulki */
    readonly container:Board
    /** Indeks kulki */
    public index:Index = new Index(-1, -1)
    /** Kolor kulki */
    readonly color:Color
    /** Kod HTML kulki */
    public body:HTMLDivElement = document.createElement('div')

    constructor(container:Board, color:Color){
        this.container = container
        this.color=color
        this.body.style.backgroundColor = this.color.fill;
        this.body.style.borderColor = this.color.border;
        this.body.classList.add('pellet')
    }

    /**
     *  Funnkcja odpowiedzialna za przenoszenie kulek na tablicy
     *  @param index index miejsca, w które chcesz przenieść kulkę
     */
    movePellet(index:Index){
        if(this.index.x != -1){this.container.board[this.index.y][this.index.x] = false}
        this.index=index
        this.container.board[this.index.y][this.index.x] = this
        this.body.style.left = `${this.index.x*40}px`
        this.body.style.top = `${this.index.y*40}px`

    }
}