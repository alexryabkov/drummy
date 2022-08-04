import ModeButtons from "components/ModeButtons/ModeButtons";
import Tempo from "components/Tempo/Tempo";
import "./styles/Settings.scss";

function Settings() {
  return (
    <div className="settings">
      <ModeButtons />
      <Tempo />
    </div>
  );
}

export default Settings;
