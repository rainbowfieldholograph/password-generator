const stringsArrayFromCharcodes = (low: number, high: number) => {
  const result = [];
  for (let i = low; i <= high; i++) {
    result.push(String.fromCharCode(i));
  }
  return result;
};

const SYMBOLS = Array.from('!"#$%&\'()*+,-./:;<=>?@[]^_`{|}~');
const UPPERCASES = stringsArrayFromCharcodes(65, 90);
const LOWERCASES = stringsArrayFromCharcodes(97, 122);
const NUMBERS = stringsArrayFromCharcodes(48, 57);

const arrayHasElementFromArray = <T>(firstArray: T[], secondArray: T[]): boolean => {
  for (let i = secondArray.length; i > 0; i--) {
    const element = secondArray[i];
    if (firstArray.includes(element)) {
      return true;
    }
  }
  return false;
};

export const generatePassword = (
  length: number,
  hasNumbers: boolean,
  hasLowerCase: boolean,
  hasUpperCase: boolean,
  hasSymbol: boolean
): string => {
  let charsArray: string[] = [];
  if (hasUpperCase) charsArray = [...charsArray, ...UPPERCASES];
  if (hasLowerCase) charsArray = [...charsArray, ...LOWERCASES];
  if (hasNumbers) charsArray = [...charsArray, ...NUMBERS];
  if (hasSymbol) charsArray = [...charsArray, ...SYMBOLS];

  if (length < 10) return '';
  if (!hasLowerCase && !hasUpperCase && !hasNumbers && !hasSymbol) return '';

  let password: string[] = [];
  for (let i = 0; i < length; i++) {
    const char = charsArray[Math.floor(Math.random() * charsArray.length)];
    password.push(char);
  }

  if (hasUpperCase && !arrayHasElementFromArray(password, UPPERCASES)) {
    return generatePassword(length, hasNumbers, hasLowerCase, hasUpperCase, hasSymbol);
  }
  if (hasLowerCase && !arrayHasElementFromArray(password, LOWERCASES)) {
    return generatePassword(length, hasNumbers, hasLowerCase, hasUpperCase, hasSymbol);
  }
  if (hasNumbers && !arrayHasElementFromArray(password, NUMBERS)) {
    return generatePassword(length, hasNumbers, hasLowerCase, hasUpperCase, hasSymbol);
  }
  if (hasSymbol && !arrayHasElementFromArray(password, SYMBOLS)) {
    return generatePassword(length, hasNumbers, hasLowerCase, hasUpperCase, hasSymbol);
  }

  return password.join('');
};
