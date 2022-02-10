import React, {useState, useContext, useEffect, useRef} from 'react';
import Banner from './Banner'
import MovieList from './MovieList'
import SearchPosts from './SearchPosts';
import {SearchItem} from '../App'
import {useInView} from 'react-intersection-observer'
import shortid from "shortid";
import loadingGif from '../Images/loading.gif'


export default function Home() {
   
    const { inputValue, searchResults, setCurrentIndex,loading, currentIndex, handleChange } = useContext(SearchItem)
    const { inView, ref } = useInView({
        threshold: 0,
    }) 
    const [isVisible, setIsVisible] = useState(false)
    const [modalData, setModalData] = useState()

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

    const isOpen = (index) => {
      const searchData = searchResults[index]
      setModalData(searchData)
      setIsVisible(true)
      console.log(searchData)
  }


  return <>
{inputValue === ''?
<>
  <Banner/>
  <MovieList/>
  </>
  :
 <div className=" relative grid grid-cols-3 gap-5 py-20 m-auto" style={{width:"1000px"}}>
    {    loading ? <img className='w-20 h-20 absolute top-10 left-1/2' src={loadingGif} /> : searchResults.map((e, index)=>{
    const obj ={};
    if (index === searchResults.length - 1) {
      obj.ref = ref;
  }
  return <div  {...obj}> <SearchPosts onClick={() => { isOpen(index) }} key={shortid.generate()} {...e} ></SearchPosts></div>

  }) 
}
 </div>
  }


    
     
  </>
  ;
}
