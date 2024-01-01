import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Note from "./components/Note";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/notes").then((res) => {
      setNotes(res.data);
    });
  }, []);
  const handleChange = (e) => {
    setNewNote(e.target.value);
  };
  const addContact = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <>
      <h1>Phonebook</h1>
      <form onSubmit={addContact}>
        Name:
        <input
          type="text"
          value={newNote}
          placeholder="Your Name"
          onChange={handleChange}
        />
        <br />
        <button type="submit">add</button>
      </form>
      <h1>Numbers</h1>
      <div>
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </div>
    </>
  );
};

export default App;
