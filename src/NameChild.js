import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./NameChild.css";
export default function NameChild({nameofcategory,nameid,productimageurl}){
    return(
        <div className="Menuclass">
            
         <div
        className={nameid}  id="image"
        style={{
          backgroundImage: `url(${productimageurl})`
        }}
      />
      <div className='collection-footer'>
        <h3><span className='name'>{nameofcategory}</span></h3>
        <li className='price'>{nameid}</li>
      </div>
      
        </div>
    )

}