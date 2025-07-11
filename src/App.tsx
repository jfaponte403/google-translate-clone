import './App.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useStore } from './hooks/useStore.ts';
import { AUTO_LANGUAGE } from '../constants.ts';
import { ArrowsIcon } from './components/Icons.tsx';
import { LanguageSelector } from './components/LanguageSelector.tsx';

function App() {
  const { interchangeLanguages, fromLanguage, toLanguage, setFromLanguage, setToLanguage } = useStore();

  return (
    <>
      <Container fluid>
        <h1> Translate </h1>
        <Row>
          <Col>
            <LanguageSelector
              onChange={setFromLanguage}
              value={fromLanguage}
              type="from"
            />
          </Col>
          <Col>
            <Button
              variant="light"
              disabled={fromLanguage === AUTO_LANGUAGE}
              onClick={interchangeLanguages}>
              <ArrowsIcon />
            </Button>
          </Col>
          <Col>
            <LanguageSelector
              onChange={setToLanguage}
              value={toLanguage}
              type="to"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
