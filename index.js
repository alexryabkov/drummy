const playingCls = "playing";
const padCls = "pad";
const pads = document.querySelectorAll(`.${padCls}`);
let activePadMouse;

const modifierKeyActive = (e) =>
  e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;

const playSound = (key) => {
  const audio = document.querySelector(`audio[data-key="${key}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
};

const activatePadKeyboard = (e) => {
  if (e.repeat) return;
  const key = e.key;
  const pad = document.querySelector(`.${padCls}[data-key="${key}"]`);
  if (pad && !modifierKeyActive(e)) {
    pad.classList.add(playingCls);
    playSound(key);
  }
};

const deactivatePadKeyboard = (e) => {
  if (e.repeat) return;
  const pad = document.querySelector(`.${padCls}[data-key="${e.key}"]`);
  if (pad) pad.classList.remove(playingCls);
};

const activatePadMouse = (e) => {
  if (e.button !== 0) return;
  const pad = e.currentTarget;
  if (!modifierKeyActive(e)) {
    activePadMouse = pad;
    pad.classList.add(playingCls);
    playSound(pad.dataset.key);
  }
};

const deactivatePadMouse = (e) => {
  if (e.button !== 0) return;
  activePadMouse?.classList.remove(playingCls);
};

window.addEventListener("keydown", activatePadKeyboard);
window.addEventListener("keyup", deactivatePadKeyboard);
pads.forEach((pad) => {
  pad.addEventListener("mousedown", activatePadMouse);
});
window.addEventListener("mouseup", deactivatePadMouse);
