import React from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';
import { ProjectsCard } from './ProjectsCard';
import colorSharp2 from '../assets/img/color-Sharp2.png';
import projImg1 from "../assets/img/CreditCard.jpg";
import projImg2 from "../assets/img/Alien.jpg";
import projImg3 from "../assets/img/Shop.jpg";
import projImg4 from "../assets/img/DigiAgency.jpg";
import projImg5 from "../assets/img/DigiKala.jpg";
import projImg6 from "../assets/img/SignUp.jpg";
import projImg7 from "../assets/img/MusicPlayer.jpg";
import projImg8 from "../assets/img/mario.jpg";
import projImg9 from "../assets/img/FurShop.jpg";
import { Contact } from './Contact';


export default function Projects() {


  const projects = [
    {
      title: 'Credit Card',
      description: 'You can fill the Bank Card inputs & the card will be filled by your data, also the card rotates 180deg when you hover it... <br /> Tecs:[HTML,CSS,JS]',
      imgUrl: projImg1,
    },
    {
      title: 'Alien Phenomenon Website',
      description: 'This project is a captivating parallax web page exploring extraterrestrial phenomena, complete with interactive sections, animations, and research insights. It is built using HTML, CSS, and JavaScript.',
      imgUrl: projImg2
    },
    {
      title: 'Shopping Site',
      description: 'A basic shopping website designed using HTML and CSS. This project demonstrates fundamental web development skills. Enjoy exploring the website and feel free to suggest improvements! ',
      imgUrl: projImg3
    },
    {
      title: 'Digital Agency Website',
      description: 'A modern, Digital Agency Website built using HTML and CSS. This project showcases a clean, user-friendly design suitable for promoting digital marketing services, creative agencies, or startups.',
      imgUrl: projImg4
    },
    {
      title: 'Digikala Homepage Clone',
      description: 'This project is a replica of the homepage of Digikala, built using React, Tailwind CSS, and Material-UI (MUI). The goal of this project is to enhance skills in modern web design and development, focusing on UI component design for platforms.',
      imgUrl: projImg5
    },
    {
      title: 'Sign In/Up Form project',
      description: 'Sign In/Up Form This project is a dynamic Sign In/Up Form built with HTML, CSS, and JavaScript. It allows users to seamlessly toggle between the Sign Up and Sign In pages using JavaScript, offering a smooth and interactive user experience.',
      imgUrl: projImg6
    },
    {
      title: 'Music Player',
      description: 'This project is a dynamic music player built with HTML, CSS, and JavaScript, featuring play/pause controls and a responsive UI. Users can click on any song to view its details and play it seamlessly within the music player.',
      imgUrl: projImg7
    },
    {
      title: 'MARIO-Game!',
      description: 'An interesting game where you have to click on Mole to earn points. If you click on the Piranha Plant, its game over! The game time is 30 seconds and the goal is to score as many points as possible.',
      imgUrl: projImg8
    },
    {
      title: 'Furniture Shop!',
      description: 'A modern and user-friendly furniture website offering a wide range of stylish and functional furniture for every home.',
      imgUrl: projImg9
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Here’s a collection of some of my work. I hope you enjoy exploring them as much as I enjoyed creating them!</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 2</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectsCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                      </Tab.Pane>
                      <Tab.Pane eventKey="third" className='second'>
                        <h4>What I Do</h4>
                        <h6>As a front-end developer, I specialize in:</h6>
                        <p>Building Interactive Websites: Designing and developing interfaces that are both visually appealing and functional.
                          Responsive Design: Ensuring websites look great on all devices, from desktops to smartphones.
                          Problem Solving: Tackling coding challenges and debugging to deliver seamless user experiences.
                          I love taking designs and ideas and transforming them into clean, efficient, and elegant code. Whether it’s creating a stunning portfolio, building a small business website, or collaborating on larger projects, I’m always eager to explore and innovate.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
