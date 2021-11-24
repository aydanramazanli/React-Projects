import react from "react";


function News({img, title, text}){
    
    return (
    <div >
        <div>
             <img src={img} alt=""  />
        </div>
        <div>
            <h2 className="text-xl py-4 font-bold text-left">{title}</h2>
            <p className="text-sm text-left">{text}</p>
        </div>

     </div>
     )
     
    
}

export default News