let sentence = [
  'The',
  'walrus',
  'danced',
  'through',
  'the',
  'trees',
  'in',
  'the',
  'light',
  'of',
  'the',
  'moon',
];

// Stacking Words
console.log("STACKING ================================");
function addExcitementStack (theWordArray) {
  let output = "";
  let exclaim = "!";

  for (let i = 0; i < sentence.length; i++) {
    let currentWord = sentence[i];
    output += " " + currentWord;
    console.log(output);
  }
}

addExcitementStack(sentence);


// Adding Conditions to the Loop
console.log("CONDITIONS ================================");
function addExcitementConditions (theWordArray) {
  let output = "";
  let exclaim = "!";

  for (let i = 0; i < sentence.length; i++) {
    let currentWord = sentence[i];

    if (i % 3 == 2) {
      output += " " + currentWord + exclaim;
    } else {
      output += " " + currentWord;
    }

    console.log(output);
  }
}

addExcitementConditions(sentence);


// Challenge
console.log("CHALLENGE ================================");
function addExcitementChallenge (theWordArray) {
  let output = "";
  let exclaim = "";

  for (let i = 0; i < sentence.length; i++) {
    // debugger;
    let currentWord = sentence[i];

    if (i % 3 == 2) {
      exclaim += "!";
      output += " " + currentWord + exclaim;
    } else {
      output += " " + currentWord;
    }

    console.log(output);
  }
}

addExcitementChallenge(sentence);

      // output += " " + currentWord + exclaim.repeat(i / 2);
