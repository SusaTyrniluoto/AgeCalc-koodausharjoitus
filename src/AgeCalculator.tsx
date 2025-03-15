import React, { useState } from 'react';
import {
  birthdayMessages,
  generalMessages,
  daysMessage,
  advertisementHTML
} from './messages';
import './App.css';

const AgeCalculator: React.FC = () => {
  const [dateOfBirth, setDateOfBirth] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const calculateAge = (dobString: string): number => {
    const dob = new Date(dobString);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      age--;
    }
    return age;
  };

  const daysUntilNextBirthday = (dobString: string): number => {
    const today = new Date();
    const dob = new Date(dobString);
    const nextBirthday = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());
    if (today > nextBirthday) {
      nextBirthday.setFullYear(today.getFullYear() + 1);
    }
    const diffTime = nextBirthday.getTime() - today.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const handleCalculate = () => {
    if (!dateOfBirth) {
      setResult('<p>Anna ensin syntymäpäiväsi.</p>');
      return;
    }
    
    const dob = new Date(dateOfBirth);
    const today = new Date();
  
    if (dob > today) {
      setResult(generalMessages.notBorn);
      return;
    }
  
    const age = calculateAge(dateOfBirth);
    const isBirthday =
      today.getDate() === dob.getDate() && today.getMonth() === dob.getMonth();
    const daysLeft = daysUntilNextBirthday(dateOfBirth);
  
    let message = "";
    if (isBirthday) {
      if (age === 0) {
        message = birthdayMessages.newborn;
      } else if (age === 1) {
        message = birthdayMessages.oneYearOld;
      } else {
        message = birthdayMessages.generic(age);
      }
      message += daysMessage(daysLeft);
    } else {
      if (age === 0) {
        message = generalMessages.lessThanOneYear + daysMessage(daysLeft);
      } else if (age === 1) {
        message = generalMessages.oneYear + daysMessage(daysLeft);
      } else {
        message = generalMessages.older(age) + daysMessage(daysLeft);
      }
    }
  
    setResult(message);
  };
  

  return (
    <div className="container">
      <label htmlFor="dateOfBirth" className="label">
        Valitse syntymäpäiväsi:
      </label>
      <input
        type="date"
        id="dateOfBirth"
        className="input"
        value={dateOfBirth}
        onChange={(e) => setDateOfBirth(e.target.value)}
      />
      <br />
      <button onClick={handleCalculate} className="button">
        Laske ikäni
      </button>
      {result && (
        <div className="result">
          <div dangerouslySetInnerHTML={{ __html: result }} />
          <div
            className="advertisement"
            dangerouslySetInnerHTML={{ __html: advertisementHTML }}
          />
        </div>
      )}
    </div>
  );
  
};

export default AgeCalculator;
