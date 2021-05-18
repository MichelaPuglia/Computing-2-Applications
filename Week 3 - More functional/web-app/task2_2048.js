const game_2048 = Object.create(null);

const board = [ [1, 1, 2, 2],
                [1, 0, 0, 1],
                [0, 0, 1, 1],
                [0, 2, 2, 3] ];

const row_flip = (row) => row.slice().reverse();

const h_flip = (board) => board.map(row_flip);

const strip_zeros = (row) => row.filter((x) => x !== 0);

const pad_zeros = (row) => row.concat([0, 0, 0, 0]).slice(0, 4);

const combine_tiles = function (row, new_row = []) {
    if (row.length === 0) {
        return new_row;
    }
    if (row.length === 1) {
        return new_row.concat(row[0]);
    }
    const [a, b, ...rest] = row;
    if (a === b) {
        return combine_tiles(rest, new_row.concat(a + 1));
    } else {
        return combine_tiles([b].concat(rest), new_row.concat(a));
    }
};

const transpose = (array) => array[0].map(
    (ignore, colIndex) => array.map((row) => row[colIndex])
);

const compose = function (...fs) {
    return function (value) {
        return fs.reduceRight(function (a, f) {
            return f(a);
        }, value);
    };
};


const row_left = compose(pad_zeros, combine_tiles, strip_zeros);

game_2048.left = (board) => board.map(row_left);

game_2048.right = compose(h_flip, game_2048.left, h_flip);

game_2048.up = compose(transpose, game_2048.left, transpose);

game_2048.down = compose(transpose, game_2048.right, transpose);

/* Question 1 */

//function which takes no arguments and returns a new empty board

const EmptyBoard = () => [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
];

/* Question 2 */

//score function which takes a board and returns the score for that board
//0 tiles score zero, all other numbered tiles score 2**n points.

//function which removes all the zeroes from a row
const StripZeros = function (row){
    return row.filter((x) => x !== 0);
};

//function which calculates the score of a numbered tile
//creates an array where each element is the score
const TilesScore = function (row) {
    return row.map( (x) => x**2);
};

//function which add the row with the scores together
const SumTileScore = function (row) {
    return row.reduce((a, b) => a + b, 0);
};

//function which calculates the score of a row
//first it strips the zeros
//then creates an array with the score of the numbered tiles
//then adds it all together
const RowScoreCalculator = function (row){
    return SumTileScore(TilesScore(StripZeros(row)));
};

//function which calculates the entire score of a board
const TotalScoreCalculator = function(board){
    return SumTileScore(board.map(RowScoreCalculator));
};


/* Question 3 */

//function that returns true if there are moves that can be made on the board
//false if there are no more moves left.

//test board which has no valid moves
const board_no = [  [1, 2, 1, 2],
                    [2, 3, 2, 3],
                    [1, 2, 1, 2],
                    [2, 3, 2, 3]
];

//function which checks if two boards are equal
function EqualBoards(board1, board2) {
    //JSON.stringify => method converts a JavaScript object or value to a
    //JSON string
    if (JSON.stringify(board1) === JSON.stringify(board2)) {
        return true;
    } return false
};

//function iterates through all the moves
//returns false if the board after the move is the same as before
//i.e. false => no moves
//else returns true meaning there are valid moves
const ValidMoves = function (board) {
    if (EqualBoards(game_2048.left(board), board) === true) {
        if (EqualBoards(game_2048.right(board), board) === true) {
            if (EqualBoards(game_2048.up(board), board) === true) {
                if (EqualBoards(game_2048.down(board), board) === true) {
                    return false;
                }
            }
        }
    } else {
        return true;
    }
};


/* Question 4 */

//function returns an array of the indices of all the free spaces (zeros)
//on the board.

//iterates through the rows and makes a list of the indices of the zeroes
const Indices = function(row) {
    return row.reduce((c, v, i) => v === 0 ? c.concat(i) : c, []);
}

//function which maps all the indices on each row
const FreeSpaces = function(board) {
    return board.map(Indices)
}


/* Question 5 */

//return a new board with a tile of value placed at indices.
//Make sure this function doesn't edit the old board.

//function takes board, indices and value to replace into the board
const add_tile = function(board, index1, index2, value) {
    let new_board = board;
    new_board[index1][index2] = value;
    return new_board;
};

export default Object.freeze(game_2048);

debugger;
