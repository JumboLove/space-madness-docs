export {};

interface ClipboardButton extends HTMLButtonElement {
  dataset: {
    clipboardCopy: string;
  };
}

const clipboardButtons: NodeListOf<ClipboardButton> = document.querySelectorAll(
  "[data-clipboard-copy]"
);
clipboardButtons.forEach((btn) => {
  initButton(btn);
});

function initButton(btn: ClipboardButton) {
  btn.addEventListener("click", () => copyToClipboard(btn));
}

function copyToClipboard(btn: ClipboardButton) {
  console.log("button clicked");
  // Get the parent element with attribute data-code-block
  const parentElement = btn.parentElement?.closest("[data-code-block]");
  if (!parentElement) {
    console.error("Parent element with data-code-block attribute not found");
    return;
  }

  // Get the <code> block
  const codeElement = parentElement.querySelector("code");
  if (!codeElement) {
    console.error("Child <code> element not found");
    return;
  }

  // Get the <code> text content
  const codeText = codeElement.textContent;
  if (!codeText) {
    console.warn("Empty <code> block, no text to copy to clipboard");
    return;
  }

  // Copy to clipboard, update the button, then reset after 2 seconds
  navigator.clipboard.writeText(codeText).then(
    () => {
      setButtonCopied(btn);
      setTimeout(() => {
        resetButton(btn);
      }, 2000);
    },
    (err) => {
      console.log("failed to copy", err.mesage);
    }
  );
}

// TODO
function setButtonCopied(btn: ClipboardButton) {
  console.log("set copied");
}

// TODO
function resetButton(btn: ClipboardButton) {
  console.log("reset btn");
}
