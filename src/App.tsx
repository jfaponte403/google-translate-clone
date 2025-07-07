import './App.css';
import { Button } from 'react-bootstrap';
import { useStore } from './hooks/useStore.ts';


function App() {

const { interchangeLanguages } = useStore()

  return (
    <>
      <Button
        onClick={() => {
          interchangeLanguages({ type: 'SET_FROM_LANGUAGE', payload: 'es' });
        }}
      >
        Change to spanish
      </Button>
    </>
  );
}

export default App;
