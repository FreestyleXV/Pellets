/** Interfejs koloru kulki. Zawiera on kolor obramówki oraz wypełnienia */
export interface Color{
    /**Kolor wypełnienia kulki */
    fill:string
    /**Kolor obramówki kulki */
    border:string
}

/** Tablica kolorów kulek */
export const Colors:Array<Color> = [{fill:"#B7E4C7", border:"#1B4332"}, {fill:"#D2B7E5", border:"#6247AA"}, {fill:"#E9ECEF", border:"#343A40"}, {fill:"#FFCCD5", border:"#A4133C"}, {fill:"#ADE8F4", border:"#0077B6"}, {fill:"#FFF6CC", border:"#FFDD32"}]

/** Moje jajka, proszę nie dotykać */
export const Jaja:string = "🥚,🥚"