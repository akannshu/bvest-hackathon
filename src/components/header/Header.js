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
                                     HACK.IT@BVP 1.0
                                 </div>
                                 <div className="details">
                                      <div class="row">
                                          <div class="col-5">
                                          <i class="fas fa-calendar-week"></i>
                                          10th - 11th October 2019
                                          </div>
                                          <div className="col-7">
                                          <i class="fas fa-map-marker-alt"></i>
                                          Bharati Vidyapeeth's College of Engineering
                                          </div>
                                      </div>
                                 </div>
                                 <div className="rbut">
                                 <button id="devfolio-apply-now" class="btn btn-danger">
                                     <svg class="logo" xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 115.46 123.46">
                                         <path d="M115.46 68a55.43 55.43 0 0 1-50.85 55.11S28.12 124 16 123a12.6 12.6 0 0 1-10.09-7.5 15.85 15.85 0 0 0 5.36 1.5c4 .34 10.72.51 20.13.51 13.82 0 28.84-.38 29-.38h.26a60.14 60.14 0 0 0 54.72-52.47c.05 1.05.08 2.18.08 3.34z"/>
                                         <path d="M110.93 55.87A55.43 55.43 0 0 1 60.08 111s-36.48.92-48.58-.12C5 110.29.15 104.22 0 97.52l.2-83.84C.38 7 5.26.94 11.76.41c12.11-1 48.59.12 48.59.12a55.41 55.41 0 0 1 50.58 55.34z"/>
                                     </svg>Apply with Devfolio</button>
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
                    <div class="headbar">
                      <div class="sub-headbar">
                        <div class="headbar-item" ><a class="logo1" href="#">BVEST</a></div>
                        <div class="links-div">
                          <a href="#" class="link">Home</a>
                          <a href="#" class="link">FAQ</a>
                          <a href="#" class="link">Contact</a>
                          <a href="#" class="link">Team</a>
                        </div>
                      </div>
                    </div>
                    <div className="below-head">
                        HACK.IT@BVP 1.0
                        <div>
                        <i class="fas fa-calendar-week"></i>
                        10th - 11th October 2019
                        </div>
                        <div className="">
                        <i class="fas fa-map-marker-alt"></i>
                        Bharti Vidyapeeth College of Engineering
                        </div>
                        <div className="rbut">
                            <button id="devfolio-apply-now-mobile" class="btn btn-danger">
                                <svg class="logo" xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 115.46 123.46">
                                    <path d="M115.46 68a55.43 55.43 0 0 1-50.85 55.11S28.12 124 16 123a12.6 12.6 0 0 1-10.09-7.5 15.85 15.85 0 0 0 5.36 1.5c4 .34 10.72.51 20.13.51 13.82 0 28.84-.38 29-.38h.26a60.14 60.14 0 0 0 54.72-52.47c.05 1.05.08 2.18.08 3.34z"/>
                                    <path d="M110.93 55.87A55.43 55.43 0 0 1 60.08 111s-36.48.92-48.58-.12C5 110.29.15 104.22 0 97.52l.2-83.84C.38 7 5.26.94 11.76.41c12.11-1 48.59.12 48.59.12a55.41 55.41 0 0 1 50.58 55.34z"/>
                                </svg>Apply with Devfolio</button>
                        </div>
                    </div>
              </div>
            );
        }
    }
}

export default Header;
