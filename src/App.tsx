import React from 'react';
import { Card, Container } from 'react-bootstrap';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';
import './App.css';

const firstName: string = 'Khouloud';

const App: React.FC = () => {
  return (
    <Container className="my-5 d-flex flex-column align-items-center container-bg">
      <Card style={{ width: '22rem' }} className="shadow">
        <Image />
        <Card.Body>
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>

      <div className="footer">
        <h5>{firstName ? `Hello, ${firstName} 💕` : 'Hello, there 💕'}</h5>
        <p>
          {firstName && (
            <img
              src="https://media.giphy.com/media/J2SSdlShBVRnxLyb1p/giphy.gif"
              alt="Waving"
            />
          )}
        </p>
      </div>
    </Container>
  );
};

export default App;
