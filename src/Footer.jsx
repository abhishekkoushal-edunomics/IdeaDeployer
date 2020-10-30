import React from 'react';
import Container from '@material-ui/core/Container';
import logo_img from './img/logo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGooglePlusG,faTwitter,faFacebookF,faInstagram,faLinkedinIn,faSpotify } from '@fortawesome/free-brands-svg-icons'
import { faAdjust } from '@fortawesome/fontawesome-svg-core'
function SocialMediaBar(){
    return(
        <>
            <div style={{backgroundColor:'rgb(218, 218, 224)'}} className="row px-0 mx-0">
                <div className="col-md-auto p-2 my-3 my-md-0 mx-auto">
                    <span className="ml-auto">Terms of Use</span>
                    <span className="mx-3">Privacy Policy</span>
                    <span className="mr-auto">Cookie Policy</span>
                </div>
                <div className="col-md-4 row h3 text-center">
                    <div className="col-6  row">
                        <a class="rounded-circle col-3 p-2 mx-auto border border-dark" href="#" >
                            <FontAwesomeIcon icon ={faTwitter} ></FontAwesomeIcon>
                        </a>
                        <a class="rounded-circle col-3 p-2 mx-auto border border-dark" href="#" >
                            <FontAwesomeIcon icon ={faGooglePlusG} ></FontAwesomeIcon>
                        </a>
                        <a class="rounded-circle col-3 p-2 mx-auto border border-dark" href="#" >
                            <FontAwesomeIcon icon ={faFacebookF} ></FontAwesomeIcon>
                        </a>
                    </div>
                    <div className="col-6 row">
                        <a class="rounded-circle col-3 p-2 mx-auto border border-dark" href="#" >
                            <FontAwesomeIcon icon ={faInstagram} ></FontAwesomeIcon>
                        </a>
                        <a class="rounded-circle col-3 p-2 mx-auto border border-dark" href="#" >
                            <FontAwesomeIcon icon ={faLinkedinIn} ></FontAwesomeIcon>
                        </a>
                        <a class="rounded-circle col-3 p-2 mx-auto border border-dark" href="#" >
                            <FontAwesomeIcon icon ={faSpotify} ></FontAwesomeIcon>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default function Section() {
  return (
    <>
    <Container style={{backgroundColor:'rgb(218, 218, 224)',overflowX:'hidden'}} fixed >
        <Container maxWidth ="md" fixed >
        <div className="py-5 mx-0">
            <div className="text-center row py-5 mx-0 px-0">
                <div className="col-md-3 col-12 text-left">
                    <h5 className="font-weight-bold mb-3">Our Address</h5>
                    <p className="small">795 South Park, Wonderian CA94107, Australia</p>
                </div>
                <div className="col-md-6 col-12">
                    <img src={logo_img} className="img-fluid mb-3" />
                    <p className="small">The only platform you need to deploy a culture of open innovation</p>
                </div>
                <div className="col-md-3 col-12 text-left text-md-right">
                    <h5 className="font-weight-bold  mb-3">Contact</h5>
                    <p className="small">ideadeployer.com</p>
                </div>
            </div>
        </div>    
        </Container>
    </Container>
    <SocialMediaBar></SocialMediaBar>
    </>
  );
}
