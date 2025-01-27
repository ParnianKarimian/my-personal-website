import { useState } from "react";
import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('send');
    const [status, setStatus] = useState({})

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault('Sending...');
        let response = await fetch(' http://localhost:5000/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json;charset=utf-8'
            },
            body: JSON.stringify(formDetails),
        })
        setButtonText('Send');
        let resault = response.json();
        setFormDetails(formInitialDetails);
        if (resault.code === 200) {
            setStatus({ success: true, message: 'Message sent successfully' });
        } else {
            setStatus({ success: false, message: 'Something went wrong, please try again later.' })
        }
    }
    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} />
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <h4>Parnian Karimian</h4>
                        <p>Email : parniankarimian2005@gmail.com</p>
                        <p>Thank you for visiting my portfolio. I’d love to hear about your project ideas or opportunities to work together.</p>
                        <h5>Let’s build something amazing!</h5>
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/parnian-karimian-a73855285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><img src={navIcon1} /></a>
                            <a href="https://github.com/ParnianKarimian"><img src={navIcon2} /></a>
                            <a href="https://www.instagram.com/parniankarimian_web?igsh=MTh0c2R4aXN6NDloYw=="><img src={navIcon3} /></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
