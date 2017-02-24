WS.connect();
function load() {
  document.querySelector("button").addEventListener("click", function () {
    WS.send("recognizer_loop:utterance", {"utterances": [document.querySelector("input").value]})
  });
  document.querySelector("input").addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
      WS.send("recognizer_loop:utterance", {"utterances": [e.target.value]});
      e.target.value = "";
    }
  });
}

document.addEventListener("DOMContentLoaded", load);
