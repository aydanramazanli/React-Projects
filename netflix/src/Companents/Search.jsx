import React from 'react'
import { useContext } from 'react'
import { SearchItem } from '../App'


const Search = () => {
    const { inputValue, handleChange, setInputValue } = useContext(SearchItem)
    return <>
        <div className="input-group rounded mx-4 flex" style={{ width: '210px', position: 'inherit' }}>
            <input type="search" className="form-control rounded" value={inputValue} placeholder="Search" aria-label="Search"
                aria-describedby="search-addon"  onChange={(e) => {
                    handleChange()
                    setInputValue(e.target.value)
                }} />
            <span className="input-group-text my-0 mx-5" id="search-addon">
                <i className="fas fa-search"></i>
            </span>
        </div>
    </>
}

export default Search