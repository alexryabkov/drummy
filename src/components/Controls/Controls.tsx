import Logo from "components/Logo/Logo";
import PadPanel from "components/PadPanel/PadPanel";
import Settings from "components/Settings/Settings";
import "./styles/Controls.scss";

function Controls() {
  return (
    <div className="controls">
      <div>
        <Logo />
        <Settings />
      </div>
      <PadPanel />
    </div>
  );
}

export default Controls;
