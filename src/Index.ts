interface Point{
    x:number
    y:number
}


/** Klasa generująca indeks w tablicy dwuwymiarowej */
export default class Index implements Point{

    x:number
    y:number

    constructor(x:number, y:number){
        this.x=x
        this.y=y
    }

    /** Funkcja zwracająca kopię Indeksu */
    copy(){
        return new Index(this.x, this.y)
    }

}