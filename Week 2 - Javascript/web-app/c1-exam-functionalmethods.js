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

    //filter out by ignoring items divisible by 3
    return array.filter((ignore, k) => k % 3 === 0);
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
    const word_list1 = sent1.split(" ");
    const word_list2 = sent2.split(" ");

    // check if the sentences are of the same length
    if (word_list1.length !== word_list2.length) {
        throw "ValueError";
    }

    //flatmap alows you to alternates the words in the two arrays
    //v is the vth element of word_list1
    //word_list2[k] is the kth element of word_list2
    //.join(" ") combines this new array into a string
    return word_list1.flatmap((v, k) => [v, word_list2[k]]).join(" ");
};

//Freddies code below - runs without errors but mine above doesn't
//Can't spot the difference between them though
Exam.merge_sentences = function (s1, s2) {
    const s1_words = s1.split(" ");
    const s2_words = s2.split(" ");
    if (s1_words.length !== s2_words.length) {
        throw "ValueError";
    }
    return s1_words.flatMap((v, k) => [v, s2_words[k]]).join(" ");
};


// Write a function that returns the number of lowercase letters in
// input string.
//     for example:
//          the input "sPonGe bOb"
//          returns 6
Exam.lowercase_count = function (inputStr) {
    /*Function which returns the num of lowercase letters in an input string.*/

    //separate the string into an array where each word is an element
    let arrayOfStr = inputStr.split("");

    //filter out the elements of the array which are lowercase in a new array
    let lowerCases = arrayOfStr.filter(
        (v) => v === v.toLowerCase());

    //return the length of the new array
    return lowerCases.length;
};



// Objects

// Write a function that returns the longest a key in the input object
// whose keys are all strings.
Exam.longest_key = function (inputObj) {
    /*Function which returns the longest key in the input dictionary.
    The keys are all strings.*/

    //Create an array with the object keys
    let KeyList = Object.keys(inputObj);

    //reduce (i.e. remove) the values in the array
    //if the acc.length >= curVal.length is true return the accumulator
    //if not then return the current Value and make it the new accumulator
    //.reduce keeps on iterating through this once it gets the longest key
    let LongKey = KeyList.reduce(
        function (acc, curVal) {
            return ((acc.length >= curVal.length) ? acc : curVal);
        }
    );

    //return the longest key
    return LongKey;
};


// Write a function that returns the largest value that is an even value in the
// input dictionary whose values are all whole numbers.
Exam.value_greatest_even = function (inputObject) {

    //create an array with the object values
    let obj_values = Object.values(inputObject);

    //filter the even numbers out of the array into a new array
    let even_nums = obj_values.filter((v) => v % 2 === 0);

    return Math.max(...even_nums);
};



// Arguments

// Write a function with two input arguments "username" and "location".
// The function should return text "Hello, {name}, how is {location}?".
//
// The username argument should not be set to a default,
// but the location argument should default to "London".
Exam.greeting = function (username, location = "London") {
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

    //Return the maximum value out of the two options
    return Math.max(0, (num * scalar + offset));
};

export default Object.freeze(Exam);