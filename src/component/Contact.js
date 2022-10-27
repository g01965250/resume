import React from 'react';
import propTypes from 'prop-types';

function Contact({ contactAnchor }) {
  return (
    <div>
      <div id="contact" className="contact-wrapper" ref={contactAnchor}>
        <div className="contact-title title-bottomLine">CONTACT</div>
        <form id="fs-frm" name="complaint-form" acceptCharset="utf-8" action="https://formspree.io/f/xoqbdeey" method="post">
          <fieldset id="fs-frm-inputs" className="frm-inputs">
            <div className="input-container">
              <input placeholder=" " type="text" name="name" required="" className="contact-input" />
              <span>Name *</span>
            </div>
            <div className="input-container">
              <input placeholder=" " type="email" name="_replyto" required="" className="contact-input" />
              <span>Email *</span>
            </div>
            <div className="input-container">
              <input placeholder=" " type="tel" minLength="9" maxLength="10" name="telephone" className="contact-input phone" />
              <span>Phone</span>
            </div>
            <div className="input-container">
              <textarea name="complaint" required="" className="contact-input message" placeholder=" " />
              <span>Message</span>
              <input type="hidden" name="_subject" id="email-subject" value="Complaint Form Submission" />
            </div>
            <input type="submit" value="SEND MESSAGE" className="contact-btn-wrapper" />
          </fieldset>
        </form>
        <div className="contact-info">
          <p>ADDRESS</p>
          <h3>新竹縣湖口鄉仁興路48巷10號</h3>
          <p>PHONE</p>
          <h3>0912-144-381</h3>
          <p><a href="g01965250@gmail.com">g01965250@gmail.com</a></p>
        </div>
      </div>
    </div>
  );
}
Contact.propTypes = {
  contactAnchor: propTypes.shape({ current: propTypes.any }),
};
Contact.defaultProps = {
  contactAnchor: {},
};
export default Contact;
