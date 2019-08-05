import React from 'react';
import logo from './logo.svg';
import './App.css';
import Container from '@material-ui/core/Container';

import LandingPage from '../src/pages/landingpage'

function App() {
  return (
    <div>
      <Container fixed> 
      <LandingPage></LandingPage>
      </Container>
    
    </div>
  );
}

export default App;
