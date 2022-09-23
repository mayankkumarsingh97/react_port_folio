import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components'
import { Button } from "../button/Button"
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import { useState } from 'react';
const Navigation = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
`
const SideBar = styled.aside`
    position: relative;
    top:50px;
    height: calc(97vh - 50px);
    width: 100px;
    /* background-color: rgba(168, 223, 237,.3); */
    /* border-top:2px solid rgba(0,0,0,.4); */
    border-right:4px solid #8eeded;
    /* border-bottom:2px solid rgba(0,0,0,.4); */
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px; 
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    transition: all .2s linear;
    &:hover{
        box-shadow: 0 0 0 .25rem #5eebeb;
    }
`
const Contact = styled.form`
    position: relative;
    top:60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 70vh;
    /* border:2px solid #eee; */
    padding:10px 5px;

    .input,textarea{
        width: 80%;
        margin:10px 0;
        outline: none;
        border: none;
        padding:.35rem .35rem;
        border-radius: .25rem;
    }
    
`
const ButtonSubmit = styled.button`
  background-color: #7bf8f8;
  border: none;
  width: 80%;
  padding:10px 0;
  color:black;
  font-weight: 700;
  border-radius: .25rem;
  transition: all .3s ease;
  :hover{
    background-color: #fff;
  }
  
`
const Section = styled.section`
 display:flex;
 height: 80vh;
 flex-direction: column;
 align-items: center;
 justify-content: center;
`
const Header = () => {
    const [data, setData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        message: ""
    })

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setData({
          ...data,
          [name]: value,
        })
      }
    const handleSubmit=()=>{
      console.log(data)
    }  
    return (<>

        <Container fluid>
            <Row>
                <Col md={7}>
                    <Row>
                        <Col md="3">
                            <SideBar>
                                <Nav.Link target="blank" href="https://github.com/mayankkumarsingh97">
                                    <GitHubIcon /></Nav.Link>
                                <Nav.Link><LinkedInIcon /></Nav.Link>
                                <Nav.Link><FacebookIcon /></Nav.Link>
                                <Nav.Link><YouTubeIcon /></Nav.Link>
                                <Nav.Link></Nav.Link>

                            </SideBar>
                        </Col>
                        <Col md="9">
                            <Section className='mt-5'>
                                <h1>Hi, I am Mayank.</h1>
                                <h2>Associtate. web Developer And Freelancer</h2>
                                <h3><PhoneCallbackIcon /> Me</h3>
                                {/* <h3>Me At</h3> */}
                                <h3>93&nbsp;10&nbsp;30&nbsp;75&nbsp;06</h3>

                            </Section>
                        </Col>
                    </Row>
                </Col>

                <Col md={5}>
                    <Navbar>
                        <Navigation>
                            <Button><Nav.Link href="#home">CV</Nav.Link></Button>


                        </Navigation>

                    </Navbar>

                    <Contact action="">
                        <input className='input' type="text"
                            value={data.firstname}
                            onChange={handleChange}
                            name="firstname"
                            required placeholder='*Enter your first name..'
                        />
                        <input className='input'
                            type="text"
                            onChange={handleChange}
                            value={data.lastname}
                            name="lastname"
                            placeholder='Enter your last name..' />
                        <input className='input'
                            type="email" required
                            onChange={handleChange}
                            value={data.email}
                            name="email"
                            placeholder='*Enter your email..'
                        />
                        <input className='input'
                            type="phone" required
                            onChange={handleChange}
                            value={data.phone}
                            name="phone"
                            placeholder='*Enter your phone..'
                        />
                        <textarea name="" id="" cols="30" rows="12"
                            onChange={handleChange}
                            value={data.message}
                            name="message"
                            placeholder='Write your message here.'></textarea>
                        <ButtonSubmit onClick={handleSubmit}>Submit</ButtonSubmit>
                    </Contact>

                </Col>
            </Row>
        </Container>

    </>)
}
export default Header