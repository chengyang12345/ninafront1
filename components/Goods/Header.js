
export default function Collecion(props) {
  return (
    <div className="customtab">
      <h3 className="productblock-title">{props.data && props.data.title}</h3>
      {props.data && props.data.subTilte && <h4 className="title-subline">{props.data.subTilte}</h4>}
    </div>
  );
}
