import { useState } from "react/cjs/react.development";
import SearchBox from "./components/SearchBox/index";
import "./style.css";

export default function Search() {
    const [isAtTop, setIsAtTop]=useState(false);
    const handleSearchClick =()=> {
      setIsAtTop(!isAtTop);
    };
    const handleCloseClick =()=> {
        setIsAtTop(!isAtTop);
    };
  return(
    <div className={`search ${isAtTop ? "search--top":" search--center"}`}>
        <SearchBox onSearch={handleSearchClick} onClose={handleCloseClick}/>
    </div>

  )
 
}
