import react from "react";

function Home({ title, text, category, img }) {
  return (
    <div  style={{background:`url(${img})`, backgroundRepeat:"no-repeat",height:"100%", position:"relative"}}>
      <div className="absolute  bottom-28 left-6">
        <h2  className="text-white text-3xl text-left"> {title}</h2>
        </div>
        <div className="absolute  bottom-14 left-6">
             <p className="text-xl text-white text-left text-opacity-95" >{text}</p>
        </div>
      
       <div className="absolute  bottom-5 left-6">
        <span className="text-lg text-white text-left text-opacity-95 ">{category}</span>
      </div>
    </div>
  );
}

export default Home;
