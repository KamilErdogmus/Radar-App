import axios from "axios";
import { useEffect, useState } from "react";
import { dOptions } from "../constants";
import { useDispatch } from "react-redux";
import { setPath } from "../store/Slices/flightSlice";
import formatDate from "./../Utils/formatDate";
import Loader from "./Loader";

const Modal = ({ detailId, setDetailId }) => {
  const dispatch = useDispatch();
  //* Uçuş detaylarını sadece bu modal içerisinde kullanacağımız için store'da tutmaya gerek duymadık
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    //*Önceki Uçuşun detaylarını sıfırla
    setDetail(null);

    axios
      .get(
        `https://flight-radar1.p.rapidapi.com/flights/detail?flight=${detailId}`,
        dOptions
      )
      .then((res) => {
        //*State güncelle
        setDetail(res.data);
        //*Harita sayfasında kullabilmek için uçuş yolunu slice'a aktar
        dispatch(setPath(res.data.trail));
      });
  }, [detailId]);
  console.log(detail);
  return (
    <div className="detail-outer">
      <div className="detail-inner">
        <div className="close-wrapper">
          <button
            className="btn btn-outline-dark text-light"
            onClick={() => setDetailId(null)}
          >
            X
          </button>
        </div>

        {!detail ? (
          <Loader />
        ) : (
          <div>
            <h2>{detail.aircraft.model?.text}</h2>

            <h2>{detail.aircraft.model?.code}</h2>

            <p>
              Registration:{" "}
              <span>
                {detail.aircraft?.registration
                  ? detail.aircraft?.registration
                  : "Unkown"}
              </span>
            </p>

            <img
              className="mb-2"
              src={detail.aircraft.images?.large[0].src}
              alt={detail.aircraft.thumbnail?.large[0].src}
            />

            <p>
              Company :{" "}
              <span className="fw-bold">
                {detail.airline?.name ? detail.airline?.name : "Unkown"}
              </span>
            </p>

            <p>
              Origin:
              {detail.airport?.origin?.name ? (
                <a href={detail.airport.origin?.website} target="_blank">
                  {detail.airport.origin?.name}
                </a>
              ) : (
                <span>{detail.airport.origin?.name}</span>
              )}
            </p>
            <p>
              Destination:
              {detail.airport?.destination?.name ? (
                <a href={detail.airport.destination?.website} target="_blank">
                  {detail.airport.destination?.name}
                </a>
              ) : (
                <span>{detail.airport.destination?.name}</span>
              )}
            </p>

            <p>
              Departure :
              <span className="fw-bold">
                {detail.time?.scheduled?.departure > 0
                  ? formatDate(detail.time?.scheduled?.departure)
                  : "Unknown"}
              </span>
            </p>
            <p>
              Arrive :
              <span className="fw-bold">
                {detail.time?.scheduled?.arrival > 0
                  ? formatDate(detail.time?.scheduled?.arrival)
                  : "Unknown"}
              </span>
            </p>

            <p className={detail.status?.icon}>
              <span>{detail.status?.text}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
