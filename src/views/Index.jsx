import ZIndex from 'react-z-index' // component, util
import { zIndex } from 'react-z-index' // decorator
import './index.scss';
import React from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  
  Card,
  CardHeader,
  CardBody,
  
  Table,
  Container,
  Row,
  Col,CardTitle,UncontrolledTooltip,

  Progress,
 

} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "variables/charts.jsx";

import Header from "components/Headers/Header.jsx";

import UilReact from '@iconscout/react-unicons/icons/uil-react'
import './index.scss';


class Index extends React.Component {
  state = {
    activeNav: 1,
    chartExample1Data: "data1"
  };
  toggleNavs = (e, index) => {
    e.preventDefault();
    this.setState({
      activeNav: index,
      chartExample1Data:
        this.state.chartExample1Data === "data1" ? "data2" : "data1"
    });
    let wow = () => {
      console.log(this.state);
    };
    wow.bind(this);
    setTimeout(() => wow(), 1000);
    // this.chartReference.update();
  };
  componentWillMount() {
    if (window.Chart) {
      parseOptions(Chart, chartOptions());
    }
  }
  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col className="mb-5 mb-xl-0" xl="6">
            <CardHeader className="bg-transparent">


        


              <Row className="align-items-center">

            <div className="col">
                      <h3 className="mb-6 text-primary display-1">Just Drive.<br></br>We'll do the rest.</h3>All-inclusive,usage-based car subsruptions.</div>
                      
                      
          
                    
                    </Row>

                    <Row className="align-items-center">
                    <div class="form-check-inline">

  <div class="form__group field">
  <input type="input" class="form__field" placeholder="Name" name="name" id='name' required />
  <label for="name" class="form__label"><pre>phone number</pre></label></div></div>
  
<div class="form__group field">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<div class="button button-1">get start</div></div>
</Row>

            





         
              



</CardHeader>



             {/*folder*/} 










            </Col>
            <Col xl="6">
              <Card className="shadow">
                 



                <img
                  alt="..."
                  src={require("assets/img/brand/X.png")}
                />














                
              </Card>
            </Col>
          </Row>
          <div id="d1">
          <div id="d11">
          <div class="image1">
          <img
                  alt="..."
                  src={require("assets/img/brand/logo.png")
                }
                
                /></div></div>
                <div id="d12">
                <i class="fas fa-arrow-down"></i>


                </div></div>
                <br></br><br></br><br></br><br></br> <br></br>





          <Row className="mt-5">
            <Col className="mb-5 mb-xl-0" xl="6">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <Row className="align-items-center">
                    <div className="col">
                    <Row className="align-items-center">

<div className="col">
          <h3 className="mb-6 text-primary display-0"><img
                  alt="..."
                  src={require("assets/img/brand/X.png")}
                />
</h3></div>
          <div className="col text-right">
         
          
           <h2 className="mb-6 text-primary display-0 para"> "Since becomming a monthly.I feel like i have my car back again.It's like i own a car without the worries or cost of keeping it around all the time. "</h2>
         </div>
        
        </Row>                    
        </div>
                                      </Row>
                </CardHeader>
             
             
              </Card>
            </Col>
            <Col xl="6">
              <Card className="shadow">
                <CardHeader className="border-0">




                </CardHeader>
              

                <Row className="align-items-center">

<div className="col">
          <h1 className="mb-6  display-0 city">Let's make cities better</h1>
          
          <p class="exemple">
  Il y avait en Vestphalie, dans le château de M. le baron de
  Thunder-ten-tronckh, un jeune garçon à qui la nature avait
  donné les moeurs les plus douces. Sa physionomie annonçait
  son âme. Il avait le jugement assez droit, avec l’esprit le plus
  simple ; c’est, je crois, pour cette raison qu’on le nommait Candide.
</p>

<div class="bar">   </div>



<div class="interested">
  <tr>
                     <th ><div className="icon icon-shape bg-light text-white rounded-lg shadow">
                     <i class="fas fa-times"></i></div>

</th>
                     <td className="pl-3"><h3 className="mb-0 secondary" >Interested in our value ? </h3></td>
                   
