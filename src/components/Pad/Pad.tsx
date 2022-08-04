import React, { useState } from "react";
import "./styles/Pad.scss";

type Props = {
  keyboardKey: string;
  file: string;
};

function Pad({ keyboardKey, file }: Props) {
  const [active, setActive] = useState(false);
  const audio = new Audio(file);

  function activate() {
    setActive(true);
    audio.currentTime = 0;
    audio.play();
  }

  function deactivate() {
    setActive(false);
  }

  // function handleKeyDown(e: React.KeyboardEvent<HTMLButtonElement>) {
  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.repeat) return;
    console.log("e.key =>", e.key);
    console.log("keyboard =>", keyboardKey);
    if (e.key === keyboardKey) {
      activate();
    }
  }

  // function handleKeyUp(e: React.KeyboardEvent<HTMLButtonElement>) {
  function handleKeyUp(e: React.KeyboardEvent) {
    if (e.key === keyboardKey) {
      deactivate();
    }
  }

  return (
    <div
      onMouseDown={activate}
      onMouseUp={deactivate}
      onMouseLeave={deactivate}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      className={active ? "pad playing" : "pad"}
      data-key={keyboardKey}
    >
      {keyboardKey}
    </div>
  );
}

export default Pad;
