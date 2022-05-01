import { useState } from "react";
import ResidentInfo from "./ResidentInfo";
import "./ResidentInfo.css";
import jarLoading from "../assets/img/jar-loading.gif";

function ResidentContainer({ residents }) {
  const [page, setPage] = useState(0);

  function newArray(n) {
    let arrayOutput = [];
    for (let i = 0; i < n; i++) {
      arrayOutput[i] = i;
    }
    return arrayOutput;
  }

  function sliceGroupResidents(value) {
    let groupArray = [];
    let n = Math.ceil(value.length / 12);
    for (let i = 0; i < n; i++) {
      groupArray[i] = value.slice(i * 12, 12 * (i + 1));
    }
    return [groupArray, n];
  }

  return (
    <>
      <div className="residents-container-sup">
        <div className="container-resident-all">
          {!residents.residents ? (
            <img className="loader" src={jarLoading} alt="loading" />
          ) : residents.residents.length !== 0 ? (
            sliceGroupResidents(residents.residents)[0][page].map(
              (e, index) => {
                return <ResidentInfo key={index} infoResident={e} />;
              }
            )
          ) : (
            <p className="alert">No hay Residentes en esta ubicación</p>
          )}
        </div>

        <div className="pagination">
          {residents.residents ? (
            newArray(sliceGroupResidents(residents.residents)[1]).map((e) => {
              return (
                <button
                  key={e}
                  className="button-pages"
                  onClick={() => setPage(e)}
                >
                  {e + 1}
                </button>
              );
            })
          ) : (
            <img className="loader-button" src={jarLoading} alt="loading" />
          )}
        </div>
      </div>
    </>
  );
}

export default ResidentContainer;
