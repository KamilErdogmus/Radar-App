import { useSelector } from "react-redux";

const Header = () => {
  const { isError, flights, isLoading } = useSelector((store) => store.flight);
  return (
    <header className="d-flex justify-content-around  mt-1 align-items-center">
      <div className="d-flex pointer gap-3">
        <img height={"50px"} src="plane-logo.png" alt="" />
        <h1>RADAR APP</h1>
      </div>

      <h2 className="fw-bold fs-3">
        {isLoading
          ? "Loading..."
          : isError
          ? "Something went wrong"
          : flights.length + " Flights Found"}
      </h2>
    </header>
  );
};
export default Header;
