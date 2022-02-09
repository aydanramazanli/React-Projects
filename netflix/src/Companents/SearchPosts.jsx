import React from 'react'
import { Link } from 'react-router-dom'

const SearchPost = ({ id, release_date, media_type, vote_average, original_name, original_title, first_air_date, backdrop_path, slideStyle, onClick }) => {
    console.log(media_type)
    return <>
        <div className='post-grid-item' >
            <div className="post-grid-overlay"></div>
            <div className="post-grid-img d-block" >
                <img src={'https://image.tmdb.org/t/p/original/' + backdrop_path} alt="" />
            </div>
            <div className="post-icon" onClick={onClick}>
                <i className="fas fa-plus-circle"></i>
            </div>
            <Link className="post-grid-details" style={slideStyle} to={{
                pathname: `/Detail/${media_type}/${id}`
            }}>
                <p className="grid-title">{original_name || original_title}</p>
                <p className="grid-desc">
                    <span className="green">{release_date || first_air_date}</span>
                    <span className="rate">{vote_average}</span>
                </p>
            </Link>

        </div>
    </>
}

export default SearchPost