                     </tr>
                     <th ><div className="">
                     </div>

</th>
                     
                     <td className="pl-3"><h3 className="mb-0 " >Learn more about the company</h3>

</td>
<td>
                         <span className="mr-2"><h2 className="text-primary"></h2></span>
     
                     </td>
                     <td>
                         <span className="mr-2"><h2></h2></span>
     
                     </td>
<td>
     <i class="fas fa-arrow-right"></i></td>
                   
                     </div>
<br></br><br></br><br></br>
          </div>

          

        </Row>
   

              </Card>
            </Col>
          </Row>







          <Row>
                <Col lg="6" xl="4">
                  <Card className="card-stats mb-4 mb-xl-0">
                     <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-primary mb-1"
                          >
                            02 ---------------- HOW IT WORKS
                          </CardTitle>
                          
                        </div>
                        <Col className="col-auto">
                        


                        </Col>

                      </Row>

                          <div>
                          <h1 className="mb-6 text-dark display-0 mt-4"> Simple and handy rental process</h1>

                          </div>
                    </CardBody>

                  </Card>
                </Col>
                <Col lg="6" xl="4">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-primary mb-0"
                          >
                          
                          </CardTitle>
                          <span className="h3 font-weight-bold mb-0">
                             Snow chains,surf board rack,key lock box, or dog car seat hammock available upon request.  
                          </span>
                        </div>
                        
           
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                      <div class="bar"></div>
                      </p>
                      <tr>
                     <th ><div className="icon icon-shape bg-light text-white rounded-lg shadow mt-3">
                     <i class="fas fa-times"></i></div>

</th>
<td className="pl-3"><h3 className="mb-0 " >Learn more about the company</h3></td>
                   
                     </tr>
                     <th ><div className="">
                     </div>

</th>
               

                  
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="4">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-primary mb-0"
                          >
                            
                          </CardTitle>
                          <span className="h3 font-weight-bold mb-0">
                             Snow chains,surf board rack,key lock box, or dog car seat hammock available upon request.  
                          </span>
                        </div>
                      
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                      <div class="bar"></div>
                      </p>
                      <tr>
                     <th ><div className="icon icon-shape bg-light text-white rounded-lg shadow mt-3">
                     <i class="fas fa-times"></i></div>

</th>
<td className="pl-3"><h3 className="mb-0 " >Learn more about the company</h3></td>
                   
                     </tr>
                     <th ><div className="">
                     </div>

</th>
                     
                  
                    </CardBody>
                  </Card>
                </Col>
               
              </Row>




              <Row>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                     <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className=" text-primary mb-1 pl-8"
                          >
                            <div className="icon icon-shape bg-light text-white rounded-lg shadow mt-3 ">
                     <i class="fas fa-times"></i>
                     </div><h3 className="mr-3 pt-3">Text us</h3>
                          </CardTitle>
                          
                        </div>
                        <Col className="col-auto">
                        


                        </Col>

                      </Row>

                          <div>
                          <h3 className="mb-6 text-dark display-0 mt-4"> Text when you want your car. No app needed, just an online account.Real human operatiors.</h3>

                          </div>
                    </CardBody>

                  </Card>
                </Col>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0 mt-6">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className=" text-primary mb-0 pl-8"
                          >
                           <div className="icon icon-shape bg-light text-white rounded-lg shadow mt-3 ">
                     <i class="fas fa-times"></i></div>
                     <h3 className="mr-3 pt-3 text-dark">Text us</h3>
                          </CardTitle>
                          <span className="h3 font-weight-bold mb-0 text-dark">
                            Your car will arrive at your door clean and fully fueled.
                          </span>
                        </div>
                        
           
                      </Row>
         
               

                  
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className=" text-dark mb-0 pl-8"
                          >
                             <div className="icon icon-shape bg-light text-white rounded-lg shadow mt-3 ">
                     <i class="fas fa-times"></i></div>
                     <h3 className="mr-3 pt-3 text-dark">Your drive</h3>
                          </CardTitle>
                          <span className="h3 font-weight-bold mb-3 text-dark">

Hop in and go with full coverage.insurance,FasTrak,phone accesories,and unlimited mileage.                          </span>
                        </div>
                      
