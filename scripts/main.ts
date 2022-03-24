import { generatePassword } from './generatePassword';

const form = document.querySelector('#form') as HTMLFormElement;
const out = document.querySelector('#result') as HTMLOutputElement;
const numbersInput = document.querySelector('#numbers') as HTMLInputElement;
const lowerCaseInput = document.querySelector('#lowerCase') as HTMLInputElement;
const upperCaseInput = document.querySelector('#upperCase') as HTMLInputElement;
const symbolsInput = document.querySelector('#special') as HTMLInputElement;
const lengthInput = document.querySelector('#length') as HTMLInputElement;

form.onsubmit = (event) => {
  event.preventDefault();
  const hasNums = numbersInput.checked;
  const hasLowerCase = lowerCaseInput.checked;
  const hasUpperCase = upperCaseInput.checked;
  const hasSymbols = symbolsInput.checked;
  const length = lengthInput.value;
  out.innerText = generatePassword(+length, hasNums, hasLowerCase, hasUpperCase, hasSymbols);
};
