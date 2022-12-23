
import React from 'react'
import styled from 'styled-components';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { TypeAnimation } from 'react-type-animation';
import ReactWhatsapp from 'react-whatsapp';
import Resume from '../Ajay Kammar.pdf'
import Photo from "../Images/Photo.png"
import bg from "../Images/bg1.jpg"


const Cotainer = styled.div`
width:100vw;
height:100vh;
background-image: url(${bg});
display:flex;
background-size: cover;
`;

const Wrapper = styled.div`
background-color: rgba(0,0,0,0.3) ;
width: 100%;
height: 100%;
align-items: center;
justify-content: center;
display: flex;
flex-direction:column;
`;
const Details = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center`;
const Title = styled.h3``;
const Name = styled.h2``;
const Role = styled.div`
padding:10px;
font-size: 20px;
text-shadow:0px 0px 5px white`;

const Subtitle = styled.span`
  color: white;
  font-size: 19px;
  text-shadow:0px 0px 2px  blue;
  font-weight: 400;
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
background-color:${props => props.color };
transition: 0.5s ease;
&:hover{
    transform: scale(1.3);
    box-shadow: 0 0 3px black;
}`;

const Button = styled.button`
margin: 20px;
  width: 120px;
  height: 35px;
  color:  black;
  border-radius: 20px;
  border: none;
  box-shadow: 0px 0px 5px  black;
  transition: 1s ease;
  &:hover {
   background-color: #1a0564;
   color:  white;
  } `;

const ImageContainer = styled.div`
  width: 180px;
  height: 180px;
  border: 3px solid white;
  box-shadow: 0px 0px 7px black;
  margin: 10px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  background-color: #cce6f7;
`;
const Imag = styled.img`
 opacity :0.9 ;`;


const Home = () => {
    return (
        <Cotainer>
            <Wrapper>
            <ImageContainer>
            <Imag src={Photo}/>
            </ImageContainer>
                <Details>
                    <Title> Hello, I'm <Name> AJAY </Name> </Title>
                    <Role>
                        <TypeAnimation sequence={[
                            "Node Developer", 2000,
                            "Full Stach Developer", 2000,
                            "MERN Stach Developer", 2000,
                            "React Developer", 2000,]}
                            cursor={true}
                            repeat={Infinity} />
                    </Role>
                    <Subtitle>
                        Knack of building applications with front and back end operatons
                    </Subtitle>
                    <a href={Resume} download="Ajay Kammar.pdf"><Button ><b>Get Resume </b></Button> </a>
                </Details>
                <Cols>
                   
                    <ReactWhatsapp number="8904736408" message="Hello ajay" style={{background:"none", border:"none"}}>   <Icon color="green"> <WhatsAppIcon />  </Icon> </ReactWhatsapp>
                   <a href='https://www.instagram.com/ajaykammar1/'><Icon color="red"> <InstagramIcon /> </Icon>   </a> 
                    <a href='https://www.linkedin.com/in/ajay-kammar-59b10025b'><Icon color="blue"> <LinkedInIcon /></Icon> </a>
                    
                </Cols>
            </Wrapper>
        </Cotainer>
    )
}
export default Home