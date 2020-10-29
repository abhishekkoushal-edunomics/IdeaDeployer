import React from 'react';
import Container from '@material-ui/core/Container';
import img_2 from './img/2.jpg';
import img_3 from './img/3.jpg';
var data=[
    {
        "heading":"Innovation Workspace",
        "content":{
                "Dedicate Workspace":"Create a dedicated workspace by innovation theme aligned to business strategy or by each department.",
                "Custom Challenge Workflow":"Model your own challenge management process and transform the way you manage ideation campaigns.",
                "Custom Idea Workflow":"Define your own ideation stages, add criteria to promote ideas automatically and streamline the end-to-end innovation process", 
            },
        "image":img_2     
    }
]


function LeftSection(   ) {
  return (
    <>
    <Container fixed >
        <Container maxWidth ="md" fixed >
            <div className="row py-5">
                <div className="text-center col-6 h3 mx-auto my-4 font-weight-bold">Innovation Workspace</div>
                <div className=" text-left col-12 row mt-4">
                    <div className="col-6">
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
                    <div className="col-6">
                        <img src={img_2} className="img-fluid"/>
                    </div>
                </div>
            </div>
        </Container>
    </Container>
    </>
  );
}


function RightSection() {
    return (
      <>
      <Container fixed >
          <Container maxWidth ="md" fixed >
                <div className="row py-5">
                    <div className="text-center col-6 h3 mx-auto my-4 font-weight-bold">Manage Challenges</div>
                    <div className=" text-left col-12 row mt-4">
                        <div className="col-6">
                            <img src={img_3} className="img-fluid"/>
                        </div>
                        <div className="col-6">
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
function Article(){
    return(
        <>
            <LeftSection ></LeftSection>
            <RightSection></RightSection>
        </>
    );
}
export {Article};