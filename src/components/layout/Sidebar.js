import React, {Component} from 'react'
//import {Link} from 'react-router-dom'
import NavMain from './NavMain';

class Sidebar extends Component{

  

    render(){
      
        return(
            <div className="navbar-default sidebar" role="navigation">
                <NavMain/>
            </div>
       
          
        )
    }
}



export default Sidebar;

