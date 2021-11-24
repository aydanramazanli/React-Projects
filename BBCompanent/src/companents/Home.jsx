import react, {useEffect, useRef, useState} from "react";

function Home({ title, text, category, img }) {
  const [textSize, setTextSize] = useState("big");
  const divRef = useRef(null);
  
  useEffect(() => {
    if(divRef){
      if(window.outerWidth / divRef.current.clientWidth > 4){
        setTextSize("little");
      }
    }
  }, [])


  return (
    <div ref={divRef} style={{background:`url(${img})`, backgroundRepeat:"no-repeat",height:"100%", position:"relative", backgroundSize: "cover"}}>
      <div className="absolute  bottom-28 left-6">
        <h2  className={`text-white ${textSize === "big" ? 'text-3xl' : 'text-lg'} text-left`}> {title}</h2>
        </div>
        <div className={`absolute ${textSize === "big" ? 'bottom-14' : 'bottom-2'} left-6`}>
             <p className={`${textSize === "big" ? 'text-xl' : 'text-sm'} text-white text-left text-opacity-95`} >{text}</p>
        </div> 
      
       <div className="absolute bottom-5 left-6">
        <span className={`${textSize === "big" ? 'text-lg' : 'text-sm'} text-white text-left text-opacity-95`}>{category}</span>
      </div>
    </div>
  );
}

export default Home;
