import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../component/Header";
import { fetchCryptoDetail } from "../store/crypto/crypto-fetcher";
import { cryptoActions } from "../store/crypto/crypto-slice";
import { AppDispatch, x } from "../store/store";
import Styles from "./DetailPage.module.scss";

const DetailPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { cryptoId } = useParams<{ cryptoId: string }>();
  const cryptoDetail = useSelector((state: x) => state.crypto.cryptoDetail);
  const cryptoFavorite = useSelector((state: x) => state.crypto.cryptoFavorite);
  const isFavorite = useMemo(
    () => cryptoFavorite.some((crypto) => crypto.id === cryptoId),
    [cryptoFavorite, cryptoId]
  );

  useEffect(() => {
    dispatch(fetchCryptoDetail(cryptoId));
  }, [dispatch, cryptoId]);

  const addCryptoFavoriteHandler = (crypto: any) => {
    dispatch(cryptoActions.setCryptoFavorite(crypto));
  };

  const removeCryptoFavoriteHandler = (cryptoId: string) => {
    dispatch(cryptoActions.removeCryptoFavorite(cryptoId));
  };

  return (
    <>
      <Header />
      <div className={Styles["content-margin"]}>
        <div className={Styles["section"]}>
          <p>{cryptoDetail.name}</p>
          <button
            onClick={() => {
              isFavorite
                ? removeCryptoFavoriteHandler(cryptoId)
                : addCryptoFavoriteHandler(cryptoDetail);
            }}
          >
            {isFavorite ? "Remove" : "Favorite"}
          </button>
          {/* <Card type="medium">
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
          </Card> */}
        </div>
        <div className={Styles["section"]}>
          {/* <Card type="large">
            <p>abc</p>
          </Card>
          <Card type="small">
            <p>abc</p>
          </Card> */}
        </div>
      </div>
    </>
  );
};

export default DetailPage;
