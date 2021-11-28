let notAllowedKeyActive = false;

const playSound = (keyCode) => {
  const audio = document.querySelector(`audio[data-key="${keyCode}"][data-enabled="true"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
};

const toggleClass = (e, pad) => {
  if (["keydown", "mousedown"].includes(e.type) && !notAllowedKeyActive && !pad.classList.contains("playing")) {
    pad.classList.add("playing");
  } else if (["keyup", "mouseup"].includes(e.type)) {
    pad.classList.remove("playing");
  }
};

const handleKeyboard = (e) => {
  const keyCode = e.keyCode;
  const pad = document.querySelector(`.pad[data-key="${keyCode}"]`);
  if (!pad) {
    notAllowedKeyActive = e.type === "keydown";
    return;
  }
  if (e.type === "keydown" && !pad.classList.contains("playing")) {
    playSound(keyCode);
  }
  toggleClass(e, pad);
};

const handleMouse = (e) => {
  const pad = e.currentTarget;
  toggleClass(e, pad);
  if (e.type === "mousedown") {
    playSound(pad.dataset.key);
  }
};

const handleDrumkitSelect = (e) => {
  const drumKitCls = "drum-kit";
  const drumKitSelectedCls = "drum-kit-selected";
  const newDrumKit = e.target;
  if (!newDrumKit.classList.contains(drumKitCls)) {
    return;
  }
  const drumKits = document.querySelectorAll(`.${drumKitCls}`);
  drumKits.forEach((dk) => dk.classList.remove(drumKitSelectedCls));
  newDrumKit.classList.add(drumKitSelectedCls);
  const soundsDir = newDrumKit.id;
  const audioElements = document.querySelectorAll("audio");
  audioElements.forEach((ae) => (ae.dataset.enabled = ae.src.includes(soundsDir)));
};

const setPadsCaption = () => {
  const currentKit = document.querySelector(".drum-kit-selected");
  console.log(currentKit.dataset.dirname);
};

window.addEventListener("keydown", handleKeyboard);
window.addEventListener("keyup", handleKeyboard);
document.querySelector("#drum-kit-list").addEventListener("click", handleDrumkitSelect);
const drumPads = document.querySelectorAll(".pad");
drumPads.forEach((drumPad) => {
  drumPad.addEventListener("mousedown", handleMouse);
  drumPad.addEventListener("mouseup", handleMouse);
});
