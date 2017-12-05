var words = ["java", "javascript", "git", "webdevelopment", "football", "basketball", "volleyball", "swimming", "handball"];

var word = words[Math.floor(Math.random() * words.length)];

var answers = [];
for (var i = 0; i< word.length; i++) {
    answers[i] = "_";
}

var restOfLetters = word.length;

while (restOfLetters > 0) {
 alert(answers.join(" "));
    
    var shot = prompt("Please pass the letter or click Anuluj to finish the game.");
    if (shot === null) {
        break;
    } else if (shot.length !== 1) {
        alert("Please give only one letter.");
    } else {
        for (var j = 0; j < word.length; j++){
            if (word[j] === shot) {
                answers[j] = shot;
                 restOfLetters--;
            }
        }
    }
}

alert(answers.join(" "));
alert("Great job! quested word is " + word);