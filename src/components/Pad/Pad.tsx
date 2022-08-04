import { useEffect, useState } from "react";
import { useMemo } from "react";
import { useCallback } from "react";

import "./styles/Pad.scss";

type Props = {
  boundKey: string;
  file: string;
};

function Pad({ boundKey, file }: Props) {
  const [active, setActive] = useState(false);
  const audio = useMemo(() => new Audio(file), [file]);

  const activatePad = useCallback(
    (activate: boolean) => {
      setActive(activate);
      if (activate) {
        audio.currentTime = 0;
        audio.play();
      }
    },
    [audio]
  );

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.repeat) return;
      if (e.type === "keydown" && boundKey === e.key) {
        activatePad(true);
      } else {
        activatePad(false);
      }
    },
    [activatePad, boundKey]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    document.addEventListener("keyup", handleKey);
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.removeEventListener("keyup", handleKey);
    };
  }, [handleKey]);

  return (
    <div
      onMouseDown={() => activatePad(true)}
      onMouseUp={() => activatePad(false)}
      onMouseLeave={() => activatePad(false)}
      className={active ? "pad playing" : "pad"}
    >
      {boundKey}
    </div>
  );
}

export default Pad;
