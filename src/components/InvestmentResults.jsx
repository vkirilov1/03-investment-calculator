import { formatter } from "../util/investment";

export default function InvestmentResult({ annualData, initialInvestment }) {
  let runningInterest = 0;
  return (
    <div id="result">
      <table className="center">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {annualData?.map((data, index) => {
            runningInterest += data.interest;
            const totalInvested =
              initialInvestment + data.annualInvestment * (index + 1);

            return (
              <tr key={data.year}>
                <td>{data.year}</td>
                <td>{formatter.format(data.valueEndOfYear)}</td>
                <td>{formatter.format(data.interest)}</td>
                <td>{formatter.format(runningInterest)}</td>
                <td>{formatter.format(totalInvested)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
