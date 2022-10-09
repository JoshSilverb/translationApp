var input = document.getElementById("input");
var output = document.getElementById("output");
var readButton = document.getElementById("readButton");

var input_string

var translations = ["word1", "word2", "word3"]
input.addEventListener("input", function() {
    input_string = input.nodeValue;
    output.innerText = translations[Math.floor(Math.random() * translations.length)]
})

function speak(speech) {
    let utterance = new SpeechSynthesisUtterance(speech);
    speechSynthesis.speak(utterance);
}

readButton.addEventListener("click", function() {
    console.log("Button clicked")
    speak(output.innerText)
})