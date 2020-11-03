import React, {useState,Component} from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBus,faCarAlt,faSubway,faPlane} from '@fortawesome/free-solid-svg-icons';

import price_table_1 from './img/Pricing-table.svg'
import img_h1 from './img/th-1.svg'

import price_table_col_1 from './img/Price-table-col-1.svg';
import price_table_col_2 from './img/Price-table-col-2.svg';
import price_table_col_3 from './img/Price-table-col-3.svg';
import price_table_col_4 from './img/Price-table-col-4.svg';

import cell_0 from './img/cell-0.svg';
import cell_1 from './img/cell-1.svg';
import cell_2 from './img/cell-2.svg';
import cell_3 from './img/cell-3.svg';
import cell_4 from './img/cell-4.svg';

import home_section_1 from './img/Home-section-icon-1.jpg';
import home_section_2 from './img/Home-section-icon-2.jpeg';
import home_section_3 from './img/Home-section-icon-3.jpg';

function HomeSection() {
  return (
    <>
    <Container style={{boxShadow: "0 8px 10px -10px black"}} fixed >
        <Container style={{boxShadow: "0 12px 10px -10px gray"}} maxWidth ="md" fixed >
            <div className="text-center row py-3 my-md-5" >
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
                <img src={home_section_1} style={{maxHeight:'75px'}} />
                <h4>Expand and explore the new horizon</h4>
                <p className="small">Increase profit by creating a new line of service or venture</p>
            </div>
            <div className="col-12 col-md-4 p-4 pt-5 border">
                <img src={home_section_2} style={{maxHeight:'75px'}} />
                <h4>Tap the untappped knowldege</h4>
                <p className="small">Involve working hands, get great ideas and reduce operational cost.</p>
            </div>
            <div className="col-12 col-md-4 p-4 pt-5 border">
                <img src={home_section_3} style={{maxHeight:'75px'}} />
                <h4>Get real results<br/><br/></h4>
                <p className="small">Leverage the collective brain-power and get maximum impact.</p>
            </div>
        </div>
        <div className="row text-center" >
            <div className="col-12 col-md-4 p-4 pt-5 border">
                <img src={home_section_1} style={{maxHeight:'75px'}} />
                <h4>Focus on right ideas for your business</h4>
                <p className="small">Run idea campaigns linked with business and process performance strategy.</p>
            </div>
            <div className="col-12 col-md-4 p-4 pt-5 border">
                <img src={home_section_2} style={{maxHeight:'75px'}} />
                <h4>Increase engagement<br/><br/></h4>
                <p className="small">Share ideas, voting and encourage participation by building on each other's ideas and faster team spirit.</p>
            </div>
            <div className="col-12 col-md-4 p-4 pt-5 border">
                <img src={home_section_3} style={{maxHeight:'75px'}} />
                <h4>Create a culture of continuous innovation</h4>
                <p className="small">Provide an environment where valuable insights are nurtured and rewarded.</p>
            </div>
        </div>
        <div className="row text-center" >
            <div className="col-12 col-md-4 p-4 pt-5 border">
                <img src={home_section_1} style={{maxHeight:'75px'}} />
                <h4>Focused rapid ideation<br/><br/></h4>
                <p className="small">Enable in-depth problem solving in quick turnaround time with successful outcomes.</p>
            </div>
            <div className="col-12 col-md-4 p-4 pt-5 border">
                <img src={home_section_2} style={{maxHeight:'75px'}} />
                <h4>Accelerate idea to implementation</h4>
                <p className="small">Fast-track conversion of ideas into real impact, realize benefits and deliver bottom-line results.</p>
            </div>
            <div className="col-12 col-md-4 p-4 pt-5 border">
                <img src={home_section_3} style={{maxHeight:'75px'}} />
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
function PriceSection(){
    var [price_col_1,setPriceCol1] = useState({maxHeight:'590px',maxWidth:"250px"})
    var [price_col_2,setPriceCol2] = useState({maxHeight:'590px',maxWidth:"250px"})
    var [price_col_3,setPriceCol3] = useState({maxHeight:'590px',maxWidth:"250px"})
    var [price_col_4,setPriceCol4] = useState({maxHeight:'590px',maxWidth:"250px"})
    var [price_col1_color,setColor1] = useState('rgb(91, 152, 199)')
    var [price_col2_color,setColor2] = useState('rgb(252, 179, 22)')
    var [price_col3_color,setColor3] = useState('rgb(238, 83, 81)')
    var [price_col4_color,setColor4] = useState('rgb(100, 185, 104)')
    function PriceSectionHoverIn(price_col){
        if (price_col == "1"){
            setPriceCol1({backgroundImage:'url('+price_table_col_1+')',backgroundRepeat:'no-repeat',borderRadius:'20px',border:'none',boxShadow:"12px 0 15px -4px rgb(137, 141, 137), -12px 0 8px -4px rgb(137, 141, 137)",marginTop:'-30px',marginRight:'-30px',maxHeight:'590px',maxWidth:"250px"});
            setColor1('white');
        }
        if (price_col == "2"){
            setPriceCol2({backgroundImage:'url('+price_table_col_2+')',backgroundRepeat:'no-repeat',borderRadius:'20px',border:'none',boxShadow:"12px 0 15px -4px rgb(137, 141, 137), -12px 0 8px -4px rgb(137, 141, 137)",marginTop:'-30px',marginRight:'-30px',maxHeight:'590px',maxWidth:"250px"});
            setColor2('white')
        }
        if (price_col == "3"){
            setPriceCol3({backgroundImage:'url('+price_table_col_3+')',backgroundRepeat:'no-repeat',borderRadius:'20px',border:'none',boxShadow:"12px 0 15px -4px rgb(137, 141, 137), -12px 0 8px -4px rgb(137, 141, 137)",marginTop:'-30px',marginRight:'-30px',maxHeight:'590px',maxWidth:"250px"});
            setColor3('white')
        }
        if(price_col == "4" ){
            setPriceCol4({backgroundImage:'url('+price_table_col_4+')',backgroundRepeat:'no-repeat',borderRadius:'20px',border:'none',boxShadow:"12px 0 15px -4px rgb(137, 141, 137), -12px 0 8px -4px rgb(137, 141, 137)",marginTop:'-30px',marginRight:'-30px',maxHeight:'590px',maxWidth:"250px"});
            setColor4('white')
        } 
    }    
    function PriceSectionHoverOut(price_col){
        if (price_col == "1"){
            setPriceCol1({maxHeight:'590px',maxWidth:"250px"});
            setColor1('rgb(91, 152, 199)')
        }
        if (price_col == "2"){
            setPriceCol2({maxHeight:'590px',maxWidth:"250px"});
            setColor2('rgb(252, 179, 22)')
        }
        if (price_col == "3"){
            setPriceCol3({maxHeight:'590px',maxWidth:"250px"});
            setColor3('rgb(238, 83, 81)')
        }
        if(price_col == "4" ){
            setPriceCol4({maxHeight:'590px',maxWidth:"250px"});
            setColor4('rgb(100, 185, 104)')
        } 
    }    

    
    return (
        <>
            <Container fixed >
                <Container maxWidth ="md" fixed >
                    <div className="text-center row mt-5 py-5 ">
                        <h2 className="font-weight-bolder"> The Most affordable pricing to create a continuous innovation culture for all shape and sizes.</h2>
                        <p className="my-3">No fees to get started. You don't even have to input a credit card.</p>
                    </div>
                    <div className="row p-3 text-center">
                        <div style={price_col_1} className="col-md-3 col-10 mx-auto my-3 py-5 border" onMouseOver={()=>{PriceSectionHoverIn("1")}} onMouseOut={()=>{PriceSectionHoverOut("1")}}>
                            <div className="mb-5">
                                <FontAwesomeIcon icon ={faCarAlt} className="h1" ></FontAwesomeIcon>
                                <h1  style={{color:price_col1_color}}>$0.0</h1>
                                <p>per month</p>
                            </div>
                            <h5 style={{color:'rgb(91, 152, 199)'}} className="my-5 pt-md-4 pt-5">FREE</h5>
                            <p className="h6 mb-4 pt-3">Get started amd try our idea management tool and upgrade at anytime.</p>
                            <Button style={{color:"white",backgroundColor:'rgb(91, 152, 199)'}} className="text-uppercase font-weight-bold mt-5 " variant="contained" size="large" color="#800000">SELECT PLAN</Button>
                        </div>
    
                        <div style={price_col_2} className="col-md-3 col-10 mx-auto my-3 py-5 border"  onMouseOver={()=>{PriceSectionHoverIn("2")}} onMouseOut={()=>{PriceSectionHoverOut("2")}}>
                            <div className="mb-5">
                                <FontAwesomeIcon icon ={faBus} className="h1" ></FontAwesomeIcon>
                                <h1 style={{color:price_col2_color}}>$99</h1>
                                <p>per month</p>
                            </div>
                            <h5 style={{color:'rgb(252, 179, 22)'}} className="mt-5 pt-md-4 pt-5">BASIC</h5>
                            <p className="small">irst 100 users included +$2/month per additional user</p>
                            <p className="h6 mb-3 pb-4">For individual teams and small organizations.</p>
                            <Button style={{color:"white",backgroundColor:'rgb(252, 179, 22)'}} className="text-uppercase font-weight-bold mt-5 " variant="contained" size="large" color="#800000">SELECT PLAN</Button>
                        </div>
    
                        <div style={price_col_3} className="col-md-3 col-10 mx-auto my-3 py-5 border"  onMouseOver={()=>{PriceSectionHoverIn("3")}} onMouseOut={()=>{PriceSectionHoverOut("3")}}>
                            <div className="mb-5">
                                <FontAwesomeIcon icon ={faSubway} className="h1" ></FontAwesomeIcon>
                                <h1 style={{color:price_col3_color}}>$298</h1>
                                <p>per month</p>
                            </div>
                            <h5 style={{color:'rgb(238, 83, 81)'}} className="mt-5 pt-md-4 pt-5">BUSINESS</h5>
                            <p className="small">irst 100 users included +$2/month per additional user</p>
                            <p className="h6 mb-4">Get started amd try our idea management tool and upgrade at anytime.</p>
                            <Button style={{color:"white",backgroundColor:'rgb(238, 83, 81)'}} className="text-uppercase font-weight-bold mt-5 " variant="contained" size="large" color="#800000">SELECT PLAN</Button>
                        </div>
    
                        <div style={price_col_4} className="col-md-3 col-10 mx-auto my-3 py-5 border"  onMouseOver={()=>{PriceSectionHoverIn("4")}} onMouseOut={()=>{PriceSectionHoverOut("4")}}>
                            <div className="mb-5 pb-1">
                                <FontAwesomeIcon icon ={faPlane} className="h1" ></FontAwesomeIcon>
                                <h5 style={{color:price_col4_color}} className="pb-3">INSTALL ON YOUR PRIVATE SERVER</h5>
                            </div>
                            <h5 style={{color:' rgb(100, 185, 104)'}} className="mb-5 mt-4 pt-md-4 pt-5">ENTERPRISE</h5>
                            <p className="h6 mb-2 pt-3">For large organizations with all the power, personalization and advanced controls.</p>
                            <Button style={{color:"white",backgroundColor:'rgb(100, 185, 104)'}} className="text-uppercase font-weight-bold mt-5 " variant="contained" size="large" color="#800000">SELECT PLAN</Button>
                        </div>
                    </div>
            </Container>
        </Container>
        </>
        );
}
function PriceTable(){
    var table_color = 'rgb(208, 218, 208,0.4)';
    return (
        <>
           <Container fixed >
           <Container maxWidth ="md" fixed >
              <div id="priceTable" class="my-5 row pr-0 text-center">
                  <table style={{minWidth:'880px'}} className="row col-12 pr-0 table table-striped table-bordered border-white">
                      <thead className="row col-12 pr-0">
                          <tr style={{backgroundColor:table_color}} className="row col-12 pr-0">  
                              <th style={{minHeight:'70px',backgroundImage:'url('+cell_0+')',backgroundRepeat:'no-repeat'}} className="col-4 text-left pl-5">
                              </th>
                              <th style={{minHeight:'70px',backgroundImage:'url('+cell_1+')',backgroundRepeat:'no-repeat'}} className="col-2 pr-0">Free</th>
                              <th style={{minHeight:'70px',backgroundImage:'url('+cell_2+')',backgroundRepeat:'no-repeat'}}  className="col-2">Basic</th>
                              <th style={{minHeight:'70px',backgroundImage:'url('+cell_3+')',backgroundRepeat:'no-repeat'}}  className="col-2">Business</th>
                              <th style={{minHeight:'70px',backgroundImage:'url('+cell_4+')',backgroundRepeat:'no-repeat'}} className="col-2">Enterprise</th>
                          </tr>
                      </thead>
                      <tbody className="row col-12 pr-0">
                          <tr style={{backgroundColor:table_color}} className="row col-12 pr-0">
                              <td className="col-4 text-left pl-5">Features</td>
                              <td className="col-2"></td>
                              <td className="col-2"></td>
                              <td className="col-2"></td>
                              <td className="col-2"></td>
                          </tr>
                          <tr style={{backgroundColor:table_color}} className="row col-12 pr-0">
                              <td className="col-4 text-left pl-5">Users</td>
                              <td className="col-2"> Up to 10</td>
                              <td className="col-2">Up to 100 <br/><span class="small">add more users on-demand</span></td>
                              <td className="col-2">Up to 1000 <br/><span class="small">add more users on-demand</span></td>
                              <td className="col-2">Unlimited</td>
                          </tr>

                          <tr style={{backgroundColor:table_color}} className="row col-12 pr-0">
                              <td className="col-4 text-left pl-5">Admins</td>
                              <td className="col-2">1</td>
                              <td className="col-2">10</td>
                              <td className="col-2">10</td>
                              <td className="col-2">Unlimited</td>
                          </tr>


                          <tr style={{backgroundColor:table_color}} className="row col-12 pr-0">
                              <td className="col-4 text-left pl-5">Workspaces</td>
                              <td className="col-2">1</td>
                              <td className="col-2">Unlimited</td>
                              <td className="col-2">Unlimited</td>
                              <td className="col-2">Unlimited</td>
                          </tr>


                          <tr style={{backgroundColor:table_color}} className="row col-12 pr-0">
                              <td className="col-4 text-left pl-5">Challenge Pipeline</td>
                              <td className="col-2">1</td>
                              <td className="col-2">Unlimited</td>
                              <td className="col-2">Unlimited</td>
                              <td className="col-2">Unlimited</td>
                          </tr>


                          <tr style={{backgroundColor:table_color}} className="row col-12 pr-0">
                              <td className="col-4 text-left pl-5">Idea Pipeline</td>
                              <td className="col-2">1</td>
                              <td className="col-2">Unlimited</td>
                              <td className="col-2">Unlimited</td>
                              <td className="col-2">Unlimited</td>
                          </tr>


                          <tr style={{backgroundColor:table_color}} className="row col-12 pr-0">
                              <td className="col-4 text-left pl-5">No. of Challenges</td>
                              <td className="col-2">1</td>
                              <td className="col-2">Unlimited</td>
                              <td className="col-2">Unlimited</td>
                              <td className="col-2">Unlimited</td>
                          </tr>


                          <tr style={{backgroundColor:table_color}} className="row col-12 pr-0">
                              <td className="col-4 text-left pl-5">No. of Ideas</td>
                              <td className="col-2">Unlimited</td>
                              <td className="col-2">Unlimited</td>
                              <td className="col-2">Unlimited</td>
                              <td className="col-2">Unlimited</td>
                          </tr>

                          <tr style={{backgroundColor:table_color}} className="row col-12 pr-0">
                              <td className="col-4 text-left pl-5">Kanban Boards</td>
                              <td className="col-2">Unlimited</td>
                              <td className="col-2">Unlimited</td>
                              <td className="col-2">Unlimited</td>
                              <td className="col-2">Unlimited</td>
                          </tr>

                          <tr style={{backgroundColor:table_color}} className="row col-12 pr-0">
                              <td className="col-4 text-left pl-5">Storage</td>
                              <td className="col-2">Up to 10MB</td>
                              <td className="col-2">Up to 10GB</td>
                              <td className="col-2">Up to 10GB</td>
                              <td className="col-2">Unlimited</td>
                          </tr>

                          <tr style={{backgroundColor:table_color}} className="row col-12 pr-0">
                              <td className="col-4 text-left pl-5">Capture, Screen, Evaluate and Execute ideas</td>
                              <td className="col-2">Unlimited</td>
                              <td className="col-2">Unlimited</td>
                              <td className="col-2">Unlimited</td>
                              <td className="col-2">Unlimited</td>
                          </tr>
                          <tr style={{backgroundColor:table_color}} className="row col-12 pr-0">
                              <td className="col-4 text-left pl-5">Notifications</td>
                              <td className="col-2">Unlimited</td>
                              <td className="col-2">Unlimited</td>
                              <td className="col-2">Unlimited</td>
                              <td className="col-2">Unlimited</td>
                          </tr>
                          <tr style={{backgroundColor:table_color}} className="row col-12 pr-0">
                              <td className="col-4 text-left pl-5">Support</td>
                              <td className="col-2"></td>
                              <td className="col-2">Live Chat & Email Support</td>
                              <td className="col-2">Live Chat & Phone Support</td>
                              <td className="col-2">Dedicated Innovation Success Manager</td>
                          </tr>
                          <tr style={{backgroundColor:table_color}} className="row col-12 pr-0">
                              <td className="col-4 text-left pl-5">Analytics</td>
                              <td className="col-2"></td>
                              <td className="col-2">Basic</td>
                              <td className="col-2">Basic</td>
                              <td className="col-2">Advanced</td>
                          </tr>
                          <tr style={{backgroundColor:table_color}} className="row col-12 pr-0">
                              <td className="col-4 text-left pl-5">Full White Labeling</td>
                              <td className="col-2"></td>
                              <td className="col-2"></td>
                              <td className="col-2"></td>
                              <td className="col-2">Yes</td>
                          </tr>
                          <tr style={{backgroundColor:table_color}} className="row col-12 pr-0">
                              <td className="col-4 text-left pl-5">Singel Sign-up</td>
                              <td className="col-2"></td>
                              <td className="col-2"></td>
                              <td className="col-2"></td>
                              <td className="col-2">Yes</td>
                          </tr>
                          <tr style={{backgroundColor:table_color}} className="row col-12 pr-0">
                              <td className="col-4 text-left pl-5">Customization</td>
                              <td className="col-2"></td>
                              <td className="col-2"></td>
                              <td className="col-2"></td>
                              <td className="col-2">Yes</td>
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