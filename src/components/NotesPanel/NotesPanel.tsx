import "./styles/NotesPanel.scss";

function Notes() {
  const numOfRows = 2;
  const notesPerRow = 8;

  const rows: JSX.Element[] = [];
  for (let i = 0; i < numOfRows; i++) {
    const row: JSX.Element[] = [];
    for (let j = 0; j < notesPerRow; j++) {
      row.push(<button key={`note-${j + i + 1}`} className="note" />);
    }
    rows.push(
      <div key={`note-row-${i + 1}`} className="note-row">
        {row}
      </div>
    );
  }

  return <div className="notes">{rows}</div>;
}

export default Notes;
