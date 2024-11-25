import React from 'react';
import './Contact.css'; 

const Contact = () => {
  
  return (
    <>    
    <h1 id="Con">Contact</h1>
    <div class="contact">
    <div class="column-left">
        <div class="ctext"><h1>Get in Touch</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos harum corporis fuga corrupti. Doloribus quis soluta nesciunt veritatis vitae nobis?</p></div>
        <div class="cicons">
            <div class="row">
                <i class="fas fa-user"></i>
                <div class="cinfo">
                    <div class="c1head">Name</div>
                    <div class="subtitle">Abhiram</div>
                </div>
            </div>
            <div class="row">
                <i class="fas fa-map-marker-alt"></i>
                <div class="cinfo">
                    <div class="c1head">Address</div>
                    <div class="subtitle">Telangana, India</div>
                </div>
            </div>
            <div class="row">
                <i class="fas fa-envelope"></i>
                <div class="cinfo">
                    <div class="c1head">Email</div>
                    <div class="subtitle">abhiram4957@gmail.com</div>
                </div>
            </div>
        </div>
    </div>
    <div class="column-right">
    <h1>Message Me</h1>
    <input type="text" id="fname" placeholder="Name" /><input type="email" id="femail" placeholder="Email"/><br/>
    <input type="text" id="fsubject" placeholder="Subject" /><br/>
    <input type="text" id="fmessage" placeholder="Message" /><br/>
    <input type="submit" id="fsend" value="Send"/>
    </div>
</div>
</>

  )
}

export default Contact
