/* Creating the connect 4 game */

const thisisaboard =  [[0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 2, 0, 0],
                [0, 2, 0, 0, 1, 0, 0],
                [0, 1, 2, 1, 2, 0, 0]];

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

const red_move = function (i, board) {
    const testboard = transpose(board);
    const final_board = transpose(testboard.splice(i, 1, insert_piece_row(testboard[i])))
    return final_board;

}

// a two-dimensional array
var two_d = [[1,2,3],[4,5,6],[7,8,9]];

// take the third column of a matrix and insert 
const col3 = function (i, array){
    return array.map(function(value,index) { return value[i]; });
};

debugger;
