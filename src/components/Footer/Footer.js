import React , { useEffect } from 'react';
import './Footer.css';

const Footer = () => {





    return(

        <div className="footer">


                    <div className="con">
                       <h1>
                           BVEST
                       </h1>
                        <a href="mailto:kunalagg04@gmail.com">

                            <div className="email">
                                bvest@gmail.com
                            </div>

                            </a>

                            <div className="icons">
                            <i class="fab fa-facebook-f fa-lg"></i>
                            <i class="fab fa-instagram fa-lg"></i>
                            <i class="fab fa-github-alt fa-lg"></i>

                            <a href="tel: 8076989248">
                            <i class="fas fa-phone-alt"></i>
                            </a>

                            </div>

                            <div className="details">
                            <i class="far fa-copyright"></i> Hack@Bvest , Bharati Vidyapeeth College of Engineering

                            </div>


                    </div>





        </div>

    );
}

export default Footer;
