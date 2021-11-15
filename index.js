const numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const lowerCaseArr = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
]

const upperCaseArr = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
]

const specialArr = '!"#$%&\'()*+,-./:;<=>?@[]^_`{|}~'.split('')

const compareRandom = () => Math.random() - 0.5

const form = document.getElementById('form')

const generatePassword = () => {
  let result = []
  const nums = document.getElementById('numbers').checked
  const lowerCase = document.getElementById('lowerCase').checked
  const upperCase = document.getElementById('upperCase').checked
  const special = document.getElementById('special').checked
  const length = document.getElementById('length').value
  const out = document.getElementById('result')
  if (nums) {
    result = result.concat(numsArr)
  }
  if (lowerCase) {
    result = result.concat(lowerCaseArr)
  }
  if (upperCase) {
    result = result.concat(upperCaseArr)
  }
  if (special) {
    result = result.concat(specialArr)
  }
  result.sort(compareRandom)
  result = result.join('').substr(0, length)
  out.innerHTML = `${result}`
}

form.onsubmit = (event) => {
  event.preventDefault()
  generatePassword()
}
