import { useState } from "react";
import "./styles/Note.scss";

type Props = {
  playing: boolean;
};

function Note({ playing }: Props) {
  const [selected, setSelected] = useState(false);

  function noteClass() {
    return playing ? "note note-playing" : selected ? "note note-selected" : "note";
  }

  return <button className={noteClass()} onClick={() => setSelected(!selected)} />;
}

export default Note;
