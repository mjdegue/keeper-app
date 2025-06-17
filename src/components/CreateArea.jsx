import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function CreateArea(props) {
  const [textNotEmpty, setTextNotEmpty] = React.useState(false);

  function onContentChanged(event) {
    props.onChange(event);
    setTextNotEmpty(event.target.value.length != 0);
  }

  function addClicked(event) {
    props.addClicked(event);
    setTextNotEmpty(false);
  }

  return (
    <div>
      <form className="create-note">
        {textNotEmpty ? (
          <input
            name="title"
            placeholder="Title"
            value={props.noteValue.title}
            onChange={props.onChange}
          />
        ) : null}

        <textarea
          name="content"
          placeholder="Take a note..."
          rows={textNotEmpty ? 3 : 1}
          value={props.noteValue.content}
          onChange={onContentChanged}
        />
        <Zoom in={textNotEmpty}>
          <Fab onClick={addClicked}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
