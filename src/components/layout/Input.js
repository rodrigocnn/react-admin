import React from 'react'

const Input= ({label, name, type,  validation, getvalue, setvalue, disabledComponent})=>(
    
  <div className="form-group">
    <label className="col-sm-12">{label}</label>
        <div className="col-sm-12"> 
        <input  disabled = {(disabledComponent)? "disabled" : ""} onChange={getvalue} defaultValue={setvalue}  name={name}   
        type={type} className="form-control" >
         </input>
      
        </div>
   </div>

)   
export default Input