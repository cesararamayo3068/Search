import { useState } from "react/cjs/react.development";
import SearchBox from "./components/SearchBox/index";
import "./style.css";
import data from "../../data/users.json";

export default function Search() {
  const [isAtTop, setIsAtTop] = useState(false);
 
  const [results , setResults] =useState([]);

  const handleCloseSearch = () => {
      setIsAtTop(false);
      setResults([]);
  };
  const handleSearchClick = (textoBusqueda) => {
    if (data?.length) {
      const textoBusquedaMinus =textoBusqueda.toLowerCase();
      const filteredData = data.filter((value) => {
        return (
          value.name.toLowerCase().includes(textoBusquedaMinus) ||
          value.phone.toLowerCase().includes(textoBusquedaMinus) ||
          value.email.toLowerCase().includes(textoBusquedaMinus) ||
          value.username.toLowerCase().includes(textoBusquedaMinus) 
        )
      });
      setResults(filteredData);
    }
  };
  console.log(results);
  return (
    <div className={`search ${isAtTop ? "search--top" : " search--center"}`}>
      <SearchBox onSearch={handleSearchClick} onClose={handleCloseSearch} />
    </div>
  );
}
