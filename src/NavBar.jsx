import React from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import logo_img from './img/logo.jpg';

export default function FixedContainer() {
  return (
    <>
      <Container fixed >
        <Container maxWidth ="md" fixed >
        <div className="fixed-top px-5 bg-light">
          <nav className="navbar navbar-expand-lg py-3 px-5 mx-5 navbar-light bg-light">
              <div className="container-fluid px-5">
                  <a className="navbar-brand" href="#"><img className="img-fluid" src={logo_img} /></a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav font-weight-bold ml-lg-auto">
                      <li className="nav-item mx-3">
                      <a className="nav-link text-uppercase text-dark" href="#">Features</a>
                      </li>
                      <li className="nav-item mx-3">
                      <a className="nav-link text-uppercase text-dark" href="#">Pricing</a>
                      </li>
                      <li className="nav-item mx-3">
                      <a className="nav-link text-uppercase text-dark" href="#">LOGIN</a>
                      </li>
                      <li className="nav-item mx-3">
                      <Button style={{color:"white",backgroundColor:'rgb(255, 125, 175)'}} className="nav-link text-uppercase font-weight-bold px-4" variant="contained" size="large" color="#800000">TRY FOR FREE</Button>
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