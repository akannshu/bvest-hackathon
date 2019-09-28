import './Prize.css';
import React from 'react';
import Pcard from './Pcard/Pcard';



const Prize = () => {
  return (
    <div id="prize" className="prize">
      <div className="row">
          <div className="col-lg-5 col-sm-12 content" >
            <div className="main">
                <div className="head">
                    Prizes
                </div>
                <div className="worth">
                  Worth INR 12 Lakhs
                </div>

            </div>
          </div>
          <div className="col-lg-7 col-sm-12 graphic">
              <img src={require('../../assets/awards.jpg')}/>
          </div>
      </div>
    </div>
  );
}

export default Prize;
