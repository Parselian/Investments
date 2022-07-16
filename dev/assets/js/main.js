'use-strict'

const initDistanceProfitWidget = () => {
  const form = document.getElementById('distance-form'),
    profitInput = document.getElementById('profit')

  const getDistanceAnalysis = (data) => {
    if (!data) {
      return 'Your profit'
    }
    let failedTrades = 100 - data['probability'],
      numberOfSuccessfulTransactions = data['percentage'] * failedTrades,
      numberOfFailedTransactions = data['percentage'] * failedTrades,
      distanceOfSuccessfulTransactions = data['amount'] * numberOfSuccessfulTransactions * (data['rise'] - 1),
      distanceOfFailedTrades = data['amount'] * numberOfFailedTransactions,
      distance = distanceOfSuccessfulTransactions - distanceOfFailedTrades

    return distance
  }

  const getInputsData = (inputs) => {
    let data = {}

    for (let key in inputs) {
      const input = inputs[key],
        val = parseFloat(input.value)

      if (!isNaN(val) && val >= input.getAttribute('min') || val <= input.getAttribute('max')) {
        input.closest('.input__wrap').classList.remove('input__wrap_error')
        data[input.getAttribute('id')] = val
        delete inputs[key]
      } else {
        input.closest('.input__wrap').classList.add('input__wrap_error')
      }
    }

    if (Object.keys(inputs).length === 0) {
      return data
    } else {
      return false
    }
  }

  const showProfit = (profit) => {
    profitInput.value = profit
    if (parseFloat(profit) < 0) {
      profitInput.closest('.input__wrap').classList.add('input__wrap_negative')
    } else {
      profitInput.closest('.input__wrap').classList.remove('input__wrap_negative')
    }
  }

  form.addEventListener('focusout', (e) => {
    let inputs = {...form.querySelectorAll('.widget-distance__form-vars input')},
      profit = getDistanceAnalysis(getInputsData(inputs))

    showProfit(profit)
  })
}

document.addEventListener('DOMContentLoaded', () => {
  initDistanceProfitWidget()
})