import React from 'react';
import profilePicture from '../../../static/assets/images/bio/foto-prueba.jpg';

export default function() {
    return(
        <div className="content-page-wrapper">
           <div
          className="left-column"
          style={{
            backgroundImage: `url(${profilePicture})`
          }}
        />
                         
            <div className="right-column">
        
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisi nulla, convallis non ullamcorper vitae, condimentum ac magna. Sed vel vestibulum nunc. Cras quis massa vel leo maximus feugiat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum a nulla tincidunt, faucibus libero non, mollis massa. Curabitur at porta sapien. Suspendisse turpis lorem, ornare a est vel, fringilla maximus ligula. Cras accumsan iaculis elit, id posuere orci congue eget. Sed venenatis libero ut nisi blandit ornare.
            
            
       

            </div>
         
        </div>
    );
}