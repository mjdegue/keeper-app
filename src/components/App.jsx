import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import originalNotes from "../notes";
import CreateArea from "./CreateArea";

export default function App() {
  const [notes, setNotes] = React.useState(originalNotes);
  const [newNote, setNewNote] = React.useState({
    title: "",
    content: "",
  });

  function onNewNoteChanged(event) {
    const { name, value } = event.target;
    setNewNote((oldNote) => ({ ...oldNote, [name]: value }));
    console.log(newNote);
  }

  function addNewNote(event) {
    event.preventDefault();
    const note = newNote;
    setNewNote({
      title: "",
      content: "",
    });
    setNotes((notes) => [...notes, note]);
  }

  function deleteNote(index) {
    setNotes((oldNotes) => oldNotes.filter((value, aIndex) => aIndex != index));
  }

  return (
    <div>
      <Header />
      <CreateArea
        noteValue={newNote}
        onChange={onNewNoteChanged}
        addClicked={addNewNote}
      />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          delete={deleteNote}
        />
      ))}

      <Footer />
    </div>
  );
}
