var fs  = require ('fs');
var file = 'data/artist-statement_v2.txt';

// reads file
fs.readFile(file,'utf8', function(err, data){
  if(err) throw err;
  // does all the following functions!

  var tokens = splitByWords(data);
  var count = createWordMap(tokens);
  var finalWordsArray = sortCount(count);
  console.log(finalWordsArray);
  console.log('The word "' + finalWordsArray[0].name + '" appears the most in the file ' +
    finalWordsArray[0].total + ' times');
});

// split words by spaces;
function splitByWords(text){
  var tokens = text.split(/\s+/);
  return tokens;
}

// start counting
function createWordMap(tokens){
  // creates count object
  var count = {};

  // checks token against count obj
  tokens.forEach(function (key) {
    if(count.hasOwnProperty(key)) {
      count[key]++;
    } else {
      count[key]=1;
    }
  });
  return count;
}

// sorts count
function sortCount(count){
  var finalWordsArray = [];
  finalWordsArray = Object.keys(count).map(function(key){
    return {
      name: key,
      total: count[key]
    };
  });
  finalWordsArray.sort(function(a,b) {
    return b.total - a.total;
  });
  return finalWordsArray;

}
