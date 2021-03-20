/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import inspiration from "assets/img/theme/inspiration.png";
import cardImg from "assets/img/theme/pete.png";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Download from "../IndexSections/Download.js";

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        Peter Staker{" "}
                        <span>Software Developer</span>
                      </h1>
                      <p className="lead text-white">
                      Technology enthusiast and lifelong seeker of knowledge—unrivaled work ethic, meticulous attention to detail, and superior ability to master new skills quickly.
                      </p>
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                            InspirationHub
                          </h6>
                          <p className="description mt-3">
                          InspirationHub is an online quote board where users can store their favorite inspirational quotes and discover new ones.
                          </p>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                              JavaScript
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              HTML&CSS
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              Quote API
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="primary"
                            href="https://inspirationhub.github.io/inspiration-hub/index.html"
                          >
                            View App
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-success text-uppercase">
                            PlanHub
                          </h6>
                          <p className="description mt-3">
                          Online productivity tool allows parents to manage child productivity using task lists and rewards.
                          </p>
                          <div>
                            <Badge color="success" pill className="mr-1">
                              JavaScript
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              Express
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              MySQL
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="success"
                            href="https://safe-sea-10677.herokuapp.com/login"
                          >
                            View App
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                            React Click Game
                          </h6>
                          <p className="description mt-3">
                           A react memory game where users click matching cards.
                          </p>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                              JavaScript
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              React
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              Node.js
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="warning"
                            href="https://peterjast.github.io/react-click-game/"
                          >
                            View App
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={inspiration}
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                      <i className="ni ni-planet" />
                    </div>
                    <h3>InspirationHub</h3>
                    <p>
                     InspirationHub is an inspirational quote board web application created using HTML, CSS, and JavaScript. The app provides a digital whiteboard where users can add, remove and archive their favorite quotes.
                    </p>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-settings-gear-65" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              Stunning CSS animation - Cards flip to reveal author.
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-html5" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">Design and UX - Intuitive, easy to use, clean layout
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-satisfied" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              Super talented team of developers.
                            </h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section bg-secondary">
            <Container>
              <Row className="row-grid align-items-center">
                <Col md="6">
                  <Card className="bg-default shadow border-0">
                    <CardImg
                      alt="..."
                      src={cardImg}
                      top
                    />
                    <blockquote className="card-blockquote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="0 0 583 95"
                      >
                        <polygon
                          className="fill-default"
                          points="0,52 583,95 0,95"
                        />
                        <polygon
                          className="fill-default"
                          opacity=".2"
                          points="0,42 583,95 683,0 0,95"
                        />
                      </svg>
                      <h4 className="display-3 font-weight-bold text-white">
                        Peter Staker 
                      </h4>
                      <p className="lead text-italic text-white">
                      Hi, I’m Peter Staker – welcome to my corner of the internet, built and maintained out of the Pacific Northwest. Seattle’s thriving tech and food communities shape much of how I approach my life and my work. A good meal is often the result of complex and diverse flavors and techniques, but sometimes a few ingredients and simple preparations can be the just what you need to hit the spot. Development and design require a broad understanding of concepts, but sometimes a streamlined approach is the slice of cheese pizza we all need.
                      </p>
                    </blockquote>
                  </Card>
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                      <i className="ni ni-planet" />
                    </div>
                    <h3>About Me</h3>
                    <p className="lead">
                    I’m a highly motivated technology enthusiast with a background in Philosophy. As a result of my passion for learning, I made the decision to challenge myself and it changed my life forever. While finishing my degree at the University of Washington, I earned a full stack web development certificate. I’ve been obsessed with writing code ever since. Over these past few years, I’ve fully committed to a growth mindset. I’ve taken courses covering various technologies and programming languages such as Java, JavaScript and C++, as well as fundamental computer science concepts like discrete math, data structures and algorithms. I’m confident that my work ethic and dedication to learning will allow me to succeed in tech. I've worked as a brand ambassador, event promoter, prosecutor assistant, and bartender. A few months ago, I was offered a Software Developer apprenticeship with RealSelf via the apprenti program, which will begin upon my completion of the codefellows curriculum. I couldn’t possibly be more excited for this next chapter of my journey. My unique combination of education and work experience has given me the tools to be successful. I’ve learned how to communicate effectively and how to use logic and analytical thinking to develop creative solutions and maximize efficiency while working in fast paced, collaborative environments. Although my path was non-traditional, I’m confident that my unique experience and the skills that I’ve learned along the way will allow me to thrive as a software developer.
                    </p>
                    <a
                      className="font-weight-bold text-warning mt-5"
                      href="https://www.linkedin.com/in/peterjast/"
                    >
                      Connect with me on linkedin
                    </a>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Landing;
