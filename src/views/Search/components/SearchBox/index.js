import { useState } from "react/cjs/react.development";
import "./style.css";
export default function SearchBox({ onSearch, onClose }) {
  const [textoBusqueda, setSearchText] = useState("");

  const handleSearchClick = () => {
    setSearchText("");
    onClose();
  };
  return (
    <div className="search-box">
      <h2 className="search-box-title "> Buscador de Personal</h2>
      <div className="search-box-buttons">
        <label>
          <input
            value={textoBusqueda}
            onChange={({ target: { value } }) => setSearchText(value)}
            className="search-box-input"
          />
        </label>
        <button onClick={() => onSearch(textoBusqueda)}>Buscar</button>
        <button onClick={handleSearchClick}>Cerrar</button>
      </div>
    </div>
  );
}
