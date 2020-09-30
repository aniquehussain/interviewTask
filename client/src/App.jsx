import React from 'react';
import './App.css';
import { Row, Col, Container } from 'react-bootstrap';
import axios from 'axios';
import Note from './components/Note';
import CreateNote from './components/CreateNote';

function App() {



  return (
    <div className="App">
      <header className="App-header">
        <div style={{ marginBottom: '5%', }}>
          <h3>Notes</h3>
          <h3>Welcome, You can write your note below</h3>
        </div>

        <Container>
          <Row>
            <Col>
              <CreateNote />
            </Col>

            <Note />

          </Row>
        </Container>

      </header>
    </div>
  );
}

export default App;
