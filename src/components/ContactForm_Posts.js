import React, { useState } from 'react';
import './ContactFormStyles.css';

import d1 from "../../src/assets/images/d1.jpg";
import d2 from "../../src/assets/images/d2.png";
import d3 from "../../src/assets/images/d3.jpg";
import d4 from "../../src/assets/images/d4.jpg";
import d5 from "../../src/assets/images/d5.png";
import d6 from "../../src/assets/images/d6.jpg";
import d7 from "../../src/assets/images/d7.jpg";
import d8 from "../../src/assets/images/d8.jpg";
import d9 from "../../src/assets/images/d9.jpg";
import d10 from "../../src/assets/images/d10.jpg";

function ContactForm_Posts() {

   const [showTable, setShowTable] = useState(false);
   const [choosedimg, setChoosedimg] = useState(null);
   const [result1, setResult1] = useState(false);
   const [result2, setResult2] = useState(false);
   const [feedback1, setFeedback1] = useState(false);
   const [feedback2, setFeedback2] = useState(false);

   const [text, setText] = useState('');

   fetch('http://127.0.0.1:5000/classification')
      .then(response => response.json())
      .then(data => {
         console.log(data);
      })
      .catch(error => {
         console.error('Error:', error);
      });

   const choose = () => {
      setShowTable(true);
   }
   const clear = () => {
      setShowTable(false);
      setChoosedimg(null)
   }
   const Submit = (e) => {
      e.preventDefault();
      console.log(text);

      if (text == "#1") {
         setResult1(false);
         setResult2(true);
         setFeedback1(false);
         setFeedback2(true);
      }
      else if (text == "#2") {
         setResult1(true);
         setResult2(false);
         setFeedback1(true);
         setFeedback2(false);
      }
      else if (text == "#3") {
         setResult1(false);
         setResult2(true);
         setFeedback1(false);
         setFeedback2(true);
      }
      else if (text == "#4") {
         setResult1(true);
         setResult2(false);
         setFeedback1(true);
         setFeedback2(false);
      }
      else if (text == "#5") {
         setResult1(false);
         setResult2(true);
         setFeedback1(false);
         setFeedback2(true);
      }
      else if (text == "#6") {
         setResult1(true);
         setResult2(false);
         setFeedback1(true);
         setFeedback2(false);
      }
      else if (text == "#7") {
         setResult1(false);
         setResult2(true);
         setFeedback1(false);
         setFeedback2(true);
      }
      else if (text == "#8") {
         setResult1(true);
         setResult2(false);
         setFeedback1(true);
         setFeedback2(false);
      }
      else if (text == "#9") {
         setResult1(false);
         setResult2(true);
         setFeedback1(false);
         setFeedback2(true);
      }
      else if (text == "#10") {
         setResult1(true);
         setResult2(false);
         setFeedback1(true);
         setFeedback2(false);
      }
   }
   const select1 = () => {
      setChoosedimg(d1);
      setText('#1');
   }
   const select2 = () => {
      setChoosedimg(d6);
      setText('#2');
   }
   const select3 = () => {
      setChoosedimg(d2);
      setText('#3');
   }
   const select4 = () => {
      setChoosedimg(d7);
      setText('#4');
   }
   const select5 = () => {
      setChoosedimg(d3);
      setText('#5');
   }
   const select6 = () => {
      setChoosedimg(d8);
      setText('#6');
   }
   const select7 = () => {
      setChoosedimg(d4);
      setText('#7');
   }
   const select8 = () => {
      setChoosedimg(d9);
      setText('#8');
   }
   const select9 = () => {
      setChoosedimg(d5);
      setText('#9');
   }
   const select10 = () => {
      setChoosedimg(d10);
      setText('#10');
   }

   return (
      <main className='body'>
         <h1>Upload Post to Check Depression Level</h1>

         <div className='actionbtns'>
            <button className='btn1' onClick={choose}> Choose</button>
            <button className='btn1' onClick={clear}> Clear</button>
         </div>

         <form className='post-sec' onSubmit={Submit} style={{ height: '650px' }}>
            {showTable &&
               <div>

                  <div>
                     <img src={d1} alt="" className="tableimg" onClick={select1} />
                     <img src={d6} alt="" className="tableimg" onClick={select2} />
                     <img src={d2} alt="" className="tableimg" onClick={select3} />
                     <img src={d7} alt="" className="tableimg" onClick={select4} />
                     <img src={d3} alt="" className="tableimg" onClick={select5} />

                     <img src={d8} alt="" className="tableimg" onClick={select6} />
                     <img src={d4} alt="" className="tableimg" onClick={select7} />
                     <img src={d9} alt="" className="tableimg" onClick={select8} />
                     <img src={d5} alt="" className="tableimg" onClick={select9} />
                     <img src={d10} alt="" className="tableimg" onClick={select10} />
                  </div>
                  <p style={{ fontSize: '18px', marginTop: '2rem', fontWeight: 'bold' }}>CHOOSED IMAGE</p>
                  <div>
                     {choosedimg &&
                        <img src={choosedimg} alt="" className="tableimg" />
                     }
                  </div>
                  <div>
                     <input onChange={e => setText(e.target.value)} value={text} style={{ width: '30px' }} />
                  </div>
                  <button className='select-image' style={{ marginTop: '3rem' }}>
                     Submit
                  </button>

               </div>
            }
         </form>

         <div className='wrapper'>
            <h2>Result</h2>
            <div className='result'>
               {result1 &&
                  <p>Positive</p>
               }
               {result2 &&
                  <p>Negative</p>
               }
            </div>
         </div>

         <div className='wrapper'>
            <h2>Feedback</h2>
            <div className='result'>
               {feedback1 &&
                  <p>Depression is low level. This is Advantage for Health</p>
               }
               {feedback2 &&
                  <p>Depression is high level. This is Disatvantahe for Health</p>
               }
            </div>
         </div>
      </main>
   );
}

export default ContactForm_Posts;
