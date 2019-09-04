import './Header.css';
import React from 'react';
import Particles from 'react-particles-js';
import Navbar from '../../components/navbar/Navbar';
// import { Link } from 'react-router-dom';
import NavMob from '../nav-mob/NavMob';

import { Link, animateScroll as scroll } from "react-scroll";

/* For Particle.JS */
const particleOpt = {

    particles : {
        number : {
            value : 90,
            density : {
                enable : true  ,
                value_area : 800
            }
        },

        "opacity": {
            "value": 1,
            "random": true, // Set to false in our case
            "anim": {
              "enable": true,
              "speed": 9,
              "opacity_min": 0.4,
              "sync": false
            }
          }
    } ,

    "interactivity": {
        "events": {

            onresize: {
                enable: true,
                // density_auto: true,
                // density_area : 400
                // nb_particles = particles.nb * (canvas width *  canvas height / 1000) / density_area
              },

            onhover: {
                enable: true,
                mode: "repulse"
            }
        }
    }

};


class Header extends React.Component{


    render(){

        if(document.body.offsetWidth > 600){
        return(
         <div>
             <div id="header">
                 {/* <Navbar/> */}

                 <div className="land-nav">

                      <div className="slogo">
                          {/* logo here  */}
                      </div>


                        <div className="icons">


                        <Link  activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration= {600}
                                    to="about">
                                    <span className="mdicon" >About</span>
                            </Link>


                            <Link  activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration= {800} to="timeline">
                                    <span className="mdicon" >Schedule</span>
                            </Link>





                            <Link  activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration= {800} to="venue">
                                      <span className="mdicon" >Venue</span>
                            </Link>

                            <Link  activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration= {1000} to="faq">
                                       <span className="mdicon" >FAQ</span>
                            </Link>









                             </div>
                         </div>

                 <Particles className='particles' params={particleOpt}></Particles>



                     <div id="content">

                         <div class="row">
                             {/* <div class="col-2">
                                 <div id="logo">
                                     <i class="fab fa-facebook-square fa-lg"></i><br/>
                                     <i class="fab fa-instagram fa-lg"></i><br/>
                                     <i class="fab fa-twitter-square fa-lg"></i><br/>
                                     <i class="fab fa-github-square fa-lg"></i>
                                 </div>
                             </div> */}

                              <div class="col-12">
                                 <div id="head0">
                                   IT DEPT. BVCOE
                                 </div>
                                 <div id="head1">
                                      PRESENTS
                                 </div>
                                 <div id="heading">
                                     HACK@BVEST 1.0
                                 </div>
                                 <div className="details">
                                      <div class="row">
                                          <div class="col-5">
                                          <i class="fas fa-calendar-week"></i>
                                          10th - 11th October 2019
                                          </div>
                                          <div className="col-7">
                                          <i class="fas fa-map-marker-alt"></i>
                                          Bharti Vidyapeeth College of Engineering
                                          </div>
                                      </div>
                                 </div>
                                 <div className="rbut">
                                 <button type="button" class="btn btn-danger">Apply Now</button>
                                 </div>
                                {/* <Link to="/course"> <button id="butcourse" type="button" class="btn btn-primary">Browse our Courses</button></Link> */}
                             </div>

                         </div>

                     </div>



             </div>




         </div>


        );
        }

        else{
            return(

                <div className="ml">
                  hi
              </div>
            );
        }
    }
}

export default Header;
