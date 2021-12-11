const playingCls = "playing";
const padCls = "pad";
const pads = document.querySelectorAll(`.${padCls}`);
const modifierKeyActive = (e) =>
  e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;

const playSound = (key) => {
  const audio = document.querySelector(`audio[data-key="${key}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
};

const turnOnPadKeyboard = (e) => {
  if (e.repeat) return;

  const key = e.key;
  const pad = document.querySelector(`.${padCls}[data-key="${key}"]`);
  if (pad && !modifierKeyActive(e)) {
    pad.classList.add(playingCls);
    playSound(key);
  }
};

const turnOffPadKeyboard = (e) => {
  if (e.repeat) return;

  const pad = document.querySelector(`.${padCls}[data-key="${e.key}"]`);
  if (pad) pad.classList.remove(playingCls);
};

const turnOnPadMouse = (e) => {
  if (e.button !== 0) return;

  const pad = e.currentTarget;
  if (!modifierKeyActive(e)) {
    pad.classList.add(playingCls);
    playSound(pad.dataset.key);
  }
};

const turnOffPadMouse = (e) => {
  console.log(e.currentTarget);
  if (e.button !== 0) return;
  e.stopPropagation();
  e.currentTarget.classList.remove(playingCls);
};

const turnOffAllPads = (e) => {
  if (e.button !== 0 || e.currentTarget.classList?.includes(padCls)) return;
  pads.forEach((pad) => pad.classList.remove(playingCls));
};

window.addEventListener("keydown", turnOnPadKeyboard);
window.addEventListener("keyup", turnOffPadKeyboard);
pads.forEach((pad) => {
  pad.addEventListener("mousedown", turnOnPadMouse);
  pad.addEventListener("mouseup", turnOffPadMouse);
});
window.addEventListener("mouseup", turnOffAllPads);
