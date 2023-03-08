import React from 'react';

const PDF_FILE_URL='http://localhost:3000/CV_2023.pdf';
function Contact() {

 const downloadFileAtURL=(url)=>{
  const fileName = url.split('/').pop();
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', fileName);
  document.body.appendChild(link);
  link.click();
  link.remove();

 }

  return (
    <div class="top">
      <div class="contact-me">
      <h1>Get In Touch</h1>
      <h3>My portfolio is glad to have you here!</h3>
      <p>For more information about my work, please visit the following links.</p>
      <button type="button" class="btn btn-lg"><a href="mailto:danweb.work.station@gmail.com"><p>CONTACT ME</p></a></button>     
      <button type="button" class="btn btn-lg" onClick={()=>{downloadFileAtURL(PDF_FILE_URL)}}><p>My CV</p></button>
      </div>
    </div>
  );
}

export default Contact;
