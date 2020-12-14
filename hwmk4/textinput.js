// Name: Sinai Park
// User ID: sp46
// Date: 9/26/2020
// CS336 @ Calvin University


//initializes elements by id into variables
var myText = document.getElementById("textbox");
var charCount = document.getElementById("charcount");
var wordCount = document.getElementById("wordcount");


myText.addEventListener("keyup", function () {
  var characters = myText.value.split('');
  //ternary operator for conditional statement of length of characters
  var char_plural = (characters.length == 1) ? " character" : " characters";
  //modifies the character count based on the text splited with ''
  charCount.innerText = characters.length + char_plural;
});

//function for counting words
function count_word(val) {
  var wom = val.match(/\S+/g);
  return {
    //ternary operator for conditional statement
    words: wom ? wom.length : 0
  };
}

myText.addEventListener("input", function () {
  //calling count_word function for var num
  var num = count_word(this.value);
  //ternary operator for conditional statement
  var word_plural = (num.words == 1) ? " word" : " words";
  //display the word count
  wordCount.innerText = num.words + word_plural;

});