function showLearningMaterial() {
    const content = document.getElementById('learning-content');
    content.innerHTML = "<p>Here you will learn alphabets and numbers with images!</p>";
}

function convertToSign() {
    const text = document.getElementById('textInput').value;
    const output = document.getElementById('signOutput');
    output.innerHTML = `<p>Showing signs for: ${text}</p>`;
}

function startSpeechRecognition() {
    const speechText = document.getElementById('speechText');

    if (!('webkitSpeechRecognition' in window)) {
        speechText.innerHTML = "Your browser does not support speech recognition.";
        return;
    }

    const recognition = new webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.onresult = function(event) {
        speechText.innerHTML = "You said: " + event.results[0][0].transcript;
    };
    recognition.start();
}
