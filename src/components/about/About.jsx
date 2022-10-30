import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import mayank from "../../components/mayank_img.jpeg"
function About() {
  return (
    <>
      <Container className='mt-5 pt-5 mb-3' id="About">
        <Row className='align-items-center'>
            <Col md={6}>
              <img className='about_me_img' src={mayank} alt="me" />
            </Col>
            <Col md={6}>
            <h1 className='text-center'>
                Computer Graduate , very oriented <br />
                towards web application development and research.
            </h1>

            </Col>
        </Row>
      </Container>
    </>
  )
}

export default About