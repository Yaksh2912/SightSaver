import React from 'react';
import '../../assets/styles/About.css'; // Link to your CSS file

const About = () => {
    return (
        <div id="about_section" className="about-container">
            <section id="about" className="about-content">
                <h2 className="about-heading">About Us</h2>
                <p className="about-paragraph">
                    SightSaverai.in is a successful outcome of a MeitY sponsored R&D project entitled “Design & Development of Artificial Intelligence framework using Data Analytics for detection of Chronic Illness from Retinal Images”. It is a state-of-the-art online web-based solution for data acquisition framework for expert grading of retinal images and Artificial Intelligence based framework using data analysis techniques for detection of various diseases through retinal images.
                </p>
                <p className="about-paragraph">
                    Research shows that retinal images can also be used as a tool for diagnosing other underlying diseases prevalent in the body. Hypertension and cardiovascular diseases have shown close correlation to significant changes in the eye fundus which can be diagnosed using image analysis techniques. CDAC-Mohali implemented the machine learning algorithms for the detection and classification of chronic illnesses with the underlying symptoms through retinal fundus image data and also collaborated with government medical colleges/hospitals for domain expertise and data collection.
                </p>
                <p className="about-paragraph">
                    The developed solution is a data analytics framework to assist the doctors in government and public health organisations for early diagnosis or identification of signs and symptoms of chronic illness. It also assist for mass screening in medical health check-up camps for early detection of diseases and will help in executing the care and treatment plan. The solution saves doctor’s time spent on patient for detection and diagnosis of various chronic illness.
                </p>
            </section>
        </div>
    );
};

export default About;
