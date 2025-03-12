import React, { useState } from 'react';


const AgeCalculator: React.FC = () => {
  const [dateOfBirth, setDateOfBirth] = useState<string>('');
  const [age, setAge] = useState<number | null>(null);

  const calculateAge = (dobString: string): number => {
    const dob = new Date(dobString);
    const today = new Date();
    let calculatedAge = today.getFullYear() - dob.getFullYear();
    const monthDifference = today.getMonth() - dob.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dob.getDate())) {
      calculatedAge--;
    }
    return calculatedAge;
  };

  const handleCalculate = () => {
    if (dateOfBirth) {
      const dob = new Date(dateOfBirth);
      const today = new Date();
      if (dob > today) {
        setAge(-1);
      } else {
        const newAge = calculateAge(dateOfBirth);
        setAge(newAge);
      }
    }
  };

  return (
    <div className="container">
      <label htmlFor="dateOfBirth" className="label">
        Anna syntymäpäiväsi:
      </label>
      <input
        type="date"
        id="dateOfBirth"
        className="input"
        value={dateOfBirth}
        onChange={(e) => setDateOfBirth(e.target.value)}
      />
      <button onClick={handleCalculate} className="button">
        Laske ikävuodet
      </button>
      {age !== null && (
        <h1 className="result">
          {age < 0
            ? "Et ole vielä syntynyt"
            : age === 0
            ? "Olet alle yksi vuotias"
            : age === 1
            ? "Olet yhden vuoden ikäinen"
            : `Olet ${age} vuotta vanha.`}
        </h1>
      )}
    </div>
  );
};

export default AgeCalculator;
