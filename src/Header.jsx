import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import feature_header_img from './img/Features-slider-image.png';
import home_header_img from './img/Homepage-slider-image.png';
import price_header_img from './img/Homepage-slider-image.png';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

function HomeHeader() {
  return (
    <>
      <Container style={{height:'100vh',position:'absolute'}} fluid >
        <Container maxWidth ="md" className="p-5" fixed >
            <div className="row my-5 py-4">
                <div className="col-md-7 col-12 mt-5 text-white">
                    <h1 className="font-weight-bolder my-3 text-uppercase">Create continuous Innovation culture</h1>
                    <p className="my-4 pr-5 small">Helping you to capture, collaborate, priorittize, and realize the great ideas on what matters most to your business.</p>
                    <Button className="font-weight-bold px-5" style={{color:'white',backgroundColor:'rgb(255, 125, 175)'}} variant="contained" size="large" >TRY FOR FREE</Button>
                </div>
            </div>
        </Container>
      </Container>
      <div style={{position:"relative",zIndex:'-1',height:'100vh',backgroundSize:"cover"}} className="row ">
        <div className="col-12 mx-0 px-0" style={{backgroundImage:'url('+home_header_img+')'}}><img src={home_header_img} className="img-fluid d-none d-md-block" /></div>
      </div>
    </>
  );
}

function FeatureHeader() {
    const classes = useStyles();

  return (
    <>
      <Container style={{height:'100vh',position:'absolute'}} fluid >
        <Container maxWidth ="md" className="p-5" fixed >
            <div className="row my-5">
                <div className="col-md-6 mt-5 text-white">
                    <h1 className="font-weight-bolder my-3">The only solution you need to</h1>
                    <p className="my-4">
                    Custom Automated Workflow | Challenge Pipeline | Idea Pipeline | Idea Delivery
                        | Innovation Delivery | Idea Ranking | Crowd Voting | Social Activity
                    </p>
                    <Button className="font-weight-bold px-5" style={{color:'white',backgroundColor:'rgb(255, 125, 175)'}} variant="contained" size="large" >TRY FOR FREE</Button>
                </div>
            </div>
        </Container>
      </Container>
      <div style={{position:"relative",zIndex:'-1',height:'100vh',backgroundSize:"cover"}} className="row ">
        <div className="col-12 mx-0 px-0" style={{backgroundImage:'url('+feature_header_img+')',}}><img src={feature_header_img} className="img-fluid d-none d-md-block" /></div>
      </div>
    </>
  );
}
function PriceHeader() {
  return (
    <>
      <Container style={{height:'100vh',position:'absolute'}} fluid >
        <Container maxWidth ="md" className="p-5" fixed >
            <div className="row my-5 py-4">
                <div className="col-md-7 col-12 mt-5 text-white">
                    <h1 className="font-weight-bolder my-3 text-uppercase">Idea IdeaDeployer | Affordable and Simple Pricing for everyone</h1>
                    <p className="my-4 pr-5 small">Simple, transparent and economic innovation management software </p>
                    <Button className="font-weight-bold px-5" style={{color:'white',backgroundColor:'rgb(255, 125, 175)'}} variant="contained" size="large" >TRY FOR FREE</Button>
                </div>
            </div>
        </Container>
      </Container>
      <div style={{position:"relative",zIndex:'-1',height:'100vh',backgroundSize:"cover"}} className="row ">
        <div className="col-12 mx-0 px-0" style={{backgroundImage:'url('+price_header_img+')'}}><img src={price_header_img} className="img-fluid d-none d-md-block" /></div>
      </div>
    </>
  );
}

export {FeatureHeader,HomeHeader,PriceHeader};