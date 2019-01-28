import React from 'react'

const WhiteBox = (props)=>(
    <div className="row">
    <div className="col-md-12">
        <div className="white-box">
            {props.children}
        </div>
    </div>
    </div>  
) 

export default  WhiteBox



