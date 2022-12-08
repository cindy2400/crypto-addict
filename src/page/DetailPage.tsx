import { useEffect, useMemo } from "react";
import { NumericFormat } from "react-number-format";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Button from "../component/Button";
import Card from "../component/Card";
import Header from "../component/Header";
import {
  disconnectWebSocketCryptoPrice,
  fetchCryptoDetail,
  fetchCryptoHistory,
  fetchWebSocketCryptoPriceDetailPage,
} from "../store/crypto/crypto-fetcher";
import { cryptoActions } from "../store/crypto/crypto-slice";
import { AppDispatch, storeType } from "../store/store";
import Styles from "./DetailPage.module.scss";

const DetailPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { cryptoId } = useParams<{ cryptoId: string }>();
  const cryptoDetail = useSelector(
    (state: storeType) => state.crypto.cryptoDetail
  );
  const cryptoFavorite = useSelector(
    (state: storeType) => state.crypto.cryptoFavorite
  );
  const cryptoHistory = useSelector(
    (state: storeType) => state.crypto.cryptoHistory
  );
  const isFavorite = useMemo(
    () => cryptoFavorite.some((crypto) => crypto.id === cryptoId),
    [cryptoFavorite, cryptoId]
  );

  useEffect(() => {
    dispatch(fetchCryptoDetail(cryptoId));
    dispatch(fetchCryptoHistory(cryptoId));
    dispatch(fetchWebSocketCryptoPriceDetailPage(cryptoId));
    return () => {
      disconnectWebSocketCryptoPrice();
    };
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
        <div className={Styles["section-column"]}>
          <h3>{cryptoDetail.name}</h3>
          <Button
            type="button"
            onClickHandler={() => {
              isFavorite
                ? removeCryptoFavoriteHandler(cryptoId)
                : addCryptoFavoriteHandler(cryptoDetail);
            }}
            text={isFavorite ? "Remove" : "Favorite"}
            classname={
              isFavorite ? Styles["button-remove"] : Styles["button-favorite"]
            }
          />
        </div>
        <div className={Styles["section-row"]}>
          <Card>
            <>
              <h4>Rank</h4>
              <p>{cryptoDetail.rank}</p>
              <h4>PriceUSD</h4>
              <p>
                <NumericFormat
                  value={Number(cryptoDetail?.priceUsd).toFixed(3)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
              </p>
              <h4>Supply</h4>
              <p>
                <NumericFormat
                  value={Number(cryptoDetail?.supply).toFixed(3)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
              </p>
              <h4>MarketCapUSD</h4>
              <p>
                <NumericFormat
                  value={Number(cryptoDetail?.marketCapUsd).toFixed(3)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
              </p>
              <h4>ChangePercent24hr</h4>
              <p>{cryptoDetail.changePercent24Hr}</p>
            </>
          </Card>
          <Card style={{ width: "80%" }}>
            <ResponsiveContainer height={350}>
              <AreaChart
                data={cryptoHistory}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="rgb(94, 206, 159)"
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor="rgb(94, 206, 159)"
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>
                <XAxis dataKey="date" />
                <YAxis domain={["auto", "auto"]} dataKey="priceUsd" />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="priceUsd"
                  stroke="rgb(2, 105, 71)"
                  fillOpacity={1}
                  fill="url(#colorUv)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </Card>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
