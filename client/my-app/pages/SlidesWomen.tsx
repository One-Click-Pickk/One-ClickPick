import {slidesData} from "./dumpData.js"
import { useState } from "react"


export default function SlidesWomen() {

  const[index,setindex]=useState(0)


  var indexModif=(action: string)=>{
    if ( action === "+" ){
      setindex(index+1)
      if(index>=slidesData.length-1){
        setindex(0)
      }
    }else{
      setindex(index-1)
      if(index===0){
        setindex(slidesData.length-1)
      }
    }
  }


      return(
        
        <div className='slides'>

        <img src="left.png" alt="" id="left" onClick={()=>{indexModif("-")}}/>

        <img src={slidesData[index].image} alt="" />



        <div className="slidesDetails">
        <h2> {slidesData[index].marque} </h2>
        
        <h5>
          {slidesData[index].description}
        </h5>

        </div> 

        <img src="right.png" alt="" id="right" onClick={()=>indexModif("+")}/>

    </div>
      )
    }
  