const stringsArrayFromCharcodes = (low: number, high: number): string[] => {
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

const MIN_LENGTH = 4;

export const getRandomInteger = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const generatePassword = (
  length: number,
  hasNumbers: boolean,
  hasLowerCase: boolean,
  hasUpperCase: boolean,
  hasSymbol: boolean
): string => {
  let charsArray: string[] = [];
  const condsAndChars: [boolean, string[]][] = [
    [hasLowerCase, LOWERCASES],
    [hasUpperCase, UPPERCASES],
    [hasNumbers, NUMBERS],
    [hasSymbol, SYMBOLS],
  ];

  if (length < MIN_LENGTH) return '';

  for (const [cond, chars] of condsAndChars) {
    if (cond) charsArray = [...charsArray, ...chars];
  }

  let password: string[] = [];
  for (let i = 0; i < length; i++) {
    const randomIndex = getRandomInteger(0, charsArray.length);
    const char = charsArray[randomIndex];
    password.push(char);
  }

  for (const [cond, chars] of condsAndChars) {
    const passHasChar = password.some((char) => chars.includes(char));
    if (cond && !passHasChar) {
      return generatePassword(length, hasNumbers, hasLowerCase, hasUpperCase, hasSymbol);
    }
  }

  return password.join('');
};
