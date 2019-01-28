import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class NavMain extends Component{
    
        constructor(props){
            super(props)
        
            this.state = {
                toggleMenu1: false,
                toggleMenu2: false,
              
              }
    
          
        }

    handleMenu = (event)=>{
       
       
        switch(event.target.name){
            case 'menu1':
                this.setState({ toggleMenu1 : !this.state.toggleMenu1 });
                break;
            case 'menu2':
                this.setState({  toggleMenu2 : !this.state.toggleMenu2 });
                break;

            default:    
        }

    }

    render(){
       
    
        return( <ul className="nav" id="side-menu">

            <li>
                <a href="/clientes"><i className="fa fa-users"></i> Dashboard </a>
            </li>
            
            <li>
            <a name="menu1" onClick={this.handleMenu} href="#"><i className="fa fa-users"></i> Clientes </a>
           
            {this.state.toggleMenu1 && 
            
            <ul className='menu-open'>
                    <li><Link to="/clientes/add" className="hide-menu"><i className="fa fa-users"></i> Cadastrar Clientes</Link>  </li> 
                    <li><Link to="/clientes" className="hide-menu"><i className="fa fa-users"></i> Clientes Cadastrados</Link>  </li> 
                    <li><a href="/clientes/pontuar" className="hide-menu"><i className="fa fa-users"></i> Pontuar Cliente</a>  </li> 
                    <li> <a href="/clientes" className="hide-menu"><i className="fa fa-users"></i> Pontos Distribuidos</a></li>
            </ul>
            
            } 
            
            </li>
        
            <li>
                <a name="menu2" onClick={this.handleMenu} href="#"><i className="fa fa-users"></i> Premiações </a>
                
                {this.state.toggleMenu2 && 
            
                    <ul className="menu-open">
                        <li><Link to="/premiacoes/add" className="hide-menu"><i className="fa fa-users"></i> Cadastrar Prêmios</Link>  </li> 
                        <li><Link to="/premiacoes" className="hide-menu"><i className="fa fa-users"></i> Prêmios Cadastrados</Link>  </li> 
                        <li> <a href="/clientes" className="hide-menu"><i className="fa fa-users"></i> Resgatar Prêmios</a></li>
                        <li> <a href="/clientes" className="hide-menu"><i className="fa fa-users"></i> Consumidores Premiados</a></li>
                    </ul>
                    
                    } 
                    
    
            </li>
        
            <li>
                <a href="/clientes"><i className="fa fa-users"></i> Sair </a>
            </li>
        
        
        
        </ul>

    )

    }

}


export default NavMain