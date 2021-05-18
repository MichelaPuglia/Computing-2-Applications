/* Creating the connect 4 game */

const thisisaboard =  [[0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0]];

/* Question 1 */
//function which takes no arguments and returns a new empty board
const empty_board = Array(6).fill().map(() => Array(7).fill(0));

/* Question 2 */
/* This curried function takes a column index in its first call
takes board in its second and returns a new board which is the
current board after red has played a token in the
specified column.*/

// function which places the red piece in an column
// i.e. arr = [0, 0, 0, 0, 0, 0] => [0, 0, 0, 0, 0, "red"]
//or arr = [0, 0, 0, 0, 0, "blue"] => [0, 0, 0, 0, "red", "blue"]
const insert_piece_row = function (array) {
for (var i = array.length - 1; i >= 0; i--) {
        if (array[i] === 0) {
            array[i] = 'red';
            break
      } else if (array[5] === 0) {
          array[5] = 'red';
        }
    } return transpose(array)
}

const transpose = (array) => array[0].map(
    (ignore, colIndex) => array.map((row) => row[colIndex])
);


const red_move = function (i, board) {
    const testBoard = transpose(board);
    const insertPiece = testBoard.splice(i, 1, insert_piece_row(testBoard[i]));
    const final_board = transpose(insertPiece);
    return final_board;

};

debugger;
