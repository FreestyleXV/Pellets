/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/sound.mp3":
/*!***********************!*\
  !*** ./src/sound.mp3 ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"sound.mp3\");\n\n//# sourceURL=webpack://typescript/./src/sound.mp3?");

/***/ }),

/***/ "./src/Board.ts":
/*!**********************!*\
  !*** ./src/Board.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index */ \"./src/Index.ts\");\n/* harmony import */ var _Pellet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pellet */ \"./src/Pellet.ts\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ \"./src/data.ts\");\n/* harmony import */ var _PathFinding__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PathFinding */ \"./src/PathFinding.ts\");\nvar __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\n\r\n\r\n\r\n\r\nvar sound = __webpack_require__(/*! ./sound.mp3 */ \"./src/sound.mp3\");\r\n/** Klasa generująca tablicę po podaniu dwóch odpowiednich divów */\r\nvar Board = /** @class */ (function () {\r\n    function Board(body, queue) {\r\n        /** Tablica referencyjna dla tablicy */\r\n        this.board = [[false, false, false, false, false, false, false, false, false], [false, false, false, false, false, false, false, false, false], [false, false, false, false, false, false, false, false, false], [false, false, false, false, false, false, false, false, false], [false, false, false, false, false, false, false, false, false], [false, false, false, false, false, false, false, false, false], [false, false, false, false, false, false, false, false, false], [false, false, false, false, false, false, false, false, false], [false, false, false, false, false, false, false, false, false]];\r\n        /** Tło tablicy */\r\n        this.canvas = document.createElement(\"canvas\");\r\n        /** Poczekalnia dla kulek */\r\n        this.queue = [];\r\n        /** Zmienna blokująca ruch zaraz po wykonaniu poprzedniego */\r\n        this.timeout = true;\r\n        this.audio = new Audio(\"./sound.mp3\");\r\n        this.audio.load();\r\n        this.body = body;\r\n        this.canvas.setAttribute(\"id\", \"canvas\");\r\n        this.canvas.width = 360;\r\n        this.canvas.height = 360;\r\n        this.body.appendChild(this.canvas);\r\n        this.canvas.addEventListener('click', this.clickOnBoard.bind(this));\r\n        this.canvas.addEventListener('mousemove', this.moveOnBoard.bind(this));\r\n        this.queueBody = queue;\r\n        console.log(this.board);\r\n    }\r\n    /** Funkcja tworząca Kulkę i dodająca ją do poczekalni */\r\n    Board.prototype.createPellet = function () {\r\n        if (this.queue.length >= 3) {\r\n            return;\r\n        }\r\n        var randomColorIndex = Math.floor(Math.random() * (_data__WEBPACK_IMPORTED_MODULE_2__.Colors.length));\r\n        var pellet = new _Pellet__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this, _data__WEBPACK_IMPORTED_MODULE_2__.Colors[randomColorIndex]);\r\n        this.queue.push(pellet);\r\n        this.queueBody.appendChild(pellet.body);\r\n    };\r\n    /** Funkcja generująca pierwszą kulkę z poczekalni na polu */\r\n    Board.prototype.generatePellet = function () {\r\n        var pellet = this.queue.shift();\r\n        var freeBoardIndexes = [];\r\n        for (var y = 0; y < 9; y++) {\r\n            for (var x = 0; x < 9; x++) {\r\n                if (this.board[y][x] === false) {\r\n                    freeBoardIndexes.push(new _Index__WEBPACK_IMPORTED_MODULE_0__[\"default\"](x, y));\r\n                }\r\n            }\r\n        }\r\n        if (freeBoardIndexes.length <= 0) {\r\n            return;\r\n        }\r\n        var randomIndex = freeBoardIndexes[Math.round(Math.random() * (freeBoardIndexes.length - 1))];\r\n        pellet.movePellet(randomIndex);\r\n        this.board[randomIndex.y][randomIndex.x] = pellet;\r\n        pellet.body.remove();\r\n        this.audio.loop = true;\r\n        this.body.appendChild(pellet.body);\r\n        pellet.body.addEventListener('click', this.clickOnPillet.bind(this, pellet));\r\n        pellet.body.style.top = pellet.index.y * 40 + \"px\";\r\n        pellet.body.style.left = pellet.index.x * 40 + \"px\";\r\n    };\r\n    Board.prototype.clickOnPillet = function (pellet) {\r\n        if (this.timeout) {\r\n            var ctx = this.canvas.getContext(\"2d\");\r\n            ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\r\n            if (this.clickedPellet) {\r\n                if (this.audio.play()) {\r\n                    this.audio.pause();\r\n                }\r\n                this.clickedPellet.body.style.borderWidth = \"5px\";\r\n                if (this.clickedPellet == pellet) {\r\n                    this.clickedPellet = null;\r\n                    return;\r\n                }\r\n            }\r\n            this.clickedPellet = pellet;\r\n            pellet.body.style.borderWidth = \"20px\";\r\n        }\r\n    };\r\n    Board.prototype.clickOnBoard = function (e) {\r\n        var _this = this;\r\n        if (e.target === e.currentTarget) {\r\n            if (this.clickedPellet) {\r\n                var clickedIndex = new _Index__WEBPACK_IMPORTED_MODULE_0__[\"default\"](Math.floor(e.offsetX / 40), Math.floor(e.offsetY / 40));\r\n                if ((0,_PathFinding__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this.board, this.clickedPellet.index, clickedIndex)) {\r\n                    this.clickedPellet.movePellet(clickedIndex);\r\n                    this.clickedPellet.body.style.borderWidth = \"5px\";\r\n                    this.clickedPellet = null;\r\n                    if (this.audio.play()) {\r\n                        this.audio.pause();\r\n                    }\r\n                    // this.clickedPellet.body.click()\r\n                    this.timeout = false;\r\n                    setTimeout(function () {\r\n                        var ctx = _this.canvas.getContext('2d');\r\n                        ctx.clearRect(0, 0, _this.canvas.width, _this.canvas.height);\r\n                        _this.generatePellet();\r\n                        _this.createPellet();\r\n                        _this.generatePellet();\r\n                        _this.createPellet();\r\n                        _this.generatePellet();\r\n                        _this.createPellet();\r\n                        _this.timeout = true;\r\n                    }, 1000);\r\n                }\r\n            }\r\n        }\r\n    };\r\n    /** Funkcja wykonująca się podczas ruchu myszki w obrębie tablicy */\r\n    Board.prototype.moveOnBoard = function (e) {\r\n        var _this = this;\r\n        if (this.clickedPellet) {\r\n            var mouseIndex_1 = new _Index__WEBPACK_IMPORTED_MODULE_0__[\"default\"](Math.floor(e.offsetX / 40), Math.floor(e.offsetY / 40));\r\n            var path = (0,_PathFinding__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this.board, this.clickedPellet.index, mouseIndex_1);\r\n            // console.log(path)\r\n            var ctx_1 = this.canvas.getContext('2d');\r\n            ctx_1.clearRect(0, 0, this.canvas.width, this.canvas.height);\r\n            if (path) {\r\n                // let ctx = this.canvas.getContext('2d');\r\n                // ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\r\n                path.forEach(function (index) {\r\n                    // ctx.fillRect(index.x*40,index.y*40,40,40)\r\n                    ctx_1.fillStyle = _this.clickedPellet.color.fill;\r\n                    ctx_1.beginPath();\r\n                    if (index.x == mouseIndex_1.x && index.y == mouseIndex_1.y) {\r\n                        ctx_1.fillStyle = _this.clickedPellet.color.border;\r\n                        ctx_1.arc(index.x * 40 + 20, index.y * 40 + 20, 20, 0, 2 * Math.PI);\r\n                    }\r\n                    else {\r\n                        ctx_1.arc(index.x * 40 + 20, index.y * 40 + 20, 10, 0, 2 * Math.PI);\r\n                    }\r\n                    ctx_1.fill();\r\n                });\r\n            }\r\n            else {\r\n                ctx_1.clearRect(0, 0, this.canvas.width, this.canvas.height);\r\n            }\r\n        }\r\n    };\r\n    __decorate([\r\n        f\r\n    ], Board.prototype, \"clickOnPillet\", null);\r\n    __decorate([\r\n        jaja\r\n    ], Board.prototype, \"clickOnBoard\", null);\r\n    return Board;\r\n}());\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Board);\r\n/** Dekorator funkcji klikania w kulkę */\r\nfunction f(ob, name, desc) {\r\n    //console.log(ob, name, desc);\r\n    /*\r\n    desc.value = function (param: string) {\r\n        console.log(param);\r\n    }*/\r\n    var oryg = desc.value;\r\n    desc.value = function () {\r\n        var args = [];\r\n        for (var _i = 0; _i < arguments.length; _i++) {\r\n            args[_i] = arguments[_i];\r\n        }\r\n        if (this.timeout) {\r\n            this.audio.play();\r\n        }\r\n        return oryg.apply(this, args);\r\n    };\r\n}\r\nfunction jaja(ob, name, desc) {\r\n    //console.log(ob, name, desc);\r\n    /*\r\n    desc.value = function (param: string) {\r\n        console.log(param);\r\n    }*/\r\n    var oryg = desc.value;\r\n    desc.value = function () {\r\n        var args = [];\r\n        for (var _i = 0; _i < arguments.length; _i++) {\r\n            args[_i] = arguments[_i];\r\n        }\r\n        var jajo = document.getElementById(\"jaja\");\r\n        jajo.innerText += _data__WEBPACK_IMPORTED_MODULE_2__.Jaja;\r\n        return oryg.apply(this, args);\r\n    };\r\n}\r\n\n\n//# sourceURL=webpack://typescript/./src/Board.ts?");

