import React from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
export default function Section() {
  return (
    <>
    <Container style={{boxShadow: "0 8px 10px -10px black"}} fixed >
        <Container style={{boxShadow: "0 12px 10px -10px gray"}} maxWidth ="md" fixed >
            <div className="text-center row py-5">
                <div className="col-6 mx-auto">
                    <h4 style={{fontWeight:"400"}}>The only solution you need to</h4>
                    <h2 style={{fontWeight:"800"}} className="my-3">Achieve goal-oriented innovation excellence</h2>
                </div>
                <h4 style={{fontWeight:"400"}} className="mx-5 px-4 ">The best-integrated idea management tool with all features of ideation campaigns, gated ideation workflow, idea voting, rating, commenting and real-time collaboration, idea evaluation and expert reviews, idea execution and Kanban based implementation management and innovation dashboard, reporting & analytics.</h4>
                <div>
                    <Button style={{color:"white",backgroundColor:'rgb(255, 125, 175)'}} className="nav-link text-uppercase font-weight-bold px-4 mx-3" variant="contained" size="large" color="#800000">GET STARTED NOW FOR FREE</Button>
                    <Button style={{color:"white",backgroundColor:'rgb(255, 125, 175)'}} className="nav-link text-uppercase font-weight-bold px-4 mx-3" variant="contained" size="large" color="#800000">CHECK PRICING</Button>
                </div>
            </div>
        </Container>
    </Container>
    </>
  );
}