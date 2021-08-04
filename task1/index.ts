// Build a Mortgage Claculator using Rxjs and calculateMortgage method
import { fromEvent } from 'rxjs';
import { calculateMortgage } from './calculate';

const loanAmountInput = <HTMLInputElement>document.getElementById('loanAmount');
const loanInterestInput = <HTMLInputElement>(
  document.getElementById('loanInterest')
);
const loanLengthSelect = <HTMLInputElement>(
  document.getElementById('loanLength')
);

const calcMortageEvent = fromEvent(
  [loanAmountInput, loanInterestInput, loanLengthSelect],
  'change'
).subscribe(x => {
  let res = calculateMortgage(
    loanInterestInput.value,
    loanAmountInput.value,
    loanLengthSelect.value
  );
  if (res != 'NaN') {
    document.getElementById('result').innerHTML = res;
  } else {
    document.getElementById('result').innerHTML = '';
  }
});