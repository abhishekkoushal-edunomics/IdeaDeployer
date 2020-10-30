import React from 'react';
import Container from '@material-ui/core/Container';
import img_left_1 from './img/Features-artwork-1.svg';
import img_left_2 from './img/Features-artwork-3.svg';
import img_left_3 from './img/Features-artwork-5.svg';
import img_left_4 from './img/Features-artwork-7.svg';
import img_right_1 from './img/Features-artwork-2.svg';
import img_right_2 from './img/Features-artwork-4.svg';
import img_right_3 from './img/Features-artwork-6.svg';
import img_right_4 from './img/Features-artwork-8.svg';
import arrow_img from './img/Arrow.png';

function Arrow(props) {
    var inverted_arrow = 'rotateX(0deg)'
    if(props.invert == '1'){
        inverted_arrow = 'rotateX(180deg)'
    }
  return (
    <>
    <Container  style={{overflowX:'hidden'}} fixed >
        <Container maxWidth ="md" fixed >
            <div style={{ transform: inverted_arrow}} className="text-center row">
                <img style={{height:'200px'}} src={arrow_img} className="col-9 img-fluid mx-auto" />
            </div>
        </Container>
    </Container>
    </>
  );
}

function LeftSection_1() {
  return (
    <>
    <Container  style={{overflowX:'hidden'}} fixed >
        <Container maxWidth ="md" fixed >
            <div className="row pt-5">
                <div className="text-center col-md-6 col-12 h3 mx-auto my-4 font-weight-bold">Innovation Workspace</div>
                <div className=" text-left col-12 row mt-4">
                    <div className="col-md-6 col-12 d-md-none">
                        <img src={img_left_1} className="img-fluid"/>
                    </div>
                    <div className="col-md-6 col-12">
                        <div>
                            <h4>Dedicate Workspace</h4>
                            <p className="small">Create a dedicated workspace by innovation theme aligned to business strategy or by each department.</p>
                        </div>
                        <div>
                            <h4>Custom Challenge Workflow</h4>
                            <p className="small">Model your own challenge management process and transform the way you manage ideation campaigns.</p>
                        </div>
                        <div>
                            <h4>Custom Idea Workflow</h4>
                            <p className="small">Define your own ideation stages, add criteria to promote ideas automatically and streamline the end-to-end innovation process</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-12 d-none d-md-block">
                        <img src={img_left_1} className="img-fluid"/>
                    </div>
                </div>
            </div>
        </Container>
    </Container>
    </>
  );
}

function LeftSection_2() {
    return (
      <>
      <Container  style={{overflowX:'hidden'}} fixed >
          <Container maxWidth ="md" fixed >
              <div className="row">
                  <div className="text-center col-md-6 col-12 h3 mx-auto my-4 font-weight-bold">Idea Collection</div>
                  <div className=" text-left col-12 row mt-4">
                      <div className="col-md-6 col-12 d-md-none">
                          <img style={{maxHeight:'300px'}} src={img_left_2} className="img-fluid"/>
                      </div>
                      <div className="col-md-6 col-12">
                          <div>
                              <h4>Get Focused Ideas</h4>
                              <p className="small">Capture Ideas from everyone and anytime for a challenge and solve real business problems together.</p>
                          </div>
                          <div>
                              <h4>Anonymous Posting</h4>
                              <p className="small">Empower members who do not feel confident to post their ideas by hiding their identity</p>
                          </div>
                          <div>
                              <h4>Top Innovator</h4>
                              <p className="small">Identify top contributors based on the number of ideas posted, participation, votes and reward top innovators.</p>
                          </div>
                      </div>
                      <div className="col-md-6 col-12 d-md-block">
                          <img style={{maxHeight:'300px'}} src={img_left_2} className="img-fluid"/>
                      </div>
                  </div>
              </div>
          </Container>
      </Container>
      </>
    );
  }

