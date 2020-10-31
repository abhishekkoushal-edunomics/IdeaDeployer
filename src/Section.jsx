import React, {useState,Component} from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBus,faCarAlt,faSubway,faPlane} from '@fortawesome/free-solid-svg-icons';
import img_1 from './img/temp.jpeg'
import price_table_1 from './img/Pricing-table.svg'
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
class PriceSection extends Component{
    constructor(props){
        super(props);
        this.state ={
            price_col_1 : {},
            price_col_2 : {},
            price_col_3 : {},
            price_col_4 : {},
        
        }
    }


    PriceSectionHoverIn(price_col){
        alert(price_col)
        if (price_col == "1"){
            this.state.price_col_1 = {boxShadow:"12px 0 15px -4px rgb(137, 141, 137), -12px 0 8px -4px rgb(137, 141, 137)",marginTop:'-30px',marginRight:'-30px'};
        }
        if (price_col == "2"){
            this.state.price_col_2 = {boxShadow:"12px 0 15px -4px rgb(137, 141, 137), -12px 0 8px -4px rgb(137, 141, 137)",marginTop:'-30px',marginRight:'-30px'};
        }
        if (price_col == "3"){
            this.state.price_col_3 = {boxShadow:"12px 0 15px -4px rgb(137, 141, 137), -12px 0 8px -4px rgb(137, 141, 137)",marginTop:'-30px',marginRight:'-30px'};
        }
        else{
            this.state.price_col_4 = {boxShadow:"12px 0 15px -4px rgb(137, 141, 137), -12px 0 8px -4px rgb(137, 141, 137)",marginTop:'-30px',marginRight:'-30px'};
        } 
    }    
    render(){
        return (
            <>
              <Container fixed >
                  <Container maxWidth ="md" fixed >
                      <div className="text-center row mt-5 py-5 ">
                          <h2 className="font-weight-bolder"> The Most affordable pricing to create a continuous innovation culture for all shape and sizes.</h2>
                          <p className="my-3">No fees to get started. You don't even have to input a credit card.</p>
                      </div>
                      <div className="row p-3 text-center">
                          <div style={this.state.price_col_1} className="col-3 py-5 border" >
                              <div className="mb-5">
                                  <FontAwesomeIcon icon ={faCarAlt} className="h1" ></FontAwesomeIcon>
                                  <h1  style={{color:'rgb(91, 152, 199)'}}>$0.0</h1>
                                  <p>per month</p>
                              </div>
                              <h5 style={{color:'rgb(91, 152, 199)'}} className="my-5">FREE</h5>
                              <p className="h6 mb-4 pt-3">Get started amd try our idea management tool and upgrade at anytime.</p>
                              <Button style={{color:"white",backgroundColor:'rgb(91, 152, 199)'}} className="text-uppercase font-weight-bold mt-5 " variant="contained" size="large" color="#800000">SELECT PLAN</Button>
                          </div>
      
                          <div style={this.state.price_col_2} className="col-3 py-5 border" >
                              <div className="mb-5">
                                  <FontAwesomeIcon icon ={faBus} className="h1" ></FontAwesomeIcon>
                                  <h1 style={{color:'rgb(252, 179, 22)'}}>$0.0</h1>
                                  <p>per month</p>
                              </div>
                              <h5 style={{color:'rgb(252, 179, 22)'}} className="mt-5">BASIC</h5>
                                <p className="small">irst 100 users included +$2/month per additional user</p>
                              <p className="h6 mb-3 pb-4">For individual teams and small organizations.</p>
                              <Button style={{color:"white",backgroundColor:'rgb(252, 179, 22)'}} className="text-uppercase font-weight-bold mt-5 " variant="contained" size="large" color="#800000">SELECT PLAN</Button>
                          </div>
      
                          <div style={this.state.price_col_3} className="col-3 py-5 border">
                              <div className="mb-5">
                                  <FontAwesomeIcon icon ={faSubway} className="h1" ></FontAwesomeIcon>
                                  <h1 style={{color:'rgb(238, 83, 81)'}}>$0.0</h1>
                                  <p>per month</p>
                              </div>
                              <h5 style={{color:'rgb(238, 83, 81)'}} className="mt-5">FREE</h5>
                              <p className="small">irst 100 users included +$2/month per additional user</p>
                              <p className="h6 mb-4">Get started amd try our idea management tool and upgrade at anytime.</p>
                              <Button style={{color:"white",backgroundColor:'rgb(238, 83, 81)'}} className="text-uppercase font-weight-bold mt-5 " variant="contained" size="large" color="#800000">SELECT PLAN</Button>
                          </div>
      
                          <div style={this.state.price_col_4} className="col-3 py-5 border">
                              <div className="mb-5">
                                  <FontAwesomeIcon icon ={faPlane} className="h1" ></FontAwesomeIcon>
                                  <h1 style={{color:' rgb(100, 185, 104)'}}>$0.0</h1>
                                  <p>per month</p>
                              </div>
                              <h5 style={{color:' rgb(100, 185, 104)'}} className="my-5">FREE</h5>
                              <p className="h6 mb-2 pt-3">For large organizations with all the power, personalization and advanced controls.</p>
                              <Button style={{color:"white",backgroundColor:'rgb(100, 185, 104)'}} className="text-uppercase font-weight-bold mt-5 " variant="contained" size="large" color="#800000">SELECT PLAN</Button>
                          </div>
                      </div>
                </Container>
            </Container>
            </>
          );
    }
}
function PriceTable(){
    return (
        <>
           <Container fixed >
           <Container maxWidth ="md" fixed >
              <div>
                  <table style={{backgroundColor:'rgb(208, 218, 208,0.4)'}} className="table table-striped table-bordered border-white">
                      <thead>
                          <tr>  
                            <th></th>
                              <th>Free</th>
                              <th>Basic</th>
                              <th>Business</th>
                              <th>Enterprise</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td>Features</td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                          </tr>
                          <tr>
                              <td>Users</td>
                              <td> Up to 10</td>
                              <td>Up to 100 <br/><span class="small">add more users on-demand</span></td>
                              <td>Up to 1000 <br/><span class="small">add more users on-demand</span></td>
                              <td>Unlimited</td>
                          </tr>

                          <tr>
                              <td>Admins</td>
                              <td>1</td>
                              <td>10</td>
                              <td>10</td>
                              <td>Unlimited</td>
                          </tr>


                          <tr>
                              <td>Workspaces</td>
                              <td>1</td>
                              <td>Unlimited</td>
                              <td>Unlimited</td>
                              <td>Unlimited</td>
                          </tr>


                          <tr>
                              <td>Challenge Pipeline</td>
                              <td>1</td>
                              <td>Unlimited</td>
                              <td>Unlimited</td>
                              <td>Unlimited</td>
                          </tr>


                          <tr>
                              <td>Idea Pipeline</td>
                              <td>1</td>
                              <td>Unlimited</td>
                              <td>Unlimited</td>
                              <td>Unlimited</td>
                          </tr>


                          <tr>
                              <td>No. of Challenges</td>
                              <td>1</td>
                              <td>Unlimited</td>
                              <td>Unlimited</td>
                              <td>Unlimited</td>
                          </tr>


                          <tr>
                              <td>No. of Ideas</td>
                              <td>Unlimited</td>
                              <td>Unlimited</td>
                              <td>Unlimited</td>
                              <td>Unlimited</td>
                          </tr>

                          <tr>
                              <td>Kanban Boards</td>
                              <td>Unlimited</td>
                              <td>Unlimited</td>
                              <td>Unlimited</td>
                              <td>Unlimited</td>
                          </tr>

                          <tr>
                              <td>Storage</td>
                              <td>Up to 10MB</td>
                              <td>Up to 10GB</td>
                              <td>Up to 10GB</td>
                              <td>Unlimited</td>
                          </tr>

                          <tr>
                              <td>Capture, Screen, Evaluate and Execute ideas</td>
                              <td>Unlimited</td>
                              <td>Unlimited</td>
                              <td>Unlimited</td>
                              <td>Unlimited</td>
                          </tr>
                          <tr>
                              <td>Notifications</td>
                              <td>Unlimited</td>
                              <td>Unlimited</td>
                              <td>Unlimited</td>
                              <td>Unlimited</td>
                          </tr>
                          <tr>
                              <td>Support</td>
                              <td></td>
                              <td>Live Chat & Email Support</td>
                              <td>Live Chat & Phone Support</td>
                              <td>Dedicated Innovation Success Manager</td>
                          </tr>
                          <tr>
                              <td>Analytics</td>
                              <td></td>
                              <td>Basic</td>
                              <td>Basic</td>
                              <td>Advanced</td>
                          </tr>
                          <tr>
                              <td>Full White Labeling</td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td>Yes</td>
                          </tr>
                          <tr>
                              <td>Singel Sign-up</td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td>Yes</td>
                          </tr>
                          <tr>
                              <td>Customization</td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td>Yes</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
           </Container>
           </Container>
        </>
    );
}
export {HomeSection,HomeBottomSection,FeatureSection,HomeUpperSection,PriceSection,PriceTable};