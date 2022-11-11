import { useState } from "react";


function Search(props) {
    const [searchValue, setSearchValue] = useState('');

    const onChange = (e) => {
        setSearchValue(e.target.value);
    }

    // const resetInputField = () => {
    //     setSearchValue("")
    // }

    const onFocus = () => {
        if(window.innerWidth < 500){
            const _footer = document.querySelector('footer')
            _footer.style.opacity = 0
        }
    }

    const onBlur = () => {
        if(window.innerWidth < 500){
            const _footer = document.querySelector('footer')
            _footer.style.opacity = 1
        }
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
                required
                onFocus={onFocus}
                onBlur={onBlur}
            />

            <input 
                type="submit" 
                value="SEARCH" 
            />
        </form>
        );
}

export default Search;