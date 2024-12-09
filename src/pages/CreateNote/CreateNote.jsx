import "./CreateNote.css";

import { FaReply } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import useCreateDate from "../../components/useCreateDate";

import { v4 as uuid } from "uuid";

const CreateNote = ({ setNotes }) => {
  const [title, setTitle] = useState();
  const [details, setDetails] = useState();
  const date = useCreateDate();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && details) {
      const note = { id: uuid(), title, details, date };
      console.log(note);

      setNotes((prevNotes) => [note, ...prevNotes]);

      navigate("/");
    }
  };
  return (
    <section>
      <header className="create-note-header">
        <Link to="/">
          <FaReply className="btn-back" />
        </Link>
        <div className="create-note-header-btn">
          <h2>Create Notes</h2>
          <button onClick={handleSubmit}>Save</button>
        </div>
      </header>
      <form className="form-note" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Note Details..."
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        ></textarea>
      </form>
    </section>
  );
};

export default CreateNote;
