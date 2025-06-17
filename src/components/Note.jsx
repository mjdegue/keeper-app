import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export default function Note(props) {
  function onDeletePressed() {
    props.delete(props.id);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={onDeletePressed}>
        <DeleteForeverIcon />
      </button>
    </div>
  );
}