function LeftSection_3() {
    return (
      <>
      <Container  style={{overflowX:'hidden'}} fixed >
          <Container maxWidth ="md" fixed >
              <div className="row">
                  <div className="text-center col-md-6 col-12 h3 mx-auto my-4 font-weight-bold">Idea Evaluation</div>
                  <div className=" text-left col-12 row mt-4">
                      <div className="col-md-6 d-md-none col-12">
                          <img style={{maxHeight:'300px'}} src={img_left_3} className="img-fluid"/>
                      </div>
                      <div className="col-md-6 col-12 mt-3">
                          <div>
                              <h4>Multiple Scoring System</h4>
                              <p className="small">Assess the Idea viability based on crowd-voting or customizable scorecards.</p>
                          </div>
                          <div>
                              <h4>Transparent Evaluation</h4>
                              <p className="small">All subject matter experts use the same pre-agreed criteria to evaluate an idea and eliminate any blases or preferences.</p>
                          </div>
                          <div>
                              <h4>Idea Selection Notification</h4>
                              <p className="small">Idea submitter is notified in real-time when their idea is selected and other important status changes.</p>
                          </div>
                      </div>
                      <div className="col-md-6 col-12 d-none d-md-block">
                          <img style={{maxHeight:'300px'}} src={img_left_3} className="img-fluid"/>
                      </div>
                  </div>
              </div>
          </Container>
      </Container>
      </>
    );
  }

function LeftSection_4() {
    return (
      <>
      <Container  style={{overflowX:'hidden'}} fixed >
          <Container maxWidth ="md" fixed >
              <div className="row">
                  <div className="text-center col-md-6 col-12 h3 mx-auto my-4 font-weight-bold">Reporting and Analytics</div>
                  <div className=" text-left col-12 row mt-4">
                    <div className="col-md-6 col-12 d-md-none">
                          <img src={img_left_4} className="img-fluid"/>
                      </div>
                      <div className="col-md-6 col-12">
                          <div>
                              <h4>Idea Dashboard</h4>
                              <p className="small">Keep track of innovation leader's idea pipeline and spend less time with unified platform having all idea implementation status.</p>
                          </div>
                          <div>
                              <h4>Smart Search</h4>
                              <p className="small">Search ideas and challenges by categories and tags and use advanced filters to sort ideas and data.</p>
                          </div>
                          <div>
                              <h4>Report and Insights</h4>
                              <p className="small">Powerful visualization of engagements enabling informed decision making and proactive fixing of bottlenecks.</p>
                          </div>
                      </div>
                      <div className="col-md-6 col-12 d-none d-md-block">
                          <img src={img_left_4} className="img-fluid"/>
                      </div>
                  </div>
              </div>
          </Container>
      </Container>
      </>
    );
  }

function RightSection_1() {
    return (
      <>
      <Container  style={{overflowX:'hidden'}} fixed >
          <Container maxWidth ="md" fixed >
                <div className="row">
                    <div className="text-center col-md-6 col-12 h3 mx-auto mb-4 font-weight-bold">Manage Challenges</div>
                    <div className=" text-left col-12 row mt-4">
                        <div className="col-md-6 col-12">
                            <img style={{maxHeight:"300px"}} src={img_right_1} className="img-fluid"/>
                        </div>
                        <div className="col-md-6 col-12 my-3">
                            <div>
                                <h4>Launch Engaging Challenges</h4>
                                <p className="small">Enrich a challenge by adding links, attachments, hashtags, set deadlines and broadcast to a selected user group.</p>
                            </div>
                            <div>
                                <h4>Challenge Reviews</h4>
                                <p className="small">Align a challenge with innovation theme and strategy and make it live to get focused ideas.</p>
                            </div>
                            <div>
                                <h4>Challenge Insights</h4>
                                <p className="small">Challenge discussion helps to frame the problem and crack the complex problems.</p>
                            </div>
                        </div>
                    </div>
                </div>
          </Container>
      </Container>
      </>
    );
  }
