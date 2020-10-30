import React from 'react';
import Container from '@material-ui/core/Container';
import img_1 from './img/Homepage-additional-features.svg';
import bg_1 from './img/Homepage-slider-image.png';
import Button from '@material-ui/core/Button';

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
      <Container style={{height:'100vh',position:'absolute'}} fluid >
        <Container maxWidth ="md" className="p-5" fixed >
            <div className="row small border">
                <div className="row col-7 mt-5 text-dark text-center border border-danger">
                    <div className="col-4 mx-auto">
                        <div className="h6">Enrich Campagin</div>
                        <div className="">Enrich Campagin by adding attachmentsm, URL or videos.</div>
                    </div>
                    <div className="col-4 mx-auto">sdfjdslk</div>
                    <div className="col-4 mx-auto">dskifjsd</div>
                </div>
                <div className="row col-4 ml-5 border border-success">
m
                </div>
            </div>
        </Container>
      </Container>
      <Container style={{height:'100vh',position:"relative",zIndex:'-1',backgroundSize:"cover"}} fluid >
        <Container maxWidth ="md" className="p-5" fixed >
        <div  className="row ">
            <div className="col-12 mx-0 px-0"><img src={img_1} className="img-fluid d-none d-md-block" /></div>
        </div>
        </Container>
        </Container>
    </>

    );
}

export {AdditionalFeatures,BottomAdditionalFeatures};