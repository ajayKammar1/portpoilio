import React from 'react'
import styled from 'styled-components';
import SkillBar from 'react-skillbars';
import ReactWhatsapp from 'react-whatsapp';
const Container = styled.div`
width: 100vw;
height: 70vh;
display: flex;
padding: 20px 0px;
flex-direction: column; 
background-color: rgba(100,125,125,0.1);
`;

const Title = styled.h2`
text-align: center;
`;

const Wrapper = styled.div`
  display: flex;
 margin  :0px 50px ;

    `;
const SubTitle = styled.p`
  width: 100%;
  height: 60%;
  flex: 1;
 text-align: justify;
 padding-top:70px`;

const Skills = styled.div`
 margin: 50px;
  flex: 1;
  padding:20px;
  border-radius: 32px;
  box-shadow: 0px 0px 10px grey;
background-color:  #5c585847

`;

const Experiance = styled.div`
background-color: white;
margin:15px;
padding:0  0 5px 2px  ;
box-shadow:1px 1px 5px black;
border-radius: 3px;

`;

const Year = styled.div`
padding:0pc 10px;
`;

const CompanyTitle = styled.div`
  display: flex;
  padding: 5px;
  background-color: #cdd2d3;
  width: 60%;
  color: black;
box-shadow:0px 0px 1px black;

`;
const Title2 = styled.h4`
`;
const skills = [
    {type: 'HTML',level: 88, color: { bar: 'white',
    title: { text: '#fff', background: 'grey' }} },
    {type: 'CSS',level: 80,color: {bar: 'black',
    title: { text: '#111', background: '#fff' }}},
    {type: 'JavaScript',level: 85,color: {bar: '#3498db',
    title: { text: '#fff', background: '#2980b9' },}},
    {type: 'React',level: 82,color: {bar: '#4288d0',
    title: { text: '#fff', background: '#124e8c' }}},
    {type: 'SQL',level: 50,color: {bar: '#2ecc71',
    title: { text: '#fff', background: '#27ae60' }}},    
    {type: 'NoSQL',level: 75,color: {bar: '#2ecc71',
    title: { text: '#fff', background: '#27ae60' }}},
    ];

const About = () => {
  return (
    <Container >
      <Title>About Me </Title>
      <Wrapper>
        <SubTitle>
          To be a member of an organization where growth prospects are unlimited and the individual is
          recognized by his work. As a professional I am Creative, Innovative and looking ahead to work in a challenging
          environment and strive for excellence
         
         
          <Title2>Work Experiance</Title2>
          <Experiance>
          <CompanyTitle>WEFIX  <Year> JUL 2021 - PRESENT</Year>  <h6><a href='https://thewefix.com/'>Website</a></h6></CompanyTitle>
          Junior MERN Developer
          </Experiance>

          <Experiance>
          <CompanyTitle>WEFIX  <Year>SEP 2020 -JUN 2021</Year> </CompanyTitle>
          Electronics Testing  
           </Experiance>
           <Experiance>
          <CompanyTitle>WEFIX  <Year>NOV 2019-SEP 2020 </Year> </CompanyTitle>
          Freelancing on Electronics and IOT Project 
          </Experiance>

        </SubTitle>
        <Skills>
        <h3>Skills</h3>
        <SkillBar skills={skills} height={25}/>
        </Skills>

      </Wrapper>
    </Container>
  )
}

export default About