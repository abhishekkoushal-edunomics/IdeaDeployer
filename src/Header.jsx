import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import header_bg_img from './img/Features-slider-image.png';
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
  

export default function FixedContainer() {
    const classes = useStyles();

  return (
    <>
      <Container style={{height:'100vh',position:'absolute'}} fluid >
        <Container maxWidth ="md" className="p-5" fixed >
            <div className="row my-5 text-white">
                <div className="col-md-6 mt-5">
                    <h1 className="font-weight-bolder my-3">IdeaDeployer | Employee Innovation | Kanban | Incubation</h1>
                    <p className="my-4">
                    Custom Automated Workflow | Challenge Pipeline | Idea Pipeline | Idea Delivery
                        | Innovation Delivery | Idea Ranking | Crowd Voting | Social Activity
                    </p>
                    <Button className="font-weight-bold px-5" style={{color:'white',backgroundColor:'rgb(255, 125, 175)'}} variant="contained" size="large" >TRY FOR FREE</Button>
                </div>
            </div>
        </Container>
      </Container>
      <div style={{position:"relative",zIndex:'-1',height:'100vh',backgroundSize:"cover"}} className="row">
        <div className="col-12 mx-0 px-0"><img src={header_bg_img} className="img-fluid" /></div>
      </div>
    </>
  );
}