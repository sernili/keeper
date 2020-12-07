import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  // Das ist ein stateful Array, das alle Notes beinhaltet, die per "Add" hinzugefügt worden sind
  const [notes, setNotes] = useState([]);
  
  // Hier wird die Notiz aus CreateArea in das Array mit allen Notizen hinzugefügt, sie wird in CreateArea ausgelöst, wenn man auf "Add" klickt
  function addNote(newNote){
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    })
  }

  // Diese Funktion wird aufgerufen, wenn eine Notiz gelöscht werden soll, die Id der entsprechenden Notiz wird aus Note.jsx hergereicht
  function deleteNote(id){
    // Das Array mit allen Notizen wird durchgegangen und die Notiz mit der entsprechenden Id wird gelöscht bzw. nur alle anderen Elemente werden wieder ausgegeben
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {return index !==id;})
    })
  }
  
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      
      {/* Hier wird das Array mit allen Notizen drin durchgegangen und für jedes Element wird ein <Note /> erstellt; die .map()-Funktion hat wie .filter() (siehe oben) auch einen Index eingebaut, der als key und id verwendet werden kann */}
      {notes.map((noteItem, index) => {
        return <Note key={index} id={index} title={noteItem.title} content={noteItem.content} onDelete={deleteNote} />
      })}

      <Footer />
    </div>
  );
}

export default App;
