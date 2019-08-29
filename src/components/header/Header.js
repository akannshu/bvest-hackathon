import './Header.css';
import React from 'react';
import Particles from 'react-particles-js';
import Navbar from '../../components/navbar/Navbar';
import { Link } from 'react-router-dom';

/* For Particle.JS */
const particleOpt = { 

    particles : {   
        number : {
            value : 120,
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
              "speed": 8,
              "opacity_min": 0.4,
              "sync": false
            }
          }
    } ,

    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            }
        }
    }

};


class Header extends React.Component{

   
    render(){

        // if(document.body.offsetWidth > 600){
        return(
         <div>
             <div id="header">
                 {/* <Navbar/> */}

                 <div className="land-nav">
                             <div className="icons">
                             <i class="fas fa-stream fa-lg"></i>
                             <i class="fas fa-gifts fa-lg"></i>
                             <i class="fas fa-address-book fa-lg"></i>
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
                                      <img className="dsclogo" src = {require('../../assets/dsclogo.svg')}/> DSCBVP
                                 </div>
                                 <div id="head1">
                                      PRESENTS
                                 </div>
                                 <div id="heading">
                                     HACK@JAIPURIA
                                 </div>
                                 <div className="details">
                                      <div class="row">
                                          <div class="col-5">
                                          <i class="fas fa-calendar-week"></i>
                                          23 - 24 October' 2019
                                          </div>
                                          <div className="col-7">
                                          <i class="fas fa-map-marker-alt"></i>
                                          Seth Anandram Jaipuria School
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
                     <div className="rocket">
                             <img 
                            //  class="animated infinite pulse delay-2s"
                              src= {require('../../assets/rocketf.svg')}/>
                         </div>
                     
                     
             </div>

           
             
          
         </div>
          
        
        );
        // }

        // else{
        //     return(
        //         <div>
        //     <div className="landing-mob">
               

        //         <div className="l-mob-view">
        //             <div className="main-view">

        //             <div id="head00">
        //                               Code
        //                          </div>
        //                          <div id="head11">
        //                               your way to the TOP  with
        //                          </div>
        //                          <div id="headingg">
        //                              HACK@JAIPURIA
        //                          </div>
                                


        //             </div>
        //         </div>
                
        //     </div>
            
        //     </div>
        //     );
        // }
    }
}

export default Header;