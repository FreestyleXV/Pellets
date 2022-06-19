import Board from "./Board";

let board:Board = new Board(document.getElementById('board'), document.getElementById('queue'));

/** Główna funkcja uruchomieniowa */
async function jaja() {
    board.createPellet()
    board.createPellet()
    board.createPellet()
    board.generatePellet()
    board.createPellet()
    board.generatePellet()
    board.createPellet()
    board.generatePellet()
    board.createPellet()
}

jaja()


