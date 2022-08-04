import ControlButton from "components/ControlButton/ControlButton";
import "./styles/Tempo.scss";

function Tempo() {
  return (
    <div className="tempo">
      <div className="display-caption">Tempo (bpm)</div>
      <div className="display-tempo-wrap">
        <ControlButton extraClsName="tempo-btn tempo-btn-down" iconCode="&#9650;" />
        <div className="display-tempo">000</div>
        <ControlButton extraClsName="tempo-btn" iconCode="&#9650;" />
      </div>
    </div>
  );
}

export default Tempo;
