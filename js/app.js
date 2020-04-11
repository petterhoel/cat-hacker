const editor = document.querySelector("#editor")

function focusEditor(event) {
  if (!editor || editor === document.activeElement) {
    return;
  }
  if (event.key.toLowerCase() === "f") {
    editor.focus();
  }
}

document.addEventListener("keyup", focusEditor)
