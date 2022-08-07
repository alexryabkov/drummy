import Note from "components/Note/Note";
import { useEffect, useState } from "react";
import "./styles/NotesPanel.scss";

function Notes() {
  const notesInGroup = 16;
  const numOfGroups = 12;
  const groups: JSX.Element[] = [];
  const [playNoteId, setPlayNoteId] = useState(0);
  const tempo = 120; //beats per minute

  useEffect(() => {
    function updatePlayNoteId() {
      setPlayNoteId((playNoteId) => (playNoteId < notesInGroup - 1 ? playNoteId + 1 : 0));
    }

    updatePlayNoteId();
    const interval = setInterval(updatePlayNoteId, (1000 * 60) / tempo);
    return () => clearInterval(interval);
  }, []);

  for (let i = 0; i < numOfGroups; i++) {
    const notesGroup: JSX.Element[] = [];
    const groupClassName = i > 0 ? "notes notes-hidden" : "notes";
    for (let j = 0; j < notesInGroup; j++) {
      notesGroup.push(<Note key={`group-${i + 1}-note-${j + 1}`} playing={j === playNoteId} />);
    }

    groups.push(<div className={groupClassName}>{notesGroup}</div>);
  }

  return <>{groups}</>;
}

export default Notes;
