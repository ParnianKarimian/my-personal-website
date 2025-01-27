import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from '../assets/img/meter1.svg';
import meter2 from '../assets/img/meter2.svg';
import meter3 from '../assets/img/meter3.svg';
import colorSharp from '../assets/img/color-sharp.png';
import colorSharp2 from '../assets/img/color-sharp2.png';

export default function Skills() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <section className='skill' id='skills'>
      <Container>
        <Row>
          <Col>
            <div className='skill-bx'>
              <h2>Skills</h2>
              <p>
                I have a strong foundation in front-end development, specializing in HTML, CSS, and JavaScript. I am skilled in modern frameworks like React and proficient in using tools such as Bootstrap and Tailwind CSS for building responsive and visually appealing designs. My experience also includes working with version control systems like Git and platforms like GitHub. I continuously strive to learn new technologies and improve my skills to stay updated in the ever-evolving field of web development.</p>
              <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                <div className="item">
                  <img src={meter1} />
                  <h5>Responsive Design (Bootstrap/Tailwind)</h5>
                </div>
                <div className="item">
                  <img src={meter2} />
                  <h5>Next.js</h5>
                </div>
                <div className="item">
                  <img src={meter3} />
                  <h5>React Development</h5>
                </div>
                <div className="item">
                  <img src={meter1} />
                  <h5>Web Development (HTML, CSS, JavaScript)</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp} className="background-image-left" />
    </section>
  )
}
