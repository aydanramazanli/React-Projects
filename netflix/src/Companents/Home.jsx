import React, {useState, useContext, useEffect} from 'react';
import Banner from './Banner'
import MovieList from './MovieList'
import SearchPost from './SearchPosts';
import {SearchItem} from '../App'
import {useInView} from 'react-intersection-observer'

export default function Home() {
    const [visible, setUnvisible]= useState(false)
    const { inputValue, searchResults, loading, setCurrentIndex, currentIndex, handleChange } = useContext(SearchItem)
    const { inView, ref } = useInView({
        threshold: 0,
    }) 

    useEffect(() => {
        if (inView) {
            setCurrentIndex(currentIndex + 1)
        }
    }, [inView])

    useEffect(() => {
        if (currentIndex > 1) {
            handleChange(true)
        }
    }, [currentIndex])

  return <div>
{visible ===true?
<>
  <Banner/>
  <MovieList/>
  </>
  : <SearchPost/>
}

    
     
  </div>
  ;
}
