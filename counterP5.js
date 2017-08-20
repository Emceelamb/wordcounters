var txt;
var count = {};
var keys = [];

function preload(){
  // load text file
  txt = loadStrings('data/artist-statement_v2.txt');
}

function setup() {

  // create tokens frome text file
  // joins text into string
  var allwords = txt.join("\n");
  // splits by spaces, punctuations
  var tokens = allwords.split(/\W+/);
  console.log(tokens);

  // gets the count of words
  for (var i = 0; i < tokens.length; i++){
    // converts to lowercase
    var word = tokens[i].toLowerCase();
    if(count[word] === undefined) {
      count[word] = 1;

      // creates dictionary of keys from new words
      keys.push(word);


    } else {
      count[word] += 1;
    }
  }

  // sorts key
  keys.sort(compare);

  function compare(a,b) {
    var countA=count[a];
    var countB=count[b];
    return countB-countA;
  }

  // displays count
  for(var i = 0; i<keys.length;i++){
    var key = keys[i];
    createDiv(keys[i]+ ": " + count[key]);
  }

}


function draw(){

}
