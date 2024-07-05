import { useEffect, useState } from "react";
import Header from "./components/Header";
import MapView from "./pages/MapView";
import ListView from "./pages/ListView";
import { useDispatch } from "react-redux";
import getFlights from "./store/actions";
import Modal from "./components/Modal";

function App() {
  const [isMapView, setIsMapView] = useState(true);
  const [detailId, setDetailId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFlights());
  }, [dispatch]);
  return (
    <div>
      <Header />

      <div className="view-buttons d-flex justify-content-center">
        <button
          onClick={() => setIsMapView(true)}
          className={`p-2 fs-4 bg-secondary text-light ${
            isMapView ? "active" : ""
          }`}
        >
          MAP VIEW
        </button>
        <button
          onClick={() => setIsMapView(false)}
          className={`p-2 fs-4 bg-secondary text-light ${
            !isMapView ? "active" : ""
          }`}
        >
          LIST VIEW
        </button>
      </div>
      {isMapView ? (
        <MapView setDetailId={setDetailId} />
      ) : (
        <ListView setDetailId={setDetailId} />
      )}

      {detailId && <Modal detailId={detailId} setDetailId={setDetailId} />}
    </div>
  );
}

export default App;
