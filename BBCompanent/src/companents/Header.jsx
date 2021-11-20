import react, {useState}from "react";
import Home from './Home'
import News from './News'
import Title from './Title'
import Modal from './Modal'

function Header(){

    const [list, setList]=useState([
        {img:"https://ichef.bbc.co.uk/wwhp/304/ibroadcast/images/live/p0/b4/t2/p0b4t2nt.jpg", title:"Hospital bomb included ball bearings as shrapnel",  category:"UK"},
        {img:"https://ichef.bbc.co.uk/wwhp/304/cpsprodpb/1450B/production/_121611238_gettyimages-1232221509.jpg", title:" Compulsory vaccines in Austria - latest updates ",  category:"WORLD"},
        {img:"https://ichef.bbc.co.uk/wwhp/304/cpsprodpb/E101/production/_121610675_gettyimages-1163938843.jpg", title:" Has Hollywood run out of ideas? ",  category:"CULTURE"},
        {img:"https://ichef.bbc.co.uk/wwhp/304/cpsprodpb/FEEC/production/_121606256_williams_peng.jpg", title:"Amazon sees worst deforestation in 15 years", category:"WORKLIFE"}
    ])
    const [news, setNews]=useState(
        [
        {img:"https://ichef.bbc.co.uk/wwhp/624/cpsprodpb/6FD7/production/_121613682_split4.png", title:"The doctor fleeing Tennessee over Covid", text:"The former head of the US state's vaccine rollout has been forced out after threats and taunts.", modal:""},
        {img:"https://ichef.bbc.co.uk/wwhp/624/cpsprodpb/065F/production/_121613610_59344022.jpg",title:"Ros Atkins on... the missing Chinese tennis star",text:"Questions remain about the whereabouts of Peng Shuai, after she accused a top Chinese government official of sexual assault", modal:""},
        {img:"https://ichef.bbc.co.uk/wwhp/624/cpsprodpb/DC33/production/_121617365_verstappen.jpg",title:"Deathbed confession sparks Jimmy Hoffa body hunt", text:"The FBI search a site in New Jersey as a new clue leads to hopes of solving the decades-old case.",modal:""}
        ]
    )
    const [show, setShow]= useState(false)
    const [info, setInfo]= useState()


    const modalHandler=(params) => {
    
            const modalData=news[params]
            setInfo(modalData)
            setShow(true)

       
    }


    return(
        <div className="px-12" >
        <Title subTitle="BBC Welcome" day="19.11.2021" />
       <div className="grid grid-cols-2 gap-3 " style={{height:"350px", marginBottom:"40px"}} >
       <Home img="https://ichef.bbc.co.uk/wwhp/624/cpsprodpb/142D0/production/_120704628_gettyimages-1235529724.jpg" title="Modi backs down after year-long farmer protests" text="Indian PM Narendra Modi has announced the repeal of controversial farm" category="INDIA"/>
         <div className="grid grid-cols-2 gap-3">
        {list.map(i=><Home img={i.img} title={i.title} text={i.text} category={i.category}  />)}
           </div> 
       </div>
       <Title subTitle="News" />
       <div className="grid grid-cols-3 gap-3 " style={{marginBottom:"40px"}}>

       {news.map((i,index)=><div  onClick={()=>modalHandler(index)}> <News img={i.img} title={i.title} text={i.text} /></div>)}
       </div>
     <Modal show={show} {...info}  closeModal={modalHandler} ></Modal>
     
   </div> 
    )
   
          
     
    
}

export default Header