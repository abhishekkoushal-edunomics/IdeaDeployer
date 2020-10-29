import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import img_1 from './img/1.jpg';
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
      <Container style={{backgroundColor:'rgb(50, 40, 140)','height':'100vh'}} fluid >
        <Container maxWidth ="md" className="p-5" fixed >
            <div className="row my-5 text-white">
                <div className="col-md-7 mt-5">
                    <h1 className="font-weight-bolder">IdeaDeployer | &nbsp; &nbsp; Employee Innovation | Kanban | Incubation</h1>
                    <p>
                    Custom Automated Workflow | Challenge Pipeline | Idea Pipeline | Idea Delivery
                        | Innovation Delivery | Idea Ranking | Crowd Voting | Social Activity
                    </p>
                    <Button className="font-weight-bold px-5" style={{color:'white',backgroundColor:'rgb(255, 125, 175)'}} variant="contained" size="large" >TRY FOR FREE</Button>
                </div>
                <div className="col-md-5 row ml-auto mt-5">
                    <img src={img_1} className="img-fluid col-12" />
                </div>
            </div>
        </Container>
      </Container>
    </>
  );
}