import './App.css';
import { Button } from 'react-bootstrap';
import { useReducer } from 'react';

const initialState = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  result: '',
  loading: false,
};

function reducer(state, action) {
  const { type, payload } = action;

  if (type === "INTERCHANGE_LANGUAGES") {
    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage,
    };
  }

  if (type === "SET_FROM_LANGUAGE") {
    return {
      ...state,
      fromLanguage: payload,
    };
  }

  if (type === "SET_TO_LANGUAGE") {
    return {
      ...state,
      toLanguage: payload,
    };
  }

  if (type === "SET_FROM_TEXT") {
    return {
      ...state,
      fromText: payload,
      loading: true,
      result: '',
    };
  }

  if (type === "SET_RESULT") {
    return {
      ...state,
      result: payload,
      loading: false,
    };
  }

  return state;
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <Button>Hola</Button>
    </>
  );
}

export default App;
