import { useState } from "react";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";

const ListView = ({ setDetailId }) => {
  const { flights } = useSelector((store) => store.flight);
  //*SLice methodunda kullanılacak ilk elemanın state'i
  const [itemOffset, setItemOffset] = useState(0);
  //*Sayfa başına eleman sayısı
  const itemsPerpage = 10;

  //*slice methodunda kullanılacak son elemanın state'i
  const endOffset = itemOffset + itemsPerpage;
  //*Mevcut sayfadaki elemanları alma
  const currentItems = flights.slice(itemOffset, endOffset);
  //*Maksimum sayfa sayısı
  const pageCount = Math.ceil(flights.length / itemsPerpage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerpage) % flights.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="mt-4">
      <table className="table table-dark table-hover text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Registration</th>
            <th>Latitude(°)</th>
            <th>Longitude(°)</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.code}</td>
              <td>{item.lat}</td>
              <td>{item.long}</td>
              <td>
                <button
                  className="btn btn-danger p-1 m-0"
                  onClick={() => setDetailId(item.id)}
                >
                  Detail
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ReactPaginate
        className="pagination justify-content-center my-5"
        pageClassName="page-item"
        previousClassName="page-item"
        nextClassName="page-item"
        pageLinkClassName="page-link"
        nextLinkClassName="page-link"
        previousLinkClassName="page-link"
        breakLinkClassName="page-link"
        breakLabel="..."
        nextLabel="Next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        activeClassName="active"
        pageCount={pageCount}
        previousLabel="< Previous"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default ListView;
