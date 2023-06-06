import React from 'react';
import TripData from './TripData';
import './TripStyles.css';

import Trip1 from '../assets/comment-bg.jpg';
import Trip2 from '../assets/post-bg.jpg';

function Trip() {
   return(
      <div className='trip'>
         <h1>Main Functions</h1>
         <p>You can upload a social media posts & comments to check depression level.</p>
         <div className='tripcard'>
            <TripData
               image={Trip2}
               heading="Posts to Detect Depression"
               text="By analyzing patterns in a person's social media activity and language use, mental health professionals and researchers can identify potential signs of depression and provide appropriate support and treatment. This approach is still being studied, and the accuracy and effectiveness of using social media to detect depression are still being researched."
            />
            <TripData
               image={Trip1}
               heading="Comments to Detect Depression"
               text="By analyzing patterns in a person's social media comments and language use, mental health professionals and researchers can identify potential signs of depression and provide appropriate support and treatment. This approach is still being studied, and the accuracy and effectiveness of using social media comments to detect depression are still being researched."
            />
         </div>
      </div>
   );
}

export default Trip;