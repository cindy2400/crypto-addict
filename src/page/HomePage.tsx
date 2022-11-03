import Card from "../component/Card";
import Header from "../component/Header";
import Styles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className={Styles["content-margin"]}>
        <div className={Styles["section"]}>
          <Card type="medium">
            <p>abc</p>
          </Card>
          <Card type="medium">
            <p>abc</p>
          </Card>
          <Card type="medium">
            <p>abc</p>
          </Card>
          <Card type="medium">
            <p>abc</p>
          </Card>
        </div>
        <div className={Styles["section"]}>
          <Card type="large">
            <p>abc</p>
          </Card>
          <Card type="small">
            <p>abc</p>
          </Card>
        </div>
      </div>
    </>
  );
};

export default HomePage;
