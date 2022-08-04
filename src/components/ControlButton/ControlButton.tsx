import "./styles/ControlButton.scss";

type Props = {
  extraClsName?: string;
  iconCode?: string;
  caption?: string;
};

function ControlButton({ extraClsName = "", iconCode = "", caption = "" }: Props) {
  return (
    <button className={("control-btn " + extraClsName).trim()}>
      <span>{iconCode}</span>
      {caption}
    </button>
  );
}

export default ControlButton;
