import React from 'react';
import '../../assets/styles/Contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <h2 className="contact-heading">Contact Us</h2>
      <p className="contact-subtext">
        You can contact us by filling below form.
      </p>

      <div className="contact-container">
        {/* Left Column: Office Info */}
        <div className="contact-info">
          <h4 className="info-title">Office Address:</h4>
          <p>
            Centre for Development of Advanced Computing<br />
            A-34, Phase-VIII, Industrial Area Mohali -160071<br />
            (Near Chandigarh) Punjab, (India)
          </p>

          <h4 className="info-title">Department:</h4>
          <p>Applied Artificial Intelligence & Analytics Division</p>

          <h4 className="info-title">Phone No:</h4>
          <p>+91-172-2237052-55, 6619000</p>

          <h4 className="info-title">Fax:</h4>
          <p>+91-172-2237050-51</p>
        </div>

        {/* Right Column: Form */}
        <form className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label>Name*</label>
              <input type="text" placeholder="Your name*" />
            </div>
            <div className="form-group">
              <label>Email*</label>
              <input type="email" placeholder="Enter email" />
            </div>
          </div>

          <div className="form-group">
            <label>Subject*</label>
            <input type="text" placeholder="Your Subject.." />
          </div>

          <div className="form-group">
            <label>Message*</label>
            <textarea placeholder="Your message..." rows="5" />
          </div>

          <button type="submit" className="submit-btn-contact">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
