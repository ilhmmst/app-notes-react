import "./EditNote.css";

import { FaReply, FaTrash } from "react-icons/fa6";

import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

import useCreateDate from "../../components/useCreateDate";

const EditNote = ({ notes, setNotes }) => {
  const { id } = useParams();
  const note = notes.find((item) => item.id === id);
  console.log(note);

  const [title, setTitle] = useState(note.title);
  const [details, setDetails] = useState(note.details);
  const date = useCreateDate();
  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();

    if (title && details) {
      const newNote = { ...note, title, details, date };

      const newNotes = notes.map((item) => {
        if (item.id === id) {
          item = newNote;
        }
        return item;
      });
      setNotes(newNotes);
    }
    navigate("/");
  };

  const handleDelete = () => {
    if (window.confirm("Apakah kamu yakin ingin menghapus notes ini?")) {
      const newNotes = notes.filter((item) => item.id !== id);

      setNotes(newNotes);
      navigate("/");
    }
  };

  return (
    <section className="main-container-edit-note">
      <header>
        <Link to="/">
          <FaReply className="btn-back" />
        </Link>
        <div className="edit-note-header">
          <h2>Edit Notes</h2>
          <div className="edit-note-header-btn">
            <button onClick={handleDelete}>
              <FaTrash className="btn-delete" />
            </button>
            <button onClick={handleForm}>Save</button>
          </div>
        </div>
      </header>
      <form className="edit-note-form" onSubmit={handleForm}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Note Details..."
          autofocus
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        ></textarea>
      </form>
    </section>
  );
};

export default EditNote;
