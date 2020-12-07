import React from "react";
import BackspaceRoundedIcon from '@material-ui/icons/BackspaceRounded';

function Note(props) {
  
  // Wenn der Button "Delete" geklickt wird, dann löst das die entsprechende Funktion in App aus und reicht die Id des zu löschenden Elements rüber
  function handleClick(){
    props.onDelete(props.id);
  }
  
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}><BackspaceRoundedIcon /></button>
    </div>
  );
}

export default Note;
