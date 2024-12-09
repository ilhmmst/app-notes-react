import "./Notes.css";

import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoIosAdd, IoMdClose } from "react-icons/io";

import { Link } from "react-router-dom";
import { useState } from "react";

import NotesItem from "../NotesItem/NotesItem";
// import dummyNotes from "../../components/dummy_notes";

const Notes = ({ notes }) => {
  const [showSearch, setShowSearch] = useState(false);

  const [text, setText] = useState("");

  const [filteredNotes, setFilteredNotes] = useState(notes);

  const handleSearch = () => {
    setFilteredNotes(
      notes.filter((note) => {
        if (note.title.toLowerCase().match(text.toLocaleLowerCase())) {
          return note;
        }
      })
    );
  };

  return (
    <section className="main-container-notes">
      <h2>My Notes</h2>
      <header className="notes-header">
        {!showSearch && (
          <Link to="/create-note" className="add-notes-btn">
            <IoIosAdd className="add-notes" />
          </Link>
        )}
        {showSearch && (
          <input
            type="text"
            placeholder="Keyword..."
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              handleSearch();
            }}
          />
        )}
        <button onClick={() => setShowSearch((prevState) => !prevState)}>
          {showSearch ? (
            <IoMdClose className="btn-search" />
          ) : (
            <FaMagnifyingGlass className="btn-search" />
          )}
        </button>
      </header>
      {filteredNotes.length === 0 && <p className="not-found">Belum ada catatan</p>}
      <div className="notes-item">
        {filteredNotes.map((notes) => (
          <NotesItem key={notes.id} notes={notes} />
        ))}
      </div>
    </section>
  );
};

export default Notes;
