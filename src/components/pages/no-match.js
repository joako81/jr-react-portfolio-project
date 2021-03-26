import React from 'react';
import { Link } from 'react-router-dom';
import NoMatchprofilePicture from '../../../static/assets/images/no-match/robot-not-found.jpg';


export default function() {
    return(
        <div clasname="no-match-wrapper">
            
            <div className = "img-no-match">
              <img src= {NoMatchprofilePicture}/>      
            
            </div>
           
            <div className="btn-no-match">
            

                <Link to="/">Return to homepage</Link>
            
            </div>
        </div>
    );
}