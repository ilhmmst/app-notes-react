import "./NotesItem.css";
import { Link } from "react-router-dom";

const NotesItem = ({ notes }) => {
  return (
    <>
      <Link to={`/edit-note/${notes.id}`} className="container-notes-item">
        <h4>
          {notes.title.length > 40
            ? notes.title.substr(0, 40) + "..."
            : notes.title}
        </h4>
        <p>
          {notes.details.length > 40
            ? notes.details.substr(0, 200) + "..."
            : notes.details}
        </p>
        <p>{notes.date}</p>
      </Link>
    </>
  );
};

export default NotesItem;
