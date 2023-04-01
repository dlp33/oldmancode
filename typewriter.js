const text = "OldManCode";
const commandText = document.querySelector(".command-text");
let i = 0;

function typeWriter() {
  if (i < text.length) {
    commandText.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 150); /* Adjust the delay as needed */
  }
}

typeWriter();
