import "./Card.css";

function Card(props) {
  const classes = "card" + props.className;
  return <div classaName={classes}>{props.children}</div>;
}
export default Card;