                      </Row>
                     
                     
                  
                    </CardBody>
                  </Card>
                </Col>




                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0 mt-6">
                     <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className=" text-primary mb-0 pl-8"
                          >
                           <div className="icon icon-shape bg-light text-white rounded-lg shadow mt-3 ">
                     <i class="fas fa-times"></i></div>
                    <h3 className="mr-3 pt-3 text-dark">We pick it up</h3>
                          </CardTitle>
                          
                        </div>
                       

                      </Row>

                          <div>
                          <h3 className="mb-6 text-dark display-0 mt-4"> it's yours for a few hours a few days.Return on your own time.anywhere in our zone.We'll gas and clean it</h3>

                          </div>
                    </CardBody>

                  </Card>
                </Col>
               


               
              </Row>




<Row>
              <Col lg="6" xl="4" mb="5" class="image2">
                  <Card className="card-stats mb-8 mb-xl-0 image2">
                     <CardBody>
                      <Row>
                        <div className="col image2">
                          <CardTitle
                            tag="h5"
                            className=" text-primary mb-1 pl-8"
                          >
                          




                          </CardTitle>
                          
                        </div>
                        <Col className="col-auto ">
                        
 <img
                  alt="..."
                  src={require("assets/img/brand/X1.png")}

                  width="500px"
                  height="850px"
               
                />

                        </Col>

                      </Row>

                          
                    </CardBody>

                  </Card>
                </Col>



                <Col lg="6" xl="8">
                  <Card className="card-stats mb-4 mb-xl-0  index1" style={{ position: 'relative',zIndex:'300'}}>
                     <CardBody>





                     <Row>



                 


<div className="col">
  <CardTitle
    tag="h5"
    className=" mb-1"
  >
    <div className="">
</div><h1 className=" text-light mr-3 pt-3">We've got SF covered</h1>
  </CardTitle>
  
</div>

</Row>

  <div>
  <h4 className="mb-6 text-light display-0 mt-4"> We provid two delivery options for any trip:</h4>

  </div>






                     <Row>
                 

<div className="col d-flex">
<i class="fas fa-check pt-3"></i>


  <CardTitle
    tag="h5"
    className=" text-light mb-1 pl-5"
  >
 <h3 className="text-light mr-3 pt-3">Concierge servic (8am-8pm daily)</h3>
  </CardTitle>
  
</div>

</Row>

  <div>
  <h5 className="mb-6 text-light display-0 mt-4 pl-6 font-weight-normal"> We deliver or pick up at your doortep.Always have a parking spot right out front, just for you.</h5>

  </div>







                      <Row>

                        <div className="col d-flex">
                        <i class="fas fa-check pt-3"></i>
                          <CardTitle
                            tag="h5"
                            className=" text-primary mb-1 pl-5"
                          >
                            <div className="">
                     </div><h3 className="mr-3 pt-3 text-light">Self service(24/7)</h3>
                          </CardTitle>
                          
                        </div>
                      
                      </Row>

                          <div>
                          <h5 className="mb-6 text-light display-0  mt-4 pl-6 font-weight-normal"> We deliver within 3 bloks and unlock it whenever you are ready.Park anywhere legal in our zone.lock up,and walk away to return .More flexibility on timing,especially for starting early or ending late</h5>

                          </div>

                          <div className="bar1"></div>




                          <div class="interested pb-4 ">
  <tr>
                     <th ><div className="icon icon-shape bg-light text-white rounded-lg shadow">
                     <i class="fas fa-times"></i></div>

</th>
                     <td className="pl-3"><h3 className="mb-0 secondary" >Outside of SF ? </h3></td>
                   
