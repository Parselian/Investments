'use-strict';

/*const returnDistanceAnalysis = (amount = 0, probability = 0, rise = 0, amountOfDeals = 0) => {
  let failedTrades = 100 - probability,
    numberPercentage = amountOfDeals / 100,
    numberOfSuccessfulTransactions = numberPercentage * failedTrades,
    numberOfFailedTransactions = numberPercentage * failedTrades,
    distanceOfSuccessfulTransactions = amount * numberOfSuccessfulTransactions * (rise - 1),
    distanceOfFailedTrades = amount * numberOfFailedTransactions,
    distance = distanceOfSuccessfulTransactions - distanceOfFailedTrades

  return distance
}*/

const returnDistanceAnalysis = (amount = 0,probability = 0,rise = 0,percentage = 0) => {
  let failedTrades = 100 - probability,
    numberOfSuccessfulTransactions = percentage * failedTrades,
    numberOfFailedTransactions = percentage * failedTrades,
    distanceOfSuccessfulTransactions = amount * numberOfSuccessfulTransactions * (rise - 1),
    distanceOfFailedTrades = amount * numberOfFailedTransactions,
    distance = distanceOfSuccessfulTransactions - distanceOfFailedTrades

  return distance
}

const validateInputs = (input) => {
  const inputID = input.getAttribute('id')

  switch (true) {
    case inputID === 'amount' && input.value >= 1:
      return true
    case inputID === 'rise' && input.value >= 0.01:
      return true
    case inputID === 'probability' && (input.value >= 0.05 && input.value <= 99.95):
      return true
    case inputID === 'percentage' && (input.value >= 0.01 && input.value <= 100):
      return true
    default:
      return false
  }
}

const calculateDistanceProfit = () => {
  const form = document.getElementById('distance-form'),
    amountInput = document.getElementById('amount'),
    riseInput = document.getElementById('rise'),
    probability = document.getElementById('probability'),
    percentage = document.getElementById('percentage'),
    profitInput = document.getElementById('profit')

  form.addEventListener('focusout', (e) => {
    if (e.target.matches('input') && validateInputs(e.target)) {
      e.target.closest('.input__wrap').classList.remove('input__wrap_error')
      profitInput.value = parseFloat(returnDistanceAnalysis(amountInput.value,probability.value, riseInput.value, percentage.value))
    } else {
      e.target.closest('.input__wrap').classList.add('input__wrap_error')
    }
  })
}

document.addEventListener('DOMContentLoaded', () => {
  calculateDistanceProfit()
})