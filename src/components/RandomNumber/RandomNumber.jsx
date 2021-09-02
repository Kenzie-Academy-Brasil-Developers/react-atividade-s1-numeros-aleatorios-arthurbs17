const { useState } = require("react");

const RandomNumber = () => {
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * 100) + 1
  );

  const generateNumber = () => {
    setRandomNumber(Math.floor(Math.random() * 100));
  };

  return (
    <div>
      <p>{randomNumber}</p>
      <button onClick={generateNumber}>Criar novo elemento</button>
    </div>
  );
};

export default RandomNumber;