                     </tr>
                     <th ><div className="">
                     </div>

</th>
                     
                     <td className="pl-3"><h3 className="mb-0 text-light" >Tell us where to expand</h3>

</td>
<td>
                         <span className="mr-2"><h2 className="text-primary"></h2></span>
     
                     </td>
                     <td>
                         <span className="mr-2"><h2></h2></span>
     
                     </td>
<td>
     <i class="fas fa-arrow-right"></i></td>
                   
                     </div>






                    </CardBody>

                  </Card>
                </Col>

                </Row>

        


                <Col lg="6" xl="12">
                  <Card className="card-stats mb-4 mb-xl-0">
                     <CardBody>
                      <Row>
                        <div className="col">

                          <CardTitle
                            tag="h5"
                            className=" text-primary mb-1 pl-6"
                          >
                           04 ---------------- PRICING

                          </CardTitle>
                          
                        </div>

                        <Col className="col-auto">
                        


                        </Col>

                      </Row>

                          <div>
                          <h1 className="mr-3 pt-3 pl-1">Monthly plans for less than a parking space.</h1>

                          <h2 className="mb-6 text-muted display-0 mt-4 font-weight-normal"> plans include concierge delivery and pickup,cleaning and refueling service , full coverage insurance and maintenance-everything but gas and tolls.Join instantly with $0 down and get your car right now.</h2>

                          </div>
                    </CardBody>

                  </Card>
                </Col>





                <Row>
                <Col lg="6" xl="4">
                  <Card className="card-stats mb-4 mb-xl-0 index">
                     <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h2"
                            className="text-dark mb-0 pl-9"
                          >
                            FlexPass
                          </CardTitle>
                          <span className="h5 font-weight-bold mb-0 pl-9 text-muted">
                            Get 2 days/month
                          </span>
                        </div>
                        
                        <Col className="col-auto">
                       

                        
                        </Col>
                      </Row>
                      
                      <h2 className="font-weight-bold mb-0 pl-9 text-muted">$159
                      <span className="h5 font-weight-bold mb-0 text-muted">
                        /month</span></h2>
                      <p className="mt-3 mb-0 text-muted text-sm pl-5 pr-5 pb-5">
                        
                        Not sure how much you drive?Get a magic button anytime you need a car.

                          
                      </p>
                          <div>
                           

<div class="button1 button-2">Start with FlexPass</div>

                          </div>

                          <td className="pl-5"><h3 className="mb-0 " >Learn more about the company</h3>

</td>
<td>
                         <span className="mr-2"><h2 className="text-primary"></h2></span>
     
                     </td>
                     <td>
                         <span className="mr-2"><h2></h2></span>
     
                     </td>
<td>
     <i class="fas fa-arrow-right"></i></td>

                    </CardBody>

                  </Card>
                </Col>
                <Col lg="6" xl="4">
                  <Card className="card-stats mb-4 mb-xl-0 inex1">
                     <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h2"
                            className="text-dark mb-0 pl-9"
                          >
                            Getaway 
                          </CardTitle>
                          <span className="h5 font-weight-bold mb-0 pl-9 text-muted">
                            Get 4 days/month
                          </span>
                        </div>
                        
                        <Col className="col-auto">
                       

                        
                        </Col>
                      </Row>
                      
                      <h2 className="font-weight-bold mb-0 pl-9 text-muted">$219
                      <span className="h5 font-weight-bold mb-0 text-muted">
                        /month</span></h2>
                      <p className="mt-3 mb-0 text-muted text-sm pl-5 pr-5 pb-5">
                        
                      Get away up to once a week. Your car is delivered and disappears-like magic
                          
                      </p>
                          <div>
                           

<div class="button1 button-2">Start with Getaway</div>

                          </div>

                          <td className="pl-5"><h3 className="mb-0 " >Learn more about the company</h3>

</td>
<td>
                         <span className="mr-2"><h2 className="text-primary"></h2></span>
     
