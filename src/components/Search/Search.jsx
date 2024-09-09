import { useRef } from 'react';
import './search.scss'
import { SearchOutlined } from '@mui/icons-material';

const Search = () => {
    const inputRef = useRef();
    const handleClick = () => {
        inputRef.current.focus();
    }
  return (
    <div className="search">
      <SearchOutlined onClick={handleClick} className="icon" />
      <input ref={inputRef} type="text" placeholder="Search..." />
    </div>
  );
};

export default Search;
