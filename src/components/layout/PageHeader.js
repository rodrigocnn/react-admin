import React from 'react';

const PageHeader = (props)=>(
    
    <div className="row bg-title">
    <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
        <h4 className="page-title">{props.title} </h4>
    </div>

    <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">
    
        <ol className="breadcrumb">
            <li><a href="/home">Home </a></li>
            <li className="active"> {props.title}</li>
        </ol>
    </div>

    </div>

) 

export default PageHeader




