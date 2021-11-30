let notAllowedKeyActive = false;

const playSound = (keyCode) => {
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
};

const highlightInstrumentMouse = (e) => {
  const instrument = e.currentTarget;
  if (e.button !== 0) {
    return;
  }
  instrument.classList.add("playing");
  playSound(instrument.dataset.key);
};

const highlightInstrumentKeyboard = (e) => {
  const keyCode = e.keyCode;
  const instrument = document.querySelector(`.instrument[data-key="${keyCode}"]`);
  if (!instrument) {
    notAllowedKeyActive = e.type === "keydown";
    console.log(notAllowedKeyActive);
    return;
  }
  if (!notAllowedKeyActive) {
    instrument.classList.add("playing");
    playSound(keyCode);
  }
};

const turnOffInstruments = () => {
  notAllowedKeyActive = false;
  const instruments = document.querySelectorAll(`.instrument`);
  instruments.forEach((instr) => instr.classList.remove("playing"));
};

window.addEventListener("keydown", highlightInstrumentKeyboard);
window.addEventListener("keyup", turnOffInstruments);
window.addEventListener("mouseup", turnOffInstruments);
const instruments = document.querySelectorAll(".instrument");
instruments.forEach((instr) => {
  instr.addEventListener("mousedown", highlightInstrumentMouse);
});
