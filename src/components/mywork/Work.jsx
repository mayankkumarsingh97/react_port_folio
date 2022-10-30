import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Accordion from 'react-bootstrap/Accordion';

function Work() {
  return (
    <>
      <Container id="mywork" className='mt-5' fluid>
        <Col md={12}><h2 className='text-center'>My Work</h2></Col>
        <Row className="justify-content-center mt-md-5 mb-md-5">
          <Col md={12}>

            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Front End Projects</Accordion.Header>
                <Accordion.Body >
                  <Row>
                    <Col md={6}>
                      <div classname="bgtrans">
                        <a href="">FreshMandi e-comm markup,css and javascript</a> <br />
                        <a href="">Slack home page react</a> <br />
                        <a href="https://www.souvenirpublisher.com/" target="_blank">souvenirpublishers</a> <br />
                        <a href="">remypatrahairs blog</a>
                      </div>
                    </Col>
                    <Col md={6}>
                      <a href="">Portfolio website using react and Django.</a> <br />
                      <a href="">Slack home page react and styled components.</a> <br />
                      <a href="https://www.souvenirpublisher.com/" target="_blank">souvenirpublishers</a> <br />
                      <a href="">remypatrahairs blog</a> <br />
                      <a href="">Foodya.in using markup,css,bootstrap5 and javascript. </a>
                    </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Technical Skills</Accordion.Header>
                <Accordion.Body>
                  <li>Expertise over markup,css and Javascript.</li>
                  <li>Working experience/hands on over react JS</li>
                  <hr />
                  <li>
                    I have working knowledge of <b>markup, css[flex, gird,medQ]</b> ,js along side there library, framework like html,css,js framework bootstrap, js lib Jquery[specifically AJAX, DOM] ..as I worked for 8 months I  have developed many websites among then few are full e-commerce websites all are in production now . Using html css and js I am capable of making a full responsive websites from scratch.
                  </li>
                  <hr />

                  <li>
                    On the backend in my all websites python web framework Django is used I have expertise over relationships, querying complex queryset , working knowledge of Django rest framework And sound knowledge of web sockets I.e channel's.
                  </li>
                  <hr />
                  <li>
                    I have working knowledge of <b>markup, css[flex, gird,medQ]</b> ,js along side there library, framework like html,css,js framework bootstrap, js lib Jquery[specifically AJAX, DOM] ..as I worked for 8 months I  have developed many websites among then few are full e-commerce websites all are in production now . Using html css and js I am capable of making a full responsive websites from scratch.
                  </li>
                  <hr />
                  <li>
                    I have working knowledge of <b>markup, css[flex, gird,medQ]</b> ,js along side there library, framework like html,css,js framework bootstrap, js lib Jquery[specifically AJAX, DOM] ..as I worked for 8 months I  have developed many websites among then few are full e-commerce websites all are in production now . Using html css and js I am capable of making a full responsive websites from scratch.
                  </li>
                  <hr />
                </Accordion.Body>
              </Accordion.Item>


            </Accordion>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Work