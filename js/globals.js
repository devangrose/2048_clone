var GRID_SIZE = 4;
var table = [];
var FOUR_CHANCE = 0.15;
var score = 0;

class Tile {
    constructor (element, value, coordinate) {
    this.value = value;
    this.elem = element;
    this.coordinate = coordinate;
    }
	// Doubles the value of the Tile 
    incrementValue () {
        this.value = this.value * 2;
        this.elem.childNodes[0].innerHTML = this.value;
        updateScore(this.value);
    }
	// Resets the value to blank state
	reset () {
		this.value = null;
		this.elem.childNodes[0].innerHTML = ' ';
	}
    setValue(val){
        this.value = val;
        this.elem.childNodes[0].innerHTML = val;
    }
}

Tile.prototype.toString = function tileToString (){
    return this.value;
};