/***/ }),

/***/ "./src/Index.ts":
/*!**********************!*\
  !*** ./src/Index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/** Klasa generująca indeks w tablicy dwuwymiarowej */\r\nvar Index = /** @class */ (function () {\r\n    function Index(x, y) {\r\n        this.x = x;\r\n        this.y = y;\r\n    }\r\n    /** Funkcja zwracająca kopię Indeksu */\r\n    Index.prototype.copy = function () {\r\n        return new Index(this.x, this.y);\r\n    };\r\n    return Index;\r\n}());\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);\r\n\n\n//# sourceURL=webpack://typescript/./src/Index.ts?");

/***/ }),

/***/ "./src/PathFinding.ts":
/*!****************************!*\
  !*** ./src/PathFinding.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ a)\n/* harmony export */ });\n/* harmony import */ var _Index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index */ \"./src/Index.ts\");\n/**@module PathFinding */\r\n\r\n/**\r\n * Algorithm for finding the shortest path in two dimensions.\r\n * @param board reference board used to determine where u can and cant move\r\n * @param startIndex index of a place, where you start\r\n * @param endIndex index of a place, where you finish\r\n * @returns an array of path indexes or false is path doesn't exist\r\n */\r\nfunction a(board, startIndex, endIndex) {\r\n    var field = [];\r\n    var maxLength = board.length * board[0].length + 2;\r\n    for (var y = 0; y < board.length + 2; y++) {\r\n        field.push([]);\r\n        for (var x = 0; x < board[0].length + 2; x++) {\r\n            if (y == 0 || y == board.length + 1) {\r\n                field[y].push(-1);\r\n            }\r\n            else if (x == 0 || x == board[0].length + 2) {\r\n                field[y].push(-1);\r\n            }\r\n            else if (board[y - 1][x - 1] != false) {\r\n                field[y].push(-1);\r\n            }\r\n            else {\r\n                field[y].push(maxLength);\r\n            }\r\n        }\r\n    }\r\n    var currentIndex = new _Index__WEBPACK_IMPORTED_MODULE_0__[\"default\"](startIndex.x + 1, startIndex.y + 1);\r\n    var indexStack = [currentIndex];\r\n    endIndex = new _Index__WEBPACK_IMPORTED_MODULE_0__[\"default\"](endIndex.x + 1, endIndex.y + 1);\r\n    if (field[endIndex.y][endIndex.x] == -1) {\r\n        return false;\r\n    }\r\n    var steps = 0;\r\n    var found = false;\r\n    var _loop_1 = function () {\r\n        steps++;\r\n        var newIndexes = [];\r\n        indexStack.forEach(function (index) {\r\n            if (field[index.y][index.x + 1] > steps) {\r\n                var newIndex = new _Index__WEBPACK_IMPORTED_MODULE_0__[\"default\"](index.x + 1, index.y);\r\n                field[newIndex.y][newIndex.x] = steps;\r\n                if (newIndex.x == endIndex.x && newIndex.y == endIndex.y) {\r\n                    found = true;\r\n                }\r\n                newIndexes.push(newIndex);\r\n            }\r\n            if (field[index.y + 1][index.x] > steps) {\r\n                var newIndex = new _Index__WEBPACK_IMPORTED_MODULE_0__[\"default\"](index.x, index.y + 1);\r\n                field[newIndex.y][newIndex.x] = steps;\r\n                if (newIndex.x == endIndex.x && newIndex.y == endIndex.y) {\r\n                    found = true;\r\n                }\r\n                newIndexes.push(newIndex);\r\n            }\r\n            if (field[index.y][index.x - 1] > steps) {\r\n                var newIndex = new _Index__WEBPACK_IMPORTED_MODULE_0__[\"default\"](index.x - 1, index.y);\r\n                field[newIndex.y][newIndex.x] = steps;\r\n                if (newIndex.x == endIndex.x && newIndex.y == endIndex.y) {\r\n                    found = true;\r\n                }\r\n                newIndexes.push(newIndex);\r\n            }\r\n            if (field[index.y - 1][index.x] > steps) {\r\n                var newIndex = new _Index__WEBPACK_IMPORTED_MODULE_0__[\"default\"](index.x, index.y - 1);\r\n                field[newIndex.y][newIndex.x] = steps;\r\n                if (newIndex.x == endIndex.x && newIndex.y == endIndex.y) {\r\n                    found = true;\r\n                }\r\n                newIndexes.push(newIndex);\r\n            }\r\n        });\r\n        if (newIndexes.length == 0) {\r\n            return \"break\";\r\n        }\r\n        else if (found) {\r\n            return \"break\";\r\n        }\r\n        indexStack = newIndexes;\r\n    };\r\n    while (true) {\r\n        var state_1 = _loop_1();\r\n        if (state_1 === \"break\")\r\n            break;\r\n    }\r\n    if (found) {\r\n        var path = [new _Index__WEBPACK_IMPORTED_MODULE_0__[\"default\"](endIndex.x - 1, endIndex.y - 1)];\r\n        var pathIndex = endIndex;\r\n        while (steps > 0) {\r\n            if (field[pathIndex.y][pathIndex.x + 1] < steps && field[pathIndex.y][pathIndex.x + 1] > 0) {\r\n                pathIndex = new _Index__WEBPACK_IMPORTED_MODULE_0__[\"default\"](pathIndex.x + 1, pathIndex.y);\r\n                path.unshift(new _Index__WEBPACK_IMPORTED_MODULE_0__[\"default\"](pathIndex.x - 1, pathIndex.y - 1));\r\n            }\r\n            else if (field[pathIndex.y + 1][pathIndex.x] < steps && field[pathIndex.y + 1][pathIndex.x] > 0) {\r\n                pathIndex = new _Index__WEBPACK_IMPORTED_MODULE_0__[\"default\"](pathIndex.x, pathIndex.y + 1);\r\n                path.unshift(new _Index__WEBPACK_IMPORTED_MODULE_0__[\"default\"](pathIndex.x - 1, pathIndex.y - 1));\r\n            }\r\n            else if (field[pathIndex.y][pathIndex.x - 1] < steps && field[pathIndex.y][pathIndex.x - 1] > 0) {\r\n                pathIndex = new _Index__WEBPACK_IMPORTED_MODULE_0__[\"default\"](pathIndex.x - 1, pathIndex.y);\r\n                path.unshift(new _Index__WEBPACK_IMPORTED_MODULE_0__[\"default\"](pathIndex.x - 1, pathIndex.y - 1));\r\n            }\r\n            else if (field[pathIndex.y - 1][pathIndex.x] < steps && field[pathIndex.y - 1][pathIndex.x] > 0) {\r\n                pathIndex = new _Index__WEBPACK_IMPORTED_MODULE_0__[\"default\"](pathIndex.x, pathIndex.y - 1);\r\n                path.unshift(new _Index__WEBPACK_IMPORTED_MODULE_0__[\"default\"](pathIndex.x - 1, pathIndex.y - 1));\r\n            }\r\n            steps--;\r\n        }\r\n        return path;\r\n    }\r\n    return false;\r\n}\r\n\n\n//# sourceURL=webpack://typescript/./src/PathFinding.ts?");

