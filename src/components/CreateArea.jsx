import React, { useState } from "react";
import Image from "./Image";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function typeNote(event) {
    const { name, value } = event.target;

    setNote((prevValue) => {
      //return new object
      return {
        ...prevValue, //with previous notes, SPREAD to all of the key value pairs in our notes
        [name]: value, //new name and value, turns the name key from just the string name to the actual value of the name const
      };
    });
  }

  //note is saved in the note constant, but not added to the actual application yet
  function submitNote(event) {
    //now need to get function to pass back to app js, so need a fuction as a prop in app js
    props.onAdd(note); //pass over this note to the app js that way

    setNote({
      title: "",
      content: "",
    });
    //default button behavior is to refresh page, dont want that
    // so pass event, which is the button click, and prevent default
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={typeNote} />
        <Image />
        <textarea
          onChange={typeNote}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
