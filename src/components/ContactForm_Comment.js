import React, { useState } from 'react';
import './ContactFormStyles.css';

import { MdCloudUpload, MdDelete } from 'react-icons/md';
import { AiFillFileImage } from 'react-icons/ai';

function ContactForm_Comment() {
   const [image, setImage] = useState(null);
   const [fileName, setFileName] = useState("No file selected");

   return(
      <main className='body'>
         <h1>Upload Comment to Check Depression Level</h1>
         <form className='post-sec' onClick={()=> document.querySelector(".input-field").click()}>
            <input 
               className='input-field' 
               type="file"
               accept='text/*' 
               hidden
               onChange={({ target: {files} })=> {
                  files[0] && setFileName(files[0].name)
                  if(files) {
                     setImage(URL.createObjectURL(files[0]))
                  }
               }}
            />

            {image ? <img src={image} width={150} height={150} alt={fileName} /> :
               <>
                  <MdCloudUpload color='#a4a4a4' size={60} />
                  <p>Browse Comments to Upload</p>
               </>
            }
         </form>

         <section className='uploaded-row'>
            <AiFillFileImage size={20} color='#1475cf' />
            <span className='upload-content'>
               {fileName} -
               <MdDelete 
                  cursor="pointer"
                  size={20} 
                  onClick={()=> {
                     setFileName("No Selected Comment")
                     setImage(null)
                  }} 
               />
            </span>
         </section>

         <button className='select-image'>
            Submit
         </button>

         <div className='wrapper'>
            <h2>Result</h2>
            <input className='status-update' type='text' placeholder='Status' required />
         </div>

         <div className='wrapper'>
            <h2>Feedback</h2>
            <textarea placeholder='Recommended Output' required />
         </div>
      </main>
   );
}

export default ContactForm_Comment;
