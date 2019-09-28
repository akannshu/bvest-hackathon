import React , { useEffect } from 'react';
import './Sponsors.css';
import Particles from 'react-particles-js';


const particleOpt = {

    particles : {
        number : {
            value : 120,
            density : {
                enable : true  ,
                value_area : 800
            }
        },




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



const Sponsors = () => {





    return(

        <div className="sp">
            <Particles className='particles' params={particleOpt}/>
        <div className="sponsors">

            <div className="head">
                Sponsors
            </div>

            <div className="content">
                <div class="row">
                    <div class="col-lg-4">

                    <img className="codingblocks" src={require('../../assets/matic4.jpeg')}/>
                    </div>

                    <div className="devfolio" class="col-lg-4">

                    <img src={require('../../assets/devfolio4.jpeg')}/>

                    </div>

                    <div className="wolf" class="col-lg-4">

                    <img src={require('../../assets/wolfram3.jpeg')}/>

                    </div>

                    <div className="" class="col-lg-4">

                    <img src={require('../../assets/bugsee.png')}/>

                    </div>

                    <div  class="col-lg-4">

                    <img className="github" src={require('../../assets/github6.png')}/>

                    </div>


                    <div class="col-lg-4">
                    </div>
                </div>


            </div>

        </div>
        </div>

    );
}

export default Sponsors;
