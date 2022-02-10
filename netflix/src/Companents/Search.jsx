import React from 'react'
import { useContext } from 'react'
import { SearchItem } from '../App'


const Search = () => {
    const { inputValue, handleChange, setInputValue } = useContext(SearchItem)
    return <>
        <div className="input-group rounded mx-4 flex" style={{ width: '210px', position: 'inherit', padding:"5px" }}>
            <input type="search" className="form-control p-1 bg-gray-600 rounded" value={inputValue} placeholder="Search" aria-label="Search"
                aria-describedby="search-addon"  onChange={(e) => {
                    handleChange()
                    setInputValue(e.target.value)
                }} />
       
        </div>
    </>
}

export default Search