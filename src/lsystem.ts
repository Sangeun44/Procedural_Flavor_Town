// A class that represents a symbol replacement rule to
// be used when expanding an L-system grammar.
function Rule(prob: number, str: String) {
	this.probability = prob; // The probability that this Rule will be used when replacing a character in the grammar string
	this.successorString = str; // The string that will replace the char that maps to this Rule
}

 export default class Lsystem{
	axiom : string;
	iterations: number;

	constructor(axiom: string, iterations: number) {
	// default LSystem
		this.axiom = axiom;
		this.iterations = iterations; 
	}

//this will return the expanded string in array form
	createPath = function() {
    var startString = this.axiom;
    var endString = "";
    var it = this.iterations;
    for(var i = 0; i < it; ++i) {
		endString = this.processString(startString);
    	startString = endString;
     }
     return endString;
  }
  
  	processString = function(array: string) {
    var newString = "";
    for(var i = 0; i < array.length; ++i) {
      var c = array.charAt(i);
      newString = newString + (this.applyRules(c));
    }
    return newString;
  }
  
 	applyRules = function(c : string) {
    var newString = "";
    if(c == 'X') {
      var mapped = this.grammar['X']; //get string attached
      newString = mapped;
   }
   else {
      newString = c;
    }
    return newString;
  }
}