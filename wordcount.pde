IntDict counts;

int count;

void setup() {
  frameRate(8);
  size(600,600);
  background(33);
  counts = new IntDict();
  String[] lines = loadStrings("data/artist-statement_v2.txt");
  String allwords = join(lines, "\n");
  String[] tokens = splitTokens(allwords, "\n ,;.?!");
  for(int i = 0; i <tokens.length-1; i++){
    String word = tokens[i].toLowerCase();
    if(counts.hasKey(word)){
      counts.increment(word);
    } else {
      counts.set(word,1);
    }

  }

}

void draw(){
  background(33,1);
    println(counts);
  String[] keys = counts.keyArray();
  for(String w : keys) {
    int count = counts.get(w);
    textSize(count*5);
    float x = random(width);
    float y = random(height);
    text(w, x, y);
  }
  
}