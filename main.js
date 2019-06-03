var texts = ["games", "cinematics", "assets", "environments", "prototypes"];
var currentTextIndex = 0;
var word = "";
var wordIndex = 0;

function typeWriter() {
	if (wordIndex < word.length) {
		document.getElementById("typingtext").innerHTML += word.charAt(wordIndex);
		wordIndex++;
		setTimeout(typeWriter, 100);
	}
}

function nextWord() {
	document.getElementById("typingtext").innerHTML = "";

	wordIndex = 0;
	word = texts[currentTextIndex];
	typeWriter();

	currentTextIndex++;
	if (currentTextIndex > texts.length -1) {
		currentTextIndex = 0;
	}
	console.log(texts[currentTextIndex]);

	setTimeout(nextWord, 4000);
}

nextWord()