/***/ }),

/***/ "./src/Pellet.ts":
/*!***********************!*\
  !*** ./src/Pellet.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index */ \"./src/Index.ts\");\n\r\n/**@Pellets Pellets Klasa, która jest odpowiedzialna za generowanie kulki i operacje na niej */\r\nvar Pellet = /** @class */ (function () {\r\n    function Pellet(container, color) {\r\n        /** Indeks kulki */\r\n        this.index = new _Index__WEBPACK_IMPORTED_MODULE_0__[\"default\"](-1, -1);\r\n        /** Kod HTML kulki */\r\n        this.body = document.createElement('div');\r\n        this.container = container;\r\n        this.color = color;\r\n        this.body.style.backgroundColor = this.color.fill;\r\n        this.body.style.borderColor = this.color.border;\r\n        this.body.classList.add('pellet');\r\n    }\r\n    /**\r\n     *  Funnkcja odpowiedzialna za przenoszenie kulek na tablicy\r\n     *  @param index index miejsca, w które chcesz przenieść kulkę\r\n     */\r\n    Pellet.prototype.movePellet = function (index) {\r\n        if (this.index.x != -1) {\r\n            this.container.board[this.index.y][this.index.x] = false;\r\n        }\r\n        this.index = index;\r\n        this.container.board[this.index.y][this.index.x] = this;\r\n        this.body.style.left = this.index.x * 40 + \"px\";\r\n        this.body.style.top = this.index.y * 40 + \"px\";\r\n    };\r\n    return Pellet;\r\n}());\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pellet);\r\n\n\n//# sourceURL=webpack://typescript/./src/Pellet.ts?");

