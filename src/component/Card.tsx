import Styles from "./Card.module.scss";

const Card: React.FC<{ type: string; children: JSX.Element }> = (props) => {
  return (
    <>
      {props.type === "small" && (
        <div className={Styles.cardSmall}>{props.children}</div>
      )}
      {props.type === "medium" && (
        <div className={Styles.cardMedium}>{props.children}</div>
      )}
      {props.type === "large" && (
        <div className={Styles.cardLarge}>{props.children}</div>
      )}
    </>
  );
};

export default Card;
