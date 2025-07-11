import { Form } from 'react-bootstrap';
import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from '../../constants.ts';
import * as React from 'react';
import type { FromLanguage, Language } from '../types';

type Props =
  | { type: 'from'; value: FromLanguage; onChange: (value: FromLanguage) => void }
  | { type: 'to'; value: Language; onChange: (value: Language) => void };

export const LanguageSelector: React.FC<Props> = ({ onChange, value, type }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as Language);
  };
  return (
    <Form.Select aria-label="Select the language" onChange={handleChange} value={value}>
      {type === 'from' && <option value={AUTO_LANGUAGE}>{AUTO_LANGUAGE}</option>}
      {Object.entries(SUPPORTED_LANGUAGES).map(([lang, language]) => (
        <option key={lang} value={language}>
          {language}
        </option>
      ))}
    </Form.Select>
  );
};
