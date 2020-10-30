import React from 'react';
import Container from '@material-ui/core/Container';
import img_left_1 from './img/Home-page-step-1.svg';
import img_left_2 from './img/Home-page-step-3.svg';
import img_left_3 from './img/Home-page-step-5.svg';
import img_right_1 from './img/Home-page-step-2.svg';
import img_right_2 from './img/Home-page-step-4.svg';
import img_right_3 from './img/Home-page-step-6.svg';
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
                <div className=" text-left col-12 row mt-4">
                    <div className="col-md-5 col-12">
                        <div>
                            <h4 style={{color:'#9b9b9b',fontWeight:'600'}} className="text-decoration-underline">Step 1</h4>
                            <h4 className="my-3">Post a Challange</h4>
                            <img src={img_left_1} style={{maxHeight:'200px'}} className="img-fluid d-md-none my-3"/>
                            <p className="small">Create workspace,customize challenge and idea workflow and post a challenge</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-12 d-none d-md-block">
                        <img src={img_left_1} style={{maxHeight:'200px'}} className="img-fluid"/>
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
              <div className="row pt-5">
                  <div className=" text-left col-12 row mt-4">
                      <div className="col-md-5 col-12">
                          <div>
                              <h4 style={{color:'#9b9b9b',fontWeight:'600'}} className="text-decoration-underline">Step 3</h4>
                              <h4 className="my-3">Screen</h4>
                              <img src={img_left_2} style={{maxHeight:'200px'}} className="img-fluid d-md-none my-3"/>
                              <p className="small">Screen the idea based on pre-defined criteria and broadcast it.</p>
                          </div>
                      </div>
                      <div className="col-md-6 col-12 d-none d-md-block">
                          <img src={img_left_2} style={{maxHeight:'200px'}} className="img-fluid"/>
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
              <div className="row pt-5">
                  <div className=" text-left col-12 row mt-4">
                      <div className="col-md-5 col-12">
                          <div>
                              <h4 style={{color:'#9b9b9b',fontWeight:'600'}} className="text-decoration-underline">Step 5</h4>
                              <h4 className="my-3">Evaluate & Select</h4>
                              <img src={img_left_3} style={{maxHeight:'200px'}} className="img-fluid d-md-none my-3"/>
                              <p className="small">Crowd vote, rate, pripritize and select the best idea.</p>
                          </div>
                      </div>
                      <div className="col-md-6 col-12 d-none d-md-block">
                          <img src={img_left_3} style={{maxHeight:'200px'}} className="img-fluid"/>
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
                    <div className=" text-left col-12 row mt-4">
                        <div className="col-md-6 col-12 d-none d-md-block">
                            <img style={{maxHeight:"200px"}} src={img_right_1} className="img-fluid my-3"/>
                        </div>
                        <div className="col-md-6 col-12 my-3">
                            <div>
                                <h4 style={{color:'#9b9b9b',fontWeight:'600'}} className="text-decoration-underline">Step 2</h4>
                                <h4 className="my-3">Capture</h4>
                                <img src={img_right_1} style={{maxHeight:'200px'}} className="img-fluid d-md-none my-3"/>
                                <p className="small">A team member posts an idea that is added into the idea pipeline.</p>
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
                    <div className=" text-left col-12 row mt-4">
                        <div className="col-md-6 col-12 d-none d-md-block">
                            <img style={{maxHeight:"200px"}} src={img_right_2} className="img-fluid my-3"/>
                        </div>
                        <div className="col-md-6 col-12 my-3">
                            <div>
                                <h4 style={{color:'#9b9b9b',fontWeight:'600'}} className="text-decoration-underline">Step 4</h4>
                                <h4 className="my-3">Collaborate</h4>
                                <img src={img_right_2} style={{maxHeight:'200px'}} className="img-fluid d-md-none my-3"/>
                                <p className="small">Refine, enrich and build on each other's idea and leverage the collective intelligence.</p>
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
                    <div className=" text-left col-12 row mt-4">
                        <div className="col-md-6 col-12 d-none d-md-block">
                            <img style={{maxHeight:"200px"}} src={img_right_3} className="img-fluid my-3"/>
                        </div>
                        <div className="col-md-6 col-12 my-3">
                            <div>
                                <h4 style={{color:'#9b9b9b',fontWeight:'600'}} className="text-decoration-underline">Step 6</h4>
                                <h4 className="my-3">Execute</h4>
                                <img src={img_right_3} style={{maxHeight:'200px'}} className="img-fluid d-md-none my-3"/>
                                <p className="small">Project manage the execution of the best idea and accelerate idea-to-implementation. </p>
                            </div>
                        </div>
                    </div>
                </div>
          </Container>
      </Container>
      </>
    );
  }
function HomeArticle(){
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

        </>
    );
}
export {HomeArticle};