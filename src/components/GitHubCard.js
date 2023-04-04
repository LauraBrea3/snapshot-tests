import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import myPictureImg from '../assets/myPicture.jpeg'

function GitHubCard() {
    const cardStyle = {
        width: '30rem',
        borderRadius: 20,
        backgroundColor: 'antiquewhite',
        height: '30rem',
    }
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <Card style={cardStyle}>
        <Card.Img style={{height: '15rem'}} variant="top" src={myPictureImg} />
        <Card.Body>
          <Card.Title>
                <h1>Laura Brea</h1>
          </Card.Title>
          <Card.Text>
            Hi there!  My name is Laura Brea and I am currently a web development student at NYU's Software Development bootcamp. My favorite parts of the course so far have been Back-End Development and React. Check out my GitHub repository below for some samples of my work.
          </Card.Text>
          <Button
            href="https://github.com/LauraBrea3"
            type="submit"
            variant="primary"
          >
            Check out my GitHub!
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default GitHubCard;
