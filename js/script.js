//back logic
var translate=function(phrase){
  var words = phrase.split(" ");
  var vowels = ["a", "e", "i", "o", "u"];
  var result = "";
  for(var i = 0; i < words.length; i++){
    var letters = words[i].split("");

    if(vowels.indexOf(letters[0]) !== -1){
      result += letters.join("") + "ay";
    } else {
        for(var li=0;  li<letters.length; li++ ){
          var firstTwo = letters[0] + letters[1];
          if(vowels.indexOf(letters[0]) === -1 && firstTwo.match(/^qu/i) === null){
            letters.push(letters.shift());
          } else if (letters[0].toLowerCase() === "q" && letters[1] == "u"){
            letters.push(letters.shift());
            letters.push(letters.shift());
            li = letters.length;
          } else {
            li = letters.length;
          }
        }
        result += letters.join("") + "ay";
    }
    if(i !== words.length - 1){
      result += " "
    }
  };
  return result;
}

var piglatin = function(phrase){
  var words = phrase.split(" ");
  var result = [];
  for(i=0; i< words.length; i++){
    result.push(pigword(words[i]) + "ay ")
  }
  return result;
}

var pigword = function(word, recur = false){

  var letters = word.split("");
  if(word.match(/^qu/i)){
    letters.push(letters.shift());
    letters.push(letters.shift());
    return letters.join("");
  } else if(word.match(/^[aeiou]/i)) {
      return letters.join("");
  } else {
      for(i = 0; i < word.search(/[aeiou]/); i++){
        letters.push(letters.shift());
      }
      return letters.join("");
  }
}

$(function(){
  // var phrase = "Dog";
  $("#piglatin").submit(function(event){
    event.preventDefault();
    $("#result").text(piglatin($("#pigtext").val()));
  });

});
