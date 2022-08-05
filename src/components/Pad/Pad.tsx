import React, { useEffect, useState } from "react";
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

  const modifierKeyActive = useCallback(
    (e: KeyboardEvent | React.MouseEvent) => e.altKey || e.ctrlKey || e.metaKey || e.shiftKey,
    []
  );

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
      if (boundKey === e.key && !modifierKeyActive(e)) {
        e.type === "keydown" ? activatePad(true) : activatePad(false);
      }
    },
    [activatePad, boundKey, modifierKeyActive]
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
    <button
      onMouseDown={(e: React.MouseEvent) => !modifierKeyActive(e) && activatePad(true)}
      onMouseUp={() => activatePad(false)}
      onMouseLeave={() => activatePad(false)}
      className={active ? "pad pad-playing" : "pad"}
    >
      {boundKey}
    </button>
  );
}

export default Pad;
