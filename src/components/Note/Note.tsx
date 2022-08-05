import { useState } from "react";
import "./styles/Note.scss";

function Note() {
  const [selected, setSelected] = useState(false);
  return (
    <button
      className={selected ? "note note-selected" : "note"}
      onClick={() => setSelected(!selected)}
    />
  );
}

export default Note;
