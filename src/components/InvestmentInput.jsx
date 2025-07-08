import InputField from "./InputField";

export default function InvestmentInput({ onInputChange }) {
  return (
    <div id="user-input">
      <div className="input-group">
        <div>
          <InputField
            description="Initial Investment"
            onValueChange={(value) => {
              onInputChange("initialInvestment", value);
            }}
          />
          <br />
          <InputField
            description="Expected Return"
            onValueChange={(value) => {
              onInputChange("expectedReturn", value);
            }}
          />
        </div>
        <div>
          <InputField
            description="Annual Investment"
            onValueChange={(value) => {
              onInputChange("annualInvestment", value);
            }}
          />
          <br />
          <InputField
            description="Duration"
            onValueChange={(value) => {
              onInputChange("duration", value);
            }}
          />
        </div>
      </div>
    </div>
  );
}
