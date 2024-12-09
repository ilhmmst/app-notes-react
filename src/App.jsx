import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Notes from "./pages/Notes/Notes";
import CreateNote from "./pages/CreateNote/CreateNote";
import EditNote from "./pages/EditNote/EditNote";
import Footer from "./components/Footer";

const App = () => {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );
  console.log(notes);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <>
      <div className="main-container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Notes notes={notes} />} />
            <Route
              path="/create-note"
              element={<CreateNote setNotes={setNotes} />}
            />
            <Route
              path="/edit-note/:id"
              element={<EditNote notes={notes} setNotes={setNotes} />}
            />
          </Routes>
        </BrowserRouter>

        <Footer/>
      </div>
    </>
  );
};

export default App;