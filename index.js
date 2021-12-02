const getRandomArbitrary = (min, max) => Math.round(min + Math.random() * (max - min))

//https://net-comber.com/charset.html
const getRandomLower = () => String.fromCharCode(Math.floor(getRandomArbitrary(97, 122)))

const getRandomUpper = () => String.fromCharCode(getRandomArbitrary(65, 90))

const getRandomNumber = () => String.fromCharCode(getRandomArbitrary(48, 57))

const symbols = '!"#$%&\'()*+,-./:;<=>?@[]^_`{|}~'
const getRandomSymbol = () => symbols[getRandomArbitrary(0, symbols.length - 1)]

const randomFunc = {
  lowercase: getRandomLower,
  uppercase: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
}

const generatePassword = (length, number, lowercase, uppercase, symbol) => {
  let result = ''
  const typesCount = number + lowercase + uppercase + symbol
  const typesArr = [{ number }, { lowercase }, { uppercase }, { symbol }].filter(
    (type) => Object.values(type)[0]
  )
  if (typesCount === 0 || length < 10 || length > 50) {
    alert('error')
    return '...'
  }
  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0]
      result += randomFunc[funcName]()
    })
  }
  return result
}

const form = document.querySelector('#form')
const out = document.querySelector('#result')

form.onsubmit = (event) => {
  event.preventDefault()
  const hasNums = document.querySelector('#numbers').checked
  const hasLowerCase = document.querySelector('#lowerCase').checked
  const hasUpperCase = document.querySelector('#upperCase').checked
  const hasSymbols = document.querySelector('#special').checked
  const length = document.querySelector('#length').value
  out.innerText = generatePassword(length, hasNums, hasLowerCase, hasUpperCase, hasSymbols)
}
