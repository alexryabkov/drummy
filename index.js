let notAllowedKeyActive = false;

const playSound = (keyCode) => {
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
};

const highlightPadMouse = (e) => {
  const cls = "playing";
  const pad = e.currentTarget;
  if (e.button !== 0) {
    return;
  }
  if (pad.classList.contains(cls)) {
    return;
  }
  pad.classList.add(cls);
  playSound(pad.dataset.key);
};

const highlightPadKeyboard = (e) => {
  const cls = "playing";
  const keyCode = e.keyCode;
  const pad = document.querySelector(`.pad[data-key="${keyCode}"]`);
  if (!pad) {
    notAllowedKeyActive = e.type === "keydown";
    console.log(notAllowedKeyActive);
    return;
  }
  if (!notAllowedKeyActive && !pad.classList.contains(cls)) {
    pad.classList.add(cls);
    playSound(keyCode);
  }
};

const turnOffPads = () => {
  notAllowedKeyActive = false;
  const pads = document.querySelectorAll(`.pad`);
  pads.forEach((instr) => instr.classList.remove("playing"));
};

window.addEventListener("keydown", highlightPadKeyboard);
window.addEventListener("keyup", turnOffPads);
window.addEventListener("mouseup", turnOffPads);
const pads = document.querySelectorAll(".pad");
pads.forEach((instr) => {
  instr.addEventListener("mousedown", highlightPadMouse);
});
