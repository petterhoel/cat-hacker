const editor = document.querySelector("#editor")
const main = document.querySelector("main")
const cheatsOnlyToggle = document.querySelector('#cheats-only-toggle')

function focusEditor(event) {
  if (!editor || editor === document.activeElement) {
    return;
  }
  if (event.key.toLowerCase() === "f") {
    editor.focus();
  }
}

function toggleMainVisibility({target: {checked}}) {
  if (checked) {
    main.classList.add('hidden')
  } else {
    main.classList.remove('hidden')
  }
}

document.addEventListener("keyup", focusEditor)
cheatsOnlyToggle.addEventListener('change', toggleMainVisibility);
