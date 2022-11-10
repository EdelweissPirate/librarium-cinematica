import { useState } from "react";


function Search(props) {
    const [searchValue, setSearchValue] = useState('');

    const onChange = (e) => {
        setSearchValue(e.target.value);
    }

    const resetInputField = () => {
        setSearchValue("")
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if(searchValue.length > 0) props.search(searchValue);
        // resetInputField();
    }

    return (
        <form className="search" onSubmit={onSubmit}>
            <input
                name='search'
                id="input-search"
                value={searchValue}
                onChange={onChange}
                type="text"
            />

            <input 
                // onClick={onSubmit} 
                type="submit" 
                value="SEARCH" 
            />
            {/* <input 
                onClick={resetInputField} 
                type="submit" 
                value="CLEAR" 
            /> */}
        </form>
        );
}

export default Search;