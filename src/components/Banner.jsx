import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import portfolioImage from '../assets/img/portfolio.png'
import { useState, useEffect } from "react";

const Banner = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const fullText = "Web Developer";
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => clearInterval(ticker);
    }, [text]);

    const tick = () => {
        let updatedText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta((prevDelta) => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setDelta(500);
        }
    };

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>
                            Hi, I'm <span className="wrap">{text}</span>
                        </h1>
                        <p>Hi there! My name is Parnian, a passionate and aspiring front-end developer with a creative approach to bringing web designs to life. I’ve recently embarked on an exciting journey in the world of web development, fueled by my enthusiasm for design, coding, and crafting user-friendly digital experiences.</p>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={portfolioImage} className="mePng" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Banner;
