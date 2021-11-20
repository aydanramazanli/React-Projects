 import react from 'react';
 function Title({subTitle, day}) {

     return(
         <>
                 <div className="w-full py-3 flex justify-between">
            <div className="font-bold text-2xl">{subTitle}</div>
            <div className="text-2xl font-normal text-gray-400">{day}</div>
             </div>
         </>
     )
 }


 export default Title