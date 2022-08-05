import Pad from "components/Pad/Pad";
import "./styles/PadPanel.scss";

function PadPanel() {
  const soundKeysToFiles = [
    ["1", "/sounds/bass-drum.mp3"],
    ["2", "/sounds/snare-drum.mp3"],
    ["3", "/sounds/open-hh.mp3"],
    ["4", "/sounds/closed-hh.mp3"],
    ["q", "/sounds/crash.mp3"],
    ["w", "/sounds/ride.mp3"],
    ["e", "/sounds/clap.mp3"],
    ["r", "/sounds/cowbell.mp3"],
    ["a", "/sounds/bongo.mp3"],
    ["s", "/sounds/tom1.mp3"],
    ["d", "/sounds/tom2.mp3"],
    ["f", "/sounds/tom3.mp3"],
  ];

  let pads: JSX.Element[] = [];
  for (let [boundKey, file] of soundKeysToFiles) {
    pads.push(<Pad key={`pad-${boundKey}`} boundKey={boundKey} file={file} />);
  }

  return <div className="pad-panel">{pads}</div>;
}

export default PadPanel;
