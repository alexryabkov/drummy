let notAllowedKeyActive = false;

const toggleClass = (e, pad) => {
  if (
    ["keydown", "mousedown"].includes(e.type) &&
    !notAllowedKeyActive &&
    !pad.classList.contains("playing")
  ) {
    pad.classList.add("playing");
  } else if (["keyup", "mouseup"].includes(e.type)) {
    pad.classList.remove("playing");
  }
};

const handleKeyboard = (e) => {
  console.log("--keyboard", e.type);
  const pad = document.querySelector(`.pad[data-key="${e.keyCode}"]`);
  if (!pad) {
    notAllowedKeyActive = e.type === "keydown";
    return;
  }
  toggleClass(e, pad);
};

const handleMouse = (e) => {
  if (e.button !== 0 || !e.target.classList.contains("pad")) {
    return;
  }
  toggleClass(e, e.target);
};

window.addEventListener("keydown", handleKeyboard);
window.addEventListener("keyup", handleKeyboard);
window.addEventListener("mousedown", handleMouse);
window.addEventListener("mouseup", handleMouse);
