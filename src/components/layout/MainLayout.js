import React from 'react';
import NavbarTop from './NavbarTop'
import Sidebar from './Sidebar'
import PageHeader  from  './PageHeader'
import WhiteBox from './WhiteBox'

const MainLayout = (props) =>(
    <div id="wrapper">
      <NavbarTop/>
      <Sidebar/>
      <div id="page-wrapper" >
          <div className="container-fluid">
              <PageHeader title={props.title}/>
              <WhiteBox>{props.children}</WhiteBox>
          </div>
          <footer className="footer text-center">  Copyright © FideliNet - www.fidelinet.com.br | Versão 1.0 </footer>
      </div>
  </div>
)

export default MainLayout;

