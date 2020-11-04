import React from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import logo_img from './img/logo.png';
import {NavLink} from 'react-router-dom';
import './index.css';

export default function FixedContainer() {
  return (
    <>
      <Container  style={{overflowX:'hidden'}} fixed >
        <Container maxWidth="md" fixed >
        <div className="fixed-top px-md-5 bg-light"> 
          <nav className="navbar navbar-expand-lg py-3 px-md-3 px-lg-6 mx-md-3 mx-lg-5 navbar-light bg-light">
              <div className="container-fluid px-5">
                <NavLink exact style={{maxWidth:'200px',maxHeight:'70px'}} className="navbar-brand" to="/IdeaDeployer"><img className="img-fluid" src={logo_img} /></NavLink>
                  <a href="#"></a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav font-weight-bold ml-lg-auto">
                      <li className="nav-item mx-3">
                      <NavLink exact activeClassName="active_class" style={{textDecoration:"none"}} to="/IdeaDeployer/features"><span className="text-uppercase text-dark nav-link">Features</span></NavLink>
                      </li>
                      <li className="nav-item mx-3">
                      <NavLink exact activeClassName="active_class" style={{textDecoration:"none"}}  to="/IdeaDeployer/price"><span className="text-uppercase text-dark nav-link">Pricing</span></NavLink>
                      </li>
                      <li className="nav-item mx-3">
                      <NavLink exact activeClassName="active_class"  style={{textDecoration:"none"}}  to="/IdeaDeployer/dfjns"><span className="text-uppercase text-dark nav-link">login</span></NavLink>
                      </li>
                      <li className="nav-item mx-3">
                      <Button style={{color:"white",backgroundColor:'rgb(255, 125, 175)'}} className="nav-link text-decoration-none text-uppercase font-weight-bold px-4" variant="contained" size="large" color="#800000">TRY FOR FREE</Button>
                      </li>
                  </ul>
                  </div>
              </div>
          </nav>          
       </div>
       </Container>
      </Container>
    </>
  );
}