                     </td>
                     <td>
                         <span className="mr-2"><h2></h2></span>
     
                     </td>
<td>
     <i class="fas fa-arrow-right"></i></td>

                    </CardBody>

                  </Card>
                </Col>
                <Col lg="6" xl="4">
                  <Card className="card-stats mb-4 mb-xl-0">
                     <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h2"
                            className="text-dark mb-0 pl-9"
                          >
                            Freedom
                          </CardTitle>
                          <span className="h5 font-weight-bold mb-0 pl-9 text-muted">
                            Get 8 days/month
                          </span>
                        </div>
                        
                        <Col className="col-auto">
                       

                        
                        </Col>
                      </Row>
                      
                      <h2 className="font-weight-bold mb-0 pl-9 text-muted">$389
                      <span className="h5 font-weight-bold mb-0 text-muted">
                        /month</span></h2>
                      <p className="mt-3 mb-0 text-muted text-sm pl-5 pr-5 pb-5">
                        
                       Get a car up to twice a week .Its freedom whenever(and no additional fees when you don't).

                          
                      </p>
                          <div>
                           

<div class="button1 button-2">Start with Freedom</div>

                          </div>

                          <td className="pl-5"><h3 className="mb-0 " >Learn more about the company</h3>

</td>
<td>
                         <span className="mr-2"><h2 className="text-primary"></h2></span>
     
                     </td>
                     <td>
                         <span className="mr-2"><h2></h2></span>
     
                     </td>
<td>
     <i class="fas fa-arrow-right"></i></td>

                    </CardBody>

                  </Card>
                </Col>
               
              </Row>
<Row>
              <Col lg="6" xl="6" >
                  <Card className="card-stats mb-4 mb-xl-0 pb-9 pt-9">
                     <CardBody>
                      <Row>
                        <div className="col">

                          <CardTitle
                            tag="h5"
                            className=" text-primary mb-1 pl-6"
                          >
                           05---------------- THE CAR

                          </CardTitle>
                          
                        </div>

                        <Col className="col-auto">
                        


                        </Col>

                      </Row>

                          <div>
                          <h1 className="mr-3 pt-3 pl-1 display-1 pl-6">Always Drive an Identical Pruis.</h1>

                          <h2 className="mb-6 text-muted display-0 mt-4 font-weight-normal pl-6 pr-6"> All our car are the same so they feel familiar.No branding so you don't stick out.<br></br><br></br>Fits 5 comfortably-or a surfboard,bicycle,or skiis. 54 MPG hybrid gets you to <br></br>Tahoe and back on a single tank,Phone mount,charging cables,and safety technology like adaptive cruise controle.We use all natural deodorizers and cleaning supplies. </h2>

                          </div>
                    </CardBody>

                  </Card>
                </Col>

                
                <Col lg="6" xl="6">
                  <Card className="card-stats mb-4 mb-xl-0">
                     <CardBody>
                      <Row>
                        <div className="col">

                          <CardTitle
                            tag="h5"
                            className=" text-primary mb-1 pl-6"
                          >
                           <img
                  alt="..."
                  src={require("assets/img/brand/X1.png")}

                  width="600px"
                  height="412px"

                />

                          </CardTitle>
                          
                        </div>

                        <Col className="col-auto">
                        


                        </Col>

                      </Row>

                          <div>
                          <Row>  <h1 className="mr-3 pt-3 pl-1"> <img
                  alt="..."
                  src={require("assets/img/brand/X1.png")}
                  width="300px"
                  height="350px"
                /></h1>

<h1 className="mr-3 pt-3 pl-1"> <img
                  alt="..."
                  src={require("assets/img/brand/X1.png")}
                  width="300px"
                  height="250px"
                /></h1></Row>



                          </div>

                
                    </CardBody>

                  </Card>
                  
                </Col>


                </Row>





        </Container>
      </>
    );
  }
}

export default Index;
