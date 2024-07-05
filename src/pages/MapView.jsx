import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import "leaflet/dist/leaflet.css";
import { icon } from "leaflet";
import { setPath } from "../store/Slices/flightSlice";

const MapView = ({ setDetailId }) => {
  const { flights, path } = useSelector((store) => store.flight);

  const planeIcon = icon({
    iconUrl: "src/assets/plane-icon.png",
    iconSize: [30, 30],
  });
  const dispatch = useDispatch();

  return (
    <MapContainer
      center={[39.924759, 32.837083]}
      zoom={6}
      scrollWheelZoom={true}
      className="leaflet-container"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {flights.map((flight) => (
        <Marker
          key={flight.id}
          icon={planeIcon}
          position={[flight.lat, flight.long]}
        >
          <Popup>
            <div className="d-flex gap-2 flex-column justify-content-center align-items-center">
              <span className="fs-6">Kod:{flight.code}</span>
              <button
                onClick={() => setDetailId(flight.id)}
                className="btn btn-primary"
              >
                Details
              </button>
              <button
                onClick={() => dispatch(setPath([]))}
                className="btn btn-secondary"
              >
                Clear Route
              </button>
            </div>
          </Popup>
        </Marker>
      ))}
      <Polyline positions={path} />
    </MapContainer>
  );
};

export default MapView;
