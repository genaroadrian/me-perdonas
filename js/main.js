function onLoad() {}

window.onload = onLoad;

const messages = [
  "¿Estas segura?",
  "¿Estas completamente segura?",
  "Pero ¿Segura segura?",
  "Por favor :c",
  "Por favor por favor...",
  "Andale perdoname",
  "Deja de dar click aqui >:v",
  "Ya perdoname!",
  "No puedes decir que no!",
  "Añañe amorchi?",
];
const confirmButton = document.getElementById("confirm-button");
const cancelButton = document.getElementById("cancel-button");
const questionContainer = document.getElementById("question");
const buttonsContainer = document.getElementById("buttons");
const image = document.getElementById("img");
const successContainer = document.getElementById("success");
let index = 0;
let width = 100;
let height = 50;
let fontSize = 20;
let cancelWidth = 100;
let cancelHeight = 50;

confirmButton.addEventListener("click", onConfirmClick);
cancelButton.addEventListener("click", onCancelClick);

function onConfirmClick() {
  questionContainer.remove();
  buttonsContainer.remove();
  image.src = "./img/success.gif";
  successContainer.style.display = "block";
}

function onCancelClick() {
  cancelButton.innerText = messages[index] ?? messages.at(-1);
  index++;
  if (index < 12) {
    width += 20;
    height += 10;
    fontSize += 2;
    cancelWidth -= 1;
    cancelHeight -= 1;
    confirmButton.style.width = `${width}px`;
    confirmButton.style.height = `${height}px`;
    confirmButton.style.fontSize = `${fontSize}px !important`;
    cancelButton.style.minWidth = `${cancelWidth}px`;
    cancelButton.style.minHeight = `${cancelHeight}px`;
  }
  confirmButton.classList.add("animacion");
  setTimeout(() => {
    confirmButton.classList.remove("animacion");
  }, 500);
}
