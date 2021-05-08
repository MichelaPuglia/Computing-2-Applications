/**
 * This worksheet adapts the final question of Exam 1 of Computing 1 2020/21.
 * Here you should complete each of the functions as they are specified.
 * Of course, this time, the code is in Javascript.
 *
 * Original Python Code and Exam, Becky Stewart @TheLeadingZero.
 */
const Exam = Object.create(null);

// Lists

// Write a function that returns a list containig every third item in
// the original list starting with the first item.
//    for example:
//      an input list of [1,2,3,4,5,6,7,8]
//      returns [1,4,7]
Exam.every_third = function (array) {
    /* Function that returns a new array containing every third item of
    the input array.*/

    //create a new array to return
    let newarray = [];

    //iterate through the list
    for (let i = 0; i < array.length - 1; i++){
        //check if the index is divisible by 3
        if (i % 3 === 0){
            //if the index is divisble by 3 add is to the new array
            newarray.push(array[i]);
        }
    }
    return newarray; //return the new array
};



// Strings

// Write a function that concatenates two sentences passed as inputs.
// The returned string is the first word from the first sentence,
// then the first word from the second sentence, alternating back forth.
// If the sentences are not the same number of words, a "ValueError" is thrown.
//    for example:
//       the input sentences "the cow jumped over the moon" and
//                            "jack and jill went up the"
//       returns "the jack cow and jumped jill over went the up moon the"
Exam.merge_sentences = function (sent1, sent2) {
    /* Function which concatenates two sentences passed as inputs. The
    new sentence alternates each word from the two input strings, only if the
    sentences are of the same length.*/

    //convert the string into lists where each word is an item
    let word_list1 = sent1.split(" ");
    let word_list2 = sent2.split(" ");

    // check if the sentences are of the same length
    if (word_list1.length !== word_list2.length){
        throw "ValueError";
    }

    //create a new array
    let word_list3 = [];

    //iterate through each word in the sentences and add them to the empty list
    for (let i = 0; i < word_list1.length; i++){
        word_list3.push(word_list1[i]);
        word_list3.push(word_list2[i]);
    }

    //return the new array as string
    let sent3 = word_list3.join(" ")
    return sent3;
};

// Write a function that returns the number of lowercase letters in
// input string.
//     for example:
//          the input "sPonGe bOb"
//          returns 6
Exam.lowercase_count = function (inputStr) {
    /*Function which returns the num of lowercase letters in an input string.*/

    //create a counter and i = 0
    let counter = 0;

    //iterate through each letter in the string
    for (let i = 0; i < inputStr.length; i++){
        if (inputStr[i] === inputStr[i].toLowerCase()){
            counter += 1;
        }
    }
    return counter;
};

// Objects

// Write a function that returns the longest a key in the input object
// whose keys are all strings.
Exam.longest_key = function (inputObj) {
    /*Function which returns the longest key in the input dictionary.
    The keys are all strings.*/

    //Create an array with the object keys
    let KeyList = Object.keys(inputObj);

    //set a variable for the maximum length
    let maxLen = 0;

    //set a variable for the string with maximum length
    let result;

    //iterate through each key in the list
    for (let i = 0; i < KeyList.length; i++){
        // check for the length of the key which is > the length of var maxLen
        if (KeyList[i].length > maxLen){
            //set the maxLen to the length of the biggest item
            let maxLen = KeyList[i].length;
            //set the result equal to the item with the biggest value
            result = KeyList[i];
        }
    }
    return result;
};



// Write a function that returns the largest value that is an even value in the
// input dictionary whose values are all whole numbers.
Exam.value_greatest_even = function (inputObject) {
    /*Function that returns the largest value that is an even value in the
    input dictionary whose values are all whole numbers.*/

    //create an array with the object values
    let obj_values = Object.values(inputObject);

    //create an empty array for the even numbers
    let even_nums = [];

    //loop through the object and push all even numbers into the list
    for (let i = 0; i < obj_values.length; i++){
        if (obj_values[i] % 2 === 0){
            even_nums.push(obj_values[i])
        }
    }
    return Math.max(...even_nums);
};



// Arguments

// Write a function with two input arguments "username" and "location".
// The function should return text "Hello, {name}, how is {location}?".
//
// The username argument should not be set to a default,
// but the location argument should default to "London".
Exam.greeting = function (username, location= "London") {
    /*Function which has two input arguments 'username' and 'location'. The
    function returns the text 'Hello, {name}, how is {location}?'. The default
    location argument is London.*/
    return "Hello, " + username + ", how is " + location + "?";
};


// Write a function three input arguments,
// the first one, x, is required and the second two are
// the following keywords with default values:
//     scalar with a default of 1
//     offset with a default of 0
// The function returns the calculation x * scalar + offset for the input x
// if the output value of the calculation is positive, otherwise it returns 0.
Exam.floor_line = function (num, scalar = 1, offset = 0) {
    /* Function takes three input arguments, the first one is required and the
    other two aren't. The function returns the calculation num * scalar + offset
    for the input num if the output value of the calculation is positive,
    otherwise it returns zero. */

    //check if the calculation is positive
    if ((num * scalar + offset) >0){
        //return the calculation if it is
        return (num * scalar + offset)
    }
    //if it isn't return zero
    return 0;
};

export default Object.freeze(Exam);
