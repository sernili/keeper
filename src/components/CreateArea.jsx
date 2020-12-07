import React, { useState } from "react";

//// Material UI von Google für Design und Funktionalität

// Fab (Floating Action Button) ist eine Art Button
import Fab from '@material-ui/core/Fab';
// Zoom sorgt dafür, dass der Button, im <Zoom></Zoom> eine kleine Zoom-Animation beim Laden hat
import Zoom from '@material-ui/core/Zoom';
// Das runde "+"-Icon
import AddRoundedIcon from '@material-ui/icons/AddRounded';



// Create Area ist der Bereich, wo eine neue Notiz hinzugefügt werden kann

function CreateArea(props) {
  // Stateful Variable, weil sie verändert werden muss
  // die Variable beinhaltet ein Objekt mit den Properties title und content, also note.title und note.content; beide werden am Anfang auf "" gesetzt, damit in den Feldern jeweils der placeholder angezeigt wird etc.
  // der State Hook besteht immer aus dem aktuellen State und der Funktion (setNote), die den State verändert
  const [note, setNote] = useState({ title: "", content: ""});
  
  // Diese Funktion wird aufgerufen, wenn jemand in die beiden Textfelder "title" oder "content" etwas schreibt
  // event beinhaltet Informationen über das Ereignis, das diese Funktion aufgerufen hat (in diesem Fall dass in das Input-Feld getippt wird)
  function handleChange(event){

    // event.target hat die u.a. Infos name und value, name bezieht sich auf das "name"-Property des <input>, also "title" bzw. "content" und value auf das, was in <input> eingetippt wird 
    const {name, value} = event.target;

    // das stateful Objekt note wird hier aktulisiert, ...prevValue sorgt dafür, dass alles gleich bleibt, was sich nicht verändert und [name]:value aktualisiert das, was geändert wurde; d.h. wenn der "title" geändert wird bleibt der "content" so wie er war
    setNote( prevValue => {
      return {
        ...prevValue,
        [name]: value
      };
    })
  }

  // Diese Funktion wird aufgerufen, wenn der User auf "Add" klickt
  function submitNote(event){
    // Das sorgt dafür, dass nicht die komplette Seite neu geladen wird, wie es normalerweise der Fall ist, wenn man bei einem <form> auf "submit klickt"
    event.preventDefault();

    // das löst die Funktion "onAdd" aus, die im component App.jsx ausgeführt werden muss und reicht die aktuelle Notiz mit title und content rüber 
    props.onAdd(note);

    // hier wird die note wieder zurückgesetzt, damit mein eine weitere Note hinzufügen kann
    setNote({title: "", content: ""})
  }


  const [isExpanded, setExpanded] = useState(false);

  function fieldSelected(){
    setExpanded(true);
  }
  
  return (
    <div>
      <form className="create-note">
        
        {isExpanded && <input onChange={handleChange} name="title" value = {note.title} placeholder="Title" />}

        <textarea onClick={fieldSelected} onChange={handleChange} name="content" value = {note.content} placeholder="Take a note..." rows={isExpanded ? "4" : "1"} />

        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}><AddRoundedIcon /></Fab>
        </Zoom>

      </form>
    </div>
  );
}

export default CreateArea;
