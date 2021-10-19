import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./DealsChild.css";
export default function DealsChild({nameofcategory,nameid,productimageurl,discountDISPLAY}){
    return(
        <div className="Menuclass1">
            
         <div
        className={nameid}  id="image1"
        style={{
          backgroundImage: `url(${productimageurl})`
        }}
      />
      <div className='collection-footer1'>
        <h4><span className='name'>{nameofcategory}</span></h4>
        <span class="colorchange"><p className='price'>{discountDISPLAY}</p></span>
      </div>
      
        </div>
    )

}