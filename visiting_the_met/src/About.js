import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

const About = () => {
  return (
    <Jumbotron>
      <Container>
        <h1>About The App</h1>
        <Image
          fluid
          src="https://i.imgur.com/Xr0jfuN.png"
          alt='View on the Catskill—Early Autumn, Oil on canvas by "Thomas Cole" '
          style={{ paddingBottom: '1em' }}
        />
        <p>
        Visiting the MET is an application for MET visitors to interact 
        with the MET public API; with this App, you can navigate to every
        corner of the 19 Departments of one of the world's most important 
        museums. Yes, we know the MET is Big, But with the App, you need 
        to type the Object's ID in front of you, and the magic occurs, 
        all the information in your hands. 
        Enjoy your visit. 
        </p>
    
        <Button
          variant="btn btn-outline-danger"
          href="https://www.metmuseum.org/"
          target="_blank"
          rel="noreferrer noopener"
          style={{ marginTop: '1em' }}
        >
          The Met website
        </Button>
      </Container>
    </Jumbotron>
  );
};
export default About;