import type { Action, State } from './types';
import { useReducer } from 'react';

const initialState: State = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  result: '',
  loading: false,
};

function reducer(state: State, action: Action) {
  const { type } = action;

  if (type === 'INTERCHANGE_LANGUAGES') {
    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage,
    };
  }

  if (type === 'SET_FROM_LANGUAGE') {
    return {
      ...state,
      fromLanguage: action.payload,
    };
  }

  if (type === 'SET_TO_LANGUAGE') {
    return {
      ...state,
      toLanguage: action.payload,
    };
  }

  if (type === 'SET_FROM_TEXT') {
    return {
      ...state,
      fromText: action.payload,
      loading: true,
      result: '',
    };
  }

  if (type === 'SET_RESULT') {
    return {
      ...state,
      result: action.payload,
      loading: false,
    };
  }

  return state;
}

export function useStore() {
  const [{ fromLanguage, toLanguage, fromText, result, loading }, dispatch] = useReducer(reducer, initialState);

  const interchangeLanguages = () => dispatch({ type: 'INTERCHANGE_LANGUAGES' });

  const setFromLanguage = (payload) => dispatch({ type: 'SET_FROM_LANGUAGE', payload: payload });

  return {
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading,
    interchangeLanguages,
  };
}
