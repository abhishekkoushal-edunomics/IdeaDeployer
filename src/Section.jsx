import React from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import img_1 from './img/temp.jpeg'
function HomeSection() {
  return (
    <>
    <Container style={{boxShadow: "0 8px 10px -10px black"}} fixed >
        <Container style={{boxShadow: "0 12px 10px -10px gray"}} maxWidth ="md" fixed >
            <div className="text-center row py-3 my-md-5">
                <div className="col-md-6 mx-auto">
                    <h2 style={{fontWeight:"800"}} className="my-4">What is IdeaDeployer</h2>
                </div>
                <h4 style={{fontWeight:"400"}} className="col-9 mx-auto px-4 ">IdeaDeployer is a cloud-based all-in-one ideation management solution that helps you to discover, capture, collaborate, evaluate, prioritize and execute the beat idea and deploy an innovation culture.</h4>
            </div>
        </Container>
    </Container>
    </>
  );
}
function FeatureSection() {
    return (
      <>
      <Container style={{boxShadow: "0 8px 10px -10px black"}} fixed >
          <Container style={{boxShadow: "0 12px 10px -10px gray"}} maxWidth ="md" fixed >
              <div className="text-center row py-3 my-md-5">
                  <div className="col-md-6 mx-auto">
                      <h4 style={{fontWeight:"400"}}>The only solution you need to</h4>
                      <h2 style={{fontWeight:"800"}} className="my-3">Achieve goal-oriented innovation excellence</h2>
                  </div>
                  <h4 style={{fontWeight:"400"}} className="mx-md-5 px-4 ">The best-integrated idea management tool with all features of ideation campaigns, gated ideation workflow, idea voting, rating, commenting and real-time collaboration, idea evaluation and expert reviews, idea execution and Kanban based implementation management and innovation dashboard, reporting & analytics.</h4>
                  <div className="my-4 text-md-center text-left">
                      <Button style={{color:"white",backgroundColor:'rgb(255, 125, 175)'}} className="nav-link text-uppercase font-weight-bold px-4 mx-3 my-2" variant="contained" size="large" color="#800000">GET STARTED NOW FOR FREE</Button>
                      <Button style={{color:"white",backgroundColor:'rgb(255, 125, 175)'}} className="nav-link text-uppercase font-weight-bold px-4 mx-3  my-2" variant="contained" size="large" color="#800000">CHECK PRICING</Button>
                  </div>
              </div>
          </Container>
      </Container>
      </>
    );
  }
  function HomeBottomSection() {
    return (
      <>
      <Container style={{boxShadow: "0 8px 10px -10px black"}} fixed >
          <Container style={{boxShadow:"0 15px 10px -10px gray",color:'white'}} maxWidth ="md" fixed >
          .
          </Container>
      </Container>
      
      <Container style={{boxShadow: "0 8px 10px -10px black"}} fixed >
          <Container style={{boxShadow:"0 15px 10px -10px gray"}} maxWidth ="md" fixed >
              <div className="text-center row py-3 my-4 my-md-5">
                  <div className="col-md-6 mx-auto">
                      <h2 style={{fontWeight:"800"}}>The Best Ideation Management Solution</h2>
                      <p className="my-3">You are just minutes away from IdeaDeployer.</p>
                  </div>
                  <div className="my-4 text-center text-left">
                      <Button className="font-weight-bold px-5" style={{color:'white',backgroundColor:'rgb(255, 125, 175)'}} variant="contained" size="large" >START HERE</Button>
                  </div>
              </div>
          </Container>
      </Container>
      </>
    );
  }

function HomeUpperSection() {
    return (
      <>
      <Container fixed >
          <Container maxWidth ="md" fixed >
          <div style={{boxShadow: "0 14px 10px -10px gray", marginTop:"-100px"}}>
            <div className="row text-center bg-white" >
            <div className="col-12 col-md-4 p-4 pt-5 border ">
                <img src={img_1} style={{maxHeight:'75px'}} />
                <h4>Expand and explore the new horizon</h4>
                <p className="small">Increase profit by creating a new line of service or venture</p>
            </div>
            <div className="col-12 col-md-4 p-4 pt-5 border">
                <img src={img_1} style={{maxHeight:'75px'}} />
                <h4>Tap the untappped knowldege</h4>
                <p className="small">Involve working hands, get great ideas and reduce operational cost.</p>
            </div>
            <div className="col-12 col-md-4 p-4 pt-5 border">
                <img src={img_1} style={{maxHeight:'75px'}} />
                <h4>Get real results<br/><br/></h4>
                <p className="small">Leverage the collective brain-power and get maximum impact.</p>
            </div>
        </div>
        <div className="row text-center" >
            <div className="col-12 col-md-4 p-4 pt-5 border">
                <img src={img_1} style={{maxHeight:'75px'}} />
                <h4>Focus on right ideas for your business</h4>
                <p className="small">Run idea campaigns linked with business and process performance strategy.</p>
            </div>
            <div className="col-12 col-md-4 p-4 pt-5 border">
                <img src={img_1} style={{maxHeight:'75px'}} />
                <h4>Increase engagement<br/><br/></h4>
                <p className="small">Share ideas, voting and encourage participation by building on each other's ideas and faster team spirit.</p>
            </div>
            <div className="col-12 col-md-4 p-4 pt-5 border">
                <img src={img_1} style={{maxHeight:'75px'}} />
                <h4>Create a culture of continuous innovation</h4>
                <p className="small">Provide an environment where valuable insights are nurtured and rewarded.</p>
            </div>
        </div>
        <div className="row text-center" >
            <div className="col-12 col-md-4 p-4 pt-5 border">
                <img src={img_1} style={{maxHeight:'75px'}} />
                <h4>Focused rapid ideation<br/><br/></h4>
                <p className="small">Enable in-depth problem solving in quick turnaround time with successful outcomes.</p>
            </div>
            <div className="col-12 col-md-4 p-4 pt-5 border">
                <img src={img_1} style={{maxHeight:'75px'}} />
                <h4>Accelerate idea to implementation</h4>
                <p className="small">Fast-track conversion of ideas into real impact, realize benefits and deliver bottom-line results.</p>
            </div>
            <div className="col-12 col-md-4 p-4 pt-5 border">
                <img src={img_1} style={{maxHeight:'75px'}} />
                <h4>Reduce the cost of innovation</h4>
                <p className="small">Stay on track an top of the ideation pipeline and streamline the innovation execution.</p>
            </div>
        </div>
        </div>
          </Container>
      </Container>
      </>
    );
}

export {HomeSection,HomeBottomSection,FeatureSection,HomeUpperSection};