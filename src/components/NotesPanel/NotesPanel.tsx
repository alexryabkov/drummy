import Note from "components/Note/Note";
import "./styles/NotesPanel.scss";

function Notes() {
  const numOfNotes = 16;
  const groups: JSX.Element[] = [];

  for (let i = 0; i < numOfNotes; i++) {
    groups.push(<Note key={`note-${i + 1}`} />);
  }

  return <div className="notes">{groups}</div>;
}

export default Notes;
