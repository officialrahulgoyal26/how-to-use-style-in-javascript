import React from 'react';
import reactDom from 'react-dom';
import './index.css';
const myname = "rahul";
const link = "https://www.google.com";
const img = "https://picsum.photos/200/300";
const heading = {
  color: 'red',
  textAlign: 'center',
  backGround:'red'
  

};

reactDom.render(
  <>
  <h1 style = {heading}>{myname}</h1>
  <p className = "paragraph">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
   Recusandae, perspiciatis eius. Sequi corporis perspiciatis in nam voluptas aperiam reprehenderit. Distinctio, quos ipsam. Et natus iusto quam? Eius ipsa nobis similique?</p>
  <div className="img_div"> 
  <a href={link} target = "blank">
    <img src={img} alt="none" /></a>

  </div>
  </>,

  document.getElementById('root')
);