/***/ }),

/***/ "./src/data.ts":
/*!*********************!*\
  !*** ./src/data.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Colors\": () => (/* binding */ Colors),\n/* harmony export */   \"Jaja\": () => (/* binding */ Jaja)\n/* harmony export */ });\n/** Tablica kolorów kulek */\r\nvar Colors = [{ fill: \"#B7E4C7\", border: \"#1B4332\" }, { fill: \"#D2B7E5\", border: \"#6247AA\" }, { fill: \"#E9ECEF\", border: \"#343A40\" }, { fill: \"#FFCCD5\", border: \"#A4133C\" }, { fill: \"#ADE8F4\", border: \"#0077B6\" }, { fill: \"#FFF6CC\", border: \"#FFDD32\" }];\r\n/** Moje jajka, proszę nie dotykać */\r\nvar Jaja = \"🥚,🥚\";\r\n\n\n//# sourceURL=webpack://typescript/./src/data.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Board */ \"./src/Board.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\n\r\nvar board = new _Board__WEBPACK_IMPORTED_MODULE_0__[\"default\"](document.getElementById('board'), document.getElementById('queue'));\r\n/** Główna funkcja uruchomieniowa */\r\nfunction jaja() {\r\n    return __awaiter(this, void 0, void 0, function () {\r\n        return __generator(this, function (_a) {\r\n            board.createPellet();\r\n            board.createPellet();\r\n            board.createPellet();\r\n            board.generatePellet();\r\n            board.createPellet();\r\n            board.generatePellet();\r\n            board.createPellet();\r\n            board.generatePellet();\r\n            board.createPellet();\r\n            return [2 /*return*/];\r\n        });\r\n    });\r\n}\r\njaja();\r\n\n\n//# sourceURL=webpack://typescript/./src/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;