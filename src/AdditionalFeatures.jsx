import React from 'react';
import Container from '@material-ui/core/Container';
import img_1 from './img/Homepage-additional-features.svg';
import bg_1 from './img/Homepage-slider-image.png';
import Button from '@material-ui/core/Button';

import addition_feature_img from './img/Home-additional-features.jpg';
function BottomAdditionalFeatures(){
    return(
        <>
        <Container style={{backgroundImage:'url('+bg_1+')'}} fluid >
            <Container maxWidth ="md" className="p-5 my-2" fixed >
                <div className="text-center">
                    <div className="h3 text-white mb-4">IdeaDeployer transforms ideas into new business results.</div>
                    <div>
                        <Button className="font-weight-bold px-5 my-2 mx-2" style={{color:'white',backgroundColor:'rgb(255, 125, 175)'}} variant="contained" size="large" >TRY FOR FREE</Button>
                        <Button className="font-weight-bold px-5 my-2 mx-2" style={{color:'white',backgroundColor:'rgb(255, 125, 175)'}} variant="contained" size="large" >REQUEST A DEMO</Button>
                    </div>
                </div>
            </Container>
        </Container>
        </>
    );
}

function AdditionalFeatures(){
    return(
    <>
      <Container fluid >
        <Container maxWidth ="md" className="p-5" fixed >
            <div className="row text-center">
                <h1 className="col-12 font-weight-bolder">Additional Features</h1>
                <img src={addition_feature_img} className="col-12 img-fluid"/>
            </div>
        </Container>
      </Container>
    </>

    );
}

export {AdditionalFeatures,BottomAdditionalFeatures};