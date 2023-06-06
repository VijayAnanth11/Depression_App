import React from 'react';
import DestinationData from './DestinationData';
import './DestinationStyles.css';

import Depression1 from '../assets/depression_1.jpg';
import Depression2 from '../assets/depression_2.jpg';
import Depression3 from '../assets/depression_3.jpg';
import Depression4 from '../assets/depression_4.jpg';

const Destination = ()=> {
   return(
      <div className='destination'>
         <h1>Features of System</h1>
         <p>Yours give you the opportunity to see a lot, within a time frame.</p>

         <DestinationData
            className="first-des"
            heading="Detect Depression through Comments"
            text="Detecting depression through social media comments involves analyzing the language and content of a person's comments on social media platforms to identify signs of depression. Research has shown that people with depression may use social media comments differently than those who do not have depression, such as using more negative language, expressing more negative emotions, and engaging less with others."
            img1={Depression1}
            img2={Depression2}
         />
         <DestinationData
            className="first-des-reverse"
            heading="Detect Depression through Posts"
            text="Detecting depression through social media posts involves analyzing the content and language of a person's posts on various social media platforms to identify signs of depression. Research has shown that people with depression may use social media differently than those who do not have depression, such as posting less frequently, using more negative language, and engaging less with others."
            img1={Depression3}
            img2={Depression4}
         />
      </div>
   );
}

export default Destination;
