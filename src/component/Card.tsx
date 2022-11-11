import Styles from "./Card.module.scss";

const Card: React.FC<{ children: JSX.Element }> = (props) => {
  return (
    <>
      <div className={Styles.card}>{props.children}</div>
    </>
  );
};

export default Card;
