import React from 'react'
import styled from 'styled-components';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ReactWhatsapp from 'react-whatsapp';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Container = styled.div`
padding: 20px;
  height: 30vh;
  width: 100vw;
  display: flex;
  background-image: linear-gradient(to bottom right, pink, lightblue);
`;
const ContactForm = styled.div`
  flex:2;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Input = styled.input`
  width: 40%;
  height: 20px;
  padding: 4px;
  margin: 4px;
  background:none;
  border: none;
  box-shadow: 0px 0px 3px black;
`;
const Textarea = styled.textarea`
  width: 40%;
  padding: 4px;
  margin: 4px;
  background:none;
  border: none;
  box-shadow: 0px 0px 3px black;
`;
const Button = styled.button`
  width: 100px;
  height: 30px;
  margin: 10px;
  background: none;
  border: none;
  box-shadow: 0px 0px 3px black;

`;


const Ditails = styled.div`
  flex:1;
`;
const Title = styled.h4`
  text-align: center;
`;

const Info = styled.div`
  padding: 5px;
`;
const InfoTitle = styled.h5`
  
`;
const InfoCont = styled.span`
  font-size: 15px;
`;

const Cols = styled.div`
display:flex;`;

const Icon = styled.div`
display: flex;
margin:10px;
width: 30px;
height: 30px;
border-radius:50%;
color : white;
align-items: center;
justify-content: center;
background-color:${props => props.color};
transition: 0.5s ease;
&:hover{
    transform: scale(1.3);
    box-shadow: 0 0 3px black;
}`;

const Footer = () => {


    return (
        <Container>
            <ContactForm>
                <Title>Contact Me</Title>
               
                <Input placeholder='NAME' />
                <Input placeholder='Name' />
                <Textarea rows="2" cols="20" placeholder='MESSAGE' />
                <Button>SEND</Button>
                
     
            </ContactForm>

            <Ditails>
                <Info>
                    <InfoTitle>Email</InfoTitle>
                    <InfoCont>kammarajay1@gmail.com</InfoCont>
                </Info>
                <Info>
                    <InfoTitle>Contact No</InfoTitle>
                    <InfoCont>8904736408</InfoCont>
                </Info>
                <Info>
                    <InfoTitle>Address</InfoTitle>
                    <InfoCont>Ganesh Chowk, Kangrali B.K , Belgaum</InfoCont>
                </Info>
                <Cols>

                    <ReactWhatsapp number="8904736408" message="Hello ajay" style={{ background: "none", border: "none" }}>   <Icon color="green"> <WhatsAppIcon />  </Icon> </ReactWhatsapp>

                    <a href='https://www.instagram.com/ajaykammar1/'><Icon color="red"> <InstagramIcon /> </Icon>   </a>

                    <a href='https://www.linkedin.com/in/ajay-kammar-59b10025b'><Icon color="blue"> <LinkedInIcon /></Icon> </a>
                </Cols>
            </Ditails>
        </Container>
    )
}

export default Footer