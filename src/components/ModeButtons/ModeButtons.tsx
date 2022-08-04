import ControlButton from "components/ControlButton/ControlButton";
import "./styles/ModeButtons.scss";

function ModeButtons() {
  return (
    <div className="mode-btns">
      <ControlButton extraClsName="run-btn" iconCode="&#9654;&nbsp;" caption="Run" />
      <ControlButton extraClsName="select-mode-btn" iconCode="&#9898;&nbsp;" caption="Select" />
      <ControlButton extraClsName="clear-btn" iconCode="X&nbsp;" caption="Clear" />
    </div>
  );
}

export default ModeButtons;
