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
                                bvest2019@gmail.com
                            </div>

                            </a>

                            <div className="icons">
                            <a href="https://www.facebook.com/bvest2019/"><i class="fab fa-facebook-f fa-lg"></i></a>
                            <a href="https://instagram.com/bvest2019?igshid=ig8hlcxnau5b"><i class="fab fa-instagram fa-lg"></i></a>
                            <i class="fab fa-github-alt fa-lg"></i>

                            <a href="tel: 8076989248">
                            <i class="fas fa-phone-alt"></i>
                            </a>

                            </div>

                            <div className="details">
                            <i class="far fa-copyright"></i> IT Department , Bharati Vidyapeeth College of Engineering

                            </div>


                    </div>





        </div>

    );
}

export default Footer;
