import { useState } from "react";
import InvestmentInput from "./components/InvestmentInput";
import InvestmentResult from "./components/InvestmentResults";
import { calculateInvestmentResults } from "./util/investment";

function App() {
  const [inputValues, setInputValues] = useState({
    initialInvestment: undefined,
    annualInvestment: undefined,
    expectedReturn: undefined,
    duration: undefined,
  });

  function handleInvestmentInputChange(type, value) {
    setInputValues((prevData) => {
      return {
        ...prevData,
        [type]: value,
      };
    });
  }

  let annualData = undefined;

  if (
    Object.values(inputValues).every((v) => typeof v === "number" && !isNaN(v))
  ) {
    annualData = calculateInvestmentResults(inputValues);
  }

  const hasEmptyInputs = Object.values(inputValues).some(
    (value) => value === null || value === undefined
  );

  return (
    <>
      <InvestmentInput onInputChange={handleInvestmentInputChange} />
      {(hasEmptyInputs && (
        <p className="center">
          Populate all Input fields to display investment result!
        </p>
      )) ||
        (inputValues.duration < 1 && (
          <p className="center">Duration cannot be below 1!</p>
        )) || (
          <InvestmentResult
            annualData={annualData}
            initialInvestment={inputValues.initialInvestment}
          />
        )}
    </>
  );
}

export default App;
