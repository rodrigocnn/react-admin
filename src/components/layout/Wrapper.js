import  React, {Component} from 'react'
import {BrowserRouter as Router,  Route, Link} from 'react-router-dom'
import Pets from '.././components/Pets'

class Wrapper extends Component{
    render(){
        return(
            <div id="page-wrapper" >
            <div class="container-fluid">
                <div class="row bg-title">
                    <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                        <h4 class="page-title">Starter Page</h4>
                    </div>
                    <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
                       
                        <ol class="breadcrumb">
                            <li><a href="#">Dashboard</a></li>
                            <li class="active">Starter Page</li>
                        </ol>
                    </div>
                 
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="white-box">
                            <Route  path="/pets" component={Pets} />
                        </div>
                    </div>
                </div>
              
            
             
            </div>
         
            <footer class="footer text-center"> 2017 © Elite Admin brought to you by themedesigner.in </footer>
      </div>
        )
    }
}

export default Wrapper