function RightSection_2() {
    return (
      <>
      <Container  style={{overflowX:'hidden'}} fixed >
          <Container maxWidth ="md" fixed >
                <div className="row">
                    <div className="text-center col-md-6 col-12 h3 mx-auto mb-4 font-weight-bold">Idea Voting</div>
                    <div className=" text-left col-12 row mt-4">
                        <div className="col-md-6 col-12">
                            <img style={{maxHeight:"300px"}} src={img_right_2} className="img-fluid"/>
                        </div>
                        <div className="col-md-6 col-12 my-3">
                            <div>
                                <h4>Crowd Voting & Rating</h4>
                                <p className="small">Diversity of opinion and let participants vote and rate ideas on a star-based system and enable open innovation</p>
                            </div>
                            <div>
                                <h4>Real-Time Collaboration</h4>
                                <p className="small">Collaborate with members, capture crowd feedbacks similar to social media, tap the untapped knowledge and co-create ideas.</p>
                            </div>
                            <div>
                                <h4>Idea Ranking</h4>
                                <p className="small">Transparent ranking and promotion of trending ideas help to Increase the acceptance of the idea with lower change management cost.</p>
                            </div>
                        </div>
                    </div>
                </div>
          </Container>
      </Container>
      </>
    );
  }
function RightSection_3() {
    return (
      <>
      <Container  style={{overflowX:'hidden'}} fixed >
          <Container maxWidth ="md" fixed >
                <div className="row">
                    <div className="text-center col-md-6 col-12 h3 mx-auto mb-4 font-weight-bold">Idea Realization</div>
                    <div className=" text-left col-12 row mt-4">
                        <div className="col-md-6 col-12">
                            <img style={{maxHeight:"300px"}} src={img_right_3} className="img-fluid my-3"/>
                        </div>
                        <div className="col-md-6 col-12 my-3">
                            <div>
                                <h4>Implementation Methodology</h4>
                                <p className="small">Execute the selected idea from pre-made templates or make your own roadmap.</p>
                            </div>
                            <div>
                                <h4>Phases and Tasks</h4>
                                <p className="small">Create core building blocks, break into a manageable piece and add tasks like a Kanban card, set due date and assign responsibility</p>
                            </div>
                            <div>
                                <h4>Due Date Reminders</h4>
                                <p className="small">Get notification when a task is assigned and due date reminder of existing task to stay on track on the Implementation timeline.</p>
                            </div>
                        </div>
                    </div>
                </div>
          </Container>
      </Container>
      </>
    );
  }
function RightSection_4() {
    return (
      <>
      <Container  style={{overflowX:'hidden'}} fixed >
          <Container maxWidth ="md" fixed >
                <div className="row">
                    <div className="text-center col-md-6 col-12 h3 mx-auto mb-4 font-weight-bold">Setup and Configuration</div>
                    <div className=" text-left col-12 row mt-4">
                        <div className="col-md-6 col-12">
                            <img style={{maxHeight:"300px"}} src={img_right_4} className="img-fluid"/>
                        </div>
                        <div className="col-md-6 col-12 my-3">
                            <div>
                                <h4>Team Management</h4>
                                <p className="small">Assign admins who have control over managing workspaces users, user groups, benefit categories, running reports and much more.</p>
                            </div>
                            <div>
                                <h4>Users</h4>
                                <p className="small">Each member has their own unique profile and users can collaborate with their colleagues.</p>
                            </div>
                            <div>
                                <h4>Security & Accessibility</h4>
                                <p className="small">Be assured with SSL and the platform is accessible via all modern browsers from a tablet, laptop and desktop. IdeaDeployer is fully GDPR compliant.</p>
                            </div>
                        </div>
                    </div>
                </div>
          </Container>
      </Container>
      </>
    );
  }
function Article(){
    return(
        <>
            <LeftSection_1 ></LeftSection_1>
            <Arrow invert="0"></Arrow>
            <RightSection_1></RightSection_1>
            <Arrow invert="1"></Arrow>
            <LeftSection_2 ></LeftSection_2>
            <Arrow invert="0"></Arrow>
            <RightSection_2></RightSection_2>
            <Arrow invert="1"></Arrow>
            <LeftSection_3 ></LeftSection_3>
            <Arrow invert="0"></Arrow>
            <RightSection_3></RightSection_3>
            <Arrow invert="1"></Arrow>
            <LeftSection_4 ></LeftSection_4>
            <Arrow invert="0"></Arrow>
            <RightSection_4></RightSection_4>
        </>
    );
}
export {